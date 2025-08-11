import React from 'react';
import { motion } from 'framer-motion';
import photo from '/Portfolio.jpg'
import Experience from './Experience';
import EducationCard from './Education/EducationCard';
import EducationJourney from './Education/EducationJourney';
// const skills = [
//   'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
//   'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth',
//   'React Router', 'Framer Motion', 'GitHub','Frontend', 'Backend', 
// ];

const About = () => {
  return (
    <section className=" pt-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image (Optional) */}
        <motion.img
          src={photo} // Replace with your image
          alt="Royel Ali"
          className="w-80 h-100 rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 20, y: 60 }}
          animate={{ opacity: 21, y: 10 }}
          transition={{ duration: 1 }}
        />

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 20, y: 60 }}
          animate={{ opacity: 21, y: 10 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white  mb-4">About Me</h2>
         <div className="space-y-4 mx-5 font-semibold text-justify">
  <p className="text-white text-lg">
    I'm Royel Ali, a dedicated Full Stack Web Developer from Bangladesh with a Bachelor of Science (BSc) degree. Currently, I'm working at [Chemical Company Name] as a [Your Designation], where I combine my technical skills with industry-specific knowledge.
  </p>
  
  <p className="text-white text-lg">
    My passion lies in building modern, scalable, and user-friendly web applications. I thrive on transforming complex problems into elegant digital solutions, bridging the gap between chemical industry expertise and cutting-edge web technologies.
  </p>
  
  <p className="text-white text-lg">
    While working in the chemical sector, I've developed a unique perspective that allows me to create specialized web solutions for industrial applications. My technical toolkit spans both frontend and backend technologies, and I'm continuously expanding my skills to stay at the forefront of web development.
  </p>
  
  <p className="text-white text-lg">
    What drives me is the opportunity to merge my formal education, professional experience in chemicals, and software development skills to build transformative digital experiences that make a real-world impact.
  </p>
</div>

          {/* Skill Tags */}
          {/* <div className='text-2xl font-bold mt-10 mb-5'>
            My Skills
          </div> */}
          {/* <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div> */}
      
        </motion.div>
      </div>
      <section>

      </section>
   <EducationJourney></EducationJourney>

      <div>
        <Experience></Experience>
      </div>
    </section>
  );
};

export default About;
