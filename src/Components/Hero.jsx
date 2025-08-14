import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import photo from '/Portfolio.jpg'
import { Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
 <section className=" flex items-center justify-center py-15 px-6">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-red-200 mb-4">
            Hi, I'm <span className="text-green-600">Royel Ali</span>
          </h1>

          <span className="text-white text-3xl font-bold ">........
        <Typewriter
          words={['Full Stack Developer', 'React Enthusiast', 'Problem Solver']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>


         <motion.p
      className="text-lg text-white max-w-2xl my-6 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      🚀 A passionate{" "}
      <motion.span
        className="text-red-400 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Full Stack Web Developer
      </motion.span>{" "}
      with a strong focus on{" "}
      <motion.span
        className="text-yellow-300 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Frontend Excellence
      </motion.span>
      . I craft sleek,{" "}
      <span className="italic text-gray-300">responsive</span>, and{" "}
      <span className="italic text-gray-300">high-performance</span> applications powered by{" "}
      <motion.span
        className="text-green-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        React
      </motion.span>
      ,{" "}
      <motion.span
        className="text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        Node.js
      </motion.span>{" "}
      and{" "}
      <motion.span
        className="text-emerald-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.6 }}
      >
        MongoDB
      </motion.span>
      .
      <br />
      <br />
      With{" "}
      <span className="text-orange-300 font-semibold">a Bachelor’s degree in Computer Science</span>{" "}
      and hands-on experience in both{" "}
      <span className="text-cyan-300">frontend</span> and{" "}
      <span className="text-pink-300">backend</span> development, I specialize in turning complex
      ideas into{" "}
      <span className="italic text-gray-300">user-friendly digital experiences</span>. I thrive in
      environments where innovation meets problem-solving — whether it’s{" "}
      <span className="text-green-400">designing smooth UIs</span> or{" "}
      <span className="text-blue-400">optimizing APIs</span>.
      <br />
     
    </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
     className="px-6 py-2 bg-indigo-500 border text-white rounded-xl  hover:bg-indigo-700 transition"
            >
              View Projects
            </Link>
            <div
             
      className="px-6 py-2 border bg-indigo-500 text-white rounded-xl  transition"
            >
            <a
          href="./public/Resume.pdf"
          download="Royel_Resume.pdf" 
        >
          Download Resume
        </a>
            </div>

            <div className="flex justify-center text-white bg-indigo-500 items-center space-x-6 border rounded-xl py-2 px-2">
          <a
            href="https://github.com/Royel500"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600  text-white transition"
          >
            <Github />
          </a>
          <a
            href="www.linkedin.com/in/royel-ali-733a92379"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600 text-white transition"
          >
            <Linkedin />
          </a>
        <a href="mailto:webdev.royelali@gmail.com" 
        class="text-white hover:text-red-600  underline">



            <Mail />
          </a>
        </div>
          </div>
        </motion.div>

        {/* Profile Image (optional) */}
        <motion.img
          src={photo}// Replace with your photo
          alt="Royel Ali"
          className="w-100 h-100 m-1 p-1 rounded-full shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </div>
    </section>
  )
}
