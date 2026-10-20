import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Calendar, MapPin, Mail, Clock, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface FooterProps {
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E5E5E2] pt-16 pb-24 lg:pb-12 text-[#5A5A57] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E5E5E2]">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-[#E5E5E0] p-1 flex items-center justify-center shadow-xs">
                <img src="/logo.png" alt="Brown Boys Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg tracking-tight text-[#121212] block">
                  BROWN BOYS
                </span>
                <span className="text-[11px] font-bold tracking-widest uppercase text-[#E5B824]">
                  Haircuts Unisex Salon
                </span>
              </div>
            </div>

            <p className="text-sm text-[#5A5A57] leading-relaxed mb-6">
              Brown Boys Haircuts Unisex Salon — Precision haircuts, grooming, and specialist hair treatments in Wentworthville, NSW.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-2xl bg-white hover:bg-[#FAF9F5] text-[#121212] hover:text-[#E5B824] border border-[#E5E5E0] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SALON_INFO.email}`}
                className="w-10 h-10 rounded-2xl bg-white hover:bg-[#FAF9F5] text-[#121212] hover:text-[#E5B824] border border-[#E5E5E0] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Email the Salon"
              >
                <Mail className="w-5 h-5" />
              </a>
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-10 h-10 rounded-2xl bg-[#E5B824] hover:bg-[#D0A415] text-black flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                  aria-label="Book Appointment"
                >
                  <Calendar className="w-5 h-5 text-black" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Navigation (2 cols) - Minimal and FAQ Removed */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#121212] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-[#121212] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#121212] transition-colors">Services & Pricing</a>
              </li>
              <li>
                <a href="#transformation" className="hover:text-[#121212] transition-colors">Hair Transformation</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#121212] transition-colors">Hair Treatments</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#121212] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#121212] transition-colors">About Salon</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#121212] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#121212] transition-colors">Hours & Contact</a>
              </li>
            </ul>
          </div>

          {/* Popular Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#121212] mb-4">
              Featured Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between">
                <span>Half Fade or Zero Fade</span>
                <span className="font-mono text-[#121212] font-bold">AUD $30</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Classic Cut</span>
                <span className="font-mono text-[#121212] font-bold">AUD $25</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Skin Fade</span>
                <span className="font-mono text-[#121212] font-bold">AUD $35</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Beard Trim & Razor</span>
                <span className="font-mono text-[#121212] font-bold">AUD $20</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Hair Botox Treatment</span>
                <span className="text-xs font-semibold text-[#E5B824]">Enquire</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Keratin Treatment</span>
                <span className="text-xs font-semibold text-[#E5B824]">Enquire</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Steam Facial</span>
                <span className="font-mono text-[#121212] font-bold">From $25</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Summary (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#121212] mb-4">
              Location & Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5B824] shrink-0 mt-0.5" />
                <span>Shop 2/53 Station Street, Wentworthville NSW 2145</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#E5B824] shrink-0 mt-0.5" />
                <div>
                  <p>Mon–Fri: 9:00 AM – 8:00 PM</p>
                  <p>Sat–Sun: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E5B824] shrink-0 mt-0.5" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#121212] break-all">
                  {SALON_INFO.email}
                </a>
              </div>
            </div>

            {onOpenBooking && (
              <div className="mt-5">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E5B824] hover:bg-[#D0A415] text-black font-extrabold text-xs py-3.5 px-4 rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>BOOK AN APPOINTMENT</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A5A57]">
          <p>
            &copy; {currentYear} Brown Boys Haircuts Unisex Salon. All rights reserved. Wentworthville, NSW, Australia.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#121212] transition-colors focus:outline-none cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
