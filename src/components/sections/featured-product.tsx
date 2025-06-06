import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedProduct() {
  return (
    <div className="max-h-screen">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="mb-4 text-3xl text-primary">Our Featured Products</h1>
        <p className="mb-6">
          Lorem ipsum dolor sit amet consectetur. Nulla aliquam ac sit lacus at.
          Egestas ultricies nulla mauris orci volutpat montes.
        </p>
        <div className="margin-y-6 carousel grid grid-flow-col gap-4">
          <div className="card carousel-item card-compact w-60 overflow-hidden bg-secondary text-tx-primary">
            <figure className="relative h-[150px]">
              <Image
                src="/images/hero1.jpg"
                alt="Cabanatuan Finest Longganisa"
                fill
                className="absolute object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h4 className="card-title mb-6 text-base">
                Recado Garlic Longganisa
              </h4>
              <p className="mb-4">
                Make your mealtimes fantastic with CDO Funtastyk Pork
                Longganisa! Made with young pork, deliciously tender, and
                seasoned with special spices!
              </p>
              <Link href="#">
                <button className="btn btn-outline btn-primary font-semibold">
                  Check Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
