import React from 'react';
import { Calendar, ArrowDown, Scissors, Sparkles, CheckCircle2, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-white">
      {/* Subtle Warm Minimal Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5B824]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Category Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-[#E5E5E0] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E5B824]"></span>
              <span className="text-xs font-bold tracking-wide text-[#121212] uppercase">
                Wentworthville, NSW &bull; Unisex Salon & Barbershop
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#121212] leading-[1.08] mb-6">
              YOUR STYLE.<br />
              YOUR CONFIDENCE.<br />
              <span className="text-[#E5B824]">
                OUR CRAFT.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#5A5A57] max-w-2xl font-normal leading-relaxed mb-8">
              From sharp skin fades and classic cuts to professional hair treatments, discover a style that feels unmistakably you.
            </p>

            {/* Booking & Services Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 bg-[#E5B824] hover:bg-[#D0A415] text-black font-extrabold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 cursor-pointer"
                id="hero-primary-cta"
              >
                <Calendar className="w-5 h-5 text-black" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF9F5] text-[#121212] hover:text-[#E5B824] border border-[#E5E5E2] font-bold text-base px-7 py-4 rounded-full transition-all duration-200 shadow-2xs"
                id="hero-secondary-cta"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowDown className="w-4 h-4 text-[#E5B824]" />
              </a>
            </div>

            {/* Three Compact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl pt-6 border-t border-[#E5E5E2]">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E5E5E0]">
                <CheckCircle2 className="w-4 h-4 text-[#E5B824] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#121212]">Walk-ins Welcome</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E5E5E0]">
                <Scissors className="w-4 h-4 text-[#E5B824] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#121212]">Haircuts & Styling</span>
              </div>
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#FAF9F5] border border-[#E5E5E0]">
                <Sparkles className="w-4 h-4 text-[#E5B824] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#121212]">Hair Treatments</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column: Editorial Photography with Frame & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Minimal Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E2] shadow-xl bg-white">
                <div className="aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#FAF9F5]">
                  <img
                    src="/images/hero-barber.jpg"
                    alt="Precision haircut and styling at Brown Boys Haircuts Unisex Salon"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />
                </div>

                {/* Floating Official Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E2] shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#FAF9F5] border border-[#E5B824] p-1 flex items-center justify-center">
                      <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#121212] uppercase tracking-wider">Brown Boys Haircuts</p>
                      <p className="text-[11px] text-[#5A5A57] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#E5B824]" />
                        Shop 2/53 Station St, Wentworthville
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#FAF9F5] text-[#121212] border border-[#E5E5E2]">
                    NSW 2145
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
