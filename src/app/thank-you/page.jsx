"use client";

import { motion } from "framer-motion";
import Navebar from "../components/Navbar";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <>
        <Navebar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-orange-400 to-orange-500 px-6 text-white">

          {/* Floating Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute w-[500px] h-[500px] bg-white opacity-10 rounded-full blur-3xl -top-20 -left-20"></div>
              <div className="absolute w-[400px] h-[400px] bg-orange-300 opacity-10 rounded-full blur-3xl bottom-0 right-0"></div>
          </div>

          {/* Card */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 p-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl text-center max-w-lg w-full"
          >
              {/* Success Icon */}
              <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="flex justify-center mb-6"
              >
                  <CheckCircle size={80} className="text-white drop-shadow-lg" />
              </motion.div>

              <h1 className="font-[unbounded] text-[20px] sm:text-[30px] lg:text-[40px] font-medium mb-3">Thank You! 🎉</h1>

              <p className="font-[poppins] text-[14px] sm:text-[16px] lg:text-[18px] text-white/80 leading-relaxed mb-8">
                  Your message has been successfully sent.<br />
                  Our team will get back to you shortly.
              </p>

              {/* Button */}
              <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href="/"
                  className="bg-white font-semibold text-[8px] sm:text-[12px] lg:text-[18px] w-[150px] md:w-[200px] hover:bg-white/80 text-orange-500 hover:text-orange-600 px-6 py-3 rounded-full transition-all"
              >
                  Go Back Home
              </motion.a>
          </motion.div>

          {/* Footer Text */}
          <p className="mt-10 text-white/80 text-sm">
              © {new Date().getFullYear()} Novrith Technology — All Rights Reserved.
          </p>
      </div>
      </>
  );
}
