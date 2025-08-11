import Link from "next/link";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { client } from "@/sanity/lib/client";
import { featuredProductsQuery } from "@/sanity/queries/featuredProducts";
import { FeaturedItem, FeaturedProducts } from "./types/featured-product-types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductCarousel from "./product-carousel";

export default async function FeaturedProduct() {
  const featuredProducts: FeaturedProducts = await client.fetch(
    featuredProductsQuery,
  );

  const sectionTitle: string =
    featuredProducts?.sectionTitle || "Our Featured Products";
  const sectionDescription: string =
    featuredProducts?.sectionDescription ||
    "Lorem ipsum dolor sit amet consectetur. Nulla aliquam ac sit lacus at. Egestas ultricies nulla mauris orci volutpat montes.";
  const items: FeaturedItem[] = featuredProducts?.items || [];

  return (
    <section className="mx-auto flex h-[800px] flex-col items-center justify-center">
      <header className="mx-auto mb-10 mt-8 w-[600px] text-center">
        <p className="font-yellowtail text-[28px] text-primary">
          Our Meat Catalog
        </p>
        <h2 className="pb-4 text-[60px] font-bold uppercase">{sectionTitle}</h2>
        <p>{sectionDescription}</p>
      </header>

      <ProductCarousel items={items} />
    </section>
  );
}
