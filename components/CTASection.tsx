"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Mail, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="cta" className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center py-16 px-8 md:px-12 relative"
          style={{
            backdropFilter: 'blur(30px) saturate(200%)',
            WebkitBackdropFilter: 'blur(30px) saturate(200%)',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '2rem',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
          }}
          whileHover={{
            background: 'rgba(255, 255, 255, 0.25)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
            boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
          }}
        >
          {/* Subtle inner glow */}
          <div 
            className="absolute inset-0 rounded-[2rem] pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(128, 77, 77, 0.1) 0%, transparent 50%)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Ready to <span className="gradient-text">Transform</span>
              <br />
              How You Learn?
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto mb-10">
              Join our waitlist and be the first to experience the future of skill exchange. 
              Early adopters get exclusive benefits!
            </p>
          </motion.div>

          {/* Form */}
          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'hsl(0 25% 40%)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-gray-50 border border-gray-200 focus:border-[hsl(0_25%_40%)] focus:outline-none focus:ring-2 transition-all text-gray-900 placeholder:text-gray-400 backdrop-blur-sm"
                  style={{ 
                    '--tw-ring-color': 'hsl(0 25% 40% / 0.2)',
                  } as React.CSSProperties}
                />
              </div>
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 group whitespace-nowrap px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 text-white"
                style={{
                  background: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
                  boxShadow: '0 0 20px hsl(0 25% 40% / 0.3)',
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px hsl(0 25% 40% / 0.5), 0 0 50px hsl(0 25% 40% / 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join Waitlist</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-gray-900"
              style={{ color: 'hsl(0 25% 40%)' }}
            >
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                You're on the list! We'll be in touch soon.
              </span>
            </motion.div>
          )}

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-600"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: 'hsl(0 25% 40%)' }} />
              No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: 'hsl(0 25% 40%)' }} />
              Early access priority
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" style={{ color: 'hsl(0 25% 40%)' }} />
              Exclusive launch benefits
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
