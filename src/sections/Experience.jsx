import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  const intern = PORTFOLIO_DATA.internship;

  return (
    <section id="experience" className="relative w-full py-24 px-6 md:px-12 bg-background z-20">
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Professional Experience</h2>
          <h3 className="text-4xl md:text-5xl font-black">INTERNSHIP</h3>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 pl-8 md:pl-12 py-6">
          <div className="absolute left-[-9px] top-8 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(36,123,255,1)]"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase size={80} />
            </div>

            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-black text-white mb-2">{intern.title}</h4>
              <p className="text-xl text-primary font-bold mb-6">{intern.company}</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-gray-500 w-24 font-semibold uppercase tracking-wider text-sm mt-1">Project</span>
                  <span className="text-gray-200 text-lg font-medium">{intern.project}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 w-24 font-semibold uppercase tracking-wider text-sm mt-1">Duration</span>
                  <span className="text-gray-300 bg-white/5 px-3 py-1 rounded-md text-sm">{intern.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
