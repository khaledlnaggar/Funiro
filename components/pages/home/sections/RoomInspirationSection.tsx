"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/image-5.png",
    label: "01 — Bed Room",
    title: "Inner Peace",
  },
  {
    id: 2,
    image: "/image-4.png",
    label: "02 — Dining Room",
    title: "Cozy Light",
  },
  {
    id: 3,
    image: "/image-6.png",
    label: "03 — Living Room",
    title: "Modern Calm",
  },
];

const RoomInspirationSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-secondary py-16 ">
      <div className="max-w-[85%] ml-auto section-padding">
        <div className="flex gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 w-[25%]">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
              50+ Beautiful rooms
              <br />
              inspiration
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Our designer already made a lot of beautiful
              <br />
              prototype of rooms that inspire you
            </p>
            <button className="btn-primary">Explore More</button>
          </div>

          {/* Right Carousel */}
          <div className="relative w-[75%] min-h-[600px]">
            <Swiper
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={30}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="overflow-visible w-full relative"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div
                    className={`relative transition-all duration-300 ease-in-out swiper-slide-inner flex flex-col items-center`}
                  >
                    {/* Image */}
                    <div
                      className={`relative w-full rounded-lg overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? "h-[600px]" : "h-[500px]"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay Text */}
                      <div className="flex items-end absolute bottom-6 left-6">
                        <div className=" bg-white bg-opacity-90 p-6">
                          <p className="text-xs text-neutral-500">
                            {slide.label}
                          </p>
                          <h3 className="text-lg font-semibold text-black">
                            {slide.title}
                          </h3>
                        </div>
                        <div className="bg-primary p-3">
                          <MoveRight size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Arrows */}
            <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100">
              <ChevronLeft size={20} className="text-primary" />
            </button>
            <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100">
              <ChevronRight size={20} className="text-primary" />
            </button>
            <div className="flex flex-row items-center gap-2 absolute bottom-0 left-1/2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`mt-3  rounded-full  relative ${
                    activeIndex === index
                      ? " border-2 border-primary w-4 h-4"
                      : "bg-gray-300 w-3 h-3"
                  }`}
                >
                  {activeIndex === index && (
                    <span className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomInspirationSection;
