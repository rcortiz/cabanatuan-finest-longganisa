import Image from "next/image";
import Link from "next/link";
import React from "react";

import { client } from "@/sanity/lib/client";

interface NavChildItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChildItem[];
}

interface Navigation {
  title: string;
  items: NavItem[];
}

// GROQ query to fetch navigation data
const navigationQuery = `*[_type == "navigation"][0]{
  title,
  items[]{
    label,
    href,
    children[]{
      label,
      href
    }
  }
}`;

export default async function Navbar() {
  const navigation: Navigation = await client.fetch(navigationQuery);
  return (
    <header className="navbar px-8 py-4 text-white shadow-sm">
      <div className="navbar-center lg:navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* Mobile menu icon */}
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
      <div className="navbar-end hidden text-white lg:flex">
        <ul className="menu menu-horizontal">
          {navigation.items.map((item, index) => (
            <li className="text-black" key={index}>
              {item.children && item.children.length > 0 ? (
                <details>
                  <summary>{item.label}</summary>
                  <ul className="bg-base-100 p-2">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
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
  );
}
