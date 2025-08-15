import React from 'react';
import { motion } from 'framer-motion';
import photo from '/Portfolio.jpg'
import Experience from './Experience';
import EducationCard from './Education/EducationCard';
import EducationJourney from './Education/EducationJourney';


const About = () => {
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
  <div className="space-y-4 mx-5 font-semibold text-justify">
  <p className="text-white text-lg">
    I'm Royel Ali, a dedicated Full Stack Web Developer from Bangladesh with a Bachelor of Science (BSc) degree. 
    Currently, I'm working at Chemical Company , where I combine my technical skills with industry-specific
    knowledge.
  </p>

  <p className="text-white text-lg">
    My passion lies in building modern, scalable, and user-friendly web applications. 
    I thrive on transforming complex problems into elegant digital solutions, bridging the gap between 
    chemical industry expertise and cutting-edge web technologies.
  </p>



  {/* My Journey into Programming */}
  <p className="text-white text-lg">
    <span className="text-red-400">My Journey into Programming:</span> My coding journey began out of 
    curiosity—experimenting with HTML and CSS in my free time. That spark turned into a passion as I explored 
    JavaScript, React, Node.js, and database technologies, eventually leading me to become a full-stack developer
     capable of turning ideas into fully functional products.
  </p>

  {/* The Work I Enjoy */}
  <p className="text-white text-lg">
    <span className="text-red-400">The Work I Enjoy:</span> I love working on projects that challenge me 
    to think critically and solve real-world problems. Whether it’s designing clean, responsive UIs or optimizing 
    backend performance, I find fulfillment in creating solutions that users genuinely enjoy.
  </p>





  {/* Looking Ahead */}
  <p className="text-white text-lg">
    <span className="text-red-400">Looking Ahead:</span> My goal is to work on innovative projects that 
    blend technology and industry expertise, particularly in sectors where digital transformation can make a
    huge difference. I’m eager to explore more in UI/UX design, AI integration, and cloud-based applications
     in the coming years.
  </p>
</div>


      
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
