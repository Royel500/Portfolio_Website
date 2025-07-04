import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../Components/Hero';
import About from '../Components/About';
import ProjectCard from '../Components/ProjectCard';
import Projects from '../Components/Projects';
import Features from '../Components/Feature';
import IntentionMarquee from '../Components/Marque';
import TechnicalSkills from '../Components/TechnicalSkills';

const Home = () => {
  return (
    <div>

    <IntentionMarquee></IntentionMarquee>
   <Hero></Hero>
   {/* <ProjectCard></ProjectCard> */}
   <Projects></Projects>
   <TechnicalSkills></TechnicalSkills>
   <Features></Features>
   <About></About>

   </div>
  );
};

export default Home;
