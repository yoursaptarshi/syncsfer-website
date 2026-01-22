"use client";

import { motion } from 'framer-motion';
import { 
  Sparkles,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Loader2
} from 'lucide-react';
import Particles from './Particles';

const features = [
  {
    icon: Sparkles,
    title: 'Magic Matching',
    subtitle: 'Find your perfect skill partner',
    description: 'Our AI analyzes your skills, interests, and goals to connect you with ideal exchange partners instantly.',
    uiExample: (
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
            JD
          </div>
          <div className="flex-1">
            <div className="h-2 bg-white/20 rounded mb-1 w-3/4"></div>
            <div className="h-2 bg-white/10 rounded w-1/2"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            ✓
          </div>
        </div>
        <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <div className="text-xs text-purple-300 mb-1">AI Match Found</div>
          <div className="text-xs text-white/80">"Perfect match! 95% skill compatibility..."</div>
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'Instant Exchange',
    subtitle: 'Start learning in seconds',
    description: 'No waiting, no delays. Connect, agree on terms, and begin your skill exchange immediately.',
    uiExample: (
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-xs text-white/60 mb-2">Upload Skill</div>
            <ArrowRight className="w-4 h-4 text-white/40 mx-auto" />
            <div className="mt-2 p-2 rounded bg-white/10 border border-white/10">
              <div className="text-xs text-white/80">1. Review match</div>
              <div className="text-xs text-white/80">2. Confirm exchange</div>
              <div className="text-xs text-white/80">3. Start learning</div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            ✓
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: 'Smart Community',
    subtitle: 'Learn from verified experts',
    description: 'Join a trusted network of skilled professionals. Every member is verified and rated.',
    uiExample: (
      <div className="mt-6 space-y-2">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500"></div>
            <div className="flex-1">
              <div className="h-2 bg-white/20 rounded mb-1 w-full"></div>
              <div className="h-2 bg-white/10 rounded w-2/3"></div>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs">Verified</div>
            <div className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-xs">Expert</div>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-2">
            <Loader2 className="w-3 h-3 text-white/40 animate-spin" />
            <div className="text-xs text-white/60">Connecting to community...</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Growth Tracking',
    subtitle: 'See your progress evolve',
    description: 'Track your skill development with detailed insights and personalized feedback.',
    uiExample: (
      <div className="mt-6 space-y-3">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-xs text-white/80 mb-2">"Excellent progress on JavaScript! Your understanding of async/await has improved significantly. Consider exploring..."</div>
          <div className="flex gap-2 mt-2">
            <div className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs">Insightful</div>
            <div className="px-2 py-1 rounded bg-pink-500/20 text-pink-300 text-xs">Encouraging</div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    ),
  },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="relative py-32 overflow-hidden bg-black">
      {/* Particle Animation Background */}
      <div className="absolute inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Subtle gradient overlays */}
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Reimagine Your <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            More than just tools. It's a whole new way to experience skill exchange.
          </p>
        </motion.div>

        {/* Features Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-6 relative"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
              }}
              whileHover={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                scale: 1.02,
              }}
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30">
                  <feature.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>

              {/* Subtitle */}
              <p className="text-2xl font-semibold text-white mb-3">{feature.subtitle}</p>

              {/* Description */}
              <p className="text-white/70 text-sm mb-4 leading-relaxed">{feature.description}</p>

              {/* UI Example */}
              {feature.uiExample}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
