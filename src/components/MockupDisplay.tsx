import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MockupDisplayProps {
  mockups: {
    image: string;
    title: string;
    description: string;
  }[];
}

export const MockupDisplay = ({ mockups }: MockupDisplayProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMockup = () => {
    setCurrentIndex((prev) => (prev + 1) % mockups.length);
  };

  const prevMockup = () => {
    setCurrentIndex((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
        {/* Device Frame */}
        <div className="absolute inset-0 bg-gray-900 rounded-2xl">
          {/* Screen Content */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <img
              src={mockups[currentIndex].image}
              alt={mockups[currentIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {mockups[currentIndex].title}
              </h3>
              <p className="text-white/80">
                {mockups[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevMockup}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextMockup}
          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {mockups.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};