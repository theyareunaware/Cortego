
import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard, ShinyText } from './ReactBits';

const Reality: React.FC = () => {
  const cards = [
    {
      icon: 'schedule',
      title: 'LOST MOMENTUM',
      description: 'Projects stall because you lack the specialized talent to ship features. Every week delayed is revenue lost.'
    },
    {
      icon: 'cloud_off',
      title: 'TECHNICAL DEBT',
      description: 'Old codebases and poor architecture stop you from scaling. We refactor and modernize your stack for growth.'
    },
    {
      icon: 'person_search',
      title: 'HIRING STRUGGLES',
      description: 'Finding the right Laravel engineer is time-consuming and expensive. Skip the HR headache and hire a team.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black stark-section" id="reality">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="font-black tracking-[0.3em] text-sm block mb-4 uppercase">
              /<ShinyText text="THE REALITY" />/
            </span>
            <h2 className="text-3xl md:text-6xl font-black leading-none">BUILDING SOFTWARE <br />SHOULDN'T BE YOUR <br />BOTTLENECK.</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 text-lg max-w-md normal-case leading-snug"
          >
            We handle the technical debt so you can focus on growth. Most businesses fail because they lack the execution power to match their vision.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-white">
          {cards.map((card, idx) => (
            <SpotlightCard key={idx} className={`border-white ${
                idx !== cards.length - 1 ? 'border-b-4 md:border-b-0 md:border-r-4' : ''
              }`}>
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 md:p-12 h-full"
              >
                <span className="material-symbols-outlined text-primary text-5xl mb-8">{card.icon}</span>
                <h3 className="text-xl md:text-2xl font-black mb-6 uppercase tracking-tight">{card.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed normal-case">{card.description}</p>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reality;
