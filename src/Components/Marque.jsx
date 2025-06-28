import React from 'react';
import Marquee from 'react-fast-marquee';

const IntentionMarquee = () => {
  return (
    <section className="bg-indigo-50 py-4">
      <Marquee speed={50} gradient={false} pauseOnHover>
        <p className="text-indigo-800 text-lg font-medium mx-8">
          I am passionate about becoming a professional Full Stack Developer — focused on building clean, scalable, and user-friendly web apps.
        </p>
        <p className="text-indigo-800 text-lg font-medium mx-8">
          Always learning. Always building. Always improving. 🚀
        </p>
      </Marquee>
    </section>
  );
};

export default IntentionMarquee;
