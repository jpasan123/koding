import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = {
    // services: [
    //   { name: 'Cloud Solutions', href: '#' },
    //   { name: 'Web Development', href: '#' },
    //   { name: 'Mobile Apps', href: '#' }
    // ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://i.ibb.co/BVhYCZvh/Whats-App-Image-2025-03-04-at-18-27-33-aba0c571.jpg"
                alt="Koding Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">Koding</span>
            </motion.div>
            <p className="text-gray-400 mb-6">
              Empowering businesses through innovative technology solutions and digital transformation.
            </p>
          </div>

          {/* Services
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {sections.services.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                >
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div> */}

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {sections.company.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                >
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {sections.legal.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 5 }}
                >
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Koding. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 md:mt-0">
              <a href="mailto:info@koding.com" className="text-gray-400 hover:text-white text-sm">
                info@koding.com
              </a>
              <a href="tel:+94766210120" className="text-gray-400 hover:text-white text-sm">
                +94 76 621 0120
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};