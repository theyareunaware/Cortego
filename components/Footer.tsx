
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="bg-primary p-2 border-2 border-white">
            <span className="material-symbols-outlined text-black font-black block">code_blocks</span>
          </div>
          <span className="text-2xl font-black tracking-[0.3em] nav-logo">CORTEGO</span>
        </div>
        <div className="flex flex-wrap justify-center gap-12 text-sm font-black tracking-widest">
          <a className="hover:text-primary transition-colors" href="#">TWITTER</a>
          <a className="hover:text-primary transition-colors" href="#">LINKEDIN</a>
          <a className="hover:text-primary transition-colors" href="#">PRIVACY</a>
          <a className="hover:text-primary transition-colors" href="#">TERMS</a>
        </div>
        <p className="text-[10px] text-zinc-600 font-bold tracking-[0.2em]">
          © 2024 CORTEGO LARAVEL AGENCY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
