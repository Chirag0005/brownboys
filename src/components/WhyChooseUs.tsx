import React from 'react';
import { Scissors, Sparkles, UserCheck, CalendarCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Scissors className="w-6 h-6 text-[#E5B824]" />,
      title: 'Haircuts for Different Styles',
      description: 'From classic cuts and buzz cuts to fades, explore different styles to suit your preferences.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#E5B824]" />,
      title: 'Grooming Beyond the Cut',
      description: 'Explore beard trimming, razor work, facials, and other personal grooming services.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#E5B824]" />,
      title: 'Specialist Hair Treatments',
      description: 'Discover options including Hair Botox, Keratin, Nanoplasty, straightening, perming, and hair spa treatments.',
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#E5B824]" />,
      title: 'Easy to Visit',
      description: 'Walk-ins are welcome, and customers can also use the salon’s convenient online booking system.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F8F8F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-[#E5B824] uppercase mb-2">
            THE BROWN BOYS EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight mb-3">
            GOOD HAIR.<br />
            GOOD FEELING.
          </h2>
          <p className="text-base text-[#5A5A57]">
            A dedicated Wentworthville unisex salon bringing together precision barbering and premium hair therapies.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card-hover-effect p-7 rounded-3xl bg-white border border-[#E5E5E2] flex flex-col justify-start group shadow-2xs hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0] group-hover:border-[#E5B824] flex items-center justify-center mb-6 transition-colors shadow-2xs">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-[#121212] mb-2.5 group-hover:text-[#E5B824] transition-colors leading-snug">
                {feature.title}
              </h3>

              <p className="text-sm text-[#5A5A57] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
