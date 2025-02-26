import React from 'react';
import { motion } from 'framer-motion';

const Cookies = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Cookie Policy</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          {/* Last Updated */}
          <p className="text-gray-600">Last updated: February 26, 2025</p>

          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
              This Cookie Policy explains how Koding and its subsidiaries use cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies are and why we 
              use them, as well as your rights to control our use of them.
            </p>
          </div>

          {/* What are cookies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
            <p className="text-gray-700">
              Cookies are small data files that are placed on your computer or mobile device when you visit 
              a website. They are widely used by website owners to make their websites work, or work more 
              efficiently, as well as to provide reporting information.
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
                <p className="text-gray-700">
                  These cookies are necessary for the website to function and cannot be switched off. They are 
                  usually only set in response to actions made by you which amount to a request for services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
                <p className="text-gray-700">
                  These cookies allow us to count visits and traffic sources so we can measure and improve the 
                  performance of our site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Functional Cookies</h3>
                <p className="text-gray-700">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
              </div>
            </div>
          </div>

          {/* How to control cookies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">How to Control Cookies</h2>
            <p className="text-gray-700">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites 
              set or access cookies. If you disable or refuse cookies, please note that some parts of this 
              website may become inaccessible or not function properly.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our use of cookies, please contact us at:
              <br />
              <a href="mailto:privacy@koding.com" className="text-primary hover:underline">
                privacy@koding.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cookies;