import React from 'react';
import { motion } from 'framer-motion';
import photo from '/Portfolio.jpg'
const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
  'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth',
  'React Router', 'Framer Motion', 'GitHub','Frontend', 'Backend', 
];

const About = () => {
  return (
    <section className="min-h-screen my-15 bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image (Optional) */}
        <motion.img
          src={photo} // Replace with your image
          alt="Royel Ali"
          className="w-64 h-64 rounded-2xl shadow-lg object-cover"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 text-lg mb-4">
            I'm Royel Ali, a dedicated Full Stack Web Developer from Bangladesh. I love building modern, scalable, and user-friendly web applications. My focus is on combining clean code with beautiful design to solve real-world problems.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            I work comfortably across both frontend and backend technologies, and I’m always learning new tools to improve my craft.
          </p>
          <h1 className='text-[20px] font-bold'>Educational Background :</h1>
          <p className="text-gray-600 text-lg mb-4">
  I’ve completed my Higher Secondary Certificate (HSC) and I’m currently pursuing a Bachelor of Social Science (BSS) degree. Alongside my academic studies, I’ve developed a strong interest and skillset in full stack web development.
</p>

          {/* Skill Tags */}
          <div className='text-2xl font-bold mt-10 mb-5'>
            My Skills
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
