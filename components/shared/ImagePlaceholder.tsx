import type { LucideIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  bg: string;
  icon: LucideIcon;
  alt: string;
  className?: string;
}

export function ImagePlaceholder({
  bg,
  icon: Icon,
  alt,
  className = 'aspect-[4/3]',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden flex items-center justify-center ${className}`}
      style={{ backgroundColor: bg }}
      aria-label={alt}
      role="img"
    >
      {/* Decorative dot grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(26,122,74,0.18) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Soft radial glow */}
      <div
        className="absolute w-2/3 aspect-square rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.7) 0%, transparent 70%)',
        }}
      />
      {/* Icon badge */}
      <div
        className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white"
        style={{ boxShadow: 'var(--shadow-md)' }}
      >
        <Icon size={40} strokeWidth={1.3} style={{ color: 'var(--color-primary)' }} />
      </div>
    </div>
  );
}
