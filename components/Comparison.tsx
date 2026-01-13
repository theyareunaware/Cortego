
import React from 'react';
import { motion } from 'framer-motion';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-black stark-section">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-4xl font-black mb-16 md:mb-24 uppercase"
        >
          Is Cortego the Right Fit?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-white">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 lg:p-16 border-b-4 md:border-b-0 md:border-r-4 border-white"
          >
            <h4 className="text-xl md:text-2xl font-black mb-10 flex items-center gap-4 text-primary uppercase">
              <span className="material-symbols-outlined text-3xl md:text-4xl">check_circle</span> Perfect for you if:
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-6 normal-case text-base md:text-lg border-l-4 border-primary pl-6">
                <span>You are a non-technical founder with a validated business model.</span>
              </li>
              <li className="flex gap-6 normal-case text-base md:text-lg border-l-4 border-primary pl-6">
                <span>You have a Laravel app that has become slow or buggy.</span>
              </li>
              <li className="flex gap-6 normal-case text-base md:text-lg border-l-4 border-primary pl-6">
                <span>You need a reliable partner, not just a one-off freelancer.</span>
              </li>
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 lg:p-16 bg-zinc-950"
          >
            <h4 className="text-xl md:text-2xl font-black mb-10 flex items-center gap-4 text-zinc-500 uppercase">
              <span className="material-symbols-outlined text-3xl md:text-4xl">cancel</span> Not for you if:
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-6 normal-case text-base md:text-lg border-l-4 border-zinc-800 pl-6 text-zinc-500">
                <span>You are looking for the cheapest overseas outsourcing.</span>
              </li>
              <li className="flex gap-6 normal-case text-base md:text-lg border-l-4 border-zinc-800 pl-6 text-zinc-500">
                <span>You are building on Wordpress, Shopify, or No-Code.</span>
              </li>
              <li className="flex gap-6 normal-case text-base md:text-lg border-l-4 border-zinc-800 pl-6 text-zinc-500">
                <span>You want a team to build your app for equity only.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
