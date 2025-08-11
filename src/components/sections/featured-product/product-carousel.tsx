"use client";

import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FeaturedItem } from "./types/featured-product-types";
import { urlFor } from "@/sanity/lib/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ProductCarouselProps {
  items: FeaturedItem[];
}

export default function ProductCarousel({ items }: ProductCarouselProps) {
  console.log(items);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={15}
      slidesPerView={4}
      // navigation
      // pagination={{ clickable: true }}
      // breakpoints={{
      //   0: { slidesPerView: 1 },
      //   640: { slidesPerView: 2 },
      //   1024: { slidesPerView: 3 },
      // }}
      className="w-full max-w-6xl py-10"
    >
      {items.map((item, idx) => {
        const imageUrl = item.itemBackground?.asset?.url || "/images/hero1.jpg";

        return (
          <SwiperSlide key={idx} className="flex justify-center">
            <div
              className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-md bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${imageUrl}')` }}
            >
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-55" />
              <div className="absolute bottom-10 z-10 flex translate-y-10 flex-col items-center justify-center px-4 text-center text-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-2 text-lg font-bold">{item.itemTitle}</p>
                <p className="mb-4 text-sm">{item.itemDescription}</p>
                <Link href={item.itemLink}>
                  <button className="btn btn-outline btn-secondary">
                    Check Product
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
