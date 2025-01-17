import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="sticky left-0 top-0 z-50 flex w-full flex-col items-center justify-center bg-primary p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-[114px] w-[114px]">
          <Image
            src="/images/logo.png"
            alt="Cabanatuan Finest Longganisa"
            fill
            className="absolute object-cover"
          />
        </div>
        <ul className="flex w-full items-center justify-center space-x-24 pt-4 text-center text-sm font-semibold uppercase text-background">
          <li className="underline-offset-4 hover:underline">
            <a href="#">Home</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">About Us</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Business</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Brands</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Careers</a>
          </li>
          <li className="underline-offset-4 hover:underline">
            <a href="#">Contact Us</a>
          </li>
        </ul>
        {/* <div className="h-[600px]"></div> */}
      </div>
    </header>
  );
}
