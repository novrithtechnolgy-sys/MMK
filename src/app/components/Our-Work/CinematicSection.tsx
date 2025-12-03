"use client";

import Image from "next/image";
import { useState } from "react";

export default function CinematicSection() {
      const [index, setIndex] = useState(0);

  // Touch positions
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Images
  const images = [
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764761962/lgpehaodjn3xvvrpzoaj.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764761952/chmlsx4d7fppnqjct9tk.jpg",
  ];

  // Touch logic
  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX);
  const onTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50)
      setIndex((prev) => Math.min(prev + 1, images.length - 1));

    if (swipeDistance < -50)
      setIndex((prev) => Math.max(prev - 1, 0));
  };


  return (
    <section className="w-full  py-16 px-[20px] md:px-[50px] lg:px-[100px]">

      {/* TEXT */}
      <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-2">
        Natural Light & True Tone Grading
      </h2>
      <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-[#B3B3B3] leading-relaxed max-w-7xl mb-6">
        We avoid the "over-processed" look. We showcase not just rooms, but ambiance and  emotion—the things buyers and design clients truly respond to.
      </p>

      {/* IMAGE CONTAINER */}
      <div className="hidden md:block border-2 border-[#ff8f4c] rounded-3xl p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* IMAGE 1 */}
          <div className="w-full h-[350px] md:h-[420px] relative rounded-2xl overflow-hidden">
            <Image
              src={images[0]}   // UPDATE this path
              alt="Cinematic interior"
              fill
              className="object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="w-full h-[350px] md:h-[420px] relative rounded-2xl overflow-hidden">
            <Image
              src={images[1]}  // UPDATE this path
              alt="Cinematic interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

           {/* MOBILE: SLIDER */}
        <div className="block md:hidden relative">
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((src, i) => (
                <div key={i} className="min-w-full ">
                  <div className="w-full h-[250px] relative rounded-2xl overflow-hidden">
                    <Image src={src} alt={`Slide ${i}`} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                className={`h-1  rounded-full transition-all ${
                  i === index ? "bg-[#ff8f4c] w-6" : "bg-gray-300 w-2"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

    </section>
  );
}
