
import React from 'react';

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
    <section className="py-32 bg-black stark-section" id="reality">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-primary font-black tracking-[0.3em] text-sm block mb-4">/THE REALITY/</span>
            <h2 className="text-4xl md:text-6xl font-black leading-none">BUILDING SOFTWARE <br />SHOULDN'T BE YOUR <br />BOTTLENECK.</h2>
          </div>
          <p className="text-zinc-500 text-lg max-w-md normal-case leading-snug">
            We handle the technical debt so you can focus on growth. Most businesses fail because they lack the execution power to match their vision.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-0 border-4 border-white">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`p-12 border-white hover:bg-zinc-900 transition-colors ${
                idx !== cards.length - 1 ? 'border-b-4 md:border-b-0 md:border-r-4' : ''
              }`}
            >
              <span className="material-symbols-outlined text-primary text-5xl mb-8">{card.icon}</span>
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">{card.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed normal-case">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reality;
