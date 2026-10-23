import React, { useState, useRef, useCallback, useEffect } from 'react';
import { SlidersHorizontal, Eye, Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Transformation',
  afterLabel = 'Architectural Outcome',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  beforeObjectPosition = 'center center',
  afterObjectPosition = 'center center',
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleInteractionEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleInteractionEnd]);

  return (
    <div className={`relative select-none ${className}`}>
      {/* Outer framing box */}
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-xl bg-[#080d09] border border-[#1b2f22] cursor-ew-resize group shadow-2xl`}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* Layer 1: AFTER image (Full background on the right) */}
        <img
          src={afterImage}
          alt="Transformed outdoor architectural garden"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ objectPosition: afterObjectPosition }}
        />

        {/* After Label Badge */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-[#07130b]/85 backdrop-blur-md border border-[#10b981]/40 text-[#10b981] text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-lg pointer-events-none select-none">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{afterLabel}</span>
        </div>

        {/* Layer 2: BEFORE image (Clipped to sliderPosition on left side) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none select-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before garden transformation state"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ objectPosition: beforeObjectPosition }}
          />

          {/* Before Label Badge */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-[#0a0a0a]/85 backdrop-blur-md border border-neutral-700 text-neutral-300 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-lg pointer-events-none select-none">
            <Eye className="w-3.5 h-3.5 text-neutral-400" />
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Vertical Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#10b981] z-20 pointer-events-none shadow-[0_0_12px_rgba(16,185,129,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Grab Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0a0e0b] border-2 border-[#10b981] shadow-xl flex items-center justify-center text-[#10b981] transition-transform group-hover:scale-110">
            <SlidersHorizontal className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>
    </div>
  );
};
