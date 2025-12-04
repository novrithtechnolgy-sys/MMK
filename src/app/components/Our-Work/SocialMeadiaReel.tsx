"use client";

import { useEffect, useRef, useState } from "react";

export default function SocialMediaReel() {
  const videos = ["0fGgzxc7Qxo", "3TCDy1L6dT8", "KPsNDC1BGOc", "0fGgzxc7Qxo"];

  const players = useRef<any[]>([]);
  const [apiReady, setApiReady] = useState(false);

  // Load YT API once
  useEffect(() => {
    if (!document.getElementById("youtube-api")) {
      const tag = document.createElement("script");
      tag.id = "youtube-api";
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    (window as any).onYouTubeIframeAPIReady = () => setApiReady(true);
  }, []);

  // Create players after API load
  useEffect(() => {
    if (!apiReady) return;

    videos.forEach((videoId, index) => {
      if (players.current[index]) return;
      players.current[index] = new (window as any).YT.Player(`player-${index}`, {
        height: "100%",
        width: "100%",
        videoId,
        playerVars: {
     
          mute: 1,
          controls: 0,
          playsinline: 1,
          modestbranding: 1,
          loop: 1,
          playlist: videoId,
        },
      });
    });
  }, [apiReady]);

  return (
    <section className="w-full pt-16 md:py-20  px-[20px] md:px-[50px] lg:px-[100px]">
      <h3 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-2">
        Social Media Reels
      </h3>
      <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-[#B3B3B3] leading-relaxed max-w-7xl mb-6">
        Perfect for:
      </p>

      {/* --- Pills --- */}
      <div className="flex flex-wrap gap-3 mb-6">
        {[
          "Villas & Resorts",
          "Land Plots",
          "Architectural Site Context",
          "Coastal Properties",
          "Large-scale Design Projects",
        ].map((item, i) => (
          <span
            key={i}
            className="px-4 py-2 border border-orange-400 rounded-full text-gray-700 text-sm md:text-lg"
          >
            {item}
          </span>
        ))}
      </div>

      {/* --- Reel Container --- */}
      <div className="w-full bg-white rounded-3xl mt-6 md:mt-12">

        {/* MOBILE → scroll horizontally  
            DESKTOP → grid of 3 columns */}
        <div
          className="
            flex md:grid  
            md:grid-cols-4  
            gap-4 md:gap-4 xl:gap-6  
            overflow-x-auto  
            snap-x snap-mandatory  
            md:overflow-visible
            scrollbar-hide
            pb-4  
          "
        >
          {videos.map((id, index) => (
            <div
              key={index}
              className="
                relative  
                snap-center  
                shrink-0  
                w-full md:w-[260px] h-[460px]  
                md:w-full md:h-[300px] xl:h-[480px]  
                rounded-2xl  
                border border-orange-400  
                overflow-hidden  
                shadow-md p-2 lg:p-3 xl:p-4
              "
            >
              <div
                id={`player-${index}`}
                className="w-full h-full bg-black rounded-2xl"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
