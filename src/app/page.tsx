"use client";

import React from "react";

import HeroCarousel from "@/components/sections/hero-carousel";
import FeaturedProduct from "@/components/sections/featured-product";

export default function Home() {
  return (
    <div className="h-[900px]">
      {/* <HeroCarousel /> */}
      <FeaturedProduct />
    </div>
  );
}
