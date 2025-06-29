import { style } from 'framer-motion/client';
import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaStripe,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiJsonwebtokens, SiNetlify, SiAxios, SiFramer,
  SiReactrouter
} from 'react-icons/si';
 
const skills = {
  frontend: [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'JavaScript', icon: '📜' },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
    { name: 'React Router', icon: <SiReactrouter className="text-pink-500" /> },
    { name: 'Framer Motion', icon: <SiFramer className="text-fuchsia-500" /> },
    { name: 'Axios/TanStack', icon: <SiAxios className="text-purple-500" /> }
  ],
  backend: [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'JWT', icon: <SiJsonwebtokens className="text-red-400" /> },
   { name: 'Firebase', icon: '🔥' },  ],
  tools: [
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-300" /> },
    { name: 'Stripe', icon: <FaStripe className="text-indigo-400" /> },
    { name: 'Netlify', icon: <SiNetlify className="text-blue-400" /> },
   { name: 'Vercel', icon: '🚀' },
      ],
     
};


//   "additionalSkills": {
//     "title": "Additional Skills & Knowledge",
 
//   }



const SkillBox = ({ title, color, items }) => (
  <div className={`rounded-xl hover:shadow-fuchsia-700 transition-transform duration-300 hover:scale-95 p-6 shadow-md  ${color} w-full md:w-auto`}>
    <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-3">
      {items.map((skill, idx) => (
        <div
          key={idx}
          className="flex  items-center gap-2 bg-white/10 text-white px-3 py-2 rounded-lg text-sm border border-white/20"
        >
          <span className="text-xl">{skill.icon}</span>
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <>
   
    <section className="bg-gray-700 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400 mb-2">Technical Skills</h2>
        <p className="text-gray-300">
          My comprehensive skill set covers the entire development stack with expertise in modern web technologies.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        <SkillBox title="Frontend Development"  color="bg-[#1C1F3F]" items={skills.frontend} />
        <SkillBox title="Backend & Database" color="bg-[#0D2E2B]" items={skills.backend} />
        <SkillBox title="Tools & Platforms" color="bg-[#2A0C3F]" items={skills.tools} />
      </div>
          
      <div>
        {/* <!-- Additional Skills & Knowledge Section --> */}
<section class="skills-section lg:mx-20 my-10 lg:p-10 p-5 rounded-2xl bg-gray-800 text-white" >
  <h3 className='text-center mb-2 font-bold'>Additional Skills & Knowledge</h3>
  <div class="skills-container ">
    <ul class="skills-list lg:flex gap-3 justify-center items-center ">
      <li><span class="skill-tag bg-gray-600 rounded-2xl px-2 py-1">ES6+</span> </li>
      <li><span class="skill-tag bg-gray-600 rounded-2xl px-2 py-1">REST API</span> </li>
      <li><span class="skill-tag bg-gray-600 rounded-2xl px-2 py-1">Responsive Design</span></li>
      <li><span class="skill-tag bg-gray-600 rounded-2xl px-2 py-1">Vite</span> </li>
      <li><span class="skill-tag bg-gray-600 rounded-2xl px-2 py-1">Postman</span></li>
      <li><span class="skill-tag bg-gray-600 rounded-2xl px-2 py-1">VS Code</span> </li>
    </ul>
  </div>
</section>


      </div>

    </section>


     </>
  );
};

export default TechnicalSkills;
