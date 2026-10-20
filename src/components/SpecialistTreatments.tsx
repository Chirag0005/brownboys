import React from 'react';
import { SPECIALIST_TREATMENTS } from '../data/salonData';
import { Sparkles, Check, ArrowRight, Calendar } from 'lucide-react';

interface SpecialistTreatmentsProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export const SpecialistTreatments: React.FC<SpecialistTreatmentsProps> = ({ onOpenBooking }) => {
  return (
    <section id="treatments" className="py-24 bg-white relative border-t border-b border-[#E5E5E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E5E5E0] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B824]" />
            <span className="text-xs font-bold tracking-widest text-[#E5B824] uppercase">
              PREMIUM HAIRCARE & THERAPY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight mb-3">
            MORE THAN A HAIRCUT.
          </h2>

          <p className="text-base text-[#5A5A57] leading-relaxed">
            Explore styling and haircare services tailored to different looks, preferences, and hair goals.
          </p>
        </div>

        {/* 6 Specialist Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALIST_TREATMENTS.map((treatment) => (
            <div
              key={treatment.id}
              className="card-hover-effect flex flex-col justify-between rounded-3xl bg-[#FAF9F5] border border-[#E5E5E0] overflow-hidden group shadow-xs hover:shadow-md transition-all"
            >
              <div>
                {/* Treatment Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Pricing Badge (Enquire for pricing) */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E5E2] text-[11px] font-bold text-[#121212] shadow-xs">
                      {treatment.priceDisplay}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-bold text-[#E5B824] tracking-wider uppercase block mb-1">
                    {treatment.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-[#121212] mb-2.5 group-hover:text-[#E5B824] transition-colors">
                    {treatment.name}
                  </h3>

                  <p className="text-sm text-[#5A5A57] leading-relaxed mb-5">
                    {treatment.description}
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-2 mb-5 pt-4 border-t border-[#E5E5E0]">
                    <p className="text-xs font-bold text-[#121212] uppercase tracking-wider mb-1">
                      Key Highlights:
                    </p>
                    {treatment.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#5A5A57]">
                        <Check className="w-3.5 h-3.5 text-[#E5B824] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For Note */}
                  <div className="p-3 rounded-xl bg-white border border-[#E5E5E0] text-xs text-[#5A5A57]">
                    <span className="font-semibold text-[#121212]">Ideal for: </span>
                    {treatment.idealFor}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(`treatment-${treatment.id}-card`)}
                  className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#E5B824] text-[#121212] hover:text-black border border-[#E5E5E0] hover:border-[#E5B824] font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E5B824] group-hover:text-black transition-colors" />
                  <span>Book Consultation & Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Consultation Note */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FAF9F5] border border-[#E5E5E0] text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#5A5A57] leading-relaxed">
            <span className="font-bold text-[#121212]">Personalised Hair Consultation: </span>
            Treatment pricing depends on your natural hair length, density, and condition. Drop into the salon at Wentworthville Plaza for a free walk-in consultation or book an appointment online to discuss your hair goals.
          </p>
        </div>

      </div>
    </section>
  );
};
