'use client';

import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Building } from 'lucide-react';

const education = [
  {
    year: '2018 - 2022',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'University of Technology',
    location: 'Mumbai, India',
    description: 'Graduated with honors. Specialized in Software Engineering and Database Management.'
  }
];

const experience = [
  {
    year: '2022 - Present',
    position: 'Senior Software Development Engineer in Test',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    description: 'Leading test automation initiatives, developing CI/CD pipelines, and mentoring junior team members. Implemented comprehensive testing strategies that improved product quality by 40%.'
  },
  {
    year: '2020 - 2022',
    position: 'Software Development Engineer in Test',
    company: 'InnovateTech Inc.',
    location: 'Bangalore, India',
    description: 'Developed and maintained automated test suites using Selenium, Playwright, and Cypress. Collaborated with development teams to implement testing best practices.'
  },
  {
    year: '2019 - 2020',
    position: 'Quality Assurance Engineer',
    company: 'StartupXYZ',
    location: 'Mumbai, India',
    description: 'Performed manual and automated testing for web applications. Created test plans and test cases for new features.'
  }
];

const certifications = [
  'AWS Certified Solutions Architect',
  'ISTQB Certified Tester Foundation Level',
  'Selenium WebDriver with Java',
  'Agile Testing Certification'
];

export default function Resume() {
  const handleDownload = () => {
    // This would typically link to an actual PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Indrani_Majumdar_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-heading">
            Resume
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">E</span>
              </div>
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-200"
                >
                  <div className="absolute -left-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
                      <Calendar size={16} />
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.degree}</h4>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building size={16} />
                      {item.institution}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              Work Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l-2 border-blue-200"
                >
                  <div className="absolute -left-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
                      <Calendar size={16} />
                      {item.year}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.position}</h4>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Building size={16} />
                      {item.company}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-heading text-center">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-blue-600 text-sm font-medium">{cert}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
