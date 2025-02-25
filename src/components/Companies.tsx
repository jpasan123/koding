import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Eye, Cpu, Lightbulb, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export const Companies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  type Company = {
    icon: React.ComponentType;
    name: string;
    tagline: string;
    industry: string;
    specialization: string;
    highlight: string;
    cta: string;
    image: string;
    gallery: string[];
    description: string;
  };

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const companies = [
    {
      icon: Heart,
      name: 'Jendo',
      tagline: 'Pioneering Cardiovascular Health',
      industry: 'Biomedical Technology',
      specialization: 'Non-invasive cardiovascular diagnostics and AI-driven health monitoring solutions.',
      highlight: 'Developed JendoAI, a groundbreaking AI-powered early detection system for cardiovascular diseases.',
      cta: "Explore Jendo's Innovations",
      image: 'https://i.ibb.co/cbTZ66m/OIP-8-removebg-preview.png',
      gallery: [
        'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&q=80',
      ],
      description: `Jendo is at the forefront of cardiovascular healthcare innovation, leveraging artificial intelligence and advanced sensors to revolutionize heart disease detection and monitoring. Our flagship product, JendoAI, represents a quantum leap in early cardiovascular disease detection.

Key Innovations:
• AI-powered ECG analysis with 99.9% accuracy
• Real-time heart health monitoring
• Non-invasive diagnostic solutions
• Cloud-based patient monitoring system

Impact:
• 50% reduction in diagnostic time
• 40% improvement in early detection rates
• Serving 100+ healthcare institutions globally`,
    },
    {
      icon: Eye,
      name: 'Optha',
      tagline: 'Smart Eye Care Solutions',
      industry: 'Ophthalmology & Medical Devices',
      specialization: 'AI-driven diagnostic tools for early detection of eye diseases like diabetic retinopathy and glaucoma.',
      highlight: 'Developed OpthaAI, an advanced retinal imaging and analysis system used by top ophthalmologists.',
      cta: "Discover Optha's Breakthroughs",
      image: 'https://i.ibb.co/pB6bGWBm/Whats-App-Image-2024-10-31-at-07-58-49-d1b9d4a1-3.jpg',
      gallery: [
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80',
      ],
      description: `Optha is transforming eye care through innovative AI-powered diagnostic solutions. Our technology enables early detection of various eye conditions, leading to better treatment outcomes and preserved vision for millions.

Key Technologies:
• Advanced retinal imaging
• AI-powered disease detection
• Remote diagnostic capabilities
• Patient progress tracking

Achievements:
• 95% accuracy in disease detection
• Used by 200+ eye care professionals
• FDA-approved technology
• International presence in 25 countries`,
    },
    {
      icon: Cpu,
      name: 'Effective Solutions',
      tagline: 'IoT & Smart Technologies',
      industry: 'IoT & Smart Systems',
      specialization: 'Developing smart city infrastructure, industrial automation, and medical IoT devices.',
      highlight: 'Leading the transformation of urban infrastructure with cutting-edge IoT solutions.',
      cta: 'See How We Power Smart Cities',
      image: 'https://i.ibb.co/RTBX4jZV/OIP-11.jpg',
      gallery: [
        'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      ],
      description: `Effective Solutions is pioneering the future of smart cities and industrial automation through innovative IoT technologies. We create interconnected systems that enhance efficiency, sustainability, and quality of life.

Core Solutions:
• Smart city infrastructure
• Industrial automation systems
• Medical IoT devices
• Environmental monitoring

Success Metrics:
• 30% reduction in energy consumption
• 40% improvement in operational efficiency
• Deployed in 15+ smart cities
• Over 1000 connected devices deployed`,
    },
    {
      icon: Lightbulb,
      name: 'Koding Innovations',
      tagline: 'AI & R&D Hub',
      industry: 'Artificial Intelligence & Emerging Technologies',
      specialization: 'Advanced R&D in robotics, machine learning, and energy-efficient technologies.',
      highlight: "Pushing the boundaries of what's possible with AI and robotics.",
      cta: 'Explore Our Research & Development',
      image: 'https://i.ibb.co/PZ8sBKQw/Whats-App-Image-2025-02-21-at-07-41-33-38309d32.jpg',
      gallery: [
        'https://images.unsplash.com/photo-1531746790731-6775af78c475?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80',
      ],
      description: `Koding Innovations is our advanced research and development hub, focusing on breakthrough technologies in AI, robotics, and sustainable energy solutions. We're creating the technologies of tomorrow.

Research Areas:
• Advanced AI systems
• Robotics and automation
• Energy-efficient technologies
• Quantum computing applications

Achievements:
• 25+ patents filed
• 15 research partnerships
• Published in leading journals
• Multiple industry awards`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section id="companies" className="section-padding bg-gray-50" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Companies</h2>
          <p className="text-xl text-gray-600">
            A powerhouse of innovation across healthcare, technology, and research
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-24">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}
              >
                {/* Timeline Node - Adjusted for mobile */}
                <div 
                  className={`absolute top-0 hidden md:flex ${
                    index % 2 === 0 ? '-left-8' : '-right-8'
                  } w-16 h-16 bg-white rounded-full border-4 border-primary items-center justify-center shadow-lg`}
                  style={{
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                  }}
                >
                  <company.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Mobile Timeline Node */}
                <div className="flex md:hidden items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-lg">
                    <company.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{company.name}</h3>
                </div>

                {/* Company Card */}
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-white md:hidden">{company.tagline}</h3>
                      <div className="hidden md:block">
                        <h3 className="text-2xl font-bold text-white">{company.name}</h3>
                        <p className="text-white/90">{company.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-700">Industry</h4>
                        <p className="text-gray-600">{company.industry}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-700">Highlight</h4>
                        <p className="text-gray-600">{company.highlight}</p>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => setSelectedCompany(company)}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {company.cta}
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal - Responsive adjustments */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCompany(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white z-10 p-4 sm:p-6 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {React.createElement(selectedCompany.icon as React.ComponentType<any>, { className: "w-6 h-6 sm:w-8 sm:h-8 text-primary" })}
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedCompany.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedCompany(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8">
                  {selectedCompany.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative h-40 sm:h-48 rounded-xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${selectedCompany.name} gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="prose max-w-none">
                  <h4 className="text-lg sm:text-xl font-bold mb-4">{selectedCompany.tagline}</h4>
                  <div className="whitespace-pre-line text-gray-600 text-sm sm:text-base">
                    {selectedCompany.description}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};