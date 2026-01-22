'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Orb from '@/components/Orb';

// Lazy load heavy components for better performance
const ConditionalParticleField = dynamic(() => import('@/components/ConditionalParticleField'), {
  ssr: false,
  loading: () => null
});

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <div className="py-32 bg-white" />
});

const AppDownloadSection = dynamic(() => import('@/components/AppDownloadSection'), {
  loading: () => <div className="py-32 bg-white" />
});

const PartnersSection = dynamic(() => import('@/components/PartnersSection'), {
  loading: () => <div className="py-20 bg-white" />
});

const DashboardSection = dynamic(() => import('@/components/DashboardSection'), {
  loading: () => <div className="py-32 bg-white min-h-screen" />
});

const SkillsOrbitSection = dynamic(() => import('@/components/SkillsOrbitSection'), {
  loading: () => <div className="py-32" />
});

const HowItWorksSection = dynamic(() => import('@/components/HowItWorksSection'), {
  loading: () => <div className="py-32" />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="py-32" />
});

const CTASection = dynamic(() => import('@/components/CTASection'), {
  loading: () => <div className="py-32" />
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="py-32" />
});


const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="py-12" />
});

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Animated Particle Background - conditionally loaded on client */}
      <ConditionalParticleField />
      
      {/* Fixed Orb Background Animation - Sticky at background, behind all sections after hero */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-white">
        <div className="w-full h-full flex items-center justify-center">
          <div 
            className="w-[500px] h-[500px] max-w-[90vw] max-h-[90vh] relative"
            style={{
              filter: 'blur(15px)',
              WebkitFilter: 'blur(15px)',
            }}
          >
            <Orb
              hoverIntensity={2}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
              backgroundColor="#FFFFFF"
            />
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={null}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={null}>
          <AppDownloadSection />
        </Suspense>
        <Suspense fallback={null}>
          <PartnersSection />
        </Suspense>
        <Suspense fallback={null}>
          <DashboardSection />
        </Suspense>
        <Suspense fallback={null}>
          <SkillsOrbitSection />
        </Suspense>
        <Suspense fallback={null}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={null}>
          <CTASection />
        </Suspense>
        <Suspense fallback={null}>
          <FAQSection />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
