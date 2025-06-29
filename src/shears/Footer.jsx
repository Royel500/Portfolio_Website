import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
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
