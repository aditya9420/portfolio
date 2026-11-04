import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDownRight, FileText, Terminal, Code2, Database } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FlashlightReveal } from './FlashlightReveal';

interface HeroOpeningProps {
  onOpenContact: () => void;
}

export const HeroOpening: React.FC<HeroOpeningProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  // GSAP Sequenced Editorial Opening Timeline
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      '.hero-issue-tag',
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
    )
    .fromTo(
      '.hero-title-line',
      { y: 60, opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' },
      { y: 0, opacity: 1, clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)', duration: 1.1, stagger: 0.15 },
      '-=0.4'
    )
    .fromTo(
      portraitRef.current,
      { opacity: 0, scale: 0.94, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 },
      '-=0.8'
    )
    .fromTo(
      metaRef.current,
      { opacity: 0, x: 24 },
      { opacity: 1, x: 0, duration: 0.9 },
      '-=0.7'
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.6'
    )
    .fromTo(
      ruleRef.current,
      { scaleX: 0, transformOrigin: 'left' },
      { scaleX: 1, duration: 1.0, ease: 'expo.inOut' },
      '-=0.9'
    );

    // Subtle parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !portraitRef.current) return;
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientX / innerWidth - 0.5) * 16;
      const yNorm = (e.clientY / innerHeight - 0.5) * 16;

      gsap.to(portraitRef.current, {
        x: xNorm,
        y: yNorm,
        duration: 1.2,
        ease: 'power1.out',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, { scope: containerRef });

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-12 md:pt-16 pb-12 px-6 lg:px-12 border-b border-[#F4F1EA]/10 bg-editorial-grid overflow-hidden"
    >
      {/* Background ambient editorial watermark */}
      <div 
        className="absolute top-1/4 -right-12 select-none pointer-events-none text-outline font-editorial-sans font-black text-[130px] md:text-[220px] lg:text-[280px] leading-none opacity-[0.035] z-0"
        aria-hidden="true"
      >
        CHAVAN
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Monospaced Editorial Metadata Row */}
        <div className="hero-issue-tag flex flex-wrap items-center justify-between gap-4 pb-6 text-xs font-editorial-mono text-[#9D988F]">
          <div className="flex items-center gap-3">
            <span className="editorial-stamp editorial-stamp-yellow">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAA728] animate-ping" />
              ARCHIVE 2026 · MONOGRAPH 01
            </span>
            <span className="hidden sm:inline text-[#5E5A54]">//</span>
            <span className="hidden sm:inline uppercase text-[#9D988F]">
              DOCUMENTARY MONOGRAPH
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#9D988F]">
            <span>SYSTEM: SDE CANDIDACY</span>
            <span className="text-[#5E5A54]">|</span>
            <span className="text-[#F4F1EA] font-medium">DEOGIRI ITMS (2027)</span>
          </div>
        </div>

        {/* Hero Content Grid with Flashlight Reveal */}
        <FlashlightReveal
          radius={300}
          className="rounded-2xl border border-[#F4F1EA]/10 bg-[#0B0B0E]/80 backdrop-blur-sm p-6 sm:p-10 lg:p-12"
          revealContent={
            /* Under-the-hood Blueprint Layer revealed by Torch */
            <div className="w-full h-full p-6 sm:p-10 lg:p-12 bg-[#090A0F] text-amber-300 font-editorial-mono text-xs flex flex-col justify-between select-none">
              <div className="border border-dashed border-[#EAA728]/40 p-4 rounded bg-[#EAA728]/5">
                <div className="flex items-center justify-between text-[#EAA728] font-bold text-sm mb-2">
                  <span className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    [ARCHITECTURAL BLUEPRINT & SYSTEM TELEMETRY]
                  </span>
                  <span>SECURITY CLEARANCE: VERIFIED</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] text-[#F4F1EA]/80 pt-2 border-t border-[#EAA728]/20">
                  <div>
                    <span className="text-[#EAA728] block">STACK KERNEL:</span>
                    React 18 · TypeScript · GSAP 3 · Node.js · PHP
                  </div>
                  <div>
                    <span className="text-[#EAA728] block">DATA ENGINE:</span>
                    MySQL Relational Schemas · PostgreSQL
                  </div>
                  <div>
                    <span className="text-[#EAA728] block">LOCATION AUDIT:</span>
                    Chhatrapati Sambhajinagar [19.8762°N, 75.3433°E]
                  </div>
                </div>
              </div>

              <div className="my-8 font-mono text-[11px] leading-relaxed text-[#EAA728]/80 border-l-2 border-[#EAA728] pl-4">
                <pre className="whitespace-pre overflow-x-auto font-mono text-[11px] leading-relaxed">
{`// CORE DISCIPLINE:
const philosophy = {
  focus: 'Relational data integrity over superficial flash',
  frontend: 'Deterministic UI, zero-jank 60fps animations',
  backend: 'Normalized MySQL schemas, sanitized PHP/Node API endpoints',
  ethics: 'Accurate resume sourcing; genuine code craft'
};`}
                </pre>
              </div>

              <div className="flex justify-between items-center text-[10px] text-[#EAA728]/90 tracking-widest uppercase">
                <span>[INSPECTION TORCH ACTIVE: FLASHLIGHT MASK 60FPS]</span>
                <span>STATUS: MODI INNOVATIONS INTERNSHIP VERIFIED</span>
              </div>
            </div>
          }
        >
          {/* Main Visible Content Layer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Expressive Headline & Documentary Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 text-xs font-editorial-mono text-[#EAA728] tracking-widest mb-4">
                <Code2 className="w-3.5 h-3.5" />
                <span>FIELD REPORT // FULL-STACK SOFTWARE ENGINEERING</span>
              </div>

              <h1 
                ref={headlineRef} 
                className="font-editorial-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-[#F4F1EA] leading-[0.98] mb-6"
              >
                <span className="block hero-title-line">ENGINEERING</span>
                <span className="block hero-title-line text-[#EAA728] italic">REAL-WORLD</span>
                <span className="block hero-title-line font-editorial-sans font-bold tracking-tighter text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA]/90 mt-1">
                  SOFTWARE SYSTEMS.
                </span>
              </h1>

              {/* Verified Professional Resume Description */}
              <p className="text-base sm:text-lg text-[#9D988F] font-body leading-relaxed max-w-2xl mb-8">
                I am <span className="text-[#F4F1EA] font-semibold">Aditya Chavan</span>, a Computer Science undergraduate at Deogiri ITMS building responsive, database-driven applications with React, Node.js, and PHP/MySQL. Focused on real-world scalability, normalized relational architectures, and purposeful interaction design.
              </p>

              {/* Action Buttons */}
              <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-full bg-[#EAA728] text-[#08080A] font-editorial-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 hover:bg-[#F4F1EA] hover:shadow-lg hover:shadow-[#EAA728]/20 transition-all duration-200"
                >
                  <span>EXPLORE CASE STUDIES</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.resumePdf}
                  download
                  className="px-6 py-3.5 rounded-full bg-[#18181D] hover:bg-[#202026] text-[#F4F1EA] border border-[#F4F1EA]/15 font-editorial-mono text-xs font-medium tracking-wider flex items-center gap-2 transition-all duration-200"
                >
                  <FileText className="w-4 h-4 text-[#EAA728]" />
                  <span>CURRICULUM VITAE ↓</span>
                </a>

                <button
                  onClick={onOpenContact}
                  className="px-5 py-3.5 rounded-full hover:bg-[#F4F1EA]/5 text-[#9D988F] hover:text-[#F4F1EA] font-editorial-mono text-xs tracking-wider transition-colors"
                >
                  GET IN TOUCH →
                </button>
              </div>

              {/* Verified Badges */}
              <div className="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-[#F4F1EA]/10 font-editorial-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#5E5A54] uppercase block">CORE DEGREE</span>
                  <span className="font-semibold text-[#F4F1EA]">BCS 2027</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#5E5A54] uppercase block">INDUSTRY EXP</span>
                  <span className="font-semibold text-[#EAA728]">Modi Innovations</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#5E5A54] uppercase block">DATABASES</span>
                  <span className="font-semibold text-[#F4F1EA]">MySQL · Postgres</span>
                </div>
              </div>
            </div>

            {/* Right Column: Art-Directed Portrait Cutout Composition */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div 
                ref={portraitRef} 
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#F4F1EA]/15 bg-gradient-to-b from-[#18181E] to-[#0A0A0D] shadow-2xl group/portrait"
              >
                {/* Editorial Framing Marks */}
                <div className="absolute top-3 left-3 z-30 font-editorial-mono text-[9px] text-[#EAA728] tracking-widest bg-[#08080A]/80 px-2 py-1 rounded border border-[#EAA728]/30">
                  FIG. 1.0 // SUBJECT PORTRAIT
                </div>
                <div className="absolute top-3 right-3 z-30 font-editorial-mono text-[9px] text-[#9D988F] tracking-widest">
                  [19.8762°N, 75.3433°E]
                </div>
                
                {/* Visual grid crosshairs */}
                <div className="absolute inset-0 pointer-events-none z-20 border border-[#F4F1EA]/10 m-3 rounded-lg" />
                <div className="absolute bottom-12 left-6 z-30 pointer-events-none">
                  <div className="text-xs font-editorial-sans font-bold text-[#F4F1EA] tracking-wide">
                    ADITYA CHAVAN
                  </div>
                  <div className="text-[10px] font-editorial-mono text-[#EAA728] uppercase tracking-wider">
                    Full-Stack Engineer & Undergraduate
                  </div>
                </div>

                {/* Actual Cutout Asset of Aditya */}
                <div className="relative w-full h-full flex items-end justify-center pt-8">
                  <img
                    src={PORTFOLIO_DATA.profile.portraitCutout}
                    alt="Aditya Chavan — Software Developer"
                    className="w-full h-full object-contain object-bottom filter grayscale contrast-110 brightness-95 group-hover/portrait:grayscale-0 group-hover/portrait:brightness-100 transition-all duration-700 ease-out z-10"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette to anchor portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-transparent opacity-85 z-20 pointer-events-none" />
                </div>

                {/* Technical stamp badge at bottom */}
                <div className="absolute bottom-3 right-3 z-30 font-editorial-mono text-[9px] text-[#9D988F] bg-[#111114]/90 px-2.5 py-1 rounded border border-[#F4F1EA]/15 flex items-center gap-1.5">
                  <Database className="w-2.5 h-2.5 text-[#EAA728]" />
                  <span>RELATIONAL SCHEMA SPECIALIST</span>
                </div>
              </div>
            </div>

          </div>
        </FlashlightReveal>

        {/* Editorial Divider Rule */}
        <div ref={ruleRef} className="w-full h-[1px] bg-gradient-to-r from-[#EAA728]/50 via-[#F4F1EA]/20 to-transparent mt-12" />
      </div>
    </section>
  );
};
