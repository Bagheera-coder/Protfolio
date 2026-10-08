import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = PORTFOLIO_DATA.projects;
  const scrapBazar = projects.find(p => p.id === 'scrapbazar');
  const otherProjects = projects.filter(p => p.id !== 'scrapbazar');

  return (
    <section id="projects" className="relative w-full py-24 px-6 md:px-12 bg-[#0a101f] z-20">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary font-bold tracking-widest text-sm uppercase mb-2">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-black">PROJECTS</h3>
        </motion.div>

        {/* Featured Project */}
        {scrapBazar && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full mb-8 cursor-pointer group"
            onClick={() => setSelectedProject(scrapBazar)}
          >
            <div className="relative gradient-border rounded-3xl overflow-hidden bg-[#070b16] aspect-[16/9] md:aspect-[21/9]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-primary font-bold tracking-widest text-sm mb-2 block">01 / FEATURED</span>
                  <h4 className="text-4xl md:text-5xl font-black text-white mb-4">{scrapBazar.title}</h4>
                  <p className="text-gray-300 max-w-xl text-lg">{scrapBazar.description}</p>
                </div>
                <button className="px-6 py-3 bg-primary/20 hover:bg-primary text-white font-semibold rounded-lg border border-primary/50 transition-all w-max md:w-auto">
                  View Case Study
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card p-8 cursor-pointer group hover:border-primary/50 transition-all"
            >
              <div className="mb-8">
                <span className="text-primary font-bold tracking-widest text-sm mb-2 block">0{idx + 2}</span>
                <h4 className="text-3xl font-black text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-gray-400">{project.description}</p>
              </div>
              <ul className="flex flex-wrap gap-2 mb-8">
                {project.tech.map(t => (
                  <li key={t} className="text-xs text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/10">{t}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-white/10 rounded-2xl overflow-y-auto overflow-x-hidden shadow-2xl custom-scrollbar"
            >
              <div className="sticky top-0 bg-background/90 backdrop-blur pb-4 pt-6 px-6 sm:px-10 flex justify-between items-start border-b border-white/10 z-20">
                <div>
                  <h3 className="text-3xl font-black text-white">{selectedProject.title}</h3>
                  <p className="text-primary font-medium mt-1">{selectedProject.type}</p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 sm:px-10 pb-10 space-y-8 mt-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><Code2 size={20} className="text-primary"/> About the Project</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
                </div>

                {selectedProject.features?.length > 0 && (
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map(f => (
                        <div key={f} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-200 text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all w-full sm:w-auto text-lg"
                  >
                    <span>VIEW LIVE PROJECT</span>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
