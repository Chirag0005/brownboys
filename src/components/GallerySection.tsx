import React, { useState, useEffect, useCallback } from 'react';
import { SALON_INFO } from '../data/salonData';
import { ZoomIn, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface GalleryItem {
  id: string;
  title: string;
  category: 'fades' | 'beard' | 'classic' | 'colour' | 'treatments';
  categoryLabel: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-fade',
    title: 'Precision Skin Fade',
    category: 'fades',
    categoryLabel: 'Fades & Cuts',
    image: '/images/gallery-fade.jpg',
    description: 'Clean mid skin fade with textured top and seamless transition.',
  },
  {
    id: 'g-beard',
    title: 'Sculpted Beard & Razor Line-Up',
    category: 'beard',
    categoryLabel: 'Beard Grooming',
    image: '/images/gallery-beard.jpg',
    description: 'Crisp cheek lines, blended sideburns, and hot razor perimeter detail.',
  },
  {
    id: 'g-classic',
    title: 'Classic Dapper Scissor Cut',
    category: 'classic',
    categoryLabel: 'Fades & Cuts',
    image: '/images/gallery-classic.jpg',
    description: 'Timeless tailored haircut with scissor-over-comb finish.',
  },
  {
    id: 'g-colour',
    title: 'Custom Hair Colouring & Tone',
    category: 'colour',
    categoryLabel: 'Colour & Styling',
    image: '/images/gallery-colour.jpg',
    description: 'Rich dimensional tones and grey blending tailored to hair texture.',
  },
  {
    id: 'g-styling',
    title: 'Modern Salon Styling & Blowout',
    category: 'treatments',
    categoryLabel: 'Colour & Styling',
    image: '/images/gallery-styling.jpg',
    description: 'Bouncy, full-bodied styling with thermal protection finish.',
  },
  {
    id: 'g-botox',
    title: 'Hair Botox Smooth Finish',
    category: 'treatments',
    categoryLabel: 'Specialist Treatments',
    image: '/images/treatment-botox.jpg',
    description: 'High-gloss cuticle smoothing and anti-frizz transformation.',
  },
];

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'fades', label: 'Fades & Cuts' },
    { id: 'beard', label: 'Beard Grooming' },
    { id: 'colour', label: 'Colour & Styling' },
    { id: 'treatments', label: 'Specialist Treatments' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-24 bg-[#F8F8F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E2] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5B824]"></span>
              <span className="text-xs font-bold tracking-widest text-[#E5B824] uppercase">
                SALON GALLERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#121212] tracking-tight">
              LOOKS & STYLING.
            </h2>
          </div>

          <a
            href={SALON_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#FAF9F5] text-[#121212] hover:text-[#E5B824] border border-[#E5E5E2] font-bold text-sm transition-colors shadow-2xs"
          >
            <InstagramIcon className="w-4 h-4 text-[#E5B824]" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#5A5A57]" />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#E5B824] text-black shadow-xs'
                  : 'bg-white text-[#5A5A57] hover:text-[#121212] border border-[#E5E5E2]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="card-hover-effect group relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border border-[#E5E5E2] cursor-pointer shadow-xs"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold text-[#E5B824] uppercase tracking-wider mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-xl font-bold mb-1.5">{item.title}</h3>
                <p className="text-xs text-neutral-200 line-clamp-2 mb-3">{item.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-[#E5B824] font-semibold">
                  <ZoomIn className="w-4 h-4" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="mt-4 text-center text-white">
                <span className="text-xs font-bold text-[#E5B824] uppercase tracking-wider block mb-1">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h4 className="text-xl font-bold">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-sm text-neutral-300 mt-1 max-w-md mx-auto">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
