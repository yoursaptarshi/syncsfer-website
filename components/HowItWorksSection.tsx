"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Search, MessageSquare, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Create Your Profile',
    description: 'Sign up and showcase your unique skills. Tell us what you can offer and what you want to learn.',
  },
  {
    icon: Search,
    step: '02',
    title: 'AI Finds Matches',
    description: 'Our intelligent algorithm analyzes thousands of profiles to find your perfect skill exchange partners.',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Connect & Agree',
    description: 'Chat with potential partners, discuss terms, and agree on the exchange details.',
  },
  {
    icon: RefreshCw,
    step: '04',
    title: 'Exchange & Grow',
    description: 'Complete the exchange, earn time credits, and keep expanding your skill set.',
  },
];

const HowItWorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent text-sm uppercase tracking-widest font-semibold">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
            How <span className="gradient-text">Syncsfer</span> Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Effortlessly connect, trade, and grow your skills with our intuitive platform.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full"
              style={{ 
                height: lineHeight,
              }}
            >
              <motion.div
                className="w-full h-full"
                style={{
                  background: 'linear-gradient(to bottom, hsl(0 25% 40%), hsl(5 30% 50%), hsl(0 25% 40%))',
                }}
                animate={{
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>

          {/* Step Cards */}
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Step Number Circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                <motion.div
                  className="w-16 h-16 rounded-full glass-dark flex items-center justify-center border-2 border-accent pulse-glow"
                  whileHover={{ scale: 1.1 }}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  className="glass-dark-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-5xl font-bold text-gray-400 opacity-50">
                    {step.step}
                  </span>
                  <h3 className="text-2xl font-semibold mt-2 mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
