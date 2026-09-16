'use client';

import { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 8;
    const rotateY = (x - 0.5) * 8;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
    const shine = el.querySelector('.card-shine') as HTMLElement | null;
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(26,122,74,0.07) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
    const shine = el.querySelector('.card-shine') as HTMLElement | null;
    if (shine) shine.style.background = 'transparent';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-150 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      <div
        className="card-shine absolute inset-0 pointer-events-none transition-all duration-200"
        style={{ borderRadius: 'inherit' }}
      />
    </div>
  );
}
