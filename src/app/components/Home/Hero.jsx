import WhatWeCreate from "../Home/WhatWeCreate";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:py-20">
 
      {/* EXACT COLOR MATCH — layered warm gradients */}
      {/* Soft peach glow top-left */}
      <div className="absolute inset-0 h-[800px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,189,150,0.55)_0%,transparent_10%)] md:h-[1000px] md:bg-[radial-gradient(circle_at_30%_40%,rgba(255,189,150,0.55)_0%,transparent_20%)]" />

      {/* Deep orange center-left */}
      <div className="absolute inset-0 h-[800px] bg-[radial-gradient(circle_at_30%_22%,rgba(255,140,75,0.45)_0%,transparent_25%)] sm:h-[700px]  lg:h-[900px]  xl:h-[1000px] md:bg-[radial-gradient(circle_at_30%_62%,rgba(255,140,75,0.45)_0%,transparent_50%)]" />

      {/* Yellow warm glow right side */}
      <div className="absolute inset-0 h-[800px] bg-[radial-gradient(circle_at_80%_32%,rgba(255,210,110,0.75)_0%,transparent_35%)] md:h-[1500px] md:bg-[radial-gradient(circle_at_80%_50%,rgba(255,210,110,0.75)_0%,transparent_45%)]" />
    <div className="relative flex flex-col" >
      {/* Content */}
      <div className="relative z-10 px-[20px] md:px-[50px] lg:px-[100px] md:py-12 order-2 md:order-1">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8  rounded-3xl justify-center md:justify-start items-center md:items-start">
          <div className="w-full  sm:space-y-6 ">
            <h1 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-tight text-[#0f1724] text-center md:text-left ">
              Transforming Properties & <br /> Designs Into Visuals
            </h1>

            <button className="hidden md:block bg-orange-400 w-[200px] text-white sm:px-6 sm:py-2 lg:px-8 lg:py-3 rounded-full text-[8px] sm:text-[12px] lg:text-[16px] shadow-md hover:bg-orange-500 transition">
              Contact Us
            </button>
          </div>

          <div className="w-full lg:w-1/2 text-[#B3B3B3] max-w-lg text-center md:text-left">
            <p className="font-[poppins] text-[14px] sm:text-[14px] lg:text-[18px] font-regular leading-relaxed">
              At MarketMyKeys, we reveal the true essence of every property. From cozy homes
              to luxury villas and modern apartments, we create impactful real estate visuals
              that turn interest into inquiries and views into offers, driving serious buyers
              to take action.
            </p>
          </div>
            <button className="md:hidden bg-orange-400 w-[150px] text-white px-6 py-2 rounded-full text-[12px] shadow-md hover:bg-orange-500 transition">
              Contact Us
            </button>
        </div>
      </div>

      {/* House Image */}
      <div className="relative z-10 md:mt-[-100px] mx-auto pb-12 order-1 md:order-2">
        <img
          src="/e41634ecf0130606471423e8dfaf5059f206991a.png"
          alt="Modern House"
          className="w-full object-cover rounded-md"
        />
      </div>
      </div>
      {/* End of House Image */}
      <div className="relative py-20  px-[20px] md:px-[50px] lg:px-[100px] bg-transparent z-10 overflow-hidden">
        <div className="absolute top-0 left-0 -translate-y-6 -translate-x-8 -rotate-162 w-12 h-10 md:w-16 md:h-12 lg:w-32 lg:h-22 bg-[#FF8A3D] rounded-md mt-10"></div>
        <div className="absolute top-0 right-0 -translate-y-6 translate-x-8 rotate-22 w-12 h-10 md:w-16 md:h-12 lg:w-34 lg:h-22 bg-[#FF8A3D] rounded-md mt-44"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left md:items-start  mb-10">
            <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-tight text-[#0f1724] text-center md:text-left ">
                What We Create
            </h2>

            <p className="text-[#B3B3B3] max-w-lg md:max-w-[300px] lg:max-w-md mt-4 md:mt-0 font-[poppins] text-[14px] sm:text-[14px] lg:text-[18px] font-regular  leading-relaxed">
                We use world-class equipment, careful planning, and artistic insight to
                deliver content that truly showcases your space.
            </p>
        </div>

        <WhatWeCreate />
    </div>
    </section>
  );
}
