"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-24 py-16">
      {/* Text Section */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[poppins] leading-relaxed text-[#111]">
          MarketMyKeys is a premium media production company dedicated to helping
          property owners, real estate agents, and interior designers market their
          assets with clarity, impact, and emotion. <br /><br />
          We don't just document a room. We reveal its character, lifestyle, and design
          intent. With years of experience in architectural photography,
          cinematography, and digital marketing, we bring a 360° understanding of
          the industry. We bridge the gap between selling space (real estate) and
          celebrating art (interior design).
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Image 1 */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/about/house1.png"
            alt="Modern House"
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/about/livingroom.png"
            alt="Interior Room"
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/about/kitchen.png"
            alt="Modern Kitchen"
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
