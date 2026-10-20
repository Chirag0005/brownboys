import React, { useState } from 'react';
import { FAQS } from '../data/salonData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#181818] relative border-t border-[#333333]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101010] border border-[#333333] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#FFD629]" />
            <span className="text-xs font-bold tracking-widest text-[#FFD629] uppercase">
              HAVE QUESTIONS?
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F7F7] tracking-tight leading-tight">
            FREQUENTLY ASKED QUESTIONS.
          </h2>
          <p className="text-sm sm:text-base text-[#B7B7B7] mt-3">
            Everything you need to know about visiting Brown Boys Haircuts in Wentworthville.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#202020] border border-[#333333] overflow-hidden transition-all duration-200 hover:border-[#FFD629]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus:bg-[#252525]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#F7F7F7] pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#181818] border border-[#333333] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FFD629] text-black border-[#FFD629]' : 'text-[#FFD629]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#B7B7B7] leading-relaxed border-t border-[#333333]/40"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
