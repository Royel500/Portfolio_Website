import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Features from '../Components/Feature';
import IntentionMarquee from '../Components/Marque';
import TechnicalSkills from '../Components/TechnicalSkills';
import App from '../App.jsx'
import ScrollToTopButton from '../Components/ScrollToTop/ScrollToTopButton.jsx';
import SocialSidebar from '../Components/SocialSidebar/SocialSidebar .jsx';
const Home = () => {
  return (
    <div>

    <IntentionMarquee></IntentionMarquee>

   <Hero></Hero>
   {/* <ProjectCard></ProjectCard> */}
   <Projects></Projects>
     <ScrollToTopButton></ScrollToTopButton>
    
   <TechnicalSkills></TechnicalSkills>
    <SocialSidebar></SocialSidebar>
   <Features></Features>
 
   <About></About>

   </div>
  );
};

export default Home;
