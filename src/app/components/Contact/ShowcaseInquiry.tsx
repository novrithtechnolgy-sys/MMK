"use client";

import Image from "next/image";
import { FiUser, FiMail, FiPhone, FiMapPin, FiLayers, FiMessageSquare } from "react-icons/fi";

const IMAGES = [
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764761974/gldjzjczchf9hs9txp6q.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764761974/gldjzjczchf9hs9txp6q.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764761974/gldjzjczchf9hs9txp6q.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764761974/gldjzjczchf9hs9txp6q.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764761974/gldjzjczchf9hs9txp6q.jpg",
];

export default function ShowcaseInquiry() {
  const columns = [
    { direction: "scroll-up" },
    { direction: "scroll-down" },
    { direction: "scroll-up" },
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 bg-[#F5F5F5]">
      
      {/* HEADER */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Let's Showcase Your Vision</h1>
        <p className="text-gray-500 mt-4 max-w-2xl">
          Whether you're selling a house, launching a new development, 
          or documenting your latest interior design project—we create visuals that deliver results.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl mx-auto ">

        {/* LEFT AUTO-SCROLL COLUMNS */}
        <div className="grid grid-cols-3 gap-4 w-full h-[600px] md:h-[850px] overflow-hidden rounded-3xl order-2 lg:order-1">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="relative overflow-hidden">
              <div className={`flex flex-col gap-4 ${col.direction}`}>
                
                {/* Original list */}
                {IMAGES.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Gallery"
                      width={500}
                      height={600}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                ))}

                {/* Duplicate images for infinite scroll */}
                {IMAGES.map((src, i) => (
                  <div key={`dup-${i}`} className="rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Gallery"
                      width={500}
                      height={600}
                      className="w-full h-60 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT FORM */}
           {/* RIGHT FORM CARD */}
        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200 order-1 lg:order-2">
          <h2 className="text-2xl md:text-3xl font-bold">Send Us an Inquiry</h2>

          <p className="text-gray-500 mt-2 text-sm">
            We'll get back to you within 24 hours.
          </p>

          <p className="font-semibold text-gray-600 mt-4">
            MarketMyKeys – Turning Properties & Designs Into Experiences That Sell.
          </p>

          <form className="mt-8 space-y-6">

            {/* NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiUser className="text-gray-500" />
                <input type="text" placeholder="First name" className="bg-transparent w-full outline-none" />
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiUser className="text-gray-500" />
                <input type="text" placeholder="Last name" className="bg-transparent w-full outline-none" />
              </div>
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiMail className="text-gray-500" />
                <input type="email" placeholder="Email Address" className="bg-transparent w-full outline-none" />
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiPhone className="text-gray-500" />
                <input type="text" placeholder="Phone number" className="bg-transparent w-full outline-none" />
              </div>
            </div>

            {/* PROJECT LOCATION */}
            <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
              <FiMapPin className="text-gray-500" />
              <input type="text" placeholder="Project Location" className="bg-transparent w-full outline-none" />
            </div>

            {/* CLIENT TYPE */}
            <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
              <FiLayers className="text-gray-500" />
              <input type="text" placeholder="Client Type" className="bg-transparent w-full outline-none" />
            </div>

            {/* REQUIRED SERVICES */}
            <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
              <FiLayers className="text-gray-500" />
              <input type="text" placeholder="Required Services" className="bg-transparent w-full outline-none" />
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-3 p-3 border rounded-xl bg-gray-50">
              <FiMessageSquare className="text-gray-500 mt-1" />
              <textarea
                placeholder="Message"
                className="bg-transparent w-full outline-none h-28 resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-[#FF9557] text-white rounded-xl font-bold text-lg hover:opacity-90 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
