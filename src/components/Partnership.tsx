import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Briefcase, GraduationCap, Landmark } from 'lucide-react';

export const Partnership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      icon: Building2,
      title: 'Healthcare Institutions & Hospitals',
      description: 'Partner with leading healthcare providers to implement cutting-edge medical solutions.',
    },
    {
      icon: Briefcase,
      title: 'Tech Investors & Venture Capitalists',
      description: 'Connect with forward-thinking investors to drive innovation and growth.',
    },
    {
      icon: GraduationCap,
      title: 'Research Institutions & Universities',
      description: 'Collaborate with academic institutions to advance technological research.',
    },
    {
      icon: Landmark,
      title: 'Government Agencies & Public Sector',
      description: 'Work with public sector organizations to implement smart city solutions.',
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
    <section className="section-padding bg-white" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Partnership & Collaboration</h2>
          <p className="text-xl text-gray-600">
            Join us in creating innovative solutions for tomorrow's challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl flex items-start gap-6"
              whileHover={{ scale: 1.02 }}
            >
              <partner.icon className="w-12 h-12 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">How to Partner With Us</h3>
          <p className="text-lg mb-8">
            Whether you're looking for investment opportunities, strategic partnerships, or technology collaborations, 
            Koding offers a platform to drive meaningful innovation.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            Start a Partnership With Koding
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};