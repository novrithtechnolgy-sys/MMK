"use client";

import Image from "next/image";

export default function SocialMeadiaReel() {
  return (
    <section className="w-full py-16 px-[20px] md:px-[50px] lg:px-[100px] ">
      {/* TITLE */}
      <h3 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-6">
        Social Media Reels
      </h3>

      {/* TEXT */}
      <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-[#B3B3B3] leading-relaxed max-w-7xl mb-10">
        Short-form content is the fastest way to grow your brand. Our reels are:      
      </p>

      {/* CATEGORY PILLS */}
      <div className="flex flex-wrap gap-4 mb-12">
        {[
          "Villas & Resorts",
          "Land Plots",
          "Architectural Site Context",
          "Coastal Properties",
          "Large-scale Design Projects",
        ].map((item, index) => (
          <span
            key={index}
            className="px-5 py-2 border-2 border-orange-300 rounded-full text-gray-700 text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      {/* IMAGE WRAPPER */}
      <div className="w-full bg-white border-[1px] border-orange-500 rounded-3xl p-4 md:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* LEFT IMAGE */}
          <div className="relative w-full md:w-1/3 h-[260px] md:h-[380px] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764752507/meryhqyirlk6abfmhhuw.jpg"
              alt="Drone"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full md:w-2/3 h-[260px] md:h-[380px] rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764752477/nrsey8kpid6vwlg7hxtq.jpg"
              alt="Architecture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
