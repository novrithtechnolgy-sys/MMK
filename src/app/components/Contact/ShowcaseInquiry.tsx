"use client";

import Image from "next/image";
import { FiUser, FiMail, FiPhone, FiMapPin, FiLayers, FiMessageSquare } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";

const COLUMN_WIDTHS = ["190px", "340px", "340px", "190px"]; // Adjust these values as needed

const COLUMNS = [
  [
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765113870/kuwisubwh3azmfnalgo0.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765104006/rexfs2mua2xl4ixowi0r.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103814/zfkbr52hpcg4nlsrzprc.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103621/r5lj1v27mscvbsaogffb.jpg",
],
  [
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103586/y6i8znn3oc4oorcgm84d.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103532/wtsp8xqnvuonoawyvovi.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103368/tcb9ftba2gcnc1oovrjl.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103118/revyr72jxq6brk8lv6ej.jpg",
],
  [
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103114/cfc3b1pjnrlgdj3wswty.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103112/s8ycofbgwosyydyqnpoh.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103104/gpl4ailfteogvkfldhzi.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103092/lbdatkkwcuukzqx6o7cd.jpg",
],
  [
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765097979/yexpgiroz13cnunbnxyu.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765097962/k3bcud5fnvuqmrutvm3a.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765097769/v8jrqfnzkvfqxycxm5ql.jpg",
  "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765103112/s8ycofbgwosyydyqnpoh.jpg",
],
];


export default function ShowcaseInquiry() {
    const router = useRouter();
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    clientType: "",
    services: "",
    requiredServices: "",
    message: "",
  });

    const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/thank-you");
      } else {
        alert("Failed to send email.");

      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };


  const columns = [
    { direction: "scroll-up" },
    { direction: "scroll-down" },
    { direction: "scroll-up" },
    { direction: "scroll-down" },
  ];

  return (
    <section className="px-[20px] md:px-[50px] lg:px-[100px] py-20 md:py-25 bg-[#F5F5F5] bg-blank">
      
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium leading-tight">Let's Showcase Your Vision</h1>
        <p className="mt-2 md:mt-6 font-[poppins] text-[12px] sm:text-[14px] lg:text-[18px] text-[#B3B3B3]">
          Whether you're selling a house, launching a new development, 
          or documenting your latest interior design project, we create visuals that deliver results.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="flex flex-col md:flex-row gap-6 w-full">


      {/* LEFT AUTO-SCROLL COLUMNS */}
        <div className="flex gap-1 md:gap-4 w-full h-[500px] md:h-[850px] overflow-hidden rounded-3xl order-2 md:order-1">
          {COLUMNS.map((images, colIndex) => (
            <div
              key={colIndex}
              className="relative overflow-hidden"
              style={{ width: COLUMN_WIDTHS[colIndex] }}   // ← CUSTOM WIDTH HERE
            >
              <div className={`flex flex-col gap-1 md:gap-3 ${colIndex % 2 === 0 ? "scroll-up" : "scroll-down"}`}>

                {/* ORIGINAL IMAGES */}
                {images.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Gallery"
                      width={300}
                      height={450}
                      className="object-cover h-[180px] md:h-[320px]"
                      style={{width: "100%"  }} // ← CUSTOM IMAGE SIZE HERE
                    />
                  </div>
                ))}

                {/* DUPLICATES FOR INFINITE SCROLL */}
                {images.map((src, i) => (
                  <div key={`dup-${i}`} className="rounded-xl overflow-hidden">
                    <Image
                      src={src}
                      alt="Gallery"
                      width={300}
                      height={450}
                      className="object-cover rounded-xl h-[180px] md:h-[320px]"
                      style={{ width: "100%" }} // same height
                    />
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>


        {/* RIGHT FORM */}
           {/* RIGHT FORM CARD */}
        <div className="bg-white p-6 md:p-10 rounded-3xl  border border-gray-200 w-full md:w-6/8 order-1 md:order-2">
          <h2 className="font-[poppins] text-[16px] sm:text-[20px] lg:text-[32px] font-semibold">Send Us an Inquiry</h2>

          <p className="font-[poppins] text-[12px] sm:text-[14px] lg:text-[18px] text-[#B3B3B3] mt-4">
            We'll get back to you within 24 hours.
          </p>

          <p className="lg:hidden xl:block font-[poppins] text-[12px] sm:text-[14px] lg:text-[18px] text-[#B3B3B3]">
            MarketMyKeys is Turning Properties & Designs Into Experiences That Sell.
          </p>

          <form className="mt-8 space-y-6">

            {/* NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiUser className="text-gray-500" />
                <input 
                type="text" 
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange} 
                className="bg-transparent w-full outline-none" />
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiUser className="text-gray-500" />
                <input
                 type="text" 
                 placeholder="Last name"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleChange} 
                 className="bg-transparent w-full outline-none" />
              </div>
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiMail className="text-gray-500" />
                <input 
                type="email" 
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange} 
                className="bg-transparent w-full outline-none" />
              </div>

              <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                <FiPhone className="text-gray-500" />
                <input 
                type="text" 
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange} 
                className="bg-transparent w-full outline-none" />
              </div>
            </div>

            {/* PROJECT LOCATION */}
            <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
              <FiMapPin className="text-gray-500" />
              <input type="text" 
              placeholder="Project Location"
              name="location"
              value={formData.location}
              onChange={handleChange} 
              className="bg-transparent w-full outline-none" />
            </div>

            {/* CLIENT TYPE */}
            <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
              <FiLayers className="text-gray-500" />
              <input 
              type="text" 
              placeholder="Client Type"
              name="clientType"
              value={formData.clientType}
              onChange={handleChange} 
              className="bg-transparent w-full outline-none" />
            </div>

            {/* REQUIRED SERVICES */}
            <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
              <FiLayers className="text-gray-500" />
              <input type="text" 
              placeholder="Required Services"
              name="requiredServices"
              value={formData.requiredServices}
              onChange={handleChange} 
              className="bg-transparent w-full outline-none" />
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-3 p-3 border rounded-xl bg-gray-50">
              <FiMessageSquare className="text-gray-500 mt-1" />
              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-transparent w-full outline-none h-28 resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-2 py-2 md:py-3 w-[150px] md:w-[200px] rounded-full text-white font-[poppins] text-[10px] sm:text-[14px] lg:text-[18px] font-semibold bg-[#FF914D] hover:bg-orange-500 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
