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
        const currentProject = data.find(p => p.id === parseInt(id)); // Match by id
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
      <div className="min-h-screen  flex items-center justify-center">
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 10, y: 10 }}
          transition={{ duration: 1 }}
    className="min-h-screen z-0 mt-30 rounded px-6 py-12 bg-white max-w-5xl mx-auto">
      <Link
        to="/projects"
        className="text-indigo-600 hover:underline text-[25px] mb-4 inline-block"
      >
        ← Back to Projects
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-1/2 object-cover h-64 md:h-auto"
        />

        <div className="p-6 flex-1">
           
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <h1 className='font-bold '>Description:</h1>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <h1 className='font-bold '>Challenge:</h1>
          <p className="text-gray-700 mb-4">  {project.challenge}</p>
            <h1 className='font-bold '> Tec :</h1>
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

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-700 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              View GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Details;
