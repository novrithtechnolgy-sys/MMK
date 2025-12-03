"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FaDrawPolygon, FaHome } from "react-icons/fa";

export default function InteriorPhotography() {
  const [open, setOpen] = useState("realEstate");

  // 3 images for Real Estate Mode
  const realEstateImages = [
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734202/ykxdxmwu91muxr6e6fqd.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734202/ykxdxmwu91muxr6e6fqd.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734202/ykxdxmwu91muxr6e6fqd.jpg",
  ];

  // 3 images for Design Mode
  const designImages = [
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734209/nouyj2g6skqelftj5pi1.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734209/nouyj2g6skqelftj5pi1.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734209/nouyj2g6skqelftj5pi1.jpg",
  ];

  return (
    <section className="w-full  mt-16 md:-mt-16 pb-16 px-[20px] md:px-[50px] lg:px-[100px]">
      {/* Heading */}
      <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-2">
        Interior Photography (Real Estate & Design)
      </h2>
      <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-[poppins] leading-relaxed text-[#B3B3B3] mb-10">
        We adapt our shooting style to your goal:
      </p>

      {/* REAL ESTATE MODE */}
      <div
        className="border border-[#ff8f4c] bg-white rounded-2xl p-6 mb-6 cursor-pointer transition-all"
        onClick={() => setOpen(open === "realEstate" ? "" : "realEstate")}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaHome className="text-2xl text-[#ff8f4c]" />
            <h3 className="font-[poppins] text-[16px] sm:text-[18px] lg:text-[24px] font-mediam">Real Estate Mode:</h3>
          </div>
          <ChevronDown
            className={`transition-transform ${
              open === "realEstate" ? "rotate-180" : ""
            }`}
          />
        </div>

        {open === "realEstate" && (
          <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-[#B3B3B3] mt-3">
            Wide, bright, and airy. Focused on flow, room size, and connection
            between spaces to maximize buyer interest.
          </p>
        )}
      </div>

      {/* REAL ESTATE IMAGES */}
      {open === "realEstate" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {realEstateImages.map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md bg-gray-200 h-64 relative"
            >
              <Image
                src={src}
                alt={`Real Estate Photo ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* DESIGN MODE */}
      <div
        className="border border-[#ff8f4c] bg-white rounded-2xl p-6 cursor-pointer transition-all"
        onClick={() => setOpen(open === "design" ? "" : "design")}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaDrawPolygon className="text-2xl text-[#ff8f4c]" />
            <h3 className="font-[poppins] text-[16px] sm:text-[18px] lg:text-[24px] font-mediam">Design Mode:</h3>
          </div>
          <ChevronDown
            className={`transition-transform ${
              open === "design" ? "rotate-180" : ""
            }`}
          />
        </div>

        {open === "design" && (
          <p className="text-gray-600 font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] mt-3">
            Aesthetic-focused photography that highlights texture, materials,
            craftsmanship, and interior styling details.
          </p>
        )}
      </div>

      {/* DESIGN IMAGES */}
      {open === "design" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {designImages.map((src, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md bg-gray-200 h-64 relative"
            >
              <Image
                src={src}
                alt={`Design Photo ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
