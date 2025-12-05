"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function CinematicVideoSection() {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

     const videoURL =
    "https://homeinsiders.com/images/media/Cinematic-Videos-1300-Sabal-Palm-Drive-Boca-Raton.mp4";


  return (
    <section className="w-full md:py-20  px-[20px] md:px-[50px] lg:px-[100px]">
      <div className="">

        {/* Heading */}
        <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium text-black">
          Cinematic Video Tours
        </h2>

        {/* Sub description */}
        <p className="text-[#B3B3B3] mt-2 md:mt-2 font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px]">
          Our video tours use:
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 md:gap-4 mt-5">
          {[
            "Smooth gimbal movements.",
            "Close-up lifestyle and detail shots.",
            "Slow pans that create a sense of luxury.",
            "Dynamic transitions matched to music.",
          ].map((item, index) => (
            <span
              key={index}
              className=" px-3 md:px-5 py-1 md:py-2 border-1 md:border-2 border-orange-300 rounded-full text-gray-700 font-[poppins] text-[12px] sm:text-[16px] lg:text-[18px]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Video Preview Box */}
          <div className=" mt-6 md:mt-12 border-2 border-orange-300 rounded-2xl overflow-hidden relative">

        {/* Auto-play video */}
        <video
          ref={videoRef}
          src="https://homeinsiders.com/images/media/Cinematic-Videos-1300-Sabal-Palm-Drive-Boca-Raton.mp4"
          loop
          muted
          playsInline
          className="w-full h-[250px] md:h-[450px] lg:h-[520px] object-cover"
        />
        {/* Play Button (center) */}
         <button
          onClick={togglePlay}
          className="
            absolute inset-0 m-auto
            w-20 h-20 rounded-full
            bg-white/60 backdrop-blur-sm
            flex items-center justify-center
            hover:bg-white/80 transition
          "
        >
          {isPlaying ? (
            // Pause icon
            <div className="flex gap-2">
              <div className="w-[6px] h-[28px] bg-black rounded"></div>
              <div className="w-[6px] h-[28px] bg-black rounded"></div>
            </div>
          ) : (
            // Play icon
            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-black border-b-[15px] border-b-transparent ml-2"></div>
          )}
        </button>

      </div>
      </div>
    </section>
  );
}
