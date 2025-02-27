// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Network, FlaskRound as Flask, Globe } from 'lucide-react';

// export const WhyChooseUs = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const reasons = [
//     {
//       icon: Network,
//       title: 'A Unified Powerhouse of Innovation',
//       description: "Koding's ecosystem brings together multiple specialized firms under one strategic vision, ensuring synergy, efficiency, and accelerated growth.",
//     },
//     {
//       icon: Flask,
//       title: 'Cutting-Edge Research & Development',
//       description: 'We invest heavily in R&D across AI, IoT, and medical technology to stay ahead in innovation and global market trends.',
//     },
//     {
//       icon: Globe,
//       title: 'Global Reach & Industry Recognition',
//       description: 'Our companies have gained international recognition for their technological breakthroughs in healthcare, smart cities, and automation.',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="section-padding bg-gray-50" ref={ref}>
//       <motion.div
//         className="max-w-7xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//       >
//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-6">Why Choose Koding?</h2>
//           <p className="text-xl text-gray-600">
//             Experience the power of innovation and expertise
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="bg-white p-8 rounded-2xl shadow-lg"
//               whileHover={{ y: -10 }}
//             >
//               <reason.icon className="w-12 h-12 text-primary mb-6" />
//               <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
//               <p className="text-gray-600">{reason.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           variants={itemVariants}
//           className="text-center mt-12"
//         >
//           <a
//             href="#contact"
//             className="inline-flex items-center px-6 py-3 text-white rounded-md"
//             style={{ backgroundColor: '#27026c' }}
//           >
//             Join Us in Shaping the Future
//           </a>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };