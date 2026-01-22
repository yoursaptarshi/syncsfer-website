"use client";

import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  BookOpen, 
  TrendingUp, 
  FileText, 
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Search,
  MessageSquare,
  Clock,
  Award,
  FolderOpen
} from 'lucide-react';
import { MagicBentoCard } from './MagicBentoCard';

const dashboardCards = [
  {
    icon: Zap,
    title: 'Create Skill Exchange',
    description: 'Start a new skill exchange with AI matching',
    color: 'from-purple-500 to-pink-500',
    action: 'Create',
  },
  {
    icon: BookOpen,
    title: 'Manage Your Skills',
    description: 'View and update your skill listings',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Active Exchanges',
    description: 'Track your ongoing skill exchanges',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Skill Analytics',
    description: 'View your exchange statistics',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FileText,
    title: 'Exchange History',
    description: 'Review past skill exchanges',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Award,
    title: 'Earned Credits',
    description: 'Track your time credits balance',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: FolderOpen,
    title: 'Skill Library',
    description: 'Browse available skills to learn',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: MessageSquare,
    title: 'Messages',
    description: 'Chat with exchange partners',
    color: 'from-pink-500 to-rose-500',
  },
];

const DashboardSection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-transparent min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        {/* Glassmorphic Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 lg:p-8"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
          }}
        >
          <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Left Sidebar - Glassmorphic */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-2xl p-5 h-full min-h-[500px] flex flex-col"
                style={{
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Branding */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">Syncsfer</h2>
                      <p className="text-xs text-gray-600">v1.0</p>
                    </div>
                  </div>
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold text-gray-900 mt-2"
                    style={{
                      background: 'rgba(0, 0, 0, 0.05)',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Award className="w-3 h-3" />
                    Premium
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-1.5">
                  {[
                    { icon: BarChart3, label: 'Dashboard', active: true },
                    { icon: Search, label: 'Browse Skills', active: false },
                    { icon: FileText, label: 'My Exchanges', active: false },
                    { icon: MessageSquare, label: 'Messages', active: false },
                    { icon: Clock, label: 'History', active: false },
                    { icon: Settings, label: 'Settings', active: false },
                  ].map((item, index) => (
                    <motion.a
                      key={item.label}
                      href="#"
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        item.active
                          ? 'text-gray-900'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    style={
                      item.active
                        ? {
                            background: 'rgba(0, 0, 0, 0.05)',
                            border: '1px solid rgba(0, 0, 0, 0.1)',
                          }
                        : {}
                    }
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </motion.a>
                  ))}
                </nav>

                {/* User Profile */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">User Profile</p>
                      <p className="text-xs text-gray-600">Member</p>
                    </div>
                  </div>
                  <motion.button
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:text-gray-900 transition-colors w-full"
                    whileHover={{ x: 5 }}
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="font-medium text-sm">Sign Out</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="lg:col-span-9">
              {/* Welcome Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <h1 className="text-3xl font-bold mb-2" style={{ color: '#8B5CF6' }}>
                  Welcome back, User
                </h1>
                <p className="text-gray-600 text-base">
                  What would you like to do today?
                </p>
              </motion.div>

              {/* Dashboard Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dashboardCards.map((card, index) => (
                  <MagicBentoCard
                    key={card.title}
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
                    className="p-5 cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-3`}>
                      <card.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {card.description}
                    </p>
                    {card.action && (
                      <motion.button
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white flex items-center gap-2"
                        style={{
                          background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        {card.action}
                      </motion.button>
                    )}
                  </motion.div>
                  </MagicBentoCard>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
