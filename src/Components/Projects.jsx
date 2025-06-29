import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjectList(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);
  return (
    <section className="min-h-screen   py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 italic underline mb-10 text-center">My Projects</h2>
        <div className="flex flex-col gap-10">
          {projectList.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
