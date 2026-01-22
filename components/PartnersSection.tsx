"use client";

import { motion } from 'framer-motion';

const partners = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'Innovate Labs', logo: 'IL' },
  { name: 'Digital Flow', logo: 'DF' },
  { name: 'CreativeHub', logo: 'CH' },
  { name: 'NextGen', logo: 'NG' },
  { name: 'Skyline', logo: 'SL' },
  { name: 'Fusion', logo: 'FN' },
  { name: 'Vertex', logo: 'VX' },
  { name: 'Quantum', logo: 'QM' },
  { name: 'Elevate', logo: 'EL' },
];

const PartnersSection = () => {
  // Double the partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative py-20 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-gray-600 text-sm uppercase tracking-widest font-medium">
            Trusted by innovators worldwide
          </span>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* First Row - Scroll Left */}
        <div className="flex mb-6 overflow-x-hidden overflow-y-visible py-4">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 group"
              >
                <div 
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer"
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center font-bold text-gray-700 group-hover:from-accent group-hover:to-[hsl(5_30%_50%)] group-hover:text-accent-foreground transition-all duration-300">
                    {partner.logo}
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Scroll Right */}
        <div className="flex overflow-x-hidden overflow-y-visible py-4">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              x: {
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {[...duplicatedPartners].reverse().map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 group"
              >
                <div 
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg cursor-pointer"
                  style={{
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center font-bold text-gray-600 group-hover:from-accent group-hover:to-[hsl(5_30%_50%)] group-hover:text-accent-foreground transition-all duration-300">
                    {partner.logo}
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto px-6 mt-12"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">200+</div>
            <div className="text-sm text-gray-600 mt-1">Partner Companies</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">50K+</div>
            <div className="text-sm text-gray-600 mt-1">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">120+</div>
            <div className="text-sm text-gray-600 mt-1">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900">4.9★</div>
            <div className="text-sm text-gray-600 mt-1">User Rating</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnersSection;
