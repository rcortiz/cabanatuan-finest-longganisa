"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen bg-[url(/images/hero1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="absolute w-[600px] text-center text-white">
          <h2 className="font-oswald mb-4 text-[6rem]">
            BEST MEATS AND MUCH MORE
          </h2>
          <p className="mb-6">
            Discover organic, sustainable and seasonal food from our farm
          </p>
          <a className="btn btn-outline btn-secondary">Shop Now</a>
        </div>
      </div>
    </div>
  );
}
