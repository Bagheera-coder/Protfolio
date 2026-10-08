import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full py-24 px-6 md:px-12 bg-background z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Achievements */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Milestones</h2>
            <h3 className="text-4xl font-black">ACHIEVEMENTS</h3>
          </motion.div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.achievements.map((ach, idx) => (
              <motion.div
                key={ach + idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 flex items-center space-x-4 border-l-4 border-l-primary hover:border-l-accent transition-colors"
              >
                <div className="p-2 bg-white/5 rounded-full text-primary">
                  <Trophy size={20} />
                </div>
                <h4 className="text-lg font-bold text-gray-200">{ach}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 lg:pl-8"
          >
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Roadmap</h2>
            <h3 className="text-4xl font-black">CURRENTLY BUILDING</h3>
          </motion.div>

          <div className="lg:pl-8">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="gradient-border rounded-2xl bg-[#0a101f] p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.currentlyBuilding.map((focus, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-gray-300">
                    <Compass size={16} className="text-accent flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{focus}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
