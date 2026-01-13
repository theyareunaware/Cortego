
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-900 stark-section" id="pricing">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">Pricing Transparency</h2>
          <p className="text-zinc-400 tracking-widest uppercase font-bold">Simple models for massive growth.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="brutalist-card">
            <h3 className="text-2xl font-black mb-2 uppercase">Project Based</h3>
            <p className="text-primary text-xs font-black tracking-widest mb-8">BEST FOR MVP LAUNCHES</p>
            <div className="text-5xl font-black mb-12 border-b-2 border-white/20 pb-8 uppercase">
              CUSTOM <span className="text-xl font-normal opacity-50">QUOTE</span>
            </div>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span>Full technical discovery document</span>
              </li>
              <li className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span>Dedicated project manager</span>
              </li>
              <li className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span>30 days post-launch support</span>
              </li>
            </ul>
            <button className="w-full py-5 bg-white text-black font-black text-lg hover:bg-primary transition-colors border-2 border-white">
              GET A QUOTE
            </button>
          </div>
          <div className="brutalist-card !border-primary">
            <div className="absolute -top-4 -right-4 bg-primary text-black px-4 py-1 text-xs font-black border-2 border-white">POPULAR</div>
            <h3 className="text-2xl font-black mb-2 uppercase">Dev Partner</h3>
            <p className="text-primary text-xs font-black tracking-widest mb-8">FRACTIONAL ENGINEERING TEAM</p>
            <div className="text-5xl font-black mb-12 border-b-2 border-white/20 pb-8">
              $4,999 <span className="text-xl font-normal opacity-50">/MO</span>
            </div>
            <ul className="space-y-6 mb-12">
              <li className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span>Ongoing feature development</span>
              </li>
              <li className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span>Priority architecture reviews</span>
              </li>
              <li className="flex items-start gap-4 text-sm font-bold uppercase tracking-tight">
                <span className="material-symbols-outlined text-primary">terminal</span>
                <span>Weekly sync and reporting</span>
              </li>
            </ul>
            <button className="w-full py-5 bg-primary text-black font-black text-lg hover:bg-white transition-colors border-2 border-white">
              START PARTNERSHIP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
