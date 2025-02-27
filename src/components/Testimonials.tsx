import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Award } from 'lucide-react';

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "JendoAI has transformed the way we diagnose cardiovascular conditions, reducing time-to-treatment significantly.",
      author: "Dr. John Doe",
      title: "Cardiologist",
    },
    {
      quote: "OpthaAI is a game-changer in eye care. Its early detection capabilities are saving lives every day.",
      author: "Leading Ophthalmology Researcher",
      title: "Research Institute",
    },
  ];

  const awards = [
    {
      year: "2023",
      title: "Best AI-Driven Healthcare Innovation",
      recipient: "JendoAI",
    },
    {
      year: "2022",
      title: "Top MedTech Company",
      recipient: "Optha",
    },
    {
      year: "2021",
      title: "Smart IoT Pioneer",
      recipient: "Effective Solutions",
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
    <section className="section-padding bg-gray-50" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">What People Say About Us</h2>
          <p className="text-xl text-gray-600">
            Trusted by healthcare professionals and industry leaders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <Quote className="w-12 h-12 text-primary mb-6" />
              <p className="text-xl italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-center">Recognitions & Awards</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-sm text-gray-500 mb-2">{award.year}</p>
                <h4 className="font-bold mb-2">{award.title}</h4>
                <p className="text-primary">{award.recipient}</p>
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
            className="inline-flex items-center px-6 py-3 text-white rounded-md"
            style={{ backgroundColor: '#27026c' }}
          >
            See More Success Stories
          </a>
        </motion.div> */}
      </motion.div>
    </section>
  );
};