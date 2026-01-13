
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-48 stark-section bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l-4 border-white/10 opacity-20 pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter mb-12 uppercase">
            YOU'VE SPOTTED <br />THE PROBLEM.<br />
            <span className="text-primary">YOU JUST CAN'T <br />BUILD THE SOLUTION.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-16 max-w-2xl font-light leading-tight normal-case">
            High-performance Laravel development for non-technical business leaders. We bridge the gap between your vision and a scalable product.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-primary border-4 border-white text-black px-10 py-6 text-xl font-black hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[8px_8px_0px_0px_white] active:shadow-none active:translate-x-1 active:-translate-y-1">
              BOOK DISCOVERY CALL
            </button>
            <button className="bg-black border-4 border-white text-white px-10 py-6 text-xl font-black hover:bg-white hover:text-black transition-all">
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
