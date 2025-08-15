import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { MdCallMissedOutgoing } from "react-icons/md";
import { FaEye } from 'react-icons/fa';

const ProjectCard = ({project}) => {
    const {id, title,challenge, tech, github, live, image} =project;
  return (
    <motion.div
      className="flex my-5 flex-col md:flex-row 
 p-10 rounded-2xl shadow-md overflow-hidden border text-white border-white
  hover:shadow-xl bg- transition"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full rounded-2xl md:w-1/2 object-cover h-64 md:h-auto"
      />

      {/* Text Content */}
      <div className="flex-1 lg:px-8   flex flex-col justify-between">
        <div>
          <h3 className="text-2xl   font-semibold  mb-2">{title}</h3>
          <p className=" mb-4">{challenge}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(tech || []).map((item, index) => (
              <span
                key={index}
                className="bg-gray-100 text-indigo-600 text-sm px-3 py-1 rounded-full"
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
            className="flex  px-2 items-center gap-2 border
             text-white bg-black rounded hover:bg-green-700 transition"
          >
            <Github size={20} />
            GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
  className="flex  px-2 items-center gap-2 border
             text-white bg-black rounded hover:bg-green-700 transition"> <MdCallMissedOutgoing size={20} />
              Live 
            </a>
          )}
          <Link to= {`/details/${id}`} >
 <button   className="flex  p-2 items-center gap-2 border
             text-white bg-black rounded hover:bg-green-700 transition">
              <FaEye size={20} />
            view 
          </button>
          </Link>
       
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
