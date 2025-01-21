import Image from "next/image";
import React from "react";

export default function Timeline() {
  return (
    <div className="container mx-auto p-6">
      <ul className="timeline timeline-vertical timeline-snap-icon">
        <li>
          <div className="timeline-start mb-10">
            <div className="relative h-[350px] w-[350px]">
              <Image
                src="/images/hero1.jpg"
                alt="Timeline Image"
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-star space-y-2">
              <time className="text-sm italic text-tx-primary">1984</time>
              <h4 className="font-semibold">SAMPLE HEADING</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nulla aliquam ac sit
                lacus at. Egestas ultricies nulla mauris orci volutpat montes.
                Sed cursus nunc semper egestas nisl commodo. Egestas massa amet
                odio sed.
              </p>
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start mb-10">
            <div className="text-star space-y-2">
              <time className="text-sm italic text-tx-primary">1984</time>
              <h4 className="font-semibold">SAMPLE HEADING</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nulla aliquam ac sit
                lacus at. Egestas ultricies nulla mauris orci volutpat montes.
                Sed cursus nunc semper egestas nisl commodo. Egestas massa amet
                odio sed.
              </p>
            </div>
          </div>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="relative h-[350px] w-[350px]">
              <Image
                src="/images/hero1.jpg"
                alt="Timeline Image"
                fill
                className="absolute object-contain"
              />
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <div className="text-star space-y-2">
              <time className="text-sm italic text-tx-primary">1984</time>
              <h4 className="font-semibold">SAMPLE HEADING</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nulla aliquam ac sit
                lacus at. Egestas ultricies nulla mauris orci volutpat montes.
                Sed cursus nunc semper egestas nisl commodo. Egestas massa amet
                odio sed.
              </p>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
