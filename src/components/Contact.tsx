'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/indrani-majumdar',
    icon: Linkedin,
    color: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/indrani',
    icon: Github,
    color: 'hover:text-gray-900'
  },
  {
    name: 'Email',
    url: 'mailto:indrani.majumdar@email.com',
    icon: Mail,
    color: 'hover:text-red-600'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <section id="contact" className="py-20 bg-background ikat-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading textile-border">Get In Touch</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to work together or just want to say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information with new theme styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-heading textile-border-left pl-6">
                Let&apos;s Connect
              </h3>
              <p className="text-secondary leading-relaxed mb-8">
                I&apos;m passionate about technology and always excited to discuss new projects, 
                testing strategies, or industry trends. Whether you have a question or want to 
                explore collaboration opportunities, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Enhanced Contact Details with new theme styling */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-secondary">indrani.majumdar@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center border border-accent/20">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-secondary">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                <div className="w-12 h-12 bg-highlight/10 rounded-lg flex items-center justify-center border border-highlight/20">
                  <Phone className="w-6 h-6 text-highlight" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-secondary">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links with new theme styling */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover-lift hover:bg-highlight ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form with new theme styling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-textile rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 font-heading">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 bg-white hover:bg-white focus:bg-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 bg-white hover:bg-white focus:bg-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-300 resize-none bg-white hover:bg-white focus:bg-white"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Enhanced Submit Status with new theme styling */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg"
                >
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                whileHover={isFormValid ? { scale: 1.02 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isFormValid
                    ? 'btn-textile shadow-lg hover:shadow-xl hover-lift'
                    : 'bg-secondary cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Section divider with new theme styling */}
      <div className="section-divider"></div>
    </section>
  );
}
