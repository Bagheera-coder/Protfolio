import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const { github, linkedin, instagram } = PORTFOLIO_DATA.personal;

  return (
    <section id="contact" className="relative w-full bg-[#0a101f] pt-24 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        
        {/* Left - Portrait */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[400px] lg:h-[600px] flex justify-center lg:justify-start items-end"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a101f] via-transparent to-transparent z-20 pointer-events-none"></div>
          
          <motion.div
            className="h-full flex items-end"
            animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <picture className="h-full flex items-end">
              <source srcSet="/images/contact-portrait.webp" type="image/webp" />
              <img 
                src="/images/contact-portrait.png" 
                alt="Abhishek Kumar pointing toward contact links" 
                width="1536"
                height="1024"
                loading="lazy"
                decoding="async"
                className="h-full w-auto object-contain relative z-10 drop-shadow-2xl"
              />
            </picture>
          </motion.div>
        </motion.div>

        {/* Right - Content */}
        <div className="flex flex-col space-y-10 z-20 pb-20 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              LET&apos;S BUILD <br/>
              <span className="title-mask-primary">SOMETHING.</span>
            </h2>
          </motion.div>

          <motion.div 
            className="flex flex-col space-y-4 max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 p-6 rounded-2xl transition-all"
            >
              <div className="flex items-center space-x-4">
                <FaGithub size={28} className="text-white group-hover:text-primary transition-colors" />
                <span className="font-bold text-xl tracking-wide">EXPLORE MY GITHUB</span>
              </div>
              <MoveRight className="text-gray-500 group-hover:text-primary group-hover:translate-x-2 transition-all" />
            </a>

            <div className="flex gap-4">
              <a 
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group flex items-center justify-center space-x-2 bg-white/5 hover:bg-[#0A66C2]/20 border border-white/10 hover:border-[#0A66C2]/50 p-4 rounded-xl transition-all"
              >
                <FaLinkedin size={24} className="text-white group-hover:text-[#0A66C2] transition-colors" />
                <span className="font-bold">LINKEDIN</span>
              </a>
              
              <a 
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group flex items-center justify-center space-x-2 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 p-4 rounded-xl transition-all"
              >
                <FaInstagram size={24} className="text-white group-hover:text-accent transition-colors" />
                <span className="font-bold">INSTAGRAM</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#070b16] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h5 className="font-black tracking-wider text-xl mb-1">ABHISHEK KUMAR</h5>
            <p className="text-gray-400 text-sm">B.Tech CSE Student • MERN Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6 text-gray-500">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-white transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
              className="hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </a>
          </div>
          
          <div className="text-gray-500 text-sm font-medium">
            © {CURRENT_YEAR} Abhishek Kumar
          </div>
        </div>
      </footer>
    </section>
  );
}
