
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-primary py-32 border-b-4 border-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-black leading-none mb-10 uppercase">
          Ready to build the solution?
        </h2>
        <p className="text-black/80 mb-12 text-xl font-bold tracking-tight uppercase">
          Schedule a free 15-minute discovery call to discuss your project requirements.
        </p>
        <button className="bg-black text-white px-16 py-8 text-2xl font-black border-4 border-white hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 shadow-[12px_12px_0px_0px_white]">
          BOOK YOUR DISCOVERY CALL
        </button>
        <p className="text-black font-black mt-10 text-xs tracking-[0.2em] opacity-60 uppercase">
          No commitment required. Just expert advice.
        </p>
      </div>
    </section>
  );
};

export default CTA;
