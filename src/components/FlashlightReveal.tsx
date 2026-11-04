import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Sparkles, Eye, EyeOff } from 'lucide-react';

interface FlashlightRevealProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  radius?: number;
  className?: string;
  id?: string;
}

export const FlashlightReveal: React.FC<FlashlightRevealProps> = ({
  children,
  revealContent,
  radius = 280,
  className = '',
  id,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [torchEnabled, setTorchEnabled] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position references to prevent React re-renders
  const targetX = useRef<number>(0);
  const targetY = useRef<number>(0);
  const currentX = useRef<number>(0);
  const currentY = useRef<number>(0);
  const rafId = useRef<number | null>(null);

  // Check for reduced motion and touch
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    setIsTouchDevice(isTouch);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setTorchEnabled(false);
    }
  }, []);

  // Optimized RAF loop updating CSS variables
  const updateLoop = useCallback(() => {
    if (!containerRef.current) return;

    // Linear interpolation for silky-smooth beam tracking
    const lerpFactor = 0.18;
    currentX.current += (targetX.current - currentX.current) * lerpFactor;
    currentY.current += (targetY.current - currentY.current) * lerpFactor;

    containerRef.current.style.setProperty('--mouse-x', `${currentX.current.toFixed(1)}px`);
    containerRef.current.style.setProperty('--mouse-y', `${currentY.current.toFixed(1)}px`);

    rafId.current = requestAnimationFrame(updateLoop);
  }, []);

  useEffect(() => {
    rafId.current = requestAnimationFrame(updateLoop);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [updateLoop]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetX.current = e.clientX - rect.left;
    targetY.current = e.clientY - rect.top;
    if (!isHovering) setIsHovering(true);
  };

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    targetX.current = e.clientX - rect.left;
    targetY.current = e.clientY - rect.top;
    currentX.current = targetX.current;
    currentY.current = targetY.current;
    setIsHovering(true);
  };

  const handlePointerLeave = () => {
    setIsHovering(false);
  };

  // Touch fallback: allow tapping anywhere to focus torch
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    targetX.current = touch.clientX - rect.left;
    targetY.current = touch.clientY - rect.top;
    setIsHovering(true);
  };

  return (
    <div
      id={id}
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      style={
        {
          '--torch-radius': `${radius}px`,
        } as React.CSSProperties
      }
      className={`relative overflow-hidden group select-none ${className}`}
    >
      {/* Primary Base Content Layer (Always legible) */}
      <div className="relative z-10 w-full h-full pointer-events-auto">
        {children}
      </div>

      {/* Secret Blueprint / Editorial Under-Layer Revealed by Torch */}
      {torchEnabled && (
        <div
          className={`absolute inset-0 z-20 pointer-events-none transition-opacity duration-500 flashlight-mask ${
            isHovering || isTouchDevice ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          {revealContent}
        </div>
      )}

      {/* Realistic Feathered Torch Light Beam Glow */}
      {torchEnabled && isHovering && (
        <div
          className="absolute z-30 pointer-events-none rounded-full"
          style={{
            left: 'var(--mouse-x)',
            top: 'var(--mouse-y)',
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(234, 167, 40, 0.16) 0%, rgba(234, 167, 40, 0.06) 40%, rgba(244, 241, 234, 0.02) 65%, transparent 75%)',
            boxShadow: 'inset 0 0 40px rgba(234, 167, 40, 0.12)',
            mixBlendMode: 'screen',
          }}
          aria-hidden="true"
        />
      )}

      {/* Subtle Editorial Torch State Hint */}
      <div className="absolute bottom-3 right-4 z-30 pointer-events-auto flex items-center gap-2">
        <button
          onClick={() => setTorchEnabled(!torchEnabled)}
          className="text-[10px] font-editorial-mono px-2 py-1 rounded bg-[#111114]/80 hover:bg-[#18181D] border border-[#F4F1EA]/15 text-[#9D988F] hover:text-[#EAA728] flex items-center gap-1.5 transition-colors backdrop-blur-sm"
          title={torchEnabled ? 'Disable Torch Reveal' : 'Enable Torch Reveal'}
          aria-label={torchEnabled ? 'Disable Torch Reveal' : 'Enable Torch Reveal'}
        >
          {torchEnabled ? (
            <>
              <Eye className="w-3 h-3 text-[#EAA728]" />
              <span className="hidden sm:inline">TORCH: ON</span>
            </>
          ) : (
            <>
              <EyeOff className="w-3 h-3 text-[#5E5A54]" />
              <span className="hidden sm:inline">TORCH: OFF</span>
            </>
          )}
        </button>
        <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-editorial-mono text-[#5E5A54]">
          <Sparkles className="w-2.5 h-2.5 text-[#EAA728]" />
          SWEEP CURSOR TO INSPECT BLUEPRINT
        </span>
      </div>
    </div>
  );
};
