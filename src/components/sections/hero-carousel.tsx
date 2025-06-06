"use client";

import React from "react";

export default function HeroCarousel() {
  return (
    <div className="relative h-screen bg-[url(/images/hero1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-[5rem] text-white">
          BEST MEATS AND MUCH MORE
        </h2>
        <p className="mb-6 text-white">
          Discover organic, sustainable and seasonal food from our farm
        </p>
        <button className="btn btn-outline btn-secondary text-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}
