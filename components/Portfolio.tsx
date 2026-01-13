
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'MODERN E-COMMERCE ENGINE',
      description: 'A high-scale custom Laravel storefront with complex inventory management and payment integrations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAq9y1qdzMu8aaNFLmD-ObJcwqHwuO-Py4W1P6auMH8m7PMWG-75kcWyKbb89fzstEngTqlJDiUDOjMtYfCQF1jJ-MrMkFoQgXsBcQg-y6jHd87gkNIgG406fF63Cm9UXcgkiKNIoNnQX9eDPxGlU2KkJ7i6sSLs9WrT53pAehHSuv7OEEUuK2XDIErtFZtY5qZIGF9EM2NX6B24Xrd3v2X_hWbcIYk72UdTorDM_vavY5YDAY0K3yEev2mldJUTYL15-J9uFo8P4g',
      tags: ['Laravel', 'Vue.js', 'Stripe']
    },
    {
      title: 'SAAS COACHING PLATFORM',
      description: 'End-to-end platform for coaches to manage students, curriculum, and subscription billing automatically.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIjWElP4aUXc3Kt0zDjQvrq9ZyvRo1ONB8k-kGbU0Zm9jyKX3BQVwFBkrvSE4vZ7hc1ngTsM-NmFdWy6RqPY7ZhidmGm5qLsvqIAY4nbKwV93wLXgnAS6FnVSuxq2W-x3r-oU4r5bWyXT1jufgUB4tA7WXCqH5c6FBjYxxWhNrtd8XpZVYCj3ypbAhH7qbXo698k9cXG-W9vOPyZW0mn1mb2iMGb3rhdCcG3HGAoqMvTMFX1Uuey72xLFp8WTbLrnejD6FRmy-zhw',
      tags: ['Tailwind CSS', 'Postgres', 'Redis']
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black stark-section" id="portfolio">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.h2 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-black mb-16 md:mb-24 border-l-8 border-primary pl-8 uppercase"
        >
          Proof we can build
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="border-4 border-white bg-zinc-900 mb-8 overflow-hidden relative">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500 aspect-video" 
                  src={project.image}
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">{project.title}</h3>
              <p className="text-zinc-400 mb-8 normal-case leading-relaxed text-sm md:text-base">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-1 border border-primary text-primary text-[10px] md:text-xs font-black uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
