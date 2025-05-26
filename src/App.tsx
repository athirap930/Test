import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './components/AnimatedSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Hero Section */}
      <header className="py-16 px-4">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Rajdhani Minerals</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in high-quality industrial minerals and raw materials, serving global industries with excellence.
          </p>
        </motion.div>
      </header>

      {/* Products Section */}
      <section className="py-16 px-4 bg-white">
        <AnimatedSection className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-gray-50 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Industrial Minerals</h3>
              <p className="text-gray-600">Premium quality minerals for various industrial applications including ceramics, glass, and construction.</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-50 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Raw Materials</h3>
              <p className="text-gray-600">Essential raw materials that meet the highest industry standards for manufacturing and processing.</p>
            </motion.div>
            <motion.div 
              className="p-6 bg-gray-50 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Specialty Products</h3>
              <p className="text-gray-600">Customized mineral solutions tailored to meet specific industry requirements and applications.</p>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <AnimatedSection className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-gray-600 mb-4">
                With decades of experience in the mineral industry, Rajdhani Minerals has established itself as a leading supplier of high-quality industrial minerals and raw materials.
              </p>
              <p className="text-gray-600">
                Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for industries worldwide.
              </p>
            </div>
            <motion.div 
              className="bg-gray-50 p-8 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <motion.li 
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Quality Excellence
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Customer Focus
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Sustainable Practices
                </motion.li>
                <motion.li 
                  className="flex items-center text-gray-600"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Innovation
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to discuss your mineral requirements
          </p>
          <div className="inline-flex space-x-4">
            <motion.button 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
            <motion.button 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 Rajdhani Minerals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;