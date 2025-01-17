import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FeaturedProduct() {
  return (
    <div className="my-10 flex flex-col items-center">
      <h1 className="mb-2 text-3xl font-semibold">Our Featured Products</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur. Nulla aliquam ac sit lacus at.
        Egestas ultricies nulla mauris orci volutpat montes.
      </span>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="text-tx-accent card card-compact w-60 overflow-hidden bg-secondary">
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
              Make your mealtimes fantastic with CDO Funtastyk Pork Longganisa!
              Made with young pork, deliciously tender, and seasoned with
              special spices!
            </p>
            <Link href="#">
              <span className="font-semibold">SEE PRODUCT</span>
            </Link>
          </div>
        </div>
        <div className="text-tx-accent card card-compact w-60 overflow-hidden bg-secondary">
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
              Make your mealtimes fantastic with CDO Funtastyk Pork Longganisa!
              Made with young pork, deliciously tender, and seasoned with
              special spices!
            </p>
            <Link href="#">
              <span className="font-semibold">SEE PRODUCT</span>
            </Link>
          </div>
        </div>
        <div className="text-tx-accent card card-compact w-60 overflow-hidden bg-secondary">
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
              Make your mealtimes fantastic with CDO Funtastyk Pork Longganisa!
              Made with young pork, deliciously tender, and seasoned with
              special spices!
            </p>
            <Link href="#">
              <span className="font-semibold">SEE PRODUCT</span>
            </Link>
          </div>
        </div>
        <div className="text-tx-accent card card-compact w-60 overflow-hidden bg-secondary">
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
              Make your mealtimes fantastic with CDO Funtastyk Pork Longganisa!
              Made with young pork, deliciously tender, and seasoned with
              special spices!
            </p>
            <Link href="#">
              <span className="font-semibold">SEE PRODUCT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
