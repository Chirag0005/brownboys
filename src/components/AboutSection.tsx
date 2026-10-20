import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Calendar, CheckCircle, ExternalLink } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-24 bg-white relative border-t border-b border-[#E5E5E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Salon Interior Photo & Details Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E2] shadow-xl group bg-white">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src="/images/about-salon.jpg"
                  alt="Brown Boys Haircuts Unisex Salon interior in Wentworthville NSW"
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Address Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E2] shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E5B824] text-black flex items-center justify-center shrink-0 font-bold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#121212] uppercase tracking-wider">Wentworthville Plaza Precinct</p>
                    <p className="text-xs text-[#5A5A57]">{SALON_INFO.address.full}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E5E5E0] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5B824]"></span>
              <span className="text-xs font-bold tracking-widest text-[#E5B824] uppercase">
                ABOUT THE SALON
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight mb-6">
              YOUR LOCAL STYLE DESTINATION.
            </h2>

            {/* Exact Client Supplied Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#5A5A57] leading-relaxed mb-8">
              <p>
                Brown Boys Haircuts Unisex Salon is located in Wentworthville, New South Wales, offering haircuts, beard grooming, colouring, and specialist hair treatments.
              </p>
              <p>
                Whether you're looking for a fresh fade, a classic haircut, or a new hair treatment, explore the services available and choose the option that suits your style.
              </p>
              <p>
                With walk-in visits welcome and online booking available, visiting the salon is simple and convenient.
              </p>
            </div>

            {/* Verified Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0]">
                <CheckCircle className="w-5 h-5 text-[#E5B824] shrink-0" />
                <span className="text-sm font-semibold text-[#121212]">Walk-ins Welcome Every Day</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0]">
                <CheckCircle className="w-5 h-5 text-[#E5B824] shrink-0" />
                <span className="text-sm font-semibold text-[#121212]">Instant Online Booking Available</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0]">
                <CheckCircle className="w-5 h-5 text-[#E5B824] shrink-0" />
                <span className="text-sm font-semibold text-[#121212]">Open 7 Days in Wentworthville</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0]">
                <CheckCircle className="w-5 h-5 text-[#E5B824] shrink-0" />
                <span className="text-sm font-semibold text-[#121212]">Men, Women & Children Grooming</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-[#E5B824] hover:bg-[#D0A415] text-black font-extrabold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF9F5] text-[#121212] border border-[#E5E5E2] font-bold text-sm px-6 py-3.5 rounded-full transition-colors shadow-2xs"
              >
                <MapPin className="w-4 h-4 text-[#E5B824]" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#5A5A57]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
