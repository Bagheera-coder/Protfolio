import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = PORTFOLIO_DATA.projects;
  const scrapBazar = projects.find(p => p.id === 'scrapbazar');
  const otherProjects = projects.filter(p => p.id !== 'scrapbazar');

  useEffect(() => {
    if (!selectedProject) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const handleCardKeyDown = (e, project) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedProject(project);
    }
  };

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
            role="button"
            tabIndex={0}
            aria-label={`View details for ${scrapBazar.title}`}
            onClick={() => setSelectedProject(scrapBazar)}
            onKeyDown={(e) => handleCardKeyDown(e, scrapBazar)}
            className="w-full mb-8 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-3xl"
          >
            <div className="relative gradient-border rounded-3xl overflow-hidden bg-[#070b16] min-h-[340px] md:min-h-[380px] flex items-end">
              {/* Self-contained atmospheric backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(36,123,255,0.28),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(255,53,79,0.2),transparent_50%)] group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 cinematic-grid opacity-60 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-transparent pointer-events-none"></div>
              
              <div className="relative w-full p-8 md:p-12 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="text-primary font-bold tracking-widest text-sm mb-2 block">01 / FEATURED</span>
                  <h4 className="text-4xl md:text-5xl font-black text-white mb-4">{scrapBazar.title}</h4>
                  <p className="text-gray-300 max-w-xl text-lg mb-5">{scrapBazar.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {scrapBazar.tech.slice(0, 5).map((t) => (
                      <span key={t} className="text-xs text-gray-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={scrapBazar.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-5 py-3 bg-white/5 hover:bg-white/15 text-gray-200 font-semibold rounded-lg border border-white/15 transition-all"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight size={16} />
                  </a>
                  <span className="px-6 py-3 bg-primary/20 group-hover:bg-primary text-white font-semibold rounded-lg border border-primary/50 transition-all">
                    View Case Study
                  </span>
                </div>
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
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => handleCardKeyDown(e, project)}
              className="glass-card p-8 cursor-pointer group hover:border-primary/50 transition-all flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div>
                <div className="mb-8">
                  <span className="text-primary font-bold tracking-widest text-sm mb-2 block">0{idx + 2}</span>
                  <h4 className="text-3xl font-black text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <li key={t} className="text-xs text-gray-300 bg-white/5 px-2.5 py-1 rounded border border-white/10">{t}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-sm font-semibold">
                <span className="text-primary group-hover:underline">View Details</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
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
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-white/10 rounded-2xl overflow-y-auto overflow-x-hidden shadow-2xl custom-scrollbar"
            >
              <div className="sticky top-0 bg-background/90 backdrop-blur pb-4 pt-6 px-6 sm:px-10 flex justify-between items-start border-b border-white/10 z-20">
                <div>
                  <h3 id="project-modal-title" className="text-3xl font-black text-white">{selectedProject.title}</h3>
                  <p className="text-primary font-medium mt-1">{selectedProject.type}</p>
                </div>
                <button 
                  type="button"
                  aria-label="Close project details"
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
