import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isComplete, setIsComplete] = useState(false);
  
  // Extended display duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 800); // Wait for exit animation to complete
    }, 5000); // Extended to 5 seconds
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loader-content max-w-md w-full px-6">
        <div className="mx-auto mb-8">
          <motion.div 
            className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-[#27026c] to-[#27026c]/80 p-1 shadow-lg"
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="h-full w-full bg-white rounded-xl overflow-hidden flex items-center justify-center">
              <motion.img 
                src="https://i.ibb.co/BVhYCZvh/Whats-App-Image-2025-03-04-at-18-27-33-aba0c571.jpg" 
                alt="Koding Logo" 
                className="w-28 h-28 object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </motion.div>
        </div>
        <motion.h1 
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          KODING
        </motion.h1>
        <motion.p 
          className="text-lg text-center mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Empowering Industries. Transforming Lives.
        </motion.p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <motion.div
            className="bg-[#27026c] h-2.5 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: 4.5, // Increased loading bar duration
              ease: "easeInOut" 
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};