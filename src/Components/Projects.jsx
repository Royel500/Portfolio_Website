import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Typewriter } from 'react-simple-typewriter';
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
        <h2 className="text-4xl font-bold text-white italic
          my-5 text-center">
          
             <Typewriter
                    words={['My Projects']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
          </h2>
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
