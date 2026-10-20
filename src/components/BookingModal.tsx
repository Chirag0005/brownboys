import { useState, useEffect } from 'react';
import { SERVICES } from '../data/salonData';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || 'classic-cut'
  );

  // Default to today or tomorrow
  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');

  // Client Details
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Step state: 'form' | 'confirmed'
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedService =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const availableTimeSlots = [
    '09:30 AM',
    '10:15 AM',
    '11:00 AM',
    '11:45 AM',
    '12:30 PM',
    '01:15 PM',
    '02:00 PM',
    '02:45 PM',
    '03:30 PM',
    '04:15 PM',
    '05:00 PM',
    '05:45 PM',
    '06:30 PM',
    '07:15 PM',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setValidationError('Please enter your name.');
      return;
    }
    if (!phone.trim()) {
      setValidationError('Please enter your contact phone number.');
      return;
    }

    setValidationError('');
    setIsSubmitting(true);

    // Simulate instant secure confirmation
    setTimeout(() => {
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `BB-${randomCode}`;
      setBookingRef(generatedRef);
      setIsSubmitting(false);
      setIsConfirmed(true);

      // Save locally
      try {
        const existingBookings = JSON.parse(
          localStorage.getItem('bb_bookings') || '[]'
        );
        existingBookings.push({
          ref: generatedRef,
          service: selectedService.name,
          date: selectedDate,
          time: selectedTime,
          client: fullName,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('bb_bookings', JSON.stringify(existingBookings));
      } catch (err) {
        console.error(err);
      }
    }, 450);
  };

  const resetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5E5E0] overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="px-6 py-5 bg-[#FAF9F5] border-b border-[#E5E5E0] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E0] p-1 shadow-sm flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 id="booking-modal-title" className="text-lg font-bold text-[#121212]">
                {isConfirmed ? 'Booking Confirmed' : 'Book an Appointment'}
              </h2>
              <p className="text-xs text-[#5A5A57]">
                Brown Boys Haircuts &bull; Wentworthville, NSW
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="p-2 rounded-full text-[#5A5A57] hover:text-[#121212] hover:bg-white border border-transparent hover:border-[#E5E5E0] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isConfirmed ? (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#121212] mb-2 flex items-center justify-between">
                <span>1. Select Service</span>
                <span className="text-[11px] font-semibold text-[#E5B824]">
                  {selectedService.price}
                </span>
              </label>
              
              <div className="relative">
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-[#FAF9F5] hover:bg-white focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl px-4 py-3 text-sm font-semibold text-[#121212] focus:outline-none transition-colors cursor-pointer"
                >
                  <optgroup label="Grooming Options">
                    <option value="beard-trim-razor">Beard Trim with Razor Work — AUD $20</option>
                    <option value="faded-beard-razor">Faded Beard with Razor Work — AUD $25</option>
                    <option value="steam-facial">Steam Facial — From AUD $25</option>
                    <option value="head-massage">Head Massage — AUD $25</option>
                  </optgroup>
                  <optgroup label="Haircuts & Fades">
                    <option value="skin-fade">Skin Fade — AUD $35</option>
                    <option value="classic-cut">Classic Cut — AUD $25</option>
                    <option value="half-fade-zero">Half Fade or Zero Fade — AUD $30</option>
                    <option value="buzz-cut">Buzz Cut — AUD $20</option>
                    <option value="kids-under-10">Kids Under 10 — From AUD $22</option>
                    <option value="senior-citizens">Senior Citizens — AUD $20</option>
                    <option value="colour-service">Colour — From AUD $35</option>
                  </optgroup>
                  <optgroup label="Specialist Hair Treatments">
                    <option value="treatment-botox-card">Hair Botox Treatment — Enquire for pricing</option>
                    <option value="treatment-keratin-card">Keratin Treatment — Enquire for pricing</option>
                    <option value="treatment-nanoplasty-card">Nanoplasty — Enquire for pricing</option>
                    <option value="treatment-straightening-card">Hair Straightening — Enquire for pricing</option>
                    <option value="treatment-perming-card">Hair Perming — Enquire for pricing</option>
                    <option value="treatment-spa-card">Hair Spa — Enquire for pricing</option>
                  </optgroup>
                </select>
              </div>
              <p className="text-xs text-[#5A5A57] mt-1.5">{selectedService.description}</p>
            </div>

            {/* Step 2: Date & Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121212] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E5B824]" />
                  <span>2. Preferred Date</span>
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={todayStr}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#FAF9F5] hover:bg-white focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl px-4 py-2.5 text-sm text-[#121212] focus:outline-none transition-colors cursor-pointer"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#121212] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E5B824]" />
                  <span>3. Preferred Time Slot</span>
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#FAF9F5] hover:bg-white focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl px-4 py-2.5 text-sm text-[#121212] focus:outline-none transition-colors cursor-pointer"
                >
                  {availableTimeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Client Details */}
            <div className="space-y-4 pt-2 border-t border-[#E5E5E0]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#121212]">
                4. Your Contact Details
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#5A5A57] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liam Smith"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#FAF9F5] focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#121212] focus:outline-none transition-colors"
                  />
                  <User className="w-4 h-4 text-[#888884] absolute left-3.5 top-3" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#5A5A57] mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="04XX XXX XXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#FAF9F5] focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#121212] focus:outline-none transition-colors"
                    />
                    <Phone className="w-4 h-4 text-[#888884] absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5A5A57] mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#FAF9F5] focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl pl-10 pr-4 py-2.5 text-sm text-[#121212] focus:outline-none transition-colors"
                    />
                    <Mail className="w-4 h-4 text-[#888884] absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A5A57] mb-1">
                  Hair Notes or Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Skin fade with textured top, or specific styling request..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAF9F5] focus:bg-white border border-[#E5E5E0] focus:border-[#E5B824] rounded-xl p-3 text-sm text-[#121212] focus:outline-none resize-none transition-colors"
                />
              </div>
            </div>

            {validationError && (
              <p className="text-xs font-semibold text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                {validationError}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-[#E5B824] hover:bg-[#D0A415] text-black font-extrabold text-sm py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-98 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Appointment...</span>
                ) : (
                  <>
                    <span>Confirm & Book Appointment</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-[#5A5A57] text-center mt-2.5">
                No upfront payment needed. Pay in salon upon service completion.
              </p>
            </div>

          </form>
        ) : (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#E5B824] uppercase tracking-wider block mb-1">
                APPOINTMENT CONFIRMED
              </span>
              <h3 className="text-2xl font-extrabold text-[#121212]">
                We Look Forward to Seeing You!
              </h3>
              <p className="text-sm text-[#5A5A57] mt-1">
                Thank you, <span className="font-bold text-[#121212]">{fullName}</span>. Your appointment has been booked.
              </p>
            </div>

            {/* Booking Details Card */}
            <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-[#E5E5E0] text-left text-sm space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E0]">
                <span className="text-xs text-[#5A5A57]">Booking Reference:</span>
                <span className="font-mono font-bold text-sm text-[#121212]">{bookingRef}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#5A5A57]">Service:</span>
                <span className="font-semibold text-[#121212]">{selectedService.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#5A5A57]">Date & Time:</span>
                <span className="font-semibold text-[#121212]">{selectedDate} at {selectedTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#5A5A57]">Price:</span>
                <span className="font-bold text-[#E5B824]">{selectedService.price}</span>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-[#E5E5E0] text-xs text-[#5A5A57]">
                <MapPin className="w-3.5 h-3.5 text-[#E5B824] shrink-0 mt-0.5" />
                <span>Shop 2/53 Station Street, Wentworthville NSW 2145</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="flex-1 bg-[#121212] hover:bg-[#282828] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
