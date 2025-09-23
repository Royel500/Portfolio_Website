import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaStripe, FaNodeJs, FaDatabase,
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJsonwebtokens, SiFirebase, SiSocketdotio, SiDocker, SiRedis, SiVercel, SiPostman, SiNextdotjs, SiBootstrap, SiTypescript, SiShadcnui, SiMui, SiRedux, SiTailwindcss, SiNetlify, SiAxios, SiFramer, SiReactrouter } from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
    { name: 'React Router', icon: <SiReactrouter className="text-pink-500" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-fuchsia-500" /> },
    { name: 'Axios/TanStack', icon: <SiAxios className="text-purple-500" /> },
    { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-indigo-600" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'ShadCN UI', icon: <SiShadcnui className="text-gray-400" /> },
    { name: 'Material UI', icon: <SiMui className="text-sky-500" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'JWT', icon: <SiJsonwebtokens className="text-red-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Socket.io', icon: <SiSocketdotio className="text-gray-300" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
    { name: 'SQL', icon: <FaDatabase className="text-indigo-500" /> },
  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
    { name: 'Stripe', icon: <FaStripe className="text-indigo-400" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-blue-400" /> },
    { name: 'Vercel', icon: <SiVercel className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'VS Code', icon: '🖥️' },
    { name: 'Firebase Tools', icon: <SiFirebase className="text-yellow-500" /> },
  ],
};

const SkillBox = ({ title, items }) => (
  <div className="flex flex-col border rounded-xl hover:shadow-fuchsia-700 transition-all duration-300 hover:scale-95 p-6 shadow-md w-full md:w-[300px] h-[320px]">
    <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-3 overflow-y-auto flex-grow">
      {items.map((skill, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-lg text-sm border border-white/20"
        >
          <span className="text-xl">{skill.icon}</span>
          <span className="truncate">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const leftVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const rightVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <section className="text-white py-5 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400 mb-2">Technical Skills</h2>
        <p className="text-gray-300">
          My comprehensive skill set covers the entire development stack with expertise in modern web technologies.
        </p>
      </div>

      <motion.div
        className="flex flex-col md:flex-row gap-6 justify-center items-start flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"   // animates when it enters viewport
          viewport={{ once: false, amount: 1 }} // amount: how much needs to be visible to trigger
        >
          <SkillBox title="Frontend Development" items={skills.frontend} />
        </motion.div>

        <motion.div
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 1 }}
        >
          <SkillBox title="Backend & Database" items={skills.backend} />
        </motion.div>

        <motion.div
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 1 }}
        >
          <SkillBox title="Tools & Platforms" items={skills.tools} />
        </motion.div>



      </motion.div>
    </section>
  );
};

export default TechnicalSkills;
