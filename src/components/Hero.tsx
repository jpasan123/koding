import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Add this custom keyframe animation to your globals.css or equivalent
const outlineAnimation = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 }
    }
  }
};

// First, add these animation variants at the top of your file
const letterAnimationVariants = {
  initial: { strokeDashoffset: 1 },
  animate: {
    strokeDashoffset: 0,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={image}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImageIndex === index ? 1 : 0,
            scale: currentImageIndex === index ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative min-h-screen flex items-center pt-20 section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Innovating the Future Across{' '}
              <span className="relative inline-block">
                <span className="relative z-10">
                  <motion.svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 100"
                    style={{ overflow: 'visible' }}
                  >
                    <motion.text
                      x="0"
                      y="80"
                      className="text-4xl sm:text-5xl md:text-6xl font-bold"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth="0.5"
                      strokeLinejoin="round"
                      initial="initial"
                      animate="animate"
                      variants={letterAnimationVariants}
                      style={{ strokeDasharray: 1 }}
                    >
                      Healthcare, IoT,
                    </motion.text>
                  </motion.svg>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Healthcare, <span style={{ color: '#27026c' }}>IoT, Software,{' '}
                    <motion.svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 400 100"
                      style={{ overflow: 'visible' }}
                    >
                      <motion.text
                        x="0"
                        y="80"
                        className="text-4xl sm:text-5xl md:text-6xl font-bold"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth="0.5"
                        strokeLinejoin="round"
                        initial="initial"
                        animate="animate"
                        variants={letterAnimationVariants}
                        style={{ strokeDasharray: 1 }}
                      >
                        Software, Engineering
                      </motion.text>
                    </motion.svg>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Engineering
                    </span></span>
                  </span>
                </span>
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Koding is the parent company of Jendo, Optha, and other cutting-edge firms pioneering advancements in medical technology, IoT, and digital solutions.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
                <motion.a
                href="#companies"
                className="btn-primary flex items-center gap-2 backdrop-blur-sm"
                style={{ backgroundColor: '#27026c' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                Explore Our Companies
                <ArrowRight size={20} />
                </motion.a>
              <motion.a
                href="#innovations"
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Our Innovations
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80"
                alt="Innovation Technology"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-20 to-secondary-20 rounded-lg" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-white">
                <h3 className="font-bold">AI-Powered</h3>
                <p className="text-sm">Healthcare Solutions</p>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-xl"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className="text-white">
                <h3 className="font-bold">IoT Innovation</h3>
                <p className="text-sm">Smart Technologies</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 16, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};