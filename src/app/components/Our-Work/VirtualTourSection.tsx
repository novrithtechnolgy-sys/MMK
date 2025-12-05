"use client";

import ThreeDHouse from "./ThreeDHouse";


export default function VirtualTourSection() {
  return (
    <section className="w-full py-16 px-[20px] md:px-[50px] lg:px-[100px] ">
      {/* Title */}
      <h3 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-2">
        360° Virtual Tours
      </h3>
      <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-[#B3B3B3] leading-relaxed max-w-7xl mb-6">
        Bridge the distance gap for international buyers and busy investors.
      </p>

      {/* Feature Pills */}
      <div className="flex flex-col gap-2 md:gap-4 mb-6">
        {[
          "Immersive Exploration: Allows viewers to walk through the property digitally at their own pace.",
          "Transparency: Builds trust by showing every corner, filtering out casual lookers and engaging serious leads.",
          "Remote Accessibility: The perfect tool for selling to clients who cannot visit in person.",
        ].map((text, index) => (
          <div
            key={index}
            className="px-5 md:px-5 py-1 md:py-2 border-1 md:border-2 border-orange-300 rounded-full text-gray-700 font-[poppins] text-[12px] sm:text-[16px] lg:text-[18px] w-fit"
          >
            {text}
          </div>
        ))}
      </div>

      {/* Main White Card */}
      <ThreeDHouse/>
      
    </section>
  );
}
