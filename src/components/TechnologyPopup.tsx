import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface TechnologyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TechnologyPopup = ({ isOpen, onClose }: TechnologyPopupProps) => {
  const technologies = [
    {
      title: 'JendoAI',
      description: 'Advanced AI-driven cardiovascular diagnostics platform featuring machine learning algorithms for disease detection with 99.9% accuracy. Includes real-time monitoring and early warning systems.',
      features: [
        'Real-time heart monitoring',
        'AI-powered diagnostics',
        'Early warning system',
        'Medical device integration'
      ]
    },
    {
      title: 'OpthaAI',
      description: 'State-of-the-art computer vision technology for eye disease detection. Utilizes deep learning models trained on millions of eye scan images.',
      features: [
        'Retinal scan analysis',
        'Disease progression tracking',
        'Early detection system',
        'Patient history integration'
      ]
    },
    {
      title: 'IoT Healthcare',
      description: 'Comprehensive IoT ecosystem for smart hospitals and remote patient monitoring. Enables real-time data collection and analysis.',
      features: [
        'Smart device integration',
        'Real-time monitoring',
        'Automated alerts',
        'Analytics dashboard'
      ]
    },
    {
      title: 'AI Analytics',
      description: 'Advanced analytics platform powered by artificial intelligence for healthcare and industrial applications.',
      features: [
        'Predictive analytics',
        'Machine learning models',
        'Real-time processing',
        'Custom reporting'
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-[95%] max-w-4xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-xl z-50 p-6 m-4"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white pb-4 border-b z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Our Technologies</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 mt-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 last:border-0 pb-8 last:pb-0"
                >
                  <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tech.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center bg-gray-50 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};