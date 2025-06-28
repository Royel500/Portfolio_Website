import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const ProjectCard = ({project}) => {
    const {id, title, description, tech, github, live, image} =project;
  return (
    <motion.div
      className="flex my-15 flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 object-cover h-64 md:h-auto"
      />

      {/* Text Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>

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
        <div className="flex gap-4 mt-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <Github size={20} />
            GitHub
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-xl hover:bg-indigo-700 transition"
            >
              Live Demo
            </a>
          )}
          <Link to= {`/details/${id}`} >
             <button className='btn btn-primary'>
            view
          </button>
          </Link>
       
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
