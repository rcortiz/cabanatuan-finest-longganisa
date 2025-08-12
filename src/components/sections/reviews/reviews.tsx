"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { renderRating } from "@/utils/renderRating";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Reviews() {
  const items = [
    {
      name: "Customer 1",
      rating: "4.5",
      feedback: "Delicious, definitely worth ordering again!",
    },
    {
      name: "Customer 2",
      rating: "5",
      feedback: "Surprisingly unique flavor, I loved it!",
    },
    {
      name: "Customer 3",
      rating: "3",
      feedback: "A bit too salty for my taste.",
    },
    {
      name: "Customer 4",
      rating: "2.5",
      feedback: "Bland and the meat was a bit tough.",
    },
    {
      name: "Customer 5",
      rating: "4",
      feedback: "Pretty good, plus delivery was fast.",
    },
    {
      name: "Customer 6",
      rating: "1",
      feedback: "Didn’t enjoy it at all, waste of money.",
    },
    {
      name: "Customer 7",
      rating: "5",
      feedback: "Perfect! Best I’ve ever tasted!",
    },
    {
      name: "Customer 8",
      rating: "3.5",
      feedback: "It’s okay, but could be improved.",
    },
  ];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="mx-auto flex min-h-[500px] flex-col items-center justify-center bg-gray-50">
      <header className="font-bold tracking-tighter">
        <h2 className="font-rubik text-center text-[38px] leading-tight">
          Hear From Our Happy <br />
          <span className="font-rubik text-primary">Customers</span>
        </h2>
      </header>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        slidesPerView={4}
        className="w-full max-w-7xl"
      >
        {items.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className="my-10 flex justify-center">
              <div className="w-78 card h-[160px] bg-base-100 shadow-sm">
                <div className="card-body">
                  <div className="flex items-center gap-4 pb-2">
                    <div className="avatar placeholder">
                      <div className="w-8 rounded-full bg-primary text-xs text-secondary">
                        {getInitials(item.name)}
                      </div>
                    </div>
                    <div>
                      <h6 className="leading-tight">{item.name}</h6>
                      <div>{renderRating(Number(item.rating))}</div>
                    </div>
                  </div>
                  <p>{item.feedback}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
