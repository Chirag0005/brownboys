import React, { useState, useEffect } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Calendar, Navigation, X } from 'lucide-react';

interface FloatingMobileBookingProps {
  onOpenBooking?: () => void;
}

export const FloatingMobileBooking: React.FC<FloatingMobileBookingProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <aside
      aria-label="Quick Booking"
      className="lg:hidden fixed bottom-4 left-4 right-4 z-40 animate-slideUp transition-all duration-300"
    >
      <div className="relative bg-white/95 backdrop-blur-xl border border-[#E5E5E2] rounded-2xl p-2.5 shadow-2xl flex items-center justify-between gap-2.5">
        {/* Dismiss Button */}
        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          className="p-1.5 rounded-full text-[#888884] hover:text-[#121212] hover:bg-[#FAF9F5] transition-colors focus:outline-none"
          aria-label="Dismiss quick booking bar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Directions Action */}
        <a
          href={SALON_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#FAF9F5] hover:bg-white text-[#121212] text-xs font-bold py-3 px-3 rounded-xl border border-[#E5E5E0] transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-[#E5B824]" />
          <span>Directions</span>
        </a>

        {/* Primary Booking Modal CTA */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-[2] flex items-center justify-center gap-2 bg-[#E5B824] active:bg-[#D0A415] text-black text-xs font-extrabold py-3 px-4 rounded-xl shadow-md transition-transform active:scale-95 text-center cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span>BOOK APPOINTMENT</span>
        </button>
      </div>
    </aside>
  );
};
