import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 2000; // slow scroll
    const scrollStep = -window.scrollY / (scrollDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[82px] right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg 
        hover:bg-blue-700 hover:scale-110 transition-all duration-300 animate-bounce 
        z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
