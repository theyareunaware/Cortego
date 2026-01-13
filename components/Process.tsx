
import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Discovery',
      description: 'We map your business needs to a detailed technical roadmap with clear milestones.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6SUQRNGxqD5kOEM8d9YXpAyxYNJQEyFwApGTuy2QoLB-6uqnyik-3l2xdylVeCLNHirsfTeOA9CtE7Ps6eHMGBplAjMaINfTuLTNJaVeb-UDAVBEf1eZiSlHfYskD5-kLGC6dgkchImxDSRXCmDqlAS6PMr78IFB9cZ6nJ68aGqJWLcWo95JQBf6q4nAkE-iqiB6tU-4b_XfZZNvS6mfVhNZiPhJ9H2cUngLiut83Gex3NUH-37UdfQzDHP95ViBQThYmZvMslSE'
    },
    {
      id: '02',
      title: 'Development',
      description: 'Clean, scalable Laravel code built with industry best practices and rapid iterations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKQ5YNaKE1wqgcB5g2ABk_W3BCfB_PAbDU7ZLK1r729X8CS6Go2RYLz6IyWjTsekjFiKo0guqc8xTeWsqfy2HDR5EynOg4UvMw7K594DB4A5fFAbSFyT1fYm4frfvR_pT4Ikv1CdFIAR3IN0lS-NI12eYxEhPGAgiOEzRyxE9FgxeavATqm8dppm2Ax1oRMy2inFOeoQlLTkcmJvZI9xkG9BRIs3IYWUmFNtyL6b5QyOZxst4FMhA7ihnt46ilLASkSl8PQlr2-6g'
    },
    {
      id: '03',
      title: 'Deployment',
      description: 'Seamless launch and ongoing support to ensure uptime and performance stability.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiN3OZddIR8Ky5h217wpY5qc0i8TCsVGsZSqDK6lC1zJvEJr6HE7lNxIj2-ZuOSVwrixwxWnMcIQIIiEyv_A6-1mOttnMYnGlRjsjp1LE2NSML0NJUSsJU3veEhWLKP3GhyHu9wBJD0i-Iar5jJNBsEP4ZVv35tkhQcRq4JxACAMJ21Ai2oBHzbomD_ftxz2qVu8HigCGwP2R2xSP8Pnqu8779_RlJaNLCdqSQzP4C6j7v7M8wanjws7-13Vn0k9Zw3X2miVo4YTM'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-zinc-900 stark-section" id="work">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black mb-6 uppercase"
          >
            Transparent Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm md:text-base"
          >
            Built for business outcomes, not just lines of code.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <div className="border-4 border-white bg-black aspect-video mb-8 overflow-hidden grayscale contrast-125">
                <img 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-all hover:scale-105 duration-700" 
                  src={step.image}
                />
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-4xl md:text-5xl font-display font-black text-primary opacity-50">{step.id}</span>
                <div>
                  <h4 className="text-xl md:text-2xl font-black mb-4 uppercase">{step.title}</h4>
                  <p className="text-zinc-400 normal-case leading-relaxed text-sm md:text-base">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
