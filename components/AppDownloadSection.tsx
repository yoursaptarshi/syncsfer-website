"use client";

import { motion } from 'framer-motion';
import { Smartphone, Download, Star, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const AppDownloadSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant skill matching'
    },
    {
      icon: Users,
      title: 'Connect Anytime',
      description: '24/7 access to experts'
    },
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Unlock exclusive features'
    }
  ];

  return (
    <section id="download" className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span 
              className="text-sm uppercase tracking-widest font-semibold inline-block mb-4"
              style={{ color: 'hsl(0 25% 40%)' }}
            >
              Download Now
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
              Take Syncsfer{' '}
              <span 
                style={{
                  backgroundImage: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                With You
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mb-8">
              Exchange skills on the go. Download our app and connect with talented professionals wherever you are.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{
                        background: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                    
                    {/* Download Buttons - Only show under "Connect Anytime" */}
                    {feature.title === 'Connect Anytime' && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-6 flex flex-row gap-3 items-center justify-center"
                      >
                        {/* Google Play Store Button */}
                        <motion.a
                          href="https://play.google.com/store/apps"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-3 px-5 py-3 bg-black rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-all w-[240px] flex-shrink-0"
                        >
                          {/* Google Play Triangle Logo */}
                          <div className="flex-shrink-0 w-7 h-7">
                            <Image
                              src="/playstore.png"
                              alt="Google Play"
                              width={28}
                              height={28}
                              className="w-full h-full object-contain"
                              priority
                            />
                          </div>
                          
                          {/* Text */}
                          <div className="flex flex-col">
                            <span className="text-white text-[10px] leading-tight uppercase tracking-wide">
                              Get it on
                            </span>
                            <span className="text-white text-base font-medium leading-tight">
                              Google Play
                            </span>
                          </div>
                        </motion.a>

                        {/* Apple App Store Button */}
                        <motion.a
                          href="https://apps.apple.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center gap-3 px-5 py-3 bg-black rounded-lg border border-gray-300 shadow-md hover:shadow-lg transition-all w-[240px] flex-shrink-0"
                        >
                          {/* Apple Logo */}
                          <div className="flex-shrink-0 w-7 h-7">
                            <Image
                              src="/apple.png"
                              alt="App Store"
                              width={28}
                              height={28}
                              className="w-full h-full object-contain"
                              priority
                            />
                          </div>
                          
                          {/* Text */}
                          <div className="flex flex-col">
                            <span className="text-white text-[10px] leading-tight">
                              Download on the
                            </span>
                            <span className="text-white text-base font-medium leading-tight">
                              App Store
                            </span>
                          </div>
                        </motion.a>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

          {/* Right: Phone Mockup with Infographic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Phone Frame */}
              <div className="relative mx-auto">
                {/* Phone Outline */}
                <div
                  className="relative mx-auto rounded-[3rem] p-4"
                  style={{
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 0 0 2px rgba(255, 255, 255, 0.1)',
                    width: '280px',
                    height: '560px',
                  }}
                >
                  {/* Screen */}
                  <div
                    className="w-full h-full rounded-[2.5rem] overflow-hidden relative"
                    style={{
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                    }}
                  >
                    {/* Status Bar */}
                    <div className="h-8 bg-white flex items-center justify-between px-6 text-xs text-gray-600">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-gray-600 rounded-sm">
                          <div className="w-3 h-1.5 bg-gray-600 rounded-sm m-0.5" />
                        </div>
                        <div className="w-1 h-1 bg-gray-600 rounded-full" />
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="h-[calc(100%-2rem)] overflow-hidden bg-white">
                      <Image
                        src="/phonescreen.png"
                        alt="Syncsfer App Screen"
                        width={280}
                        height={528}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ 
                    zIndex: 10,
                    background: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
                  }}
                >
                  <Download className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg"
                  style={{ zIndex: 10 }}
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
