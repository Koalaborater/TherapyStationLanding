'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {/* WhatsApp — bottom-left */}
      <a
        href="https://wa.me/8801348134933"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-13 h-13 rounded-full transition-all duration-250 active:scale-95 hover:scale-105"
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: '#25D366',
          boxShadow: '0 4px 16px rgba(37,211,102,0.45)',
        }}
      >
        <MessageCircle size={22} strokeWidth={2} color="#fff" />
      </a>

      {/* Scroll to top — bottom-right, appears after 400px */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 hover:scale-105"
        style={{
          width: '52px',
          height: '52px',
          backgroundColor: 'var(--color-primary)',
          boxShadow: 'var(--shadow-md)',
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        <ArrowUp size={20} strokeWidth={2.5} color="#fff" />
      </button>
    </>
  );
}
