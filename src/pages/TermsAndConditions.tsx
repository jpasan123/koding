import { motion } from 'framer-motion';

export const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.div 
        className="max-w-4xl mx-auto px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>Welcome to Koding. By accessing our website and services, you agree to these terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Service" refers to the products, software, and services provided by Koding.</li>
              <li>"User" refers to any individual or entity using our services.</li>
              <li>"Content" refers to all materials and information provided through our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Use of Services</h2>
            <p className="mb-4">Users must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years old or have parental consent</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of their account</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on our platform belong to Koding or its licensors.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Privacy</h2>
            <p>Our privacy practices are governed by our Privacy Policy, which is incorporated into these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>Koding shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};