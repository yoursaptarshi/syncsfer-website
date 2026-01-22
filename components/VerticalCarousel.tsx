"use client";

import { motion } from 'framer-motion';
import { Code, Palette, Video, PenTool, Music, Camera, Brain, TrendingUp } from 'lucide-react';

const carouselItems = [
  {
    type: 'Skill Exchange',
    icon: Code,
    title: 'Web Development',
    description: 'Build responsive websites and web applications with React & Node.js',
    credits: '3 credits/hour',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'Active Trade',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create stunning user interfaces and seamless user experiences',
    credits: '2 credits/hour',
    color: 'from-pink-500 to-rose-500',
  },
  {
    type: 'New Listing',
    icon: Video,
    title: 'Video Editing',
    description: 'Professional video editing for YouTube, TikTok & social media',
    credits: '2 credits/hour',
    color: 'from-purple-500 to-violet-500',
  },
  {
    type: 'Popular',
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Learn AI fundamentals, ChatGPT integration & prompt engineering',
    credits: '4 credits/hour',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    type: 'Skill Exchange',
    icon: PenTool,
    title: 'Copywriting',
    description: 'Compelling copy that converts for ads, websites & email campaigns',
    credits: '2 credits/hour',
    color: 'from-amber-500 to-orange-500',
  },
  {
    type: 'Trending',
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'SEO, social media strategy & paid advertising mastery',
    credits: '3 credits/hour',
    color: 'from-red-500 to-pink-500',
  },
  {
    type: 'New Listing',
    icon: Music,
    title: 'Music Production',
    description: 'Create beats, mix tracks & master audio for any genre',
    credits: '3 credits/hour',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    type: 'Popular',
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography techniques for portraits & products',
    credits: '2 credits/hour',
    color: 'from-cyan-500 to-blue-500',
  },
];

const VerticalCarousel = () => {
  // Double items for seamless loop
  const items = [...carouselItems, ...carouselItems];

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <motion.div
        className="flex flex-col gap-4"
        animate={{
          y: [0, -50 * carouselItems.length * 4],
        }}
        transition={{
          y: {
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            whileHover={{ scale: 1.02, x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div 
              className="rounded-2xl p-5 transition-all duration-300 cursor-pointer w-[320px] md:w-[360px]"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-700 uppercase tracking-wider">
                  {item.type}
                </span>
                <span 
                  className="text-xs font-semibold text-gray-900 px-2 py-1 rounded-full"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {item.credits}
                </span>
              </div>

              {/* Content */}
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-1 truncate">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => {
                    // Generate different image IDs for variety (using index and i to create unique combinations)
                    const imageId = ((index * 3 + i) % 70) + 1;
                    return (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full overflow-hidden border-2 flex-shrink-0"
                        style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}
                      >
                        <img 
                          src={`https://i.pravatar.cc/150?img=${imageId}`}
                          alt={`Learner ${i + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    );
                  })}
                </div>
                <span className="text-xs text-gray-700">
                  +{12 + index} learners
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalCarousel;
