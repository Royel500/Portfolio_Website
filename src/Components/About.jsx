import React from 'react';
import { motion } from 'framer-motion';
import photo from '/Portfolio.jpg'
import Experience from './Experience';
import EducationCard from './Education/EducationCard';
import EducationJourney from './Education/EducationJourney';
import { Award } from "lucide-react";
import { FileText } from "lucide-react";


const About = () => {
    const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // প্রতিটি paragraph 0.5s delay এ আসবে
      },
    },
  };

  const itemVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className=" pt-20 px-6">
      <div className="max-w-5xl mx-auto    items-center gap-12">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 20, y: 60 }}
          animate={{ opacity: 21, y: 10 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white  mb-4">About Me</h2>
 <motion.div
      className="space-y-4 mx-5 font-semibold text-justify"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={itemVariants} className="text-white text-lg">
        I'm Royel Ali, a dedicated Full Stack Web Developer from Bangladesh with a Bachelor of Science (BSc) degree. 
        Currently, I'm working at Chemical Company, where I combine my technical skills with industry-specific knowledge.
      </motion.p>

      <motion.p variants={itemVariants} className="text-white text-lg">
        My passion lies in building modern, scalable, and user-friendly web applications. 
        I thrive on transforming complex problems into elegant digital solutions, bridging the gap between 
        chemical industry expertise and cutting-edge web technologies.
      </motion.p>

      <motion.p variants={itemVariants} className="text-white text-lg">
        <span className="text-red-400">My Journey into Programming:</span> My coding journey began out of 
        curiosity—experimenting with HTML and CSS in my free time. That spark turned into a passion as I explored 
        JavaScript, React, Node.js, and database technologies, eventually leading me to become a full-stack developer
        capable of turning ideas into fully functional products.
      </motion.p>

      <motion.p variants={itemVariants} className="text-white text-lg">
        <span className="text-red-400">The Work I Enjoy:</span> I love working on projects that challenge me 
        to think critically and solve real-world problems. Whether it’s designing clean, responsive UIs or optimizing 
        backend performance, I find fulfillment in creating solutions that users genuinely enjoy.
      </motion.p>

      <motion.p variants={itemVariants} className="text-white text-lg">
        <span className="text-red-400">Looking Ahead:</span> My goal is to work on innovative projects that 
        blend technology and industry expertise, particularly in sectors where digital transformation can make a
        huge difference. I’m eager to explore more in UI/UX design, AI integration, and cloud-based applications
        in the coming years.
      </motion.p>
    </motion.div>

      
        </motion.div>
      </div>
      <section>

      </section>
   <EducationJourney></EducationJourney>

      <div>
        <Experience></Experience>
      </div>

      <div className='text-white lg:mx-20 mx-5 space-y-5'>
      <h1 className='text-3xl text-center my-10 font-bold'>🏆 Achievements:</h1>  
      <p className='text-2xl inline-block font-bold'> 
        
        <div className='flex'>
        <Award className="w-7 h-7" />
            <p>
           “Certified in Full-Stack Web Development  From    <span className='text-green-600'> "Programming Hero "</span>
        </p>
        </div>
        </p>

        <p>
          <span className='text-blue-400 font-bold text-2xl'>  <a 
        href="https://drive.google.com/file/d/1iJEH4Ew10ruz5gnvf4UjbEd0B2IHF4zJ/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
      > 
        View Certificate
      </a>
      </span>

        </p>

        <p>
          “Successfully completed Full-Stack Web Development training covering HTML
          , CSS, JavaScript, React, Node.js, Express, and MongoDB.”
        </p>

        <h1 className='text-3xl my-5 flex gap-2 font-bold'>  <FileText className="w-7 h-7 mt-2" />
          Offer Letters </h1>
         <p>
           “Secured 3 frontend developer offer letters from different organizations, 
        demonstrating strong demand for my skills in React, Next.js, and MySQL.”
    

        “Recognized by multiple companies with developer offer 
        letters, highlighting my ability to adapt quickly and meet industry expectations.”
              </p>
      </div>
    </section>
  );
};

export default About;
