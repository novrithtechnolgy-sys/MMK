"use client";

import Image from "next/image";

export default function VisualStoriesSection() {
  return (
    <section className="w-full  py-20 md:py-25 px-[20px] md:px-[50px] lg:px-[100px] md:h-[1000px]">
      {/* TEXT ROW */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6  md:mb-16">
        <h2 className="font-[unbounded] md:w-9/7 text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-tight max-w-xl">
          Crafting Visual Stories <br /> That Stop the Scroll
        </h2>

        <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#B3B3B3] lg:w-5/9">
          Every property has a strength, location, light, layout, or lifestyle.
          Every design has a story-texture, palette, function, or form. Our job
          is to bring those strengths forward.
        </p>
      </div>

      {/* IMAGE COLLAGE */}
      <div className="hidden md:flex relative w-full  justify-center mt-18">
        <div className="relative w-full flex  justify-center ">
          {/* IMAGE 1 */}
          <div
            className="relative top-8 -mr-10 -ml-4 transform -rotate-2 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
            
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734188/b58qghyhca1mbtl2ekka.jpg" // replace path
              alt="Work Image 1"
              fill
              className="object-cover absolute "
            />
          </div>

          {/* IMAGE 2 */}
          <div
            className="relative top-18 -ml-20 transform rotate-3 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
    
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734196/yyugyverzjvaqn9tpje2.jpg"
              alt="Work Image 2"
              fill
              className="object-cover"
            />
          </div>
          {/* IMAGE 3 */}
          <div
            className="relative top-6 -ml-20 transform rotate-11 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
       
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734202/ykxdxmwu91muxr6e6fqd.jpg"
              alt="Work Image 3"
              fill
              className="object-cover"
            />
          </div>

          {/* IMAGE 4 */}
          <div
            className="relative -ml-20 top-18 transform -rotate-7 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
  
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734209/nouyj2g6skqelftj5pi1.jpg"
              alt="Work Image 4"
              fill
              className="object-cover"
            />
          </div>
          </div>

          <div className="h-[350px] lg:h-[400px] xl:h-[450px]"></div> {/* spacing box */}
        </div>


         {/* IMAGE COLLAGE */}
      <div className="md:hidden relative w-full flex justify-center mt-8 sm:py-14">
        <div className="relative w-full flex flex-col justify-center w-full ">
          <div
            className="relative flex flex-row w-full h-full gap-4 ">
          {/* IMAGE 1 */}
          <div
            className="relative top-8 ml-4 -mr-10 transform rotate-16 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
            
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734188/b58qghyhca1mbtl2ekka.jpg" // replace path
              alt="Work Image 1"
              fill
              className="object-cover absolute "
            />
          </div>

          {/* IMAGE 2 */}
          <div
            className="relative top-22 -ml-10 transform rotate-1 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
    
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734196/yyugyverzjvaqn9tpje2.jpg"
              alt="Work Image 2"
              fill
              className="object-cover"
            />
          </div>
          </div>
          {/* IMAGE 3 */}
          <div
            className="relative flex flex-row w-full h-full gap-4 ">
          <div
            className="relative top-0 ml-4 transform rotate-11 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
       
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734202/ykxdxmwu91muxr6e6fqd.jpg"
              alt="Work Image 3"
              fill
              className="object-cover"
            />
          </div>

          {/* IMAGE 4 */}
          <div
            className="relative -ml-20 mr-2 top-18 transform -rotate-7 border-[8px] border-[#FF914D] rounded-md overflow-hidden shadow-xl w-full"
  
          >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764734209/nouyj2g6skqelftj5pi1.jpg"
              alt="Work Image 4"
              fill
              className="object-cover"
            />
          </div>
          </div>
          </div>

          <div className="h-[400px] sm:h-[600px] "></div> {/* spacing box */}
        </div>
    </section>
  );
}
