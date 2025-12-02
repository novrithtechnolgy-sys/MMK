import Image from "next/image";
import { FaCircle } from "react-icons/fa";

export default function WhyClientsTrustUs() {
  const points = [
    "We analyze the space before shooting for maximum impact.",
    'We understand the difference between a "listing photo" and a "design feature."',
    "We offer multiple formats tailored to each platform.",
    "We deliver consistent quality, every single time.",
  ];

  return (
    <section className="px-[20px] md:px-[50px] lg:px-[100px] md:py-20 pb-12 md:pb-0">
      <div className="flex flex-col md:flex-row justify-between w-full rounded-[40px] overflow-hidden xl:h-[500px]">

        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden bg-gray-100 md:w-1/2">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764666431/h2ufoklfrhu71ya7k1rf.jpg"
            alt="Interior Modern"
            width={900}
            height={700}
            className="h-full w-full object-cover "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="bg-[#FF9557] px-8 md:px-14 py-12 md:py-20 flex flex-col justify-center  text-white w-full md:w-1/2">
          <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-8">
            Why Clients Trust Us
          </h2>

          <ul className="space-y-4 md:space-y-6">
            {points.map((txt, i) => (
              <li key={i} className="flex gap-4 items-start font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px]">
                <FaCircle className="text-white mt-2 w-3 h-3 flex-shrink-0" />
                <p>{txt}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
