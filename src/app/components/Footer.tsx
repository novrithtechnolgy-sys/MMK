"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FF9652] text-white px-[20px] md:px-[50px] lg:px-[100px] py-10">
      <div className=" mx-auto flex flex-col items-center text-center gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
          
          <a
           href="/"
           className="flex justify-center md:justify-start w-full">
          {/* Logo */}
            <Image src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764655875/pcseadvjnildtv2g9nlo.png" 
            alt="Logo" 
            width={100} 
            height={100} 
            className="w- h-8 md:h-10 object-contain"/>
          
          </a>

          {/* Menu */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-[14px] md:text-[16px] lg:text-[18px] mt-6 md:mt-0 font-medium w-full md:w-[1400px] lg:w-[1600px] 2xl:w-full">
            <a href="/" className="hover:opacity-80">Home</a>
            <a href="/about" className="hover:opacity-80">About Us</a>
            <a href="/our-work" className="hover:opacity-80">Our Works</a>
            <a href="/contact" className="hover:opacity-80">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 md:mt-0 w-full justify-center md:justify-end">
            <a 
             href="https://www.facebook.com/profile.php?id=61577989525831&_rdc=1&_rdr#"
             className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaFacebookF size={16} />
            </a>
            <a
            href="https://www.instagram.com/market.my.keys/" 
            className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaInstagram size={16} />
            </a>
            <a
             href="https://www.linkedin.com/"
             className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaLinkedinIn size={16} />
            </a>
            {/* <a
             href="https://twitter.com/"
             className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaTwitter size={16} />
            </a> */}
          </div>
        </div>

        {/* Divider Line */}
        <hr className="w-full border-white/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between w-full text-sm text-white/90 gap-4 text-[12px] md:text-[16px] lg:text-[18px]">
          <p>© 2025 MMK. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:opacity-80">Privacy policy</a>
            <a href="#" className="hover:opacity-80">Terms of service</a>
            <a href="#" className="hover:opacity-80">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
