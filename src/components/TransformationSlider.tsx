import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowLeftRight, Sparkles, ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

interface TransformationSliderProps {
  onOpenBooking?: (serviceId?: string) => void;
}

export const TransformationSlider: React.FC<TransformationSliderProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clamped);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handlePointerUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handlePointerUp]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === 'Home') {
      setSliderPosition(0);
    } else if (e.key === 'End') {
      setSliderPosition(100);
    }
  };

  return (
    <section id="transformation" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F5] border border-[#E5E5E0] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B824]" />
            <span className="text-xs font-bold tracking-widest text-[#E5B824] uppercase">
              REAL HAIR. REAL TRANSFORMATION.
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#121212] tracking-tight leading-tight mb-3">
            FROM FRIZZY<br />
            <span className="text-[#E5B824]">TO FABULOUS.</span>
          </h2>

          <p className="text-base text-[#5A5A57] leading-relaxed">
            Explore the difference a professional Hair Botox treatment can make. Discover smoother-looking hair and find the right treatment for your style.
          </p>
          <p className="text-xs text-[#888884] mt-1.5 italic">
            Single original photograph: Drag divider to reveal smoothed, glossy hair transformation.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Slider Frame */}
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-label="Before and After Hair Transformation Comparison Slider"
            aria-valuenow={Math.round(sliderPosition)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={handleKeyDown}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-[#E5E5E2] shadow-xl bg-[#FAF9F5] focus:outline-none focus:ring-4 focus:ring-[#E5B824]/20 transition-all"
          >
            {/* RIGHT SIDE LAYER: BEFORE IMAGE */}
            <img
              src="/images/transformation-before.jpg"
              alt="Hair Botox treatment comparison"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
            />

            {/* LEFT SIDE LAYER: AFTER IMAGE CLIPPED ACCORDING TO SLIDER */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img
                src="/images/transformation-after.jpg"
                alt="Hair Botox treatment comparison"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="lazy"
              />
            </div>

            {/* DRAGGABLE DIVIDER LINE */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* CIRCULAR HANDLE */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E5B824] text-black flex items-center justify-center shadow-lg border-2 border-white transition-transform duration-150 ${
                  isDragging ? 'scale-110 shadow-2xl' : 'hover:scale-105'
                }`}
              >
                <div className="flex items-center gap-0.5 font-bold">
                  <ChevronLeft className="w-4 h-4 text-black stroke-[3]" />
                  <ChevronRight className="w-4 h-4 text-black stroke-[3]" />
                </div>
              </div>
            </div>

            {/* BEFORE BADGE (TOP LEFT) */}
            <div className="absolute top-4 left-4 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E5E2] text-xs font-bold text-[#121212] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                BEFORE &bull; Frizzy & Natural
              </span>
            </div>

            {/* AFTER BADGE (TOP RIGHT) */}
            <div className="absolute top-4 right-4 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E5B824]/40 text-xs font-bold text-[#E5B824] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#E5B824] animate-pulse"></span>
                AFTER &bull; Smooth & Glossy
              </span>
            </div>

            {/* WATERMARK BRAND BADGE (BOTTOM RIGHT) */}
            <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#E5E5E2] text-[11px] font-semibold text-[#5A5A57] shadow-sm">
              <img src="/logo.png" alt="Brown Boys" className="w-4 h-4 object-contain" />
              <span>Hair Botox Transformation</span>
            </div>
          </div>

          {/* Preset Buttons & Accessibility Hint */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5A5A57]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#121212]">Quick Comparison:</span>
              <button
                type="button"
                onClick={() => setSliderPosition(25)}
                className={`px-3 py-1 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
                  Math.round(sliderPosition) === 25
                    ? 'bg-[#E5B824] text-black border-[#E5B824]'
                    : 'bg-white border-[#E5E5E2] text-[#5A5A57] hover:text-[#121212]'
                }`}
              >
                25% Before
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
                  Math.round(sliderPosition) === 50
                    ? 'bg-[#E5B824] text-black border-[#E5B824]'
                    : 'bg-white border-[#E5E5E2] text-[#5A5A57] hover:text-[#121212]'
                }`}
              >
                50 / 50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(75)}
                className={`px-3 py-1 rounded-md border text-xs font-medium transition-colors cursor-pointer ${
                  Math.round(sliderPosition) === 75
                    ? 'bg-[#E5B824] text-black border-[#E5B824]'
                    : 'bg-white border-[#E5E5E2] text-[#5A5A57] hover:text-[#121212]'
                }`}
              >
                75% Before
              </button>
            </div>

            <p className="flex items-center gap-1.5 text-[11px]">
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#E5B824]" />
              Drag divider or use Left/Right arrow keys
            </p>
          </div>

          {/* Supporting CTA Card */}
          <div className="mt-12 text-center p-8 rounded-3xl bg-[#FAF9F5] border border-[#E5E5E0] max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#121212] mb-2">
              HAVE A HAIR TRANSFORMATION IN MIND?
            </h3>
            <p className="text-sm text-[#5A5A57] mb-6 max-w-lg mx-auto">
              Whether you are looking to smooth intense curls, tame humidity frizz, or achieve high-gloss glass hair, our specialists are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#treatments"
                className="inline-flex items-center gap-2 bg-[#121212] hover:bg-[#282828] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-transform active:scale-95 shadow-sm"
              >
                <span>EXPLORE HAIR TREATMENTS</span>
                <ArrowDown className="w-4 h-4 text-[#E5B824]" />
              </a>
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={() => onOpenBooking('treatment-botox-card')}
                  className="inline-flex items-center gap-2 bg-[#E5B824] hover:bg-[#D0A415] text-black font-extrabold text-sm px-6 py-3.5 rounded-full transition-transform active:scale-95 shadow-sm cursor-pointer"
                >
                  <span>Book Hair Consultation</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
