import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Activity, Eye, Wifi, Brain } from 'lucide-react';
import { TechnologyPopup } from './TechnologyPopup';
import { MockupDisplay } from './MockupDisplay';

export const Innovations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const mockups = [
    {
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
      title: 'JendoAI Dashboard',
      description: 'Advanced cardiovascular monitoring and analysis platform',
    },
    {
      image: 'https://i.ibb.co/ZQ679mF/check-eye-AI-site-en-1080x630.jpg',
      title: 'OpthaAI Interface',
      description: 'AI-powered retinal scan analysis and diagnosis system',
    },
    {
      image: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80',
      title: 'IoT Control Center',
      description: 'Centralized management for healthcare IoT devices',
    },
  ];

  const innovations = [
    {
      icon: Activity,
      title: 'JendoAI',
      description: 'Revolutionary AI-driven cardiovascular diagnostics.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    },
    {
      icon: Eye,
      title: 'OpthaAI',
      description: 'Smart eye-care solutions for early disease detection.',
      image: 'https://i.ibb.co/ZQ679mF/check-eye-AI-site-en-1080x630.jpg',
    },
    {
      icon: Wifi,
      title: 'IoT Healthcare',
      description: 'IoT-Driven Smart Healthcare Devices improving hospital efficiency and patient monitoring.',
      image: 'https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&q=80',
    },
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'AI-Powered Predictive Analytics enhancing healthcare diagnostics and industrial automation.',
      image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="innovations" className="section-padding bg-white" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Building a Smarter Future with Technology That Matters
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Our innovations are transforming industries and improving lives
          </p>

          {/* Mockup Display */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <MockupDisplay mockups={mockups} />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-96">
                <img
                  src={innovation.image}
                  alt={innovation.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <innovation.icon className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold text-white">{innovation.title}</h3>
                  </div>
                  <p className="text-white/90">{innovation.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center px-7 py-3.5 bg-[#27026c] text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            See Our Cutting-Edge Technologies
          </button>
        </motion.div>
      </motion.div>

      <TechnologyPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};