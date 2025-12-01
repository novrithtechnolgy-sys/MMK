import Image from "next/image";
export default function ContactCTA() {
  return (
    <section className="items-center justify-between gap-2 md:gap-10 px-[16px] md:px-[50px] lg:px-[100px] py-20 ">
    <div className="flex flex-row justify-between gap-2 md:gap-10 h-full">
      
      {/* LEFT CARD */}
      <div className="rounded-xl md:rounded-3xl shadow-md p-4 md:p-12 w-full"
        style={{
          background: "linear-gradient(178deg, #FEB47B 0%, #FFEEDD 40%, #FFFFFF 100%)",
        }}
      >
        <h2 className="font-[unbounded] text-[16px] sm:text-[24px] lg:text-[32px] font-medium text-[#1E1E1E] text-center w-full">
          Let's Showcase Your Vision
        </h2>

        <p className="text-gray-600 mt-3 text-center font-[poppins] text-[10px] sm:text-[14px] lg:text-[18px] w-full">
          Drop a message — you never know where one connection could lead.
        </p>

        <div className="flex justify-center mt-8">
          <button
            className="px-2 md:px-10 py-3 rounded-full text-white font-[poppins] text-[10px] sm:text-[14px] lg:text-[18px] font-medium"
            style={{
              background: "linear-gradient(90deg, #FF8A3D, #FFA45B)",
            }}
          >
            Send Message
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
        <div className="w-1/2 rounded-xl md:rounded-3xl overflow-hidden shadow-md">
          <div className=" bg-black w-full h-full">
            <Image
              src="/5292fbf6dd924eb979e09a286dd21fafe5914f59.jpg"
              alt="Contact CTA Image"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
    </div>
    </section>
  );
}
