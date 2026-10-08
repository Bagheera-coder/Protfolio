import React from 'react';
import { motion } from 'framer-motion';

const journeySteps = [
  { year: '2021', title: 'CLASS 10' },
  { year: '2023', title: 'CLASS 12' },
  { year: '2023', title: 'B.TECH CSE' },
  { year: '2024', title: 'LEARNING TO CODE' },
  { year: '2024', title: 'PROJECT BUILDING' },
  { year: '2025', title: 'FULL-STACK DEVELOPMENT' },
  { year: '2025', title: 'INTERNSHIP' },
  { year: '2026', title: 'CURRENT FOCUS' },
];

export default function Journey() {
  return (
    <section id="journey" className="relative w-full py-24 px-6 md:px-12 bg-background z-20">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">My Journey</h2>
          <h3 className="text-3xl md:text-5xl font-black">FROM STUDENT TO DEVELOPER</h3>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-none">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {journeySteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  
                  {/* Glowing Node */}
                  <div className={`absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(36,123,255,0.8)]`}></div>

                  {/* Content Card */}
                  <motion.div 
                    className={`w-full pl-8 md:pl-0 md:w-5/12 ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="glass-card p-6 inline-block w-full hover:border-primary/50 transition-colors">
                      <span className="text-gray-400 font-bold text-sm tracking-wider">{step.year}</span>
                      <h4 className="text-xl font-bold text-white mt-1">{step.title}</h4>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
