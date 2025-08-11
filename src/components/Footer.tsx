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
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold font-heading mb-2">
              Indrani Majumdar
            </h3>
            <p className="text-gray-400">
              Software Development Engineer in Test
            </p>
          </motion.div>

          {/* Social Links */}
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
                className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-200 ${social.color}`}
                aria-label={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Indrani Majumdar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1">
              Made with <Heart size={12} className="text-red-500" /> using Next.js & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
