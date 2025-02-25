import { motion } from 'framer-motion';

export const LoadingScreen = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-content">
        <div className="mx-auto mb-8"></div>
          <img src="https://i.ibb.co/PZ8sBKQw/Whats-App-Image-2025-02-21-at-07-41-33-38309d32.jpg" alt="Koding Logo" className="w-18 h-16 mx-auto" />
        <h1 className="text-4xl font-bold mb-4 text-center">
          KODING
        </h1>
        <p className="text-lg text-center mb-4">
          Empowering Industries. Transforming Lives.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <motion.div
            className="bg-blue-600 h-2.5 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  );
};
