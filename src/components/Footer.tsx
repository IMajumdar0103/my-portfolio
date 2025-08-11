'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/indrani',
    icon: Github,
    color: 'hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/indrani-majumdar',
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'Email',
    url: 'mailto:indrani.majumdar@email.com',
    icon: Mail,
    color: 'hover:text-red-600'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-background to-accent/20 text-primary py-12 ikat-pattern-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Logo/Name with teal text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold font-heading mb-2 text-primary">
              Indrani Majumdar
            </h3>
            <p className="text-primary font-medium">
              Software Development Engineer in Test
            </p>
            
            {/* Decorative elements with primary colors */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
              <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
              <div className="w-2 h-2 bg-primary/60 rounded-full"></div>
            </div>
          </motion.div>

          {/* Social Links with primary icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary/20 hover-lift border border-primary/20 hover:border-primary/40 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright with primary text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-primary/20 pt-8"
          >
            <p className="text-primary text-sm font-medium">
              © {currentYear} Indrani Majumdar. All rights reserved.
            </p>
            <p className="text-primary/80 text-xs mt-2 flex items-center justify-center gap-1">
              Made with <Heart size={12} className="text-accent animate-pulse" /> using Next.js & Tailwind CSS
            </p>
            
            {/* Additional decorative elements with primary colors */}
            <div className="flex justify-center mt-4 space-x-1">
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
              <div className="w-1 h-1 bg-primary/40 rounded-full"></div>
              <div className="w-1 h-1 bg-primary/50 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer decorative border with primary color */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </footer>
  );
}
