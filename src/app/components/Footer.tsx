"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FF9652] text-white px-6 md:px-[100px] py-10">
      <div className=" mx-auto flex flex-col items-center text-center gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
          
          {/* Logo */}
            <Image src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764655875/pcseadvjnildtv2g9nlo.png" 
            alt="Logo" 
            width={100} 
            height={100} />

          {/* Menu */}
          <nav className="flex flex-wrap justify-center gap-8 text-[15px] mt-6 md:mt-0 font-medium">
            <a href="#" className="hover:opacity-80">Home</a>
            <a href="#" className="hover:opacity-80">About Us</a>
            <a href="#" className="hover:opacity-80">Our Works</a>
            <a href="#" className="hover:opacity-80">Contact</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <div className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaFacebookF size={16} />
            </div>
            <div className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaInstagram size={16} />
            </div>
            <div className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaLinkedinIn size={16} />
            </div>
            <div className="bg-white text-[#FF9652] p-3 rounded-full hover:scale-110 transition">
              <FaTwitter size={16} />
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="w-full border-white/50" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between w-full text-sm text-white/90 gap-4">
          <p>© 2025 Zinkq. All rights reserved.</p>

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
