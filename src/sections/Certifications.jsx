import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certificates" className="relative w-full py-24 px-6 md:px-12 bg-[#0a101f] z-20">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Qualifications</h2>
          <h3 className="text-4xl md:text-5xl font-black">CERTIFICATIONS</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={cert.title + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="glass-card flex flex-col justify-between p-8 min-h-[220px] group hover:border-primary/30 transition-colors"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-full text-primary">
                    <Award size={24} />
                  </div>
                  <span className="text-gray-400 font-bold bg-white/5 px-3 py-1 rounded-full text-sm">
                    {cert.year}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{cert.title}</h4>
                <p className="text-primary font-medium">{cert.issuer}</p>
              </div>

              <div className="mt-8">
                {cert.url ? (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-white bg-white/10 hover:bg-primary py-2 px-5 rounded-lg transition-colors text-sm font-bold tracking-wider"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <div className="inline-flex items-center space-x-2 text-gray-500 bg-white/5 py-2 px-5 rounded-lg text-sm font-bold tracking-wider cursor-not-allowed">
                    <span>NOT UPLOADED YET</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
