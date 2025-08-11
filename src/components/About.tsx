'use client';

import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'TypeScript', 'Python', 'Java', 'Selenium', 'Playwright',
  'Cypress', 'Jest', 'Mocha', 'Chai', 'Postman', 'REST API Testing',
  'Git', 'GitHub Actions', 'Jenkins', 'Docker', 'AWS', 'SQL',
  'Test Automation', 'CI/CD', 'Agile', 'JIRA', 'Test Planning'
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background ikat-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading textile-border">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Photo with new theme styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20 bg-white flex items-center justify-center relative">
                <div className="text-center relative z-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-4xl font-bold font-heading">IM</span>
                  </div>
                  <p className="text-primary font-medium text-lg">Indrani Majumdar</p>
                  <p className="text-accent text-sm">SDET</p>
                </div>
              </div>
              
              {/* Enhanced decorative elements with new theme colors */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full opacity-80 shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-accent to-highlight rounded-full opacity-80 shadow-lg"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 right-1/2 transform translate-x-1/2 w-16 h-1 bg-gradient-to-l from-highlight/30 to-accent/30 rounded-full opacity-60"></div>
            </div>
          </motion.div>

          {/* Bio and Skills with new theme styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4 font-heading textile-border-left pl-6">
                Software Development Engineer in Test
              </h3>
              <p className="text-secondary leading-relaxed mb-6">
                I am a passionate and experienced Software Development Engineer in Test with a strong foundation 
                in both software development and quality assurance. My journey in technology has been driven by 
                a curiosity to understand how things work and a desire to make them work better.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                With expertise in test automation frameworks, CI/CD pipelines, and modern testing methodologies, 
                I help teams deliver high-quality software efficiently. I believe in the power of automation 
                to enhance productivity while maintaining the human touch in testing strategy and user experience validation.
              </p>
              <p className="text-secondary leading-relaxed">
                When I&apos;m not coding or testing, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the testing community.
              </p>
            </div>

            {/* Enhanced Skills with new theme styling */}
            <div>
              <h4 className="text-xl font-semibold text-primary mb-4 font-heading">
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
                    className="px-4 py-2 bg-white text-primary rounded-full text-sm font-medium hover:bg-primary/5 transition-all duration-300 cursor-default hover-lift border border-primary/20 hover:border-primary/40 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Stats with new theme styling */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover-lift"
              >
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-secondary">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover-lift"
              >
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-secondary">Projects Completed</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover-lift"
              >
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-sm text-secondary">Technologies</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Section divider with new theme styling */}
      <div className="section-divider"></div>
    </section>
  );
}
