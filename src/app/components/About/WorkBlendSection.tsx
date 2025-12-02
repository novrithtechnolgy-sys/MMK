import { FaChartBar, FaDesktop, FaPalette } from "react-icons/fa";

export default function WorkBlendSection() {
  const items = [
    {
      icon: <FaPalette className="text-white text-4xl" />, // Replace with your own SVG or icon component
      title: "Creativity",
      desc: `Capturing the mood and "feel" of a space.`,
    },
    {
      icon: <FaDesktop className="text-white text-4xl" />,
      title: "Technical Precision",
      desc: "Perfect verticals, balanced lighting, and true colors.",
    },
    {
      icon: <FaChartBar className="text-white text-4xl" />,
      title: "Market Strategy",
      desc: "Content designed to convert viewers into leads.",
    },
  ];

  return (
    <section className="px-[20px] md:px-[50px] lg:px-[100px] md:py-10 md:mb-20">
      <h2 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium text-gray-800  md:mb-4">
        Our Formula
      </h2>

      <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-[poppins] leading-relaxed text-[#B3B3B3] mb-6 md:mb-12">
        Our work blends:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#FF9555] text-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm flex flex-col justify-center"
          >
            {/* ICON */}
            <div className="text-4xl mb-2 md:mb-4">{item.icon}</div>

            {/* TITLE */}
            <h3 className="font-[poppins] text-[18px] sm:text-[18px] lg:text-[18px] font-semibold md:mb-2">{item.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-white/90 font-[poppins] text-[14px] sm:text-[14px] lg:text-[16px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
