"use client";

import { useEffect, useState } from "react";
import { FaCookieBite } from "react-icons/fa";

export default function CookieButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Wait until Termly loads
    const timer = setTimeout(() => setVisible(true), 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const preferencesBtn = document.querySelector(
      ".termly-display-preferences"
    ) as HTMLElement;

    if (preferencesBtn) {
      preferencesBtn.click(); // Opens cookie settings
    } else {
      alert("Cookie settings are still loading. Try again in a moment.");
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 left-5 bg-orange-400 text-white p-4 rounded-full shadow-lg hover:bg-orange-500 transition duration-300 z-50 flex items-center justify-center"
      title="Cookie Preferences"
    >
      <FaCookieBite size={22} />
    </button>
  );
}
