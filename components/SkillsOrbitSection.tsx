"use client";

import { motion } from 'framer-motion';
import { 
  Palette, 
  Code, 
  Brain, 
  PenTool, 
  Video, 
  Music, 
  TrendingUp,
  Camera,
  Globe,
  Lightbulb,
  Cpu,
  MessageSquare,
  ArrowRight,
  Users,
  Coins
} from 'lucide-react';
import CardSwap, { Card } from './CardSwap';

const orbitSkills = [
  { icon: Code, label: 'Development', angle: 0 },
  { icon: Palette, label: 'Design', angle: 60 },
  { icon: Brain, label: 'AI', angle: 120 },
  { icon: Video, label: 'Video', angle: 180 },
  { icon: Music, label: 'Audio', angle: 240 },
  { icon: TrendingUp, label: 'Marketing', angle: 300 },
];

const innerOrbitSkills = [
  { icon: PenTool, label: 'Writing', angle: 0 },
  { icon: Camera, label: 'Photo', angle: 90 },
  { icon: Globe, label: 'Languages', angle: 180 },
  { icon: Lightbulb, label: 'Strategy', angle: 270 },
];

const outerOrbitSkills = [
  { icon: Cpu, label: 'Tech', angle: 45 },
  { icon: MessageSquare, label: 'Consulting', angle: 225 },
];

interface OrbitingIconProps {
  icon: React.ElementType;
  label: string;
  radius: number;
  duration: number;
  startAngle: number;
  reverse?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const OrbitingIcon = ({ 
  icon: Icon, 
  label, 
  radius, 
  duration, 
  startAngle, 
  reverse = false,
  size = 'md' 
}: OrbitingIconProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10 md:w-12 md:h-12',
    md: 'w-12 h-12 md:w-14 md:h-14',
    lg: 'w-14 h-14 md:w-16 md:h-16',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
  };

  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
      }}
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <motion.div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          x: Math.cos((startAngle * Math.PI) / 180) * radius - (size === 'lg' ? 28 : size === 'md' ? 24 : 20),
          y: Math.sin((startAngle * Math.PI) / 180) * radius - (size === 'lg' ? 28 : size === 'md' ? 24 : 20),
        }}
        animate={{
          rotate: reverse ? 360 : -360,
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div 
          className={`${sizeClasses[size]} rounded-xl bg-white/5 border border-white/20 shadow-lg flex items-center justify-center group cursor-pointer transition-all duration-300`}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'hsl(0 25% 40% / 0.5)';
            e.currentTarget.style.boxShadow = '0 0 20px hsl(0 25% 40% / 0.2), 0 0 40px hsl(0 25% 40% / 0.1)';
            const icon = e.currentTarget.querySelector('svg');
            if (icon) icon.style.color = 'hsl(0 25% 40%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '';
            e.currentTarget.style.boxShadow = '';
            const icon = e.currentTarget.querySelector('svg');
            if (icon) icon.style.color = '';
          }}
        >
          <Icon 
            className={`${iconSizes[size]} text-gray-600 transition-colors`}
          />
        </div>
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
};

const SkillsOrbitSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            className="text-sm uppercase tracking-widest font-semibold"
            style={{ color: 'hsl(0 25% 40%)' }}
          >
            Skill Universe
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-gray-900">
            Your Skills <span 
              style={{
                backgroundImage: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              In Orbit
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect with a universe of talents. Every skill orbits around opportunity.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Orbit Container */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Central Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="absolute z-20"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 w-28 h-28 md:w-36 md:h-36 rounded-full blur-xl animate-pulse" 
                style={{ backgroundColor: 'hsl(0 25% 40% / 0.3)' }}
              />
              
              {/* Avatar Container */}
              <div 
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-1"
                style={{
                  background: 'linear-gradient(to bottom right, hsl(0 25% 40%), hsl(5 30% 50%))',
                  boxShadow: '0 0 20px hsl(0 25% 40% / 0.4), 0 0 40px hsl(0 25% 40% / 0.2), 0 0 60px hsl(0 25% 40% / 0.1)',
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    S
                  </span>
                </div>
              </div>

              {/* Pulse Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: 'hsl(0 25% 40% / 0.3)' }}
                animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: 'hsl(0 25% 40% / 0.3)' }}
                animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Inner Orbit Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-gray-200"
          />
          
          {/* Inner Orbit Skills */}
          {innerOrbitSkills.map((skill) => (
            <OrbitingIcon
              key={skill.label}
              icon={skill.icon}
              label={skill.label}
              radius={120}
              duration={20}
              startAngle={skill.angle}
              reverse={false}
              size="sm"
            />
          ))}

          {/* Middle Orbit Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] rounded-full border border-gray-200"
          />
          
          {/* Middle Orbit Skills */}
          {orbitSkills.map((skill) => (
            <OrbitingIcon
              key={skill.label}
              icon={skill.icon}
              label={skill.label}
              radius={180}
              duration={30}
              startAngle={skill.angle}
              reverse={true}
              size="md"
            />
          ))}

          {/* Outer Orbit Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute w-[480px] h-[480px] md:w-[580px] md:h-[580px] rounded-full border border-gray-200 hidden md:block"
          />
          
          {/* Outer Orbit Skills - Desktop only */}
          <div className="hidden md:block">
            {outerOrbitSkills.map((skill) => (
              <OrbitingIcon
                key={skill.label}
                icon={skill.icon}
                label={skill.label}
                radius={240}
                duration={45}
                startAngle={skill.angle}
                reverse={false}
                size="lg"
              />
            ))}
          </div>

          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                left: `${25 + (i * 4.5)}%`,
                top: `${20 + ((i * 5) % 60)}%`,
                backgroundColor: 'hsl(0 25% 40% / 0.4)',
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + (i * 0.3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
          </div>

          {/* Right: Card Swap */}
          <div className="relative" style={{ height: '500px', minHeight: '500px' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {/* Skill Exchange Card */}
              <Card
                customClass="p-8 flex flex-col justify-between"
                style={{
                  background: 'rgba(255, 255, 255, 1)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Skill Exchange</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Connect with skilled professionals and exchange expertise. Trade your knowledge for new skills in a seamless, peer-to-peer learning experience.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-purple-400 mt-6">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>

              {/* Virtual Space Card */}
              <Card
                customClass="p-8 flex flex-col justify-between"
                style={{
                  background: 'rgba(255, 255, 255, 1)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Virtual Space</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Learn and teach from anywhere in the world. Our virtual spaces provide immersive environments for skill exchange, breaking down geographical barriers.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-blue-400 mt-6">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>

              {/* Skill to Skill Currency Card */}
              <Card
                customClass="p-8 flex flex-col justify-between"
                style={{
                  background: 'rgba(255, 255, 255, 1)',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                <div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mb-6">
                    <Coins className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Skill to Skill Currency</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Earn credits by teaching skills and spend them to learn new ones. A fair, time-based economy that values knowledge exchange over monetary transactions.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-green-400 mt-6">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </CardSwap>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-600 mt-12"
        >
          <span 
            className="font-semibold"
            style={{ color: 'hsl(0 25% 40%)' }}
          >
            12+ skill categories
          </span> orbiting around you, 
          ready to be exchanged
        </motion.p>
      </div>
    </section>
  );
};

export default SkillsOrbitSection;
