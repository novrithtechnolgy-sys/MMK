"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname(); // <-- Active route
    const router = useRouter();
    
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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`absolute z-20 w-full 
    ${isScrolled ? "fixed bg-white/90 " : "absolute bg-transparent"}`}>
      <div className="px-[20px] md:px-[50px] lg:px-[100px] mx-auto flex justify-between items-center py-3 md:py-4 bg-transparent">

        {/* Logo */}
        <a href="/">
        <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1764655637/ygzr438mkjyamx3vmpd9.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-auto h-8 md:h-10 "    
          /> 
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-[18px] font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                  font-poppins transition relative
                  ${isActive ? "text-orange-500" : "text-gray-700"}
                `}
              >
                {item.name}

                {/* Active underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-500 rounded-full"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Join Button */}
        <button
        type="button"
        onClick={() => router.push("/contact")}
        className="hidden font-poppins md:block bg-orange-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-500 transition">
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
        <div className="flex flex-col py-2 px-[20px] gap-5 text-[18px] font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  transition font-poppins
                  ${isActive ? "text-orange-500" : "text-gray-700"}
                `}
              >
                {item.name}
              </a>
            );
          })}

          <button className="px-2 py-2 md:py-3 w-[150px] md:w-[200px] rounded-full bg-orange-400 text-white font-[poppins] text-[12px] sm:text-[14px] lg:text-[18px] font-semibold">
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}
