import React from 'react';
import { motion } from 'framer-motion';

import {
  LayoutDashboard,
  Image,
  Sun,
  CheckSquare,
  Type,
  MousePointerClick,
  Layers,
  PencilRuler
} from 'lucide-react';

const features = [
  { icon: <LayoutDashboard />, title: "Clean & Modern Design" },
  { icon: <CheckSquare />, title: "Pixel Perfect" },
  { icon: <Image />, title: "High Quality Images" },
  { icon: <Sun />, title: "Light Theme" },
  { icon: <Type />, title: "Free Google Fonts" },
  { icon: <MousePointerClick />, title: "Easy-To Use" },
  { icon: <Layers />, title: "Organized Layout" },
  { icon: <PencilRuler />, title: "100% Customizable" },
];

const Features = () => {
  return (
    <section className=" py-14 my-10 px-6 rounded-3xl shadow-inner">
      <h2 className="text-3xl md:text-4xl font-bold text-center italic  text-white mb-10">
        What you will get
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((item, idx) => (
          <motion.div
            initial={{ opacity: 20, y: 60 }}
          animate={{ opacity: 21, y: 10 }}
          transition={{ duration: 1 }}
            key={idx}
            className="bg-white transition-transform duration-300 hover:scale-95 rounded-xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md "
          >
            <div className="text-teal-700 mb-4">{item.icon}</div>
            <p className="text-gray-700 font-medium">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
