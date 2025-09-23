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

const leftVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const rightVariant = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Features = () => {
  return (
    <section className="py-5 my-3 px-6 rounded-3xl shadow-inner">
      <h2 className="text-3xl md:text-4xl font-bold text-center italic text-white mb-10">
        What you will get
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            variants={idx % 2 === 0 ? leftVariant : rightVariant} // alternate left/right
            className="bg-gray-500 font-bold transition-transform duration-300 hover:scale-95
                       hover:shadow-fuchsia-500 rounded-xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md"
          >
            <div className="text-white font-bold mb-4">{item.icon}</div>
            <p className="text-white font-bold">{item.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
