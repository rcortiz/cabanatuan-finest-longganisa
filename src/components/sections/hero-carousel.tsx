"use client";

import React from "react";
import Image from "next/image";

import ChevronLeftIcon from "../icons/chevron-left";
import ChevronRightIcon from "../icons/chevron-right";

export default function HeroCarousel() {
  return (
    <div className="carousel w-full">
      <div id="hero1" className="carousel-item relative w-full">
        <div className="relative h-[1100px] w-full">
          <Image
            src="/images/hero1.jpg"
            alt="Cabanatuan Finest Longganisa"
            fill
            className="absolute object-fill"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#hero3" className="border-outline rounded-full border-2 p-2">
            <ChevronLeftIcon className="text-outline h-6 w-6" />
          </a>
          <a href="#hero2" className="border-outline rounded-full border-2 p-2">
            <ChevronRightIcon className="text-outline h-6 w-6" />
          </a>
        </div>
      </div>
      <div id="hero2" className="carousel-item relative w-full">
        <div className="relative h-[1100px] w-full">
          <Image
            src="/images/hero2.jpg"
            alt="Cabanatuan Finest Longganisa"
            fill
            className="absolute object-fill"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#hero1" className="border-outline rounded-full border-2 p-2">
            <ChevronLeftIcon className="text-outline h-6 w-6" />
          </a>
          <a href="#hero3" className="border-outline rounded-full border-2 p-2">
            <ChevronRightIcon className="text-outline h-6 w-6" />
          </a>
        </div>
      </div>
      <div id="hero3" className="carousel-item relative w-full">
        <div className="relative h-[1100px] w-full">
          <Image
            src="/images/hero3.jpg"
            alt="Cabanatuan Finest Longganisa"
            fill
            className="absolute object-fill"
          />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#hero2" className="border-outline rounded-full border-2 p-2">
            <ChevronLeftIcon className="text-outline h-6 w-6" />
          </a>
          <a href="#hero1" className="border-outline rounded-full border-2 p-2">
            <ChevronRightIcon className="text-outline h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
