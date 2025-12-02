"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type WhatWeCreate = {
  _id: string;
  number: number;
  title: string;
  shortTitle?: string;
  description: string;
  imageUrl: string;
};

export default function WhatWeCreateComponent() {
  const [items, setItems] = useState<WhatWeCreate[]>([]);
  const [openIndex, setOpenIndex] = useState(0);

  // Load data from API
  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/what-we-create");
      const data = await res.json();
      setItems(data);
    }
    loadData();
  }, []);

  // Smooth auto-open logic
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;
    let delayTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const cards = document.querySelectorAll(".wwc-card");
      let closest = 0;
      let closestDist = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const dist = Math.abs(rect.top - window.innerHeight / 2);

        if (dist < closestDist) {
          closestDist = dist;
          closest = index;
        }
      });

      // Clear previous timers
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (delayTimeout) clearTimeout(delayTimeout);

      // Detect when user stops scrolling
      scrollTimeout = setTimeout(() => {
        // Delay before switching card
        delayTimeout = setTimeout(() => {
          setOpenIndex(closest);
        }, 400); // Delay before open
      }, 150); // Scroll debounce
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (delayTimeout) clearTimeout(delayTimeout);
    };
  }, []);

  if (items.length === 0) return <p>Loading...</p>;

  return (
    <div className="space-y-6 md:mt-32">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item._id}
            className="wwc-card bg-[#FFEFE8] rounded-xl md:rounded-3xl overflow-hidden shadow-sm transition-all duration-500 cursor-pointer  md:p-4 lg:p-6"
            onClick={() => setOpenIndex(index)}
          >
            {/* CLOSED HEADER */}
            <div className={`flex justify-between items-center md:px-6  ${isOpen ? "pointer-events-none" : "py-4 md:py-6 px-4 md:px-6"}`}>
              <h3
                className={`font-[unbounded]  sm:text-[24px] lg:text-[32px] font-medium text-[#0f1724]  transition-all duration-300 ${
                  isOpen ? "opacity-0 -translate-y-2 pointer-events-none text-[1px]" : "text-[16px]"
                }`}
              >
                {item.shortTitle || item.title}
              </h3>

              <span
                className={`font-[unbounded]  sm:text-[24px] lg:text-[32px] font-medium text-[#0f1724]  transition-all duration-300 ${
                  isOpen ? "opacity-0 -translate-y-2 pointer-events-none text-[1px]" : "text-[16px]"
                }`}
              >
                {item.number}
              </span>
            </div>

            {/* OPEN CARD CONTENT */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen
                  ? "opacity-100 max-h-[2000px] translate-y-0"
                  : "opacity-0 max-h-0 -translate-y-4"
              }`}
            >
              <div className="p-4 md:p-6  flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white rounded-xl md:rounded-3xl p-6 ">
                  <h2 className="font-[unbounded] text-[16px] sm:text-[24px] lg:text-[32px] font-medium mb-4 text-[#0f1724] leading-tight  md:mb-10 xl:mb-10">
                    {item.number}
                  </h2>

                  <h2 className="font-[unbounded] text-[16px] sm:text-[24px] lg:text-[32px] font-medium mb-4 text-[#0f1724] leading-tight xl:mb-10">
                    {item.title}
                  </h2>

                  <p className="font-[poppins] text-[#B3B3B3] text-[10px] sm:text-[14px] lg:text-[18px] leading-relaxed font-medium">{item.description}</p>
                </div>

                <div className="w-full md:w-4/7 rounded-3xl">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={900}
                    height={600}
                    className="rounded-xl md:rounded-3xl object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
