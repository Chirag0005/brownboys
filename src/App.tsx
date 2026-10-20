import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TransformationSlider } from './components/TransformationSlider';
import { SpecialistTreatments } from './components/SpecialistTreatments';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBooking } from './components/FloatingMobileBooking';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>('classic-cut');

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId || 'classic-cut');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#121212] selection:bg-[#E5B824] selection:text-black font-sans">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Content */}
      <main id="main-content">
        {/* Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Services & Pricing Section (Initially Minimal Wax & Threading, expands on click) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Signature Interactive Hair Botox Before-and-After Comparison (One Original Photo) */}
        <TransformationSlider onOpenBooking={handleOpenBooking} />

        {/* Dedicated Specialist Hair Treatments */}
        <SpecialistTreatments onOpenBooking={handleOpenBooking} />

        {/* Why Choose Brown Boys */}
        <WhyChooseUs />

        {/* About Salon Story & Wentworthville Details */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Gallery & Instagram Portfolio with Lightbox */}
        <GallerySection />

        {/* Location, Contact, Google Maps & Live Hours */}
        <LocationContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Light-Themed Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Bottom Quick Booking Bar (Mobile Only) */}
      <FloatingMobileBooking onOpenBooking={() => handleOpenBooking()} />

      {/* Integrated Appointment Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedServiceId={preselectedServiceId}
      />
    </div>
  );
}

export default App;
