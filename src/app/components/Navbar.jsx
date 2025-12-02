"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    // Detect scrolling
    useEffect(() => {
      function handleScroll() {
        setIsScrolled(window.scrollY > 10);
      }
      window.addEventListener("scroll", handleScroll);
    
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  // Navigation items array
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Our Work", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className={`absolute z-20 w-full 
    ${isScrolled ? "fixed bg-white/90 " : "absolute bg-transparent"}`}>
      <div className="px-4 md:px-[50px] lg:px-[100px] mx-auto flex justify-between items-center py-3 md:py-4 bg-transparent">

        {/* Logo */}
        <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-auto h-8 md:h-10 "    
          /> 
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[18px] font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-poppins hover:text-orange-500 transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Join Button */}
        <button className="hidden font-poppins md:block bg-orange-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-500 transition">
          Join
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[22px] text-[#0f1724]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ${
          open ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col py-4 px-8 gap-5 text-[18px] font-medium">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-gray-200 hover:text-orange-500 transition"
            >
              {item.name}
            </a>
          ))}

          <button className="bg-orange-400 text-white py-2 rounded-full shadow-md hover:bg-orange-500 transition">
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}
