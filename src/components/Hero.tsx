'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-ikat bg-cover bg-center bg-no-repeat relative overflow-hidden">
      {/* Semi-transparent white overlay for text readability */}
      <div className="absolute inset-0 bg-white/70"></div>
      
      {/* Enhanced background decoration with new theme colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-highlight/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-heading"
          >
            Hi, I&apos;m{' '}
            <span className="text-primary">Indrani Majumdar</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-secondary mb-8 font-medium"
          >
            Software Development Engineer in Test
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about quality assurance, test automation, and building robust software solutions. 
            I bridge the gap between development and testing to ensure exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#resume');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-textile px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover-lift transition-all duration-300"
            >
              View Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-textile-outline px-8 py-4 rounded-lg font-semibold text-lg hover-lift transition-all duration-300"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator with new theme styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-secondary hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-primary/5 group"
          >
            <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements with new theme colors */}
      <div className="absolute top-20 left-20 w-2 h-20 bg-gradient-to-b from-primary/30 to-accent/30 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 right-20 w-2 h-20 bg-gradient-to-b from-accent/30 to-highlight/30 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-10 w-16 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-40"></div>
      <div className="absolute top-1/2 right-10 w-16 h-1 bg-gradient-to-l from-highlight/20 to-accent/20 rounded-full opacity-40"></div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
