import React, { useState } from 'react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { Scissors, Sparkles, Flame, Droplets, ArrowRight, Calendar, Info, UserCheck, Baby } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Core 9 salon haircut and grooming services (Waxing & Threading removed as requested)
  const coreServiceIds = [
    'classic-cut',
    'skin-fade',
    'half-fade-zero',
    'buzz-cut',
    'kids-under-10',
    'senior-citizens',
    'beard-trim-razor',
    'faded-beard-razor',
    'colour-service',
  ];

  const coreServices = coreServiceIds
    .map((id) => SERVICES.find((s) => s.id === id))
    .filter(Boolean) as typeof SERVICES;

  const categories = [
    { id: 'all', label: 'All Services (9)' },
    { id: 'haircuts', label: 'Haircuts & Fades (6)' },
    { id: 'beard', label: 'Beard Grooming (2)' },
    { id: 'colour', label: 'Colouring (1)' },
  ];

  const filteredServices = coreServices.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'haircuts') return service.category === 'haircuts';
    if (activeCategory === 'beard') return service.category === 'beard';
    if (activeCategory === 'colour') return service.category === 'colouring';
    return true;
  });

  // Small, refined icons (NOT too big)
  const getSmallServiceIcon = (id: string) => {
    switch (id) {
      case 'senior-citizens':
        return <UserCheck className="w-3.5 h-3.5 text-[#E5B824]" />;
      case 'kids-under-10':
        return <Baby className="w-3.5 h-3.5 text-[#E5B824]" />;
      case 'colour-service':
        return <Droplets className="w-3.5 h-3.5 text-[#E5B824]" />;
      case 'beard-trim-razor':
      case 'faded-beard-razor':
        return <Flame className="w-3.5 h-3.5 text-[#E5B824]" />;
      default:
        return <Scissors className="w-3.5 h-3.5 text-[#E5B824]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F8F8F7] relative border-t border-b border-[#E5E5E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-widest text-[#E5B824] uppercase mb-2">
            SERVICES & PRICING
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight mb-3">
            PRECISION CRAFT.<br />
            TRANSPARENT PRICING.
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A57] leading-relaxed">
            Essential salon grooming, precision cuts, and styling in Wentworthville. Walk-ins welcome daily.
          </p>
        </div>

        {/* Minimal Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#E5B824] text-black shadow-xs font-bold'
                  : 'bg-white text-[#5A5A57] hover:text-[#121212] hover:bg-[#FAF9F5] border border-[#E5E5E2]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimal Services Grid (Small refined icons, clean cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card-hover-effect bg-white rounded-2xl border border-[#E5E5E2] p-5 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group"
            >
              <div>
                {/* Header Row: Small Icon + Category Tag + Price Badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    {/* Compact, understated icon container */}
                    <div className="w-7 h-7 rounded-lg bg-[#FAF9F5] border border-[#E5E5E0] flex items-center justify-center shrink-0">
                      {getSmallServiceIcon(service.id)}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#888884]">
                      {service.categoryLabel}
                    </span>
                  </div>

                  {/* Clean Price Pill */}
                  <div className="text-right">
                    <span className="font-heading font-extrabold text-sm sm:text-base text-[#121212] tracking-tight bg-[#FAF9F5] px-2.5 py-1 rounded-lg border border-[#E5E5E0]">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Service Name */}
                <h3 className="text-base sm:text-lg font-bold text-[#121212] group-hover:text-[#E5B824] transition-colors mb-1.5 leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#5A5A57] leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Row: Walk-in note + Book Button */}
              <div className="pt-3 border-t border-[#E5E5E2]/70 flex items-center justify-between">
                <span className="text-[11px] text-[#888884] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Walk-in or Book
                </span>

                <button
                  type="button"
                  onClick={() => onOpenBooking(service.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-[#E5B824] hover:bg-[#D0A415] text-black transition-all shadow-2xs active:scale-95 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Specialist Hair Treatments Link Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-[#E5E5E2] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] border border-[#E5B824]/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#E5B824]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#121212]">
                Looking for Specialist Hair Treatments?
              </h4>
              <p className="text-xs text-[#5A5A57]">
                Hair Botox, Keratin Smoothing, Nanoplasty, Perming, Rebonding & Scalp Spa rituals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#treatments"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-4 rounded-xl bg-[#FAF9F5] hover:bg-white text-[#121212] border border-[#E5E5E0] transition-colors"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5B824]" />
            </a>

            <button
              type="button"
              onClick={() => onOpenBooking('treatment-botox-card')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs font-bold py-2.5 px-4 rounded-xl bg-[#E5B824] hover:bg-[#D0A415] text-black transition-transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-white/70 border border-[#E5E5E2] max-w-4xl mx-auto flex items-start gap-3 shadow-2xs">
          <Info className="w-4 h-4 text-[#E5B824] shrink-0 mt-0.5" />
          <p className="text-xs text-[#5A5A57] leading-relaxed">
            <span className="font-semibold text-[#121212]">Pricing Notice: </span>
            {SALON_INFO.pricingDisclaimer}
          </p>
        </div>

      </div>
    </section>
  );
};
