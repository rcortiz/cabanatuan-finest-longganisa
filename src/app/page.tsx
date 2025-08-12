import React from "react";

import FeaturedProduct from "@/components/sections/featured-product/featured-product";
import Reviews from "@/components/sections/reviews/reviews";
import Timeline from "@/components/sections/timeline";

export default function Home() {
  return (
    <div>
      <FeaturedProduct />
      <Reviews />
      {/* <Timeline /> */}
    </div>
  );
}
