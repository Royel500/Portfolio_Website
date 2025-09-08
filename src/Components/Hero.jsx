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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
      className="text-lg text-white text-justify
      px-2 max-w-2xl my-6 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      🚀 A passionate{" "}
      <motion.span
        className="text-green-600 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Full Stack Web Developer
      </motion.span>{" "}
      with a strong focus on{" "}
      <motion.span
        className="text-green-600 font-bold"
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
        className="text-green-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        React
      </motion.span>
      ,{" "}
      <motion.span
        className="text-green-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        Node.js
      </motion.span>{" "}
      and{" "}
      <motion.span
        className="text-emerald-600"
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
      <span className="text-green-600 font-semibold">a Bachelor’s degree in Computer Science</span>{" "}
      and hands-on experience in both{" "}
      <span className="text-green-600">frontend</span> and{" "}
      <span className="text-green-600">backend</span> development, I specialize in turning complex
      ideas into{" "}
      <span className="italic text-gray-300">user-friendly digital experiences</span>. I thrive in
      environments where innovation meets problem-solving — whether it’s{" "}
      <span className="text-green-600">designing smooth UIs</span> or{" "}
      <span className="text-green-600">optimizing APIs</span>.
      <br />
     
    </motion.p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
  className="hidden md:inline-block px-4 py-2 border bg-green-600 text-white hover:shadow-xl rounded hover:bg-black  transition"
            >
              View Projects
            </Link>
            <div
             
  className="hidden md:inline-block px-4 py-2 border bg-green-600 text-white hover:shadow-xl rounded hover:bg-black
    transition"
            >
            <a
          href="./public/Resume.pdf"
          download="Royel_Resume.pdf" 

        >
          Download Resume
        </a>
            </div>

            <div className="flex justify-center  text-white bg-green-600
             hover:bg-black  transitionitems-center space-x-6 border rounded py-2 px-2">
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
            src={photo} // Replace with your photo
            alt="Royel Ali"
            className="w-32 h-32  md:w-48 md:h-48 lg:h-100 lg:w-100 rounded-full shadow-lg object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />

      </div>
    </section>
  )
}
