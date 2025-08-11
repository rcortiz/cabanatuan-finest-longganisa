import Image from "next/image";
import Link from "next/link";
import React from "react";
import { navigationQuery } from "@/sanity/queries/navigation";
import { Navigation } from "./header-types";

import { client } from "@/sanity/lib/client";

export default async function Header() {
  const navigation: Navigation = await client.fetch(navigationQuery);
  return (
    <section className="relative h-screen bg-[url(/images/hero1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="pointer-events-none absolute inset-0 z-10 bg-black opacity-75" />
      {/* Navbar */}
      <header className="navbar absolute left-0 top-0 z-20 px-8 py-4 text-white shadow-sm">
        {/* Navbar Mobile */}
        <div className="navbar-center lg:navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              {navigation.items.map((item, index) => (
                <li className="text-black" key={index}>
                  {item.children && item.children.length > 0 ? (
                    <>
                      <Link href={item.href}>{item.label}</Link>
                      <ul className="p-2">
                        {item.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/images/logo.png"
              alt="Cabanatuan Finest Longganisa"
              height={80}
              width={80}
              className="object-cover"
            />
          </div>
        </div>

        {/* Navbar Desktop */}
        <div className="navbar-end hidden text-white lg:flex">
          <ul className="menu menu-horizontal">
            {navigation.items.map((item, index) => (
              <li key={index}>
                {item.children && item.children.length > 0 ? (
                  <details>
                    <summary>{item.label}</summary>
                    <ul className="bg-base-100 p-2">
                      {item.children.map((child, childIndex) => (
                        <li className="text-black" key={childIndex}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="flex max-w-2xl flex-col items-center">
          <h2 className="mb-4 font-oswald text-[6rem] font-[500] leading-none">
            BEST MEATS AND MUCH MORE
          </h2>
          <p className="mb-10 mt-4">
            Discover organic, sustainable and seasonal food from our farm
          </p>
          <a className="btn btn-outline btn-secondary flex w-[140px] items-center">
            <span>Shop Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12h14" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
