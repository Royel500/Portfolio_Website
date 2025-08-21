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
    <nav className=" sticky top-0 z-9999 my-2 shadow-md lg:border-white lg:border-2 mx-10 rounded-4xl ">
      <div className="max-w-6xl  mx-auto px-4 py-3 flex items-center justify-between">
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
    
    ROYEL
    </motion.label>
          {/* <h1 className="text-2xl font-bold text-indigo-600 cursor-pointer">
          
          </h1> */}
        </div>

        {/* Center: Nav Links */}
        <div className="hidden  md:flex flex-1 justify-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'bg-blue-400 px-6 rounded-3xl text-white font-bold'
                  : 'text-green-400 font-bold  hover:text-indigo-600'
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
          href="./public/Resume.pdf"
          download="Royel_Resume.pdf" 
           className="block mt-4 px-4 py-2 border transition bg-green-600 hover:bg-black text-white "
        >
          Download Resume
        </a>

        
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center px-6 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'block py-2  bg-blue-400 px-6 rounded-3xl text-white font-bold'
                  : 'block py-2 font-bold text-green-600 hover:text-indigo-600'
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          {/* Also add resume button in mobile menu */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-4 py-2 border transition bg-green-600
             text-white rounded hover:bg-indigo-600 hover:text-white hover:shadow-xl text-center"
            onClick={() => setIsOpen(false)}
          >
            Download Resume 
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
