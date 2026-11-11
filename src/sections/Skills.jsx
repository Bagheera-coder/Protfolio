import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Skills() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-12 bg-background z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="w-full md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Technology Stack</h2>
            <h3 className="text-4xl font-black mb-6">TOOLS &<br/>TECHNOLOGIES</h3>
            <p className="text-gray-400 text-base">
              A carefully curated stack focused on building scalable, performant web applications and full-stack solutions.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-2/3 space-y-12">
          {Object.entries(PORTFOLIO_DATA.skills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={containerVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              <h4 className="text-xl font-bold uppercase tracking-widest text-white/50 border-b border-white/5 pb-2">
                {category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVars}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(36,123,255,0.15)", borderColor: "rgba(36,123,255,0.5)" }}
                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-200 text-sm font-medium transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
