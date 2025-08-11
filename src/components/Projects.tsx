'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, TestTube } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Test Automation Suite',
    description: 'Comprehensive automated testing solution for a large-scale e-commerce platform. Includes UI, API, and performance testing with 95% test coverage.',
    tech: ['Selenium', 'Java', 'TestNG', 'Jenkins', 'MySQL'],
    github: 'https://github.com/indrani/ecommerce-test-suite',
    demo: 'https://demo-ecommerce-tests.com',
    icon: TestTube,
    category: 'Test Automation'
  },
  {
    title: 'API Testing Framework',
    description: 'Custom REST API testing framework built with Python and pytest. Features data-driven testing, reporting, and CI/CD integration.',
    tech: ['Python', 'pytest', 'requests', 'Postman', 'GitHub Actions'],
    github: 'https://github.com/indrani/api-test-framework',
    demo: null,
    icon: Code,
    category: 'API Testing'
  },
  {
    title: 'Performance Testing Dashboard',
    description: 'Real-time performance monitoring dashboard for web applications. Built with React and Node.js, integrated with JMeter and Grafana.',
    tech: ['React', 'Node.js', 'JMeter', 'Grafana', 'Docker'],
    github: 'https://github.com/indrani/performance-dashboard',
    demo: 'https://performance-dashboard-demo.com',
    icon: Database,
    category: 'Performance Testing'
  },
  {
    title: 'Mobile App Testing Platform',
    description: 'Cross-platform mobile testing solution supporting iOS and Android. Features device farm integration and automated screenshot comparison.',
    tech: ['Appium', 'Java', 'iOS', 'Android', 'AWS Device Farm'],
    github: 'https://github.com/indrani/mobile-test-platform',
    demo: null,
    icon: TestTube,
    category: 'Mobile Testing'
  },
  {
    title: 'Test Data Management System',
    description: 'Centralized test data management solution with synthetic data generation, data masking, and environment-specific configurations.',
    tech: ['Python', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis'],
    github: 'https://github.com/indrani/test-data-manager',
    demo: 'https://test-data-demo.com',
    icon: Database,
    category: 'Test Infrastructure'
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Automated testing pipeline for continuous integration and deployment. Includes automated testing, code quality checks, and deployment validation.',
    tech: ['Jenkins', 'GitHub Actions', 'Docker', 'Kubernetes', 'SonarQube'],
    github: 'https://github.com/indrani/cicd-pipeline',
    demo: null,
    icon: Code,
    category: 'DevOps'
  }
];

const categories = ['All', 'Test Automation', 'API Testing', 'Performance Testing', 'Mobile Testing', 'Test Infrastructure', 'DevOps'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background ikat-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading textile-border">Featured Projects</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my expertise in test automation, 
            API testing, and software development.
          </p>
        </motion.div>

        {/* Enhanced Category Filter with new theme styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'btn-textile text-white shadow-lg hover-lift'
                  : 'btn-textile-outline hover-lift'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid with new theme styling */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card-textile rounded-xl overflow-hidden hover-lift"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 font-heading">
                  {project.title}
                </h3>
                
                <p className="text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack with new theme styling */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white text-primary text-xs rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Project Links with new theme styling */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-textile flex items-center gap-2 px-4 py-2 text-white rounded-lg text-sm font-medium hover-lift"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-textile-outline flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover-lift"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action with new theme styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary mb-6">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/indrani"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-textile inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover-lift"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
      
      {/* Section divider with new theme styling */}
      <div className="section-divider"></div>
    </section>
  );
}
