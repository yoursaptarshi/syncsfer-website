"use client";

import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  Brain, 
  Shield, 
  Clock, 
  Sparkles,
  TrendingUp,
  FileText,
  Award,
  MessageSquare
} from 'lucide-react';
import { MagicBentoCard } from './MagicBentoCard';

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative py-32 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Pro-grade tools. <span className="text-gray-600">Zero complexity.</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Top Row - 3 Cards */}
          
          {/* Card 1: Lightning Fast */}
          <MagicBentoCard
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
            className="rounded-2xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
            }}
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Lightning Fast</h3>
                <p className="text-sm text-gray-600">Faster skill matching than any platform.</p>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-900">Save Hours Weekly</span>
                <span className="px-2 py-1 rounded text-xs font-semibold text-green-600 bg-green-100">Fast</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Skill Matching</span>
                  <span className="text-sm font-semibold text-gray-900">2 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Exchange Setup</span>
                  <span className="text-sm font-semibold text-gray-900">3 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Find 10 Partners</span>
                  <span className="text-sm font-semibold text-gray-900">&lt;1 min</span>
                </div>
              </div>
            </div>
          </motion.div>
          </MagicBentoCard>

          {/* Card 2: Instant Matching */}
          <MagicBentoCard
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
            className="rounded-2xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
            }}
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Instant Matching</h3>
                <p className="text-sm text-gray-600">AI finds perfect partners in seconds.</p>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-900">Skill Compatibility</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Skill Level</span>
                  <span className="text-sm font-semibold text-gray-900">20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Availability</span>
                  <span className="text-sm font-semibold text-gray-900">15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Interest Match</span>
                  <span className="text-sm font-semibold text-gray-900">15</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                <span className="text-xs text-gray-600">Auto-generated</span>
                <span className="text-xs text-green-600 font-semibold ml-auto">Ready</span>
              </div>
            </div>
          </motion.div>
          </MagicBentoCard>

          {/* Card 3: Deep Insights */}
          <MagicBentoCard
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
            className="rounded-2xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
            }}
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Deep Insights</h3>
                <p className="text-sm text-gray-600">Spot skill gaps instantly.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">MOST SOUGHT SKILLS</span>
                <div className="mt-3 space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-900">Web Development</span>
                      <span className="text-xs text-gray-600">32%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
                      <div className="h-full rounded-full bg-red-500" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-900">Design</span>
                      <span className="text-xs text-gray-600">45%</span>
                    </div>
                    <div className="h-2 rounded-full" style={{ background: 'rgba(0, 0, 0, 0.1)' }}>
                      <div className="h-full rounded-full bg-red-500" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3 block">POPULAR CATEGORIES</span>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs text-gray-700" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>Programming</span>
                  <span className="px-3 py-1 rounded-full text-xs text-gray-700" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>Design</span>
                  <span className="px-3 py-1 rounded-full text-xs text-gray-700" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>Marketing</span>
                </div>
              </div>
            </div>
          </motion.div>
          </MagicBentoCard>

          {/* Bottom Row - 2 Cards with empty space in middle */}
          
          {/* Card 4: Magic Exchange */}
          <MagicBentoCard
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
            className="rounded-2xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
            }}
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Magic Exchange</h3>
                <p className="text-sm text-gray-600">AI analyzes and matches skills instantly.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
                <div className="aspect-square flex items-center justify-center mb-2">
                  <div className="w-full h-full rounded-lg flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <p className="text-xs text-gray-600 text-center">Your Profile</p>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
                <div className="mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <span className="text-xs font-semibold text-gray-900">AI MATCH</span>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    "Perfect match! Your design skills complement their development expertise."
                  </p>
                  <p className="text-xs text-gray-700 mt-2">
                    "Both available evenings. High compatibility score."
                  </p>
                </div>
                <div className="mt-3">
                  <span className="text-xs font-semibold text-green-600">Excellent</span>
                  <span className="text-xs text-gray-600 ml-2">95% Match</span>
                </div>
              </div>
            </div>
          </motion.div>
          </MagicBentoCard>

          {/* Card 6: Secure Exchange */}
          <MagicBentoCard
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
            className="rounded-2xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
            }}
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Secure Exchange</h3>
                <p className="text-sm text-gray-600">Trusted platform with verified users.</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3 block">VERIFICATION STATUS</span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">Profile Verified</span>
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">Skills Verified</span>
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">Secure Payment</span>
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(0, 0, 0, 0.03)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span className="text-xs font-semibold text-gray-900">Protected</span>
                  <span className="text-xs text-green-600 font-semibold ml-auto">100% Safe</span>
                </div>
                <p className="text-xs text-gray-700">
                  All exchanges are monitored and protected by our security system.
                </p>
              </div>
            </div>
          </motion.div>
          </MagicBentoCard>

          {/* Card 5: Skill-First Platform */}
          <MagicBentoCard
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
            className="rounded-2xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
            }}
          >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Skill-First Platform</h3>
                <p className="text-sm text-gray-600">Built for seamless skill exchange.</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                  <FileText className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-xs text-gray-700">Exchanges</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  </div>
                </div>
                <span className="text-xs text-gray-700">Matching</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                  <Clock className="w-6 h-6 text-gray-700" />
                </div>
                <span className="text-xs text-gray-700">Credits</span>
              </div>
            </div>
          </motion.div>
          </MagicBentoCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
