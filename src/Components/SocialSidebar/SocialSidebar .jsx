import React, { useState } from "react";
import { FaFacebook, FaPhone, FaTelegramPlane, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialSidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const topIcons = [
    { href: "https://t.me/itisroyel528", color: "#0088cc", icon: <FaTelegramPlane /> },
    { href: "https://wa.me/8801907226353", color: "#25D366", icon: <FaWhatsapp /> },
  ];

  const bottomIcons = [
    { href: "https://x.com/royel528", color: "#1DA1F2", icon: <FaXTwitter /> },
    { href: "https://www.youtube.com/@RS-Midea", color: "#FF0000", icon: <FaYoutube /> },
    { href: "https://www.facebook.com/profile.php?id=100085936730814", color: "#3b5998", icon: <FaFacebook /> },
  ];

  return (
    <div className="fixed top-1/2 left-2 z-50 transform -translate-y-1/2 flex flex-col items-center">
      
      {/* Top icons */}
      <div className="flex flex-col gap-4 mb-2 transition-all duration-500">
        {open &&
          topIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-3 rounded-full shadow-lg hover:translate-x-2 transition-transform duration-300"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </a>
          ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={toggleOpen}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 animate-bounce"
      >
        <FaPhone size={20} />
      </button>

      {/* Bottom icons */}
      <div className="flex flex-col gap-4 mt-2 transition-all duration-500">
        {open &&
          bottomIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white p-3 rounded-full shadow-lg hover:translate-x-2 transition-transform duration-300"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SocialSidebar;
