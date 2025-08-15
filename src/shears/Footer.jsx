import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from "framer-motion";
import { FaSun } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
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
        {/* Left Side: Name or Brand */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">© {new Date().getFullYear()} Royel Ali</p>
          <p className="text-sm text-gray-500">Full Stack Web Developer</p>
        </div>

        {/* Right Side: Social Icons */}
              <div className="flex space-x-6  py-2 px-2">
                 <a
                   href="https://github.com/Royel500"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-indigo-600 transition"
                 >
                   <Github />
                 </a>
                 <a
                   href="https://linkedin.com/in/your-link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:text-indigo-600 transition"
                 >
                   <Linkedin />
                 </a>
               <a href="mailto:webdev.royelali@gmail.com" class="text-blue-500 underline">
       
       
       
                   <Mail />
                 </a>
               </div>
      </div>
    </footer>
  );
};

export default Footer;
