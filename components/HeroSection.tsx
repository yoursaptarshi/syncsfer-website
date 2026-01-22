"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import VerticalCarousel from './VerticalCarousel';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-transparent"
    >

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
              style={{ 
                borderColor: 'rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
              }}
            >
              <Sparkles className="w-4 h-4 text-gray-900" />
              <span className="text-sm text-gray-900">Revolutionary Skill Exchange Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900"
            >
              Unlock Your Skills
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-900 max-w-xl mb-10"
            >
              Exchange talents, time, and services seamlessly. Join the future where
              <span className="text-gray-900 font-semibold"> every skill has value</span> — no money required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.a
                href="#cta"
                className="flex items-center gap-2 group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
                  color: 'white',
                  boxShadow: '0 0 20px hsl(0 25% 40% / 0.3)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px hsl(0 25% 40% / 0.5), 0 0 50px hsl(0 25% 40% / 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join The Waitlist</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="#features"
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 hover:border-gray-700"
                style={{
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  background: 'rgba(255, 255, 255, 0.8)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { number: '200+', label: 'Early Adopters' },
                { number: '50+', label: 'Skill Categories' },
                { number: 'AI', label: 'Matchmaking' },
                { number: '∞', label: 'Possibilities' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="py-4 px-5 text-center lg:text-left rounded-2xl"
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderColor: 'rgba(0, 0, 0, 0.15)',
                    scale: 1.05,
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-700 uppercase tracking-wider font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Vertical Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-end"
          >
            <VerticalCarousel />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-gray-900/50 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-2.5 rounded-full bg-gray-900"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
