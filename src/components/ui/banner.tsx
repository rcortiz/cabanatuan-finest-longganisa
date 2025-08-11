import React from "react";

export default function Banner() {
  return (
    <div className="relative flex h-[50px] items-center justify-center bg-primary">
      <p className="text-sm font-bold text-white">
        Long Weekend Sale Up to 50% OFF{" "}
      </p>
      <div className="absolute right-0 top-0 mx-4 my-3 flex cursor-pointer items-center justify-center rounded-md bg-secondary/25 p-1 hover:bg-secondary/50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
    </div>
  );
}
