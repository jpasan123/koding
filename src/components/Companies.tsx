import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Eye, Cpu, Lightbulb, X, ChevronRight, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
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
    year: string;
    milestone: string;
  };

  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  // Continuous rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360); // Smooth rotation
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Handle window resize for responsive recalculation
  useEffect(() => {
    const handleResize = () => {
      setRotationAngle((prev) => prev + 0.001); // Trigger re-render
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const companies: Company[] = [
    {
      icon: Heart,
      name: 'Jendo',
      tagline: 'Pioneering Cardiovascular Health',
      industry: 'Biomedical Technology',
      specialization: 'Non-invasive cardiovascular diagnostics and AI-driven health monitoring solutions.',
      highlight: 'Developed JendoAI, a groundbreaking AI-powered early detection system for cardiovascular diseases.',
      cta: "Explore Jendo's Innovations",
      image: 'https://i.ibb.co/cbTZ66m/OIP-8-removebg-preview.png',
      year: '2020',
      milestone: 'Founded as the first subsidiary of Koding, focusing on cardiovascular health innovation.',
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
      specialization: 'AI-driven diagnostic tools for early detection of eye diseases.',
      highlight: 'Developed OpthaAI, an advanced retinal imaging and analysis system.',
      cta: "Discover Optha's Breakthroughs",
      image: 'https://i.ibb.co/pB6bGWBm/Whats-App-Image-2024-10-31-at-07-58-49-d1b9d4a1-3.jpg',
      year: '2021',
      milestone: 'Launched to revolutionize eye care with AI-powered diagnostics.',
      gallery: [
        'https://i.ibb.co/21nKX65b/OIP-17.jpg',
        'https://i.ibb.co/8nYFzS2t/OIP-16.jpg',
        'https://i.ibb.co/x8tr2zVc/OIP-15.jpg',
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
      specialization: 'Smart city infrastructure and industrial automation.',
      highlight: 'Leading urban infrastructure transformation with IoT.',
      cta: 'See How We Power Smart Cities',
      image: 'https://i.ibb.co/RTBX4jZV/OIP-11.jpg',
      year: '2022',
      milestone: 'Established to drive smart city and IoT innovation.',
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
      industry: 'AI & Emerging Technologies',
      specialization: 'Advanced R&D in robotics and AI.',
      highlight: 'Pushing boundaries in AI and robotics.',
      cta: 'Explore Our R&D',
      image: 'https://i.ibb.co/PZ8sBKQw/Whats-App-Image-2025-02-21-at-07-41-33-38309d32.jpg',
      year: '2023',
      milestone: 'Created as the central R&D hub for all Koding companies.',
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 25, stiffness: 500 }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
  };

  // Optimized getCirclePosition to place logos exactly on the border
  const getCirclePosition = (index: number, totalItems: number) => {
    const angle = (index * (360 / totalItems) + rotationAngle) * (Math.PI / 180);

    // Responsive container size
    const containerSize = window.innerWidth < 400 ? 280 : 
                         window.innerWidth < 640 ? 350 :
                         window.innerWidth < 768 ? 450 : 
                         window.innerWidth < 1024 ? 600 : 
                         700;

    // Exact radius is half the container size (blue border)
    const radius = containerSize / 2;

    // Calculate precise x, y coordinates for the logo center
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return { x, y, rotate: 0 };
  };

  return (
    <section id="companies" className="min-h-screen bg-gray-50 overflow-hidden flex items-center" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Companies</h2>
            <p className="text-xl text-gray-600">A powerhouse of innovation across healthcare, technology, and research</p>
          </div>

          {/* Company Display */}
          <div className="relative w-full min-h-[600px] md:min-h-[800px] flex justify-center items-center">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-[280px] h-[280px] xs:w-[350px] xs:h-[350px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
                {/* Rotating Border */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-[4px] border-blue-500/30"
                  style={{
                    background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))',
                    boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)'
                  }}
                  animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Static guide rings */}
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-blue-400/20" />
                <div className="absolute inset-8 rounded-full border border-purple-400/20" />

                {/* Center Logo */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    {/* Adjusted glow effects for mobile */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-lg transform scale-125" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-md transform scale-110" />
                    
                    {/* Responsive image sizing */}
                    <img
                      src="https://i.ibb.co/PZ8sBKQw/Whats-App-Image-2025-02-21-at-07-41-33-38309d32.jpg"
                      alt="Koding Logo"
                      className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full shadow-xl relative z-12 border-4 border-white transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* Company Logos on the Border */}
{companies.map((company, index) => {
  const position = getCirclePosition(index, companies.length);
  return (
    <motion.div
      key={index}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      animate={{ x: position.x, y: position.y, rotate: position.rotate }}
      transition={{ duration: 0.1, ease: "linear" }} // Faster transition for smooth movement
    >
      <motion.div
        className="cursor-pointer group"
        whileHover={{ scale: 1.1 }}
        onClick={() => setSelectedCompany(company)}
      >
        <motion.div 
          className="bg-white p-2 rounded-full shadow-lg border-4 border-primary/10 relative"
          whileHover={{ rotate: 12 }}
          style={{ transform: 'translate(-50%, -50%)' }} // Center logo on position
        >
          <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-full overflow-hidden">
            <img
              src={company.image}
              alt={company.name}
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
          
          {/* Company Name Tag - Moved inside the logo container */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
            <p className="text-[10px] sm:text-xs font-bold text-primary">{company.name}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
})}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative mt-20 px-4">
            <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary" />
            
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 sm:mb-16 ${
                  index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                  index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
                }`}>
                  <motion.div
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <h3 className="text-lg sm:text-xl font-bold">{company.year}</h3>
                    </div>
                    <h4 className="font-bold mb-2 text-base sm:text-lg">{company.name}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{company.milestone}</p>
                    <motion.button
                      onClick={() => setSelectedCompany(company)}
                      className="mt-3 sm:mt-4 text-primary font-medium flex items-center gap-2 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
                
                <div className="absolute left-0 sm:left-1/2 top-0 sm:top-1/2 transform sm:-translate-y-1/2 sm:-translate-x-1/2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full border-4 border-white shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Company Details Modal */}
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
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white z-10 p-4 sm:p-6 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {React.createElement(selectedCompany.icon as React.ComponentType<any>, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 text-primary",
                  })}
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