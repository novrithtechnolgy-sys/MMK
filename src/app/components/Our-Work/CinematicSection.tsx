"use client";

import Image from "next/image";

export default function CinematicSection() {
  return (
    <section className="w-full  py-16 px-[20px] md:px-[50px] lg:px-[100px]">

      {/* TEXT */}
      <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-4">
        Natural Light & True Tone Grading
      </h2>
      <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-[#B3B3B3] leading-relaxed max-w-7xl mb-10">
        We avoid the "over-processed" look. We showcase not just rooms, but ambiance and  emotion—the things buyers and design clients truly respond to.
      </p>

      {/* IMAGE CONTAINER */}
      <div className="border-2 border-[#ff8f4c] rounded-3xl p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* IMAGE 1 */}
          <div className="w-full h-[350px] md:h-[420px] relative rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764666431/h2ufoklfrhu71ya7k1rf.jpg"   // UPDATE this path
              alt="Cinematic interior"
              fill
              className="object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="w-full h-[350px] md:h-[420px] relative rounded-2xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764666431/h2ufoklfrhu71ya7k1rf.jpg"  // UPDATE this path
              alt="Cinematic interior"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>

    </section>
  );
}
