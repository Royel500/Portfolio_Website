import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import photo from '/Portfolio.jpg'
import { Github, Linkedin, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

export const Hero = () => {
  return (
 <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-indigo-600">Royel Ali</span>
          </h1>

          <span className="text-blue-500 text-3xl font-bold ">........
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


          <p className="text-lg text-gray-600 max-w-md my-6">
            A passionate Full Stack Web Developer specializing in building modern, responsive applications using React, Node.js, and MongoDB.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/projects"
              className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-50 transition"
            >
              Contact Me
            </Link>

            <div className="flex space-x-6 border rounded py-2 px-2">
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
        </motion.div>

        {/* Profile Image (optional) */}
        <motion.img
          src={photo}// Replace with your photo
          alt="Royel Ali"
          className="w-64 h-64 rounded-full shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </div>
    </section>
  )
}
