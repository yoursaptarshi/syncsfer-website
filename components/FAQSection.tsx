"use client";

import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { MagicBentoCard } from './MagicBentoCard';

const faqs = [
  {
    question: 'What is Syncsfer?',
    answer: 'Syncsfer is a revolutionary skill exchange platform that connects people to trade skills, time, and services without money. Exchange your expertise for new skills seamlessly.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Syncsfer is free to join! We offer a free tier with basic features. Premium plans available for advanced matching and unlimited exchanges. Enterprise plans available for organizations.',
  },
  {
    question: 'Can I try it for free?',
    answer: 'Yes! Sign up for a free account and get instant access to our platform. No credit card required. You can start exchanging skills immediately and upgrade to Premium anytime for unlimited features.',
  },
  {
    question: 'How does skill matching work?',
    answer: 'Our AI-powered algorithm analyzes your skills, availability, and interests to find perfect exchange partners. Simply create your profile, list your skills, and let our AI do the matching.',
  },
  {
    question: 'How do time credits work?',
    answer: 'Earn time credits by teaching or sharing your skills with others. Spend credits to learn from experts. Every hour you teach earns credits you can use to learn. It\'s a fair, time-based economy.',
  },
  {
    question: 'Is it safe to exchange skills?',
    answer: 'Absolutely! All users are verified, and we have a robust rating system. Every exchange is monitored, and you can review partner profiles before agreeing to exchange. Your safety is our priority.',
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative py-32 overflow-hidden bg-transparent"
    >

      {/* Purple/Blue Gradient Overlays */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Common Questions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Everything you need to know about Syncsfer
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {faqs.map((faq, index) => (
            <MagicBentoCard
              key={index}
              enableStars={true}
              enableBorderGlow={true}
              enableSpotlight={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              particleCount={6}
              glowColor="139, 92, 246"
              spotlightRadius={400}
              disableAnimations={false}
              className="rounded-xl"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
              }}
            >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 h-full"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-lg font-bold" style={{ color: '#8B5CF6' }}>Q:</span>
                <h3 className="text-lg font-semibold text-gray-900 flex-1">
                  {faq.question}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ml-7">
                {faq.answer}
              </p>
            </motion.div>
            </MagicBentoCard>
          ))}
        </div>

        {/* View All FAQs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white mx-auto"
            style={{
              background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
              boxShadow: '0 4px 16px 0 rgba(139, 92, 246, 0.3)',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 6px 20px 0 rgba(139, 92, 246, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="w-4 h-4" />
            View All 40+ FAQs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
