
import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="bg-primary py-24 md:py-32 border-b-4 border-white">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-7xl font-black text-black leading-none mb-10 uppercase">
          Ready to build the solution?
        </h2>
        <p className="text-black/80 mb-12 text-lg md:text-xl font-bold tracking-tight uppercase leading-tight">
          Schedule a free 15-minute discovery call to discuss your project requirements.
        </p>
        <button className="w-full sm:w-auto bg-black text-white px-10 md:px-16 py-6 md:py-8 text-xl md:text-2xl font-black border-4 border-white hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 shadow-[8px_8px_0px_0px_white] md:shadow-[12px_12px_0px_0px_white] uppercase">
          BOOK YOUR DISCOVERY CALL
        </button>
        <p className="text-black font-black mt-10 text-[10px] md:text-xs tracking-[0.2em] opacity-60 uppercase">
          No commitment required. Just expert advice.
        </p>
      </motion.div>
    </section>
  );
};

export default CTA;
