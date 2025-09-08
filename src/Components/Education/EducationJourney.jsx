import React from 'react';
import EducationCard from './EducationCard';
import { FaSchool, FaGraduationCap, FaStar, FaFlask, FaLaptopCode } from 'react-icons/fa';
import { PiMathOperationsFill, PiMonitorFill } from "react-icons/pi";

const EducationJourney = () => {
  const educationCardsData = [
    {
      id: 1,
      type: "Higher Secondary Certificate. (HSc)",
      institution: "Bholahat Mohbullah College",
      years: "2021 - 2023",
      icon: FaSchool,
      achievements: [
        { text: "GPA: 4.67 [Science]", icon: FaStar },
        { text: "Math, Higher Math", icon: PiMathOperationsFill },
        { text: "Physics, Chemistry", icon: FaFlask },
        { text: "ICT", icon: PiMonitorFill },
      ]
    },
    {
      id: 2,
      type: "Bachelor of Social Science.",
        institution: "Bholahat Mohbullah College",
      years: "2023 - Present",
      icon: FaGraduationCap,
      achievements: [
        { text: "Political Science", icon: FaLaptopCode },
        { text: "Sociology", icon: FaLaptopCode },
        { text: "Logic ", icon: FaLaptopCode },
        { text: "English", icon: FaLaptopCode },
      ]
    }
  ];

  return (
    <section className=" mt-15 rounded-2xl px-4 text-white ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold  text-center mb-4 ">
          Education Journey
        </h1>
        <p className="text-lg  text-center mb-12 max-w-2xl mx-auto">
          My academic path and specialization in science and technology disciplines
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationCardsData.map(edu => (
            <EducationCard key={edu.id} data={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;