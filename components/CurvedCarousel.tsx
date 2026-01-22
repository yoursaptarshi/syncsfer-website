"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, MotionValue } from 'framer-motion';

interface CurvedCarouselProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean; // If true, scrolls right to left
  autoScroll?: boolean; // Enable automatic scrolling
  speed?: number; // Scroll speed (pixels per frame)
}

interface CarouselItemProps {
  children: React.ReactNode;
  index: number;
  totalItems: number;
  scrollX: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const CarouselItem = ({ children, index, totalItems, scrollX, containerRef }: CarouselItemProps) => {
  // Straight carousel - no 3D transforms
  return (
    <div className="flex-shrink-0">
      {children}
    </div>
  );
};

const CurvedCarousel = ({ 
  children, 
  className = '', 
  reverse = false,
  autoScroll = true,
  speed = 0.5
}: CurvedCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const animationRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  const childrenArray = Array.isArray(children) ? children : [children];
  const totalItems = childrenArray.length;
  
  // Duplicate items for seamless infinite scroll
  const duplicatedChildren = [...childrenArray, ...childrenArray];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const offsetWidth = containerRef.current.offsetWidth;
        setWidth(Math.max(0, scrollWidth - offsetWidth));
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [children]);

  // Auto-scroll animation
  useEffect(() => {
    if (!autoScroll || width === 0) return;

    const itemWidth = 700; // Card width + gap (650px card + 50px gap)
    const singleSetWidth = totalItems * itemWidth;

    const animate = () => {
      if (isPausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const current = x.get();
      let newX: number;

      if (reverse) {
        // Scroll right to left (increasing x value)
        newX = current + speed;
        // When we've scrolled through one set of items, reset to the start position
        if (newX > 0) {
          newX = -singleSetWidth; // Reset to start of first set
        }
      } else {
        // Scroll left to right (decreasing x value)
        newX = current - speed;
        // When we've scrolled through one set of items, reset to the start position
        if (newX < -singleSetWidth) {
          newX = 0; // Reset to start of first set
        }
      }

      x.set(newX);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll, width, speed, reverse, x, totalItems]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY;
    const current = x.get();
    const itemWidth = 700;
    const singleSetWidth = totalItems * itemWidth;
    const newX = Math.max(-singleSetWidth, Math.min(0, current - delta * 0.5));
    x.set(newX);
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-visible ${className}`}
      onWheel={handleWheel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex gap-[50px] cursor-grab active:cursor-grabbing"
        style={{ x: springX }}
        drag="x"
        dragConstraints={{ left: -width, right: 0 }}
        dragElastic={0.1}
        onDragStart={() => { isPausedRef.current = true; }}
        onDragEnd={() => { isPausedRef.current = false; }}
      >
        {duplicatedChildren.map((child, index) => (
          <CarouselItem
            key={index}
            index={index}
            totalItems={duplicatedChildren.length}
            scrollX={springX}
            containerRef={containerRef}
          >
            {child}
          </CarouselItem>
        ))}
      </motion.div>
    </div>
  );
};

export default CurvedCarousel;
