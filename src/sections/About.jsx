import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const capabilities = [
  { icon: <Code size={24} />, title: 'Frontend', desc: 'React.js, Vite, Responsive UI' },
  { icon: <Server size={24} />, title: 'Backend', desc: 'Node.js, Express.js, REST APIs' },
  { icon: <Database size={24} />, title: 'Database', desc: 'MongoDB, SQL, Firebase' },
  { icon: <Cpu size={24} />, title: 'DevOps / Cloud', desc: 'Docker, AWS, Git, CI/CD basics' },
];

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 bg-background z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left Side: Intro */}
        <motion.div 
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-3 mb-2">
            <div className="w-12 h-[1px] bg-primary"></div>
            <h2 className="text-primary font-bold tracking-widest text-sm uppercase">About Me</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-black leading-tight">
            ENGINEERING IDEAS <br/><span className="text-gray-500">INTO PRODUCTS.</span>
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            {PORTFOLIO_DATA.personal.aboutText}
          </p>
        </motion.div>

        {/* Right Side: Capability Cards */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex flex-col justify-center space-y-4 group"
            >
              <div className="p-3 bg-white/5 rounded-lg w-max text-primary group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                {cap.icon}
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">{cap.title}</h4>
                <p className="text-gray-400 text-sm">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
