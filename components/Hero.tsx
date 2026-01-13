
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SplitText } from './ReactBits';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } }
  };

  return (
    <section className="relative py-24 lg:py-48 stark-section bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l-4 border-white/10 opacity-20 pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl"
        >
          <motion.h1 variants={item} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter mb-12 uppercase">
            <SplitText className="whitespace-nowrap" text="YOU'VE SPOTTED" /><br className="hidden sm:block" />
            <SplitText className="whitespace-nowrap" text="THE PROBLEM." delay={0.2} /><br />
            <span className="text-primary">
               <SplitText className="whitespace-nowrap" text="YOU JUST CAN'T" delay={0.4} /><br className="hidden sm:block" />
               <SplitText className="whitespace-nowrap" text="BUILD THE SOLUTION." delay={0.6} />
            </span>
          </motion.h1>
          <motion.p variants={item} className="text-lg md:text-2xl text-zinc-400 mb-16 max-w-2xl font-light leading-tight normal-case">
            High-performance Laravel development for non-technical business leaders. We bridge the gap between your vision and a scalable product.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-6">
            <button className="bg-primary border-4 border-white text-black px-10 py-6 text-lg sm:text-xl font-black hover:translate-x-1 hover:-translate-y-1 transition-transform shadow-[8px_8px_0px_0px_white] active:shadow-none active:translate-x-1 active:-translate-y-1">
              BOOK DISCOVERY CALL
            </button>
            <button className="bg-black border-4 border-white text-white px-10 py-6 text-lg sm:text-xl font-black hover:bg-white hover:text-black transition-all">
              VIEW PORTFOLIO
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
