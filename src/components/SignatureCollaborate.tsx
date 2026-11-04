import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

interface SignatureCollaborateProps {
  onOpenContact: () => void;
}

export const SignatureCollaborate: React.FC<SignatureCollaborateProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<SVGGElement>(null);
  const string1Ref = useRef<SVGPathElement>(null);
  const string2Ref = useRef<SVGPathElement>(null);
  const string3Ref = useRef<SVGPathElement>(null);
  const string4Ref = useRef<SVGPathElement>(null);

  // Framer Motion 3D tilt values for the glossy pill button
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 260 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [stringOffset, setStringOffset] = useState({ x: 0, y: 0 });

  // Handle pointer tracking across the collaboration stage for organic string sway
  const handleStagePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
    const yNorm = (e.clientY - rect.top) / rect.height - 0.5;

    // Small, restrained pointer deflection for strings and hand tension
    setStringOffset({
      x: xNorm * 18,
      y: yNorm * 14,
    });
  };

  const handleStagePointerLeave = () => {
    setStringOffset({ x: 0, y: 0 });
  };

  // Button-specific mouse movement for glossy 3D tilt
  const handleButtonMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleButtonMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  // GSAP + ScrollTrigger Entrance & String Drawing Timeline
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const strings = [string1Ref.current, string2Ref.current, string3Ref.current, string4Ref.current].filter(Boolean);

    // Prepare SVG string dasharrays
    strings.forEach((str) => {
      if (str) {
        const length = str.getTotalLength();
        gsap.set(str, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });

    // 1. Entrance of editorial header & stamp
    tl.fromTo(
      '.collab-header-text',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
    )
    // 2. Hand enters with upward tension pull
    .fromTo(
      handRef.current,
      { y: 60, opacity: 0, rotation: -6 },
      { y: 0, opacity: 1, rotation: 0, duration: 1.1, ease: 'back.out(1.4)' },
      '-=0.4'
    )
    // 3. Strings draw themselves into tension
    .to(
      strings,
      {
        strokeDashoffset: 0,
        duration: 1.3,
        stagger: 0.12,
        ease: 'power2.inOut',
      },
      '-=0.9'
    )
    // 4. Glossy button spring snap
    .fromTo(
      '.collab-pill-button',
      { scale: 0.85, opacity: 0, y: -20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.9, ease: 'elastic.out(1.1, 0.4)' },
      '-=0.6'
    );

    // Continuous natural micro-pull tension animation
    const pullTween = gsap.to(handRef.current, {
      y: 6,
      rotation: 1.5,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      pullTween.kill();
    };
  }, { scope: containerRef });

  return (
    <section
      id="collaborate"
      ref={containerRef}
      className="relative py-28 px-6 lg:px-12 bg-[#EAE8E2] text-[#0D0D10] border-y border-[#0D0D10]/15 overflow-hidden select-none"
    >
      {/* Background subtle editorial watermark & rule marks */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-editorial-sans font-black text-[100px] sm:text-[180px] lg:text-[240px] text-[#0D0D10]/[0.025] pointer-events-none whitespace-nowrap select-none"
        aria-hidden="true"
      >
        COLLABORATE
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Editorial Section Masthead */}
        <div className="collab-header-text flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#0D0D10]/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0D0D10] text-[#EAE8E2] text-[10px] font-editorial-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#EAA728]" />
                INVITATION TO COLLABORATE
              </span>
              <span className="text-[11px] font-editorial-mono text-[#0D0D10]/60">
                // SDE HIRING & PROJECT PARTNERSHIP
              </span>
            </div>
            <h2 className="font-editorial-serif text-4xl sm:text-6xl text-[#0D0D10] leading-none">
              Start a Conversation.
            </h2>
          </div>

          <div className="text-xs font-editorial-mono text-[#0D0D10]/70 max-w-xs md:text-right">
            <span>DIRECT AVAILABILITY: IMMEDIATE</span>
            <span className="block text-[10px] text-[#0D0D10]/50 mt-0.5">
              CHHATRAPATI SAMBHAJINAGAR / REMOTE
            </span>
          </div>
        </div>

        {/* The Interactive String-Pull Stage */}
        <div
          ref={stageRef}
          onPointerMove={handleStagePointerMove}
          onPointerLeave={handleStagePointerLeave}
          className="relative min-h-[440px] sm:min-h-[500px] w-full flex items-center justify-center my-6 rounded-2xl bg-gradient-to-b from-white/40 to-transparent border border-[#0D0D10]/10 shadow-inner overflow-hidden"
        >
          {/* SVG Canvas for Strings and Hand Illustration */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* String shadow filter for tactile depth */}
              <filter id="stringShadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#0D0D10" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Hand-drawn Tensioned Black Strings (anchoring hand fingers to button) */}
            <g filter="url(#stringShadow)">
              {/* String 1: Index finger to button top-left */}
              <path
                ref={string1Ref}
                d={`M 265,340 C ${350 + stringOffset.x * 0.8},${320 + stringOffset.y} ${480 + stringOffset.x * 0.4},${250 + stringOffset.y * 0.4} 540,210`}
                fill="none"
                stroke="#0D0D10"
                strokeWidth="1.6"
                strokeLinecap="round"
                className="transition-all duration-100 ease-out"
              />

              {/* String 2: Middle finger to button mid-left */}
              <path
                ref={string2Ref}
                d={`M 285,355 C ${370 + stringOffset.x},${340 + stringOffset.y * 1.1} ${490 + stringOffset.x * 0.5},${265 + stringOffset.y * 0.5} 545,225`}
                fill="none"
                stroke="#0D0D10"
                strokeWidth="1.2"
                strokeLinecap="round"
                className="transition-all duration-100 ease-out"
              />

              {/* String 3: Ring finger to button bottom-left */}
              <path
                ref={string3Ref}
                d={`M 305,375 C ${390 + stringOffset.x * 1.2},${360 + stringOffset.y * 1.2} ${500 + stringOffset.x * 0.6},${280 + stringOffset.y * 0.6} 552,240`}
                fill="none"
                stroke="#0D0D10"
                strokeWidth="1.4"
                strokeLinecap="round"
                className="transition-all duration-100 ease-out"
              />

              {/* String 4: Thumb loop around button tether */}
              <path
                ref={string4Ref}
                d={`M 245,360 C ${330 + stringOffset.x * 0.7},${350 + stringOffset.y * 0.9} ${470 + stringOffset.x * 0.3},${275 + stringOffset.y * 0.3} 535,232`}
                fill="none"
                stroke="#0D0D10"
                strokeWidth="1.1"
                strokeLinecap="round"
                className="transition-all duration-100 ease-out"
              />
            </g>

            {/* Hand-Drawn Black & White SVG Hand (Below and left of button) */}
            <g
              ref={handRef}
              transform="translate(140, 260)"
              className="origin-bottom-left"
            >
              {/* Soft Drop Shadow for hand */}
              <ellipse cx="90" cy="190" rx="65" ry="12" fill="#0D0D10" opacity="0.12" filter="blur(4px)" />

              {/* Hand Outline & Shading: Authentic Editorial Ink Style */}
              {/* Forearm & Wrist */}
              <path
                d="M 20,200 C 25,160 30,135 45,110 C 50,102 60,95 72,92 C 78,90 90,92 100,98 C 115,108 125,130 135,165 C 140,185 145,195 150,200"
                fill="#EAE8E2"
                stroke="#0D0D10"
                strokeWidth="3.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              {/* Palm Mass & Thenar Eminence */}
              <path
                d="M 52,105 C 58,80 70,68 88,64 C 105,60 120,68 132,82 C 142,94 148,115 142,138"
                fill="#EAE8E2"
                stroke="#0D0D10"
                strokeWidth="2.8"
                strokeLinejoin="round"
              />

              {/* Thumb (curled in tension) */}
              <path
                d="M 72,92 C 76,82 82,75 92,72 C 102,69 110,75 112,86 C 114,95 108,104 98,106 C 90,108 82,105 78,100"
                fill="#EAE8E2"
                stroke="#0D0D10"
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* Index Finger (gripping the strings) */}
              <path
                d="M 98,66 C 104,50 114,38 126,35 C 138,32 146,40 144,52 C 142,65 132,78 120,84"
                fill="#EAE8E2"
                stroke="#0D0D10"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Index fingernail and knuckle crease */}
              <path d="M 124,42 C 130,40 136,44 135,50" fill="none" stroke="#0D0D10" strokeWidth="1.8" />
              <path d="M 108,60 C 114,57 118,61 117,66" fill="none" stroke="#0D0D10" strokeWidth="1.5" />

              {/* Middle Finger (anchoring main pull) */}
              <path
                d="M 124,72 C 132,56 142,46 154,44 C 166,42 172,52 168,64 C 164,76 150,88 138,92"
                fill="#EAE8E2"
                stroke="#0D0D10"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M 152,50 C 158,48 163,53 162,58" fill="none" stroke="#0D0D10" strokeWidth="1.8" />
              <path d="M 134,70 C 140,68 145,72 144,76" fill="none" stroke="#0D0D10" strokeWidth="1.5" />

              {/* Ring Finger */}
              <path
                d="M 140,86 C 148,72 158,64 168,65 C 178,66 182,75 178,86 C 172,98 158,106 148,108"
                fill="#EAE8E2"
                stroke="#0D0D10"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M 166,72 C 171,72 174,76 173,81" fill="none" stroke="#0D0D10" strokeWidth="1.6" />

              {/* Pinky Finger */}
              <path
                d="M 148,106 C 154,95 164,88 174,90 C 182,92 184,101 179,110 C 172,120 160,126 150,125"
                fill="#EAE8E2"
                stroke="#0D0D10"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Palm tension crease hatching */}
              <line x1="85" y1="115" x2="115" y2="128" stroke="#0D0D10" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="90" y1="125" x2="122" y2="136" stroke="#0D0D10" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="96" y1="135" x2="126" y2="145" stroke="#0D0D10" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="65" y1="150" x2="78" y2="175" stroke="#0D0D10" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="72" y1="145" x2="86" y2="170" stroke="#0D0D10" strokeWidth="1.2" strokeLinecap="round" />

              {/* String knots around fingers */}
              <circle cx="125" cy="80" r="3.5" fill="#0D0D10" />
              <circle cx="145" cy="95" r="3" fill="#0D0D10" />
              <circle cx="165" cy="115" r="3" fill="#0D0D10" />
              <circle cx="105" cy="100" r="2.8" fill="#0D0D10" />
            </g>
          </svg>

          {/* Glossy Jet-Black Pill Button (Right side, being pulled) */}
          <div className="relative z-20 flex flex-col items-center sm:translate-x-32 md:translate-x-40 lg:translate-x-48 sm:-translate-y-8">
            <motion.button
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              onMouseMove={handleButtonMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleButtonMouseLeave}
              onClick={onOpenContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="collab-pill-button relative px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#09090B] text-[#F4F1EA] font-editorial-mono text-sm sm:text-base font-bold tracking-widest uppercase cursor-pointer select-none overflow-hidden group shadow-[0_20px_50px_rgba(9,9,11,0.35),0_10px_20px_rgba(9,9,11,0.2)] border border-white/20 transition-shadow duration-300"
              aria-label="Let's Collaborate — Open contact dialogue"
            >
              {/* Glossy Top Sheen Highlight */}
              <div 
                className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none" 
                aria-hidden="true"
              />

              {/* Moving Glossy Light Sweep across button on hover */}
              <div
                className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none transition-transform duration-700 ease-in-out ${
                  isHovered ? 'translate-x-[200%]' : '-translate-x-[200%]'
                }`}
                aria-hidden="true"
              />

              {/* Button Text with subtle 3D lift */}
              <span className="relative z-10 flex items-center gap-3 drop-shadow-md">
                <span>LET’S COLLABORATE</span>
                <ArrowUpRight className="w-5 h-5 text-[#EAA728] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>

              {/* Bottom Subtle Rim Glow */}
              <div className="absolute inset-x-6 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#EAA728]/50 to-transparent pointer-events-none" />
            </motion.button>

            {/* Micro Caption underneath button */}
            <span className="mt-3 text-[11px] font-editorial-mono text-[#0D0D10]/60 tracking-wider">
              CLICK TO EXPAND DIRECT CHANNELS
            </span>
          </div>

        </div>

        {/* Bottom Editorial Callout Strip */}
        <div className="pt-6 border-t border-[#0D0D10]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-editorial-mono text-[#0D0D10]/80">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#0D0D10]" />
            <span>EMAIL DISPATCH: {PORTFOLIO_DATA.profile.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#0D0D10]/50">PHONE: {PORTFOLIO_DATA.profile.phone}</span>
            <span className="text-[#0D0D10]/30">|</span>
            <button
              onClick={onOpenContact}
              className="text-[#0D0D10] font-bold underline hover:text-[#EAA728] transition-colors"
            >
              SEND DIRECT MESSAGE →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
