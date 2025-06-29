import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion } from "framer-motion";
import { FaSun } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex">
   <FaSun size={30} className='mr-4 mt-1.5 border bg-black text-white rounded-full p-1'/>
                      <motion.label
      className="text-3xl -ml-3 font-extrabold "
      animate={{
        color: [ 

          "#e11d48", // rose
          "#3b82f6", // blue
          "#10b981", // green
          "#f59e0b", // amber
          "#8b5cf6", // violet
          "#ec4899", // pink
          "#14b8a6", // teal
          "#f43f5e", // red
          "#e11d48"]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
    
    RSE_Power
    </motion.label>
          {/* <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
          
          </h1> */}
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-indigo-600 font-semibold'
                  : 'text-gray-700 hover:text-indigo-600'
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Right: Resume Button & Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Resume button - hidden on mobile */}
          <a
            href="/resume.pdf" // replace with your resume URL
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
          >
            Resume
          </a>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'block py-2 text-indigo-600 font-semibold'
                  : 'block py-2 text-gray-700 hover:text-indigo-600'
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          {/* Also add resume button in mobile menu */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
