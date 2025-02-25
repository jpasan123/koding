import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Shield, Star, Users } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const values = [
    { icon: Brain, title: 'Innovation', description: 'Constantly pushing boundaries to create next-gen technologies.' },
    { icon: Shield, title: 'Integrity', description: 'Ethical business practices and transparency at every level.' },
    { icon: Star, title: 'Excellence', description: 'A commitment to high-quality, impactful solutions.' },
    { icon: Users, title: 'Collaboration', description: 'Fostering strong partnerships for sustainable growth.' },
  ];

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Koding is a global holding company that invests in and manages pioneering technology firms specializing in healthcare, IoT, and software engineering. Led by visionary entrepreneur Keerthi Kodithuwakku, Koding brings together world-class expertise to develop breakthrough solutions that enhance industries and improve lives.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-xl italic">
              "To revolutionize industries through smart, interconnected solutions that drive innovation and global progress."
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Mission</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Healthcare Innovation</h4>
              <p>To lead in biomedical and IoT innovations for better healthcare and connectivity.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Practical Solutions</h4>
              <p>To integrate cutting-edge research into practical, scalable solutions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-bold mb-2">Global Network</h4>
              <p>To build a global network of forward-thinking companies under one powerful ecosystem.</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50"
                whileHover={{ scale: 1.05 }}
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
            <a
            href="#contact"
            className="btn-primary inline-flex items-center"
            style={{ backgroundColor: '#27026c' }}
            >
            Learn More About Koding
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
};