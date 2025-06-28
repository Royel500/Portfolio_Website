import React from 'react';
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
    <section className="bg-[#E9F6F7] py-14 px-6 rounded-3xl shadow-inner">
      <h2 className="text-3xl md:text-4xl font-bold text-center italic underline text-[#123] mb-10">
        What you will get
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-teal-700 mb-4">{item.icon}</div>
            <p className="text-gray-700 font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
