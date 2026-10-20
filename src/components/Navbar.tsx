import React, { useState, useEffect } from 'react';
import { getSydneyStatus } from '../utils/hoursUtil';
import type { SalonStatus } from '../utils/hoursUtil';
import { Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<SalonStatus>(getSydneyStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getSydneyStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  // Streamlined, clean, single-word links that never wrap or crowd the navbar
  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Transformations', href: '#transformation' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E5E5E2] shadow-sm py-2.5 sm:py-3'
          : 'bg-white/85 backdrop-blur-sm border-b border-[#E5E5E2]/50 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-[#FAF9F5] border border-[#E5E5E0] group-hover:border-[#E5B824] transition-colors p-1 flex items-center justify-center shadow-2xs">
              <img
                src="/logo.png"
                alt="Brown Boys Haircuts Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#121212] flex items-center gap-1.5 whitespace-nowrap leading-tight">
                BROWN BOYS
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5B824] inline-block"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#888884] whitespace-nowrap">
                Unisex Salon
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Desktop (Streamlined, minimal, whitespace-nowrap) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-semibold text-[#5A5A57] hover:text-[#121212] hover:bg-[#F3F3F0] rounded-full transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Status Pill & Book Appointment Modal Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Live Open/Closed indicator */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border whitespace-nowrap ${
                status.isOpen
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-[#F3F3F0] border-[#E5E5E2] text-[#5A5A57]'
              }`}
              title={`Sydney local time: ${status.sydneyTimeDisplay}`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
                }`}
              />
              <span>{status.statusText}</span>
            </div>

            {/* Direct Booking Modal Button */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#E5B824] hover:bg-[#D0A415] text-black font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95 cursor-pointer whitespace-nowrap"
              id="header-booking-btn"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border whitespace-nowrap ${
                status.isOpen
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                  : 'bg-[#F3F3F0] border-[#E5E5E2] text-[#5A5A57]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
                }`}
              />
              <span>{status.statusText}</span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#121212] hover:bg-[#F3F3F0] rounded-xl transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-[#E5E5E2] px-5 py-6 animate-fadeIn transition-all shadow-xl">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-sm font-semibold text-[#121212] hover:bg-[#F3F3F0] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#E5E5E2] space-y-3">
              <div className="flex items-center justify-between text-xs text-[#5A5A57] px-3">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E5B824]" />
                  Sydney Time:
                </span>
                <span className="font-semibold text-[#121212]">{status.sydneyTimeDisplay}</span>
              </div>

              <div className="text-xs text-[#5A5A57] px-3 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E5B824]" />
                Wentworthville, NSW 2145
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#E5B824] text-black font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book Appointment</span>
              </button>

              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#F3F3F0] text-[#121212] border border-[#E5E5E2] font-semibold py-2.5 px-4 rounded-xl text-xs"
              >
                <InstagramIcon className="w-4 h-4 text-[#E5B824]" />
                <span>Follow on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
