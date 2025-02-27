import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MockupDisplayProps {
  mockups: {
    image: string;
    title: string;
    description: string;
  }[];
  currentIndex: number;
}

export const MockupDisplay = ({ mockups, currentIndex }: MockupDisplayProps) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
        {mockups.map((mockup, index) => (
          <motion.div
            key={mockup.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0,
              scale: currentIndex === index ? 1 : 1.1
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img
              src={mockup.image}
              alt={mockup.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{mockup.title}</h3>
              <p className="text-sm text-white/90">{mockup.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Optional: Add navigation dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {mockups.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-400"
            animate={{
              scale: currentIndex === index ? 1.2 : 1,
              backgroundColor: currentIndex === index ? "#27026c" : "#9CA3AF"
            }}
          />
        ))}
      </div>
    </div>
  );
};