import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.personal.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-6 md:space-y-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest text-sm md:text-base mb-2">HELLO, I'M</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
              <span className="block text-white">ABHISHEK</span>
              <span className="block title-mask">KUMAR</span>
            </h1>
          </motion.div>

          <div className="h-12 overflow-hidden relative">
            <motion.div
              key={roleIndex}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute text-xl md:text-2xl font-bold text-gray-300"
            >
              {PORTFOLIO_DATA.personal.roles[roleIndex]}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col space-y-1 text-gray-400 font-medium text-lg border-l-2 border-primary/50 pl-4 py-1"
          >
            <span>B.Tech CSE Student</span>
            <span>{PORTFOLIO_DATA.personal.location}</span>
          </motion.div>
        </div>

        {/* Right Content - Portrait */}
        <motion.div 
          className="relative flex justify-center lg:justify-end items-center h-[500px] lg:h-[700px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="relative z-10 h-full w-full max-w-md"
            animate={prefersReducedMotion ? {} : { y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
             <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20"></div>
             
             {/* Glowing Rim effect via box shadow behind image */}
             <div className="absolute inset-0 mx-auto w-3/4 h-full bg-gradient-to-tr from-primary to-accent opacity-30 blur-3xl rounded-full mix-blend-screen"></div>

             <img 
               src="/images/Cinematic Neon-Lit Hoodie Portrait.png" 
               alt="Abhishek Kumar" 
               className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
             />
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
         className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60"
         animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
         transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest font-semibold mb-2">SCROLL</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
}
