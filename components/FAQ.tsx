
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'DO I OWN THE CODE?',
      answer: 'Yes, 100%. Once the final payment for a project or milestone is made, all intellectual property and source code rights are transferred to you.'
    },
    {
      question: 'WHY LARAVEL?',
      answer: 'Laravel is the industry standard for PHP web applications. It\'s secure, highly scalable, and has the best developer ecosystem for building enterprise-grade software quickly.'
    },
    {
      question: 'HOW FAST CAN WE START?',
      answer: 'Typically, we can begin the discovery phase within 5-7 business days of an initial agreement.'
    }
  ];

  return (
    <section className="py-32 bg-zinc-900 stark-section">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-black mb-16 text-center uppercase">Common Questions</h2>
        <div className="space-y-0 border-4 border-white">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`p-8 hover:bg-black transition-colors cursor-pointer ${
                idx !== faqs.length - 1 ? 'border-b-4 border-white' : ''
              }`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center text-left font-black text-xl mb-4">
                {faq.question}
                <span className={`material-symbols-outlined text-primary transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>
                  add
                </span>
              </div>
              <div 
                className={`text-zinc-400 normal-case leading-relaxed transition-all duration-300 overflow-hidden ${
                  openIndex === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
