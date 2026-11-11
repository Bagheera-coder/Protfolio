import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative w-full py-24 px-6 md:px-12 bg-[#0a101f] z-20">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 mb-2 justify-center">
            <div className="w-12 h-[1px] bg-primary"></div>
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase">Academic Growth</h2>
            <div className="w-12 h-[1px] bg-primary"></div>
          </div>
          <h3 className="text-4xl md:text-5xl font-black">EDUCATION</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative gradient-border p-8 rounded-2xl bg-[#0d1428] flex flex-col group overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 -mr-4 -mt-4 text-9xl font-black text-white/5 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none select-none"
              >
                0{idx + 1}
              </div>

              <div className="relative z-10 flex-col flex h-full justify-between">
                <div>
                  <span className="text-primary font-bold text-sm tracking-wider mb-1 block">
                    {edu.year}
                  </span>
                  <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                    {edu.title}
                  </h4>
                  
                  <div className="space-y-2 text-gray-400 text-sm">
                    {edu.degree && <p className="font-semibold text-gray-200">{edu.degree}</p>}
                    <p>{edu.school}</p>
                    {edu.campus && <p>{edu.campus}</p>}
                    {edu.board && <p>{edu.board} {edu.stream ? `• ${edu.stream}` : ''}</p>}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-end space-x-2">
                    <span className="text-4xl font-black text-white">{edu.score}</span>
                    <span className="text-gray-500 font-medium mb-1 uppercase text-xs">{edu.scoreType}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
