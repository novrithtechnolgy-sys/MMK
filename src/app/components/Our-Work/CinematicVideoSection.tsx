"use client";
import Image from "next/image";

export default function CinematicVideoSection() {
  return (
    <section className="w-full py-20  px-[20px] md:px-[50px] lg:px-[100px]">
      <div className="">

        {/* Heading */}
        <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium text-black">
          Cinematic Video Tours
        </h2>

        {/* Sub description */}
        <p className="text-[#B3B3B3] mt-2 md:mt-2 font-[poppins] text-[12px] sm:text-[14px] lg:text-[18px]">
          Our video tours use:
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-4 mt-6">
          {[
            "Smooth gimbal movements.",
            "Close-up lifestyle and detail shots.",
            "Slow pans that create a sense of luxury.",
            "Dynamic transitions matched to music.",
          ].map((item, index) => (
            <span
              key={index}
              className="px-5 py-2 border-2 border-orange-300 rounded-full text-gray-700 text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Video Preview Box */}
        <div className="mt-12 border-2 border-orange-300 rounded-2xl overflow-hidden">
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[520px]">

            {/* Replace with your image */}
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764666431/h2ufoklfrhu71ya7k1rf.jpg"
              alt="Video Preview"
              fill
              className="object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/80 transition">
                <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-1"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
