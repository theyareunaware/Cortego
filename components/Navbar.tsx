
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'REALITY', href: '#reality' },
    { name: 'WORK', href: '#work' },
    { name: 'BUILD', href: '#portfolio' },
    { name: 'COST', href: '#pricing' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-white bg-black">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-2 border-2 border-white">
              <span className="material-symbols-outlined text-black font-black block">code_blocks</span>
            </div>
            <span className="nav-logo text-lg md:text-2xl tracking-[0.2em]">CORTEGO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold hover:text-primary transition-colors tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary border-2 border-white text-black px-6 py-2 text-xs font-black hover:bg-white transition-all">
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[60]"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-white" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-1 bg-white" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-1 bg-white" 
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '100vh' }}
            exit={{ height: 0 }}
            className="fixed inset-0 bg-black border-b-4 border-white overflow-hidden md:hidden z-50"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-display font-black hover:text-primary transition-colors tracking-tighter"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full bg-primary border-4 border-white text-black py-6 text-xl font-black shadow-[8px_8px_0px_0px_white]"
              >
                GET IN TOUCH
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
