import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { MdCallMissedOutgoing } from "react-icons/md";
import { FaEye } from 'react-icons/fa';

const ProjectCard = ({project}) => {
    const {id, title, description, tech, github, live, image} =project;
  return (
    <motion.div
      className="flex my-15 flex-col md:flex-row bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
 p-10 rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full rounded-2xl md:w-1/2 object-cover h-64 md:h-auto"
      />

      {/* Text Content */}
      <div className="flex-1 p-6  text-white flex flex-col justify-between">
        <div>
          <h3 className="text-2xl  text-white font-semibold  mb-2">{title}</h3>
          <p className=" text-white mb-4">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(tech || []).map((item, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-600 text-sm px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex  px-2 items-center gap-2 border bg-black rounded hover:bg-pink-700 transition"
          >
            <Github size={20} />
            GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className=" p-2 flex bg-indigo-600 text-white text-sm rounded hover:bg-green-700 transition"
            > <MdCallMissedOutgoing size={20} />
              Live Demo
            </a>
          )}
          <Link to= {`/details/${id}`} >
 <button className='p-3 flex  gap-2 bg-indigo-600 text-white text-sm rounded
  hover:bg-sky-700 transition'>
              <FaEye size={20} />
            view more
          </button>
          </Link>
       
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
