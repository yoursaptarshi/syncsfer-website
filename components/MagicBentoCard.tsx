"use client";

import React, { useRef, useEffect, useCallback } from 'react';
import { gsap } from 'gsap';

interface MagicBentoCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  enableStars?: boolean;
  enableBorderGlow?: boolean;
  enableSpotlight?: boolean;
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  particleCount?: number;
  glowColor?: string;
  spotlightRadius?: number;
  disableAnimations?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 6; // Reduced from 12 for better performance
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '132, 0, 255';

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

export const MagicBentoCard: React.FC<MagicBentoCardProps> = ({
  children,
  className = '',
  style,
  enableStars = true,
  enableBorderGlow = true,
  enableSpotlight = true,
  enableTilt = false,
  enableMagnetism = false,
  clickEffect = true,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  disableAnimations = false
}) => {
  // Performance optimization: detect mobile and reduce effects
  const isMobile = typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Disable heavy effects on mobile or when reduced motion is preferred
  const effectiveDisableAnimations = disableAnimations || isMobile || prefersReducedMotion;
  const effectiveParticleCount = (isMobile || prefersReducedMotion) ? 0 : particleCount;
  const effectiveEnableStars = !effectiveDisableAnimations && enableStars;
  const effectiveEnableSpotlight = !effectiveDisableAnimations && enableSpotlight;
  
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current || effectiveParticleCount === 0) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: effectiveParticleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [effectiveParticleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (effectiveDisableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    // Add CSS variables for border glow
    if (enableBorderGlow && !effectiveDisableAnimations) {
      element.style.setProperty('--glow-x', '50%');
      element.style.setProperty('--glow-y', '50%');
      element.style.setProperty('--glow-intensity', '0');
      element.style.setProperty('--glow-radius', `${spotlightRadius}px`);
      element.style.setProperty('--glow-color', glowColor);
    }

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      if (effectiveEnableStars) {
        animateParticles();
      }

      if (enableBorderGlow && !effectiveDisableAnimations) {
        // Set a strong base glow intensity on hover
        element.style.setProperty('--glow-intensity', '1.0');
      }

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      if (enableStars) {
        clearAllParticles();
      }

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableBorderGlow) {
        // Keep a visible base glow even when not hovering
        element.style.setProperty('--glow-intensity', '0.3');
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (effectiveDisableAnimations || (!enableTilt && !enableMagnetism && !enableBorderGlow && !effectiveEnableSpotlight)) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt && !effectiveDisableAnimations) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism && !effectiveDisableAnimations) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if ((enableBorderGlow || effectiveEnableSpotlight) && !effectiveDisableAnimations) {
        const distance = Math.hypot(x - centerX, y - centerY);
        const maxDistance = Math.hypot(centerX, centerY);
        // Much stronger glow intensity - make it very visible
        const glow = Math.max(0, 1.8 - distance / (maxDistance * 0.5));
        updateCardGlowProperties(element, e.clientX, e.clientY, Math.min(glow, 1.5), spotlightRadius);
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, effectiveDisableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor, effectiveEnableStars, enableBorderGlow, effectiveEnableSpotlight, spotlightRadius]);

  const borderGlowClass = enableBorderGlow ? 'magic-bento-border-glow' : '';
  const combinedClassName = `${className} ${borderGlowClass} relative overflow-hidden`.trim();

  useEffect(() => {
    if (!enableBorderGlow) return;
    
    const styleId = 'magic-bento-styles';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .magic-bento-border-glow::after {
        content: '';
        position: absolute;
        inset: 0;
        padding: 4px;
        background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(var(--glow-color), calc(var(--glow-intensity) * 1.5)) 0%,
            rgba(var(--glow-color), calc(var(--glow-intensity) * 1.2)) 15%,
            rgba(var(--glow-color), calc(var(--glow-intensity) * 0.9)) 30%,
            rgba(var(--glow-color), calc(var(--glow-intensity) * 0.6)) 50%,
            transparent 75%);
        border-radius: inherit;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        pointer-events: none;
        opacity: calc(var(--glow-intensity) * 2);
        transition: opacity 0.15s ease;
        z-index: 1;
        filter: blur(1px);
      }
      
      .magic-bento-border-glow:hover::after {
        opacity: calc(var(--glow-intensity) * 3);
        filter: blur(1.5px);
      }
      
      .magic-bento-border-glow:hover {
        box-shadow: 0 8px 40px rgba(46, 24, 78, 0.8), 0 0 60px rgba(var(--glow-color), calc(var(--glow-intensity) * 0.8)), 0 0 100px rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4));
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, [enableBorderGlow]);

  return (
    <div
      ref={cardRef}
      className={combinedClassName}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
        '--glow-color': glowColor,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
