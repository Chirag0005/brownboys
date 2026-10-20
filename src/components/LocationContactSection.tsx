import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { OpeningHoursComponent } from './OpeningHoursComponent';
import { MapPin, Mail, Calendar, Navigation, ExternalLink, Send } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface LocationContactSectionProps {
  onOpenBooking?: () => void;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({ onOpenBooking }) => {
  const [serviceOfInterest, setServiceOfInterest] = useState('Skin Fade / Taper');
  const [preferredTime, setPreferredTime] = useState('Weekday Evening');
  const [customerNotes, setCustomerNotes] = useState('');

  const generateMailtoUrl = () => {
    const subject = `Salon Haircut / Treatment Enquiry - ${serviceOfInterest}`;
    const body = `Hi Brown Boys Haircuts team,

I would like to get in touch regarding a visit to your Wentworthville salon.

Service of interest: ${serviceOfInterest}
Preferred timing: ${preferredTime}
Additional questions / notes:
${customerNotes || 'No additional notes.'}

Looking forward to hearing from you!`;

    return `mailto:${SALON_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#F8F8F7] relative border-t border-[#E5E5E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E2] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#E5B824]" />
            <span className="text-xs font-bold tracking-widest text-[#E5B824] uppercase">
              VISIT OR GET IN TOUCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight mb-4">
            COME SAY HELLO.
          </h2>

          <p className="text-base sm:text-lg text-[#5A5A57] leading-relaxed">
            Conveniently located at Shop 2/53 Station Street, Wentworthville. Walk-ins are always welcome, or reserve your spot directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column (7 cols): Address, Actions, & Direct Email Composer */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Business Contact Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-sm">
              <h3 className="text-2xl font-extrabold text-[#121212] mb-6 flex items-center gap-2">
                <span>Brown Boys Haircuts Unisex Salon</span>
              </h3>

              <div className="space-y-4 mb-8">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0] flex items-center justify-center shrink-0 text-[#E5B824]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#E5B824]">Salon Address</p>
                    <p className="text-base font-semibold text-[#121212]">{SALON_INFO.address.line1}</p>
                    <p className="text-sm text-[#5A5A57]">{SALON_INFO.address.suburb}, {SALON_INFO.address.state} {SALON_INFO.address.postcode}, Australia</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0] flex items-center justify-center shrink-0 text-[#E5B824]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#E5B824]">Official Email</p>
                    <a
                      href={`mailto:${SALON_INFO.email}`}
                      className="text-base font-semibold text-[#121212] hover:text-[#E5B824] transition-colors break-all"
                    >
                      {SALON_INFO.email}
                    </a>
                    <p className="text-xs text-[#5A5A57]">Enquiries, special treatment questions & feedback</p>
                  </div>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E5E5E2]">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex items-center justify-center gap-2 bg-[#E5B824] hover:bg-[#D0A415] text-black font-extrabold text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-all shadow-sm active:scale-95 text-center cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-black" />
                  <span>BOOK APPOINTMENT</span>
                </button>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#FAF9F5] hover:bg-white text-[#121212] hover:text-[#E5B824] border border-[#E5E5E0] font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-colors text-center"
                >
                  <Navigation className="w-4 h-4 text-[#E5B824]" />
                  <span>Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#888884]" />
                </a>

                <a
                  href={SALON_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#FAF9F5] hover:bg-white text-[#121212] hover:text-[#E5B824] border border-[#E5E5E0] font-bold text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-colors text-center"
                >
                  <InstagramIcon className="w-4 h-4 text-[#E5B824]" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#888884]" />
                </a>
              </div>
            </div>

            {/* Quick Email Inquiry Box */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E5E5E2] shadow-sm">
              <h4 className="text-lg font-bold text-[#121212] mb-1">
                Have a Quick Question or Consultation Request?
              </h4>
              <p className="text-xs text-[#5A5A57] mb-5">
                Send a direct email enquiry to the salon with your preferences.
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A57] mb-1">
                      Service Interested In:
                    </label>
                    <select
                      value={serviceOfInterest}
                      onChange={(e) => setServiceOfInterest(e.target.value)}
                      className="w-full bg-[#FAF9F5] hover:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl px-3 py-2 text-xs text-[#121212] focus:outline-none transition-colors"
                    >
                      <option value="Skin Fade / Taper">Skin Fade / Taper</option>
                      <option value="Classic Haircut">Classic Haircut</option>
                      <option value="Beard Trim with Razor">Beard Trim with Razor</option>
                      <option value="Hair Botox Treatment">Hair Botox Treatment</option>
                      <option value="Keratin Treatment">Keratin Treatment</option>
                      <option value="Nanoplasty Straightening">Nanoplasty Straightening</option>
                      <option value="Colour / Grey Blending">Colour / Grey Blending</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A57] mb-1">
                      Preferred Day / Timing:
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full bg-[#FAF9F5] hover:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl px-3 py-2 text-xs text-[#121212] focus:outline-none transition-colors"
                    >
                      <option value="Weekday Morning (9 AM–12 PM)">Weekday Morning (9 AM–12 PM)</option>
                      <option value="Weekday Afternoon (12 PM–5 PM)">Weekday Afternoon (12 PM–5 PM)</option>
                      <option value="Weekday Evening (5 PM–8 PM)">Weekday Evening (5 PM–8 PM)</option>
                      <option value="Saturday (9 AM–6 PM)">Saturday (9 AM–6 PM)</option>
                      <option value="Sunday (9 AM–6 PM)">Sunday (9 AM–6 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A5A57] mb-1">
                    Your Message or Hair Details:
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ask about pricing, specific styles, hair length, or timings..."
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    className="w-full bg-[#FAF9F5] focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl p-3 text-xs text-[#121212] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <a
                  href={generateMailtoUrl()}
                  className="inline-flex items-center justify-center gap-2 bg-[#121212] hover:bg-[#282828] text-white font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-xs w-full sm:w-auto"
                >
                  <Send className="w-3.5 h-3.5 text-[#E5B824]" />
                  <span>Send Direct Email to Salon</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Live Opening Hours Widget */}
          <div className="lg:col-span-5">
            <OpeningHoursComponent onOpenBooking={onOpenBooking} />
          </div>

        </div>

      </div>
    </section>
  );
};
