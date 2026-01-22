'use client';

import { useEffect, useState } from 'react';
import ParticleField from './ParticleField';

export default function ConditionalParticleField() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Performance detection - disable on mobile/low-end devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Type-safe check for deviceMemory (experimental API)
    const nav = navigator as Navigator & { deviceMemory?: number };
    const isLowEndDevice = 
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) ||
      (nav.deviceMemory && nav.deviceMemory < 4);
    
    // Only render on desktop with good hardware
    setShouldRender(!isMobile && !isLowEndDevice);
  }, []);

  if (!shouldRender) return null;
  return <ParticleField />;
}
