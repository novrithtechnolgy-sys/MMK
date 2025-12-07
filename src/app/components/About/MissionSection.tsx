import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="px-[20px] md:px-[50px] lg:px-[100px] pt-12 pb-6 md:py-20">
      <div className="flex md:flex-row gap-8 overflow-hidden md:h-[500px]">
        
        {/* LEFT SIDE */}
        <div className="w-full  flex flex-col justify-between">
          <h1 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-tight text-[#000000] mb-4 md:mb-4">
            Our Mission
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-[poppins] leading-relaxed text-[#B3B3B3] mb-6">
            To elevate Sri Lanka's built environment by providing world-class
            visual content that empowers sellers to close deals, assists designers
            in building legacy portfolios, and sets a new standard in industry
            marketing.
          </p>

          {/* Wide Rounded Image */}
          <div className="hidden md:block w-full h-full rounded-[30px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765097962/k3bcud5fnvuqmrutvm3a.jpg"
            alt="Interior Example"
            width={600}
            height={600}
            className=" w-full h-full rounded-[30px] object-cover overflow-hidden"
          />
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:block w-full h-full rounded-[30px] overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103814/zfkbr52hpcg4nlsrzprc.jpg"
            alt="Modern House"
            width={600}
            height={600}
            className="w-full h-full rounded-[30px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
