'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'Selenium', 'Playwright',
  'Cypress', 'Jest', 'Mocha', 'Chai', 'Postman', 'REST API Testing',
  'Git', 'GitHub Actions', 'Jenkins', 'Docker', 'AWS', 'SQL',
  'Test Automation', 'CI/CD', 'Agile', 'JIRA', 'Test Planning'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-blue-100">
                <Image
                  src="/profile-placeholder.jpg"
                  alt="Indrani Majumdar"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"></div>
            </div>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                Software Development Engineer in Test
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I am a passionate and experienced Software Development Engineer in Test with a strong foundation 
                in both software development and quality assurance. My journey in technology has been driven by 
                a curiosity to understand how things work and a desire to make them work better.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With expertise in test automation frameworks, CI/CD pipelines, and modern testing methodologies, 
                I help teams deliver high-quality software efficiently. I believe in the power of automation 
                to enhance productivity while maintaining the human touch in testing strategy and user experience validation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                                 When I&apos;m not coding or testing, you can find me exploring new technologies, contributing to open-source 
                 projects, or sharing knowledge with the testing community.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
