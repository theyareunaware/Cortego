
import React from 'react';

const Navbar: React.FC = () => {
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
            <span className="nav-logo text-2xl tracking-[0.2em]">CORTEGO</span>
          </div>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
