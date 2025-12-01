import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="relative w-full bg-[#FF8A3D] bg-gradient-to-br from-[#FF8A3D] to-[#FFA55C] text-white py-20 px-[16px] md:px-[50px] lg:px-[100px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_55%,rgba(255,255,255,0.4)_10%,transparent_30%)]" />
      <div className="relative z-10 flex flex-col md:flex-row ">
        {/* LEFT CONTENT */}
        <div className="flex-1  w-full text-center md:text-left">
          <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-tight mb-4 md:mb-10">
            Why Real Estate Brands & <br /> Designers Choose <br /> MarketMyKeys
          </h2>
            <p className="md:hidden font-[poppins] text-[10px] sm:text-[14px] lg:text-[18px] font-medium">
                High-quality visuals aren't a luxury—they're a necessity.  
                <br />
                We understand the psychology of your audience:
            </p>

          {/* Bullet List */}
          <div className="hidden md:block space-y-2 md:space-y-4 text-[14px] md:text-[16px] lg:text-[20px] font-[poppins]">
            {[
              "Buyers decide within seconds if a home is \"the one.\"",
              "Design Clients judge your capability based on your portfolio.",
              "Strategic angles that respect architectural lines.",
              "Professional lighting and color grading.",
              "Market-ready formats for listings, portfolios, and social media.",
              "A deep understanding of what attracts modern buyers and high-end clients.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-white mt-[2px] flex-shrink-0 " size={20} />
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
                    {/* <p className="text-2xl md:text-3xl font-bold mt-10 w-full">
            Your project only gets one first  impression let’s make it unforgettable.
        </p> */}

        </div>

        {/* RIGHT IMAGE */}
        <div className="2xl:w-[600px] flex  flex-col  items-end ">
            <div className="hidden md:block flex bg-white/20 backdrop-blur-xl text-white p-[20px] rounded-2xl md:w-[300px] lg:w-[450px] xl:w-[400px] 2xl:w-[500px] leading-[1.2]">
                <p className="font-[poppins] text-[10px] sm:text-[14px] lg:text-[18px] font-medium">
                    High-quality visuals aren't a luxury—they're a necessity.  
                    <br />
                    We understand the psychology of your audience:
                </p>
            </div>
          <Image
            src="/71bcb6b0b423dceafc64facfcc3c6d40cf0d7b69 (1).png" // place your image inside /public
            alt="modern house"
            width={700}
            height={700}
            className="object-contain w-full h-full xl:h-[550px] lg:mr-[-50px] md:mt-[50px] lg:mt-[-50px] xl:mt-[-50px] items-center"
          />
        </div>
        <div className="md:hidden space-y-2 md:space-y-4 text-[14px] md:text-[16px] lg:text-[20px] font-[poppins] md:mb-10">
            {[
              "Buyers decide within seconds if a home is \"the one.\"",
              "Design Clients judge your capability based on your portfolio.",
              "Strategic angles that respect architectural lines.",
              "Professional lighting and color grading.",
              "Market-ready formats for listings, portfolios, and social media.",
              "A deep understanding of what attracts modern buyers and high-end clients.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 ">
                <FaCheckCircle className="text-white mt-[4px] w-[10px] h-[10px] flex-shrink-0 items-center"  />
                <p className="leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
      </div>
        {/* Bottom text */}
        <p className="hidden md:block font-[poppins] text-[20px] sm:text-[30px] lg:text-[40px] font-medium lg:mt-[20px] xl:mt-[-120px] 2xl:mt-[-100px] max-w-4xl">
            Your project only gets one first  impression let’s make it unforgettable.
        </p>
    </section>
  );
}
