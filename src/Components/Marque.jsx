import React from 'react';
import Marquee from 'react-fast-marquee';

const IntentionMarquee = () => {
  return (
    <section className="pt-30 pb-5">
      <Marquee speed={50} gradient={false} pauseOnHover>
        <p className="text-red-600 text-lg font-medium mx-8">
          I am passionate about becoming a professional Full Stack Developer 
          — focused on building clean, scalable, and user-friendly web apps.
        </p>
        <p className="text-red-600 text-lg font-medium mx-8">
          Always learning. Always building. Always improving. 🚀
        </p>
      </Marquee>
    </section>
  );
};

export default IntentionMarquee;
