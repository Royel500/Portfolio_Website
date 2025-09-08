import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Details = () => {
  const { id } = useParams(); // Get current ID from URL
  const [project, setProject] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch('/projects.json') // Public folder path
      .then(res => res.json())
      .then(data => {
        const currentProject = data.find(p => p.id === parseInt(id));
        if (currentProject) {
          setProject(currentProject);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      });
  }, [id]);

  if (notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Project not found</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading project...</p>
      </div>
    );
  }

  // Staggered animation for title, description, challenge
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // sequential animation
      },
    },
  };

  const itemVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="lg:mt-30 mt-20 max-w-5xl mx-auto text-white"
    >
      {/* Back Link */}
<Link to="/projects" className="text-green-500 hover:underline text-[25px] mb-4 inline-block" >
 ← Back to Projects </Link>

      {/* Main Card */}
      <div className="rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row ">
        {/* Image */}
        <motion.div className="overflow-hidden w-full md:w-1/2 h-72 md:h-auto relative">

         <motion.img src={project.image} alt={project.title} 
         className="absolute top-7 rounded-2xl left-0 w-full h-110 mx-1 p-1" 
         initial={{ x: "-100%" }} 
         animate={{ x: "1%" }}
          transition={{ duration: 3,
           ease: "easeOut", }} />

        </motion.div>

        {/* Content */}
        <motion.div
          className="p-6 flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-4">
            {project.title}
          </motion.h1>

          {/* Description */}
          <h2 className="font-bold text-justify">Description:</h2>
          <motion.p variants={itemVariants} className="mb-4">
            {project.description}
          </motion.p>

          {/* Challenge */}
          <h2 className="font-bold">Challenge:</h2>
          <motion.p variants={itemVariants} className="mb-4 text-justify">
            {project.challenge}
          </motion.p>

          {/* Tech Stack */}
          <h2 className="font-bold">Tech:</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-600 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-black text-white border rounded hover:bg-green-700 transition"
            >
              View GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black text-white border rounded hover:bg-green-700 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Details;
