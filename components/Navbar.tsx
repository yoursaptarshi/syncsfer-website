"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import GooeyNav from './GooeyNav';

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faq', label: "FAQ's" },
  { href: '#testimonials', label: 'Testimonials' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/logo.png');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div
        className={`mx-auto max-w-7xl rounded-3xl transition-all duration-300 ${
          isScrolled ? 'my-2 mx-4 py-3 px-6' : 'my-4 mx-6 py-4 px-8'
        }`}
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          background: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
        }}
      >
        <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
        >
          {!logoError ? (
            <Image 
              src={logoSrc} 
              alt="Syncsfer Logo" 
              width={180}
              height={60}
              className="h-14 w-auto object-contain"
              priority
              onError={() => {
                // Try alternative formats
                if (logoSrc.includes('/logo.png')) {
                  setLogoSrc('/logo.svg');
                } else if (logoSrc.includes('/logo.svg')) {
                  setLogoSrc('/logo.jpg');
                } else if (logoSrc.includes('/logo.jpg')) {
                  setLogoSrc('/logo.webp');
                } else {
                  setLogoError(true);
                }
              }}
            />
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-[hsl(5_30%_50%)] flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Syncsfer</span>
            </div>
          )}
        </motion.a>

        {/* Desktop Navigation with Gooey Nav */}
        <div className="hidden md:flex items-center">
          <GooeyNav
            items={navLinks.map(link => ({ label: link.label, href: link.href }))}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <motion.a
            href="#cta"
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
            style={{
              backdropFilter: 'blur(10px) saturate(180%)',
              WebkitBackdropFilter: 'blur(10px) saturate(180%)',
              background: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
              color: 'white',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.15)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.getElementById('cta');
              if (targetElement) {
                const headerOffset = 100;
                const startPosition = window.pageYOffset;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const targetPosition = elementPosition + startPosition - headerOffset;
                const distance = targetPosition - startPosition;
                const duration = Math.max(800, Math.min(1500, Math.abs(distance) * 0.8));
                const startTime = performance.now();

                const easeInOutCubic = (t: number) => {
                  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };

                const animateScroll = (currentTime: number) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const easedProgress = easeInOutCubic(progress);
                  const currentPosition = startPosition + distance * easedProgress;

                  window.scrollTo(0, currentPosition);

                  if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                  }
                };

                requestAnimationFrame(animateScroll);
              }
            }}
          >
            Join Waitlist
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
            className="md:hidden text-gray-900 p-2 hover:text-gray-700 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 mx-4 rounded-2xl overflow-hidden"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
            }}
          >
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-900 hover:text-gray-700 transition-colors py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const targetId = link.href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      const headerOffset = 100;
                      const startPosition = window.pageYOffset;
                      const elementPosition = targetElement.getBoundingClientRect().top;
                      const targetPosition = elementPosition + startPosition - headerOffset;
                      const distance = targetPosition - startPosition;
                      const duration = Math.max(800, Math.min(1500, Math.abs(distance) * 0.8));
                      const startTime = performance.now();

                      const easeInOutCubic = (t: number) => {
                        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                      };

                      const animateScroll = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easedProgress = easeInOutCubic(progress);
                        const currentPosition = startPosition + distance * easedProgress;

                        window.scrollTo(0, currentPosition);

                        if (progress < 1) {
                          requestAnimationFrame(animateScroll);
                        }
                      };

                      requestAnimationFrame(animateScroll);
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                className="px-6 py-3 rounded-full text-center font-semibold text-white transition-all duration-300 mt-4"
                style={{
                  backdropFilter: 'blur(10px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(10px) saturate(180%)',
                  background: 'linear-gradient(135deg, hsl(0 25% 40%), hsl(5 30% 50%))',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  const targetElement = document.getElementById('cta');
                  if (targetElement) {
                    const headerOffset = 100;
                    const startPosition = window.pageYOffset;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const targetPosition = elementPosition + startPosition - headerOffset;
                    const distance = targetPosition - startPosition;
                    const duration = Math.max(800, Math.min(1500, Math.abs(distance) * 0.8));
                    const startTime = performance.now();

                    const easeInOutCubic = (t: number) => {
                      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    };

                    const animateScroll = (currentTime: number) => {
                      const elapsed = currentTime - startTime;
                      const progress = Math.min(elapsed / duration, 1);
                      const easedProgress = easeInOutCubic(progress);
                      const currentPosition = startPosition + distance * easedProgress;

                      window.scrollTo(0, currentPosition);

                      if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                      }
                    };

                    requestAnimationFrame(animateScroll);
                  }
                }}
              >
                Join Waitlist
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
