
import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard, ShinyText } from './ReactBits';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-zinc-900 stark-section" id="pricing">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black mb-6 uppercase"
          >
            Pricing Transparency
          </motion.h2>
          <p className="text-zinc-400 tracking-widest uppercase font-bold text-xs md:text-base">Simple models for massive growth.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <SpotlightCard className="brutalist-card !p-0">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10"
            >
              <h3 className="text-xl md:text-2xl font-black mb-2 uppercase">Project Based</h3>
              <p className="text-primary text-[10px] md:text-xs font-black tracking-widest mb-8 uppercase">BEST FOR MVP LAUNCHES</p>
              <div className="text-3xl md:text-5xl font-black mb-12 border-b-2 border-white/20 pb-8 uppercase">
                CUSTOM <span className="text-lg md:text-xl font-normal opacity-50">QUOTE</span>
              </div>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4 text-xs md:text-sm font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span>Full technical discovery document</span>
                </li>
                <li className="flex items-start gap-4 text-xs md:text-sm font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-start gap-4 text-xs md:text-sm font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span>30 days post-launch support</span>
                </li>
              </ul>
              <button className="w-full py-5 bg-white text-black font-black text-base md:text-lg hover:bg-primary transition-colors border-2 border-white uppercase">
                GET A QUOTE
              </button>
            </motion.div>
          </SpotlightCard>

          <SpotlightCard className="brutalist-card !border-primary !p-0">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10"
            >
              <div className="absolute -top-4 -right-4 bg-primary text-black px-4 py-1 text-[10px] md:text-xs font-black border-2 border-white">
                <ShinyText text="POPULAR" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-2 uppercase">Dev Partner</h3>
              <p className="text-primary text-[10px] md:text-xs font-black tracking-widest mb-8 uppercase">FRACTIONAL ENGINEERING TEAM</p>
              <div className="text-3xl md:text-5xl font-black mb-12 border-b-2 border-white/20 pb-8">
                $4,999 <span className="text-lg md:text-xl font-normal opacity-50">/MO</span>
              </div>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start gap-4 text-xs md:text-sm font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span>Ongoing feature development</span>
                </li>
                <li className="flex items-start gap-4 text-xs md:text-sm font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span>Priority architecture reviews</span>
                </li>
                <li className="flex items-start gap-4 text-xs md:text-sm font-bold uppercase tracking-tight">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  <span>Weekly sync and reporting</span>
                </li>
              </ul>
              <button className="w-full py-5 bg-primary text-black font-black text-base md:text-lg hover:bg-white transition-colors border-2 border-white uppercase">
                START PARTNERSHIP
              </button>
            </motion.div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
