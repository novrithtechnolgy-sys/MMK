"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full px-[20px] md:px-[50px] lg:px-[100px] py-20 md:py-25">
      {/* Text Section */}
      <div className="flex flex-col md:flex-row mx-auto text-center md:text-start">
        <h2 className="font-[unbounded] md:w-9/7 text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-tight mb-4 md:mb-8">
          Who We Are
        </h2>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-[poppins] leading-relaxed text-center md:text-justify text-[#B3B3B3] ">
          MarketMyKeys is a premium media production company dedicated to helping
          property owners, real estate agents, and interior designers market their
          assets with clarity, impact, and emotion. <br />
          We don't just document a room. We reveal its character, lifestyle, and design
          intent. With years of experience in architectural photography,
          cinematography, and digital marketing, we bring a 360° understanding of
          the industry. We bridge the gap between selling space (real estate) and
          celebrating art (interior design).
        </p>
      </div>

      {/* Images Section */}
      <div className="flex gap-2 md:gap-6 mt-12 w-full">
        
        {/* Image 1 */}
        <div className="flex-[2] rounded-xl md:rounded-3xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764658979/cwfjk90rak9q6brbyg0u.jpg"
            alt="Modern House"
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="flex-[1.2] rounded-xl md:rounded-3xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764658978/mayjsa7o812imvnmlwn8.jpg"
            alt="Interior Room"
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 3 */}
        <div className="flex-[1] rounded-xl md:rounded-3xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764658978/hwuc9r36oxpgi0qmfy7h.jpg"
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
