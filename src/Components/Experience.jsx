import React from 'react';
import { Briefcase, Code, GraduationCap } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer (Self-taught)",
    company: "Personal Projects & Freelance",
    period: "2023 — Present",
    icon: <Code />,
    description:
      "Built multiple full stack web applications using React, Node.js, MongoDB, and Firebase. Focused on user authentication, payment systems, and clean UI/UX.",
  },
  {
    id: 2,
    role: "Open Source Contributor",
    company: "GitHub Projects",
    period: "2023 — Present",
    icon: <Briefcase />,
    description:
      "Contributed to open-source React components, fixed bugs, and collaborated with developers to improve frontend performance.",
  },
  {
    id: 3,
    role: "BSS Student",
    company: "National University, Bangladesh",
    period: "2023 — Present",
    icon: <GraduationCap />,
    description:
      "Currently pursuing a Bachelor of Social Science while sharpening software development skills through online courses and projects.",
  }
];

const Experience = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center italic underline text-gray-800 mb-12">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex gap-4 items-start">
            <div className="text-indigo-600">{exp.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
              <p className="text-gray-600 italic">{exp.company} — {exp.period}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
