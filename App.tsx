
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reality from './components/Reality';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Reality />
        <Process />
        <Portfolio />
        <Pricing />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
