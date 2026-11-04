import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ExternalLink, Github, Database, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const EditorialProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      '.project-case-study',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        stagger: 0.25,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  const agriProject = PORTFOLIO_DATA.projects[0];
  const portfolioProject = PORTFOLIO_DATA.projects[1];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#F4F1EA]/10 relative z-10"
    >
      {/* Chapter Marker Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-12 border-b border-[#F4F1EA]/10">
        <div>
          <span className="text-xs font-editorial-mono text-[#EAA728] tracking-widest uppercase block mb-1">
            CHAPTER 03 // FIELD CASE STUDIES
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl text-[#F4F1EA]">
            Built & Deployed Systems.
          </h2>
        </div>
        <div className="text-xs font-editorial-mono text-[#9D988F]">
          <span>EVALUATION: ZERO FABRICATED METRICS</span>
          <span className="block text-[#5E5A54]">SOURCE: ADITYA CHAVAN REPOSITORY AUDIT</span>
        </div>
      </div>

      <div className="space-y-16 pt-12">
        {/* CASE STUDY 01: e-Agri Portal */}
        <div className="project-case-study p-8 sm:p-12 rounded-2xl border border-[#F4F1EA]/15 bg-[#111114] relative overflow-hidden group">
          
          {/* Top Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F4F1EA]/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-editorial-mono px-3 py-1 rounded bg-[#EAA728]/10 text-[#EAA728] border border-[#EAA728]/30 font-bold uppercase tracking-wider">
                CASE STUDY {agriProject.num}
              </span>
              <span className="text-xs font-editorial-mono text-[#9D988F]">
                // {agriProject.tagline}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href={agriProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F4F1EA]/20 text-xs font-editorial-mono text-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#08080A] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB REPOSITORY ↗</span>
              </a>
            </div>
          </div>

          {/* Case Study Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
            
            {/* Left 7 Cols: Title, Problem, Solution, Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-editorial-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
                  {agriProject.title}
                </h3>
                <p className="text-xs font-editorial-mono text-[#EAA728] uppercase tracking-wider mt-1">
                  AGRICULTURE LOGISTICS & DATABASE MANAGEMENT SYSTEM
                </p>
              </div>

              <p className="text-base text-[#9D988F] font-body leading-relaxed">
                {agriProject.description}
              </p>

              {/* Problem / Solution Editorial Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                  <span className="text-[10px] font-editorial-mono text-red-400 uppercase tracking-widest block mb-1">
                    [OPERATIONAL PROBLEM]
                  </span>
                  <p className="text-xs text-[#9D988F] font-body leading-relaxed">
                    {agriProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                  <span className="text-[10px] font-editorial-mono text-emerald-400 uppercase tracking-widest block mb-1">
                    [ENGINEERED SOLUTION]
                  </span>
                  <p className="text-xs text-[#9D988F] font-body leading-relaxed">
                    {agriProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Points */}
              <div className="pt-2">
                <span className="text-xs font-editorial-mono text-[#F4F1EA] uppercase tracking-wider block mb-3 font-semibold">
                  TECHNICAL ARCHITECTURE & SPECIFICATIONS:
                </span>
                <ul className="space-y-2 text-xs text-[#9D988F] font-body">
                  {agriProject.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#EAA728] font-mono mt-0.5">0{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 pt-4">
                {agriProject.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-editorial-mono px-3 py-1 rounded bg-[#08080A] border border-[#F4F1EA]/15 text-[#F4F1EA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Visual Data Schema Schematic */}
            <div className="lg:col-span-5 p-6 rounded-xl border border-[#F4F1EA]/10 bg-[#0B0B0E] font-editorial-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#F4F1EA]/10 mb-4">
                <span className="flex items-center gap-1.5 text-[#EAA728] font-bold">
                  <Database className="w-3.5 h-3.5" />
                  SCHEMA TOPOLOGY
                </span>
                <span className="text-[10px] text-[#5E5A54]">ENGINE: MYSQL 8.0</span>
              </div>

              {/* Schematic Box */}
              <div className="space-y-3 font-mono text-[11px]">
                <div className="p-3 rounded bg-[#111114] border border-[#F4F1EA]/5">
                  <span className="text-amber-400 block font-semibold">TABLE: farmers</span>
                  <span className="text-[#5E5A54] block text-[10px]">PK: farmer_id | INT AUTO_INCREMENT</span>
                  <span className="text-[#9D988F] block text-[10px]">name, region_code, contact, farm_size_ha</span>
                </div>

                <div className="text-center text-[#5E5A54] text-xs">↓ (1:N RELATIONAL KEY)</div>

                <div className="p-3 rounded bg-[#111114] border border-[#EAA728]/30">
                  <span className="text-[#EAA728] block font-semibold">TABLE: crops_inventory</span>
                  <span className="text-[#5E5A54] block text-[10px]">PK: crop_id | FK: farmer_id</span>
                  <span className="text-[#9D988F] block text-[10px]">variety, planting_date, harvest_cycle, yield_est</span>
                </div>

                <div className="text-center text-[#5E5A54] text-xs">↓ (1:N RELATIONAL KEY)</div>

                <div className="p-3 rounded bg-[#111114] border border-[#F4F1EA]/5">
                  <span className="text-sky-400 block font-semibold">TABLE: harvest_records</span>
                  <span className="text-[#5E5A54] block text-[10px]">PK: record_id | FK: crop_id</span>
                  <span className="text-[#9D988F] block text-[10px]">actual_yield, market_price, moisture_content</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F4F1EA]/10 text-[10px] text-[#5E5A54] flex justify-between">
                <span>CRUD STATUS: OPERATIONAL</span>
                <span>INPUT SANITIZATION: PASS</span>
              </div>
            </div>

          </div>
        </div>

        {/* CASE STUDY 02: Cinematic Editorial Portfolio */}
        <div className="project-case-study p-8 sm:p-12 rounded-2xl border border-[#F4F1EA]/15 bg-[#111114] relative overflow-hidden group">
          
          {/* Top Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F4F1EA]/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-editorial-mono px-3 py-1 rounded bg-sky-400/10 text-sky-400 border border-sky-400/30 font-bold uppercase tracking-wider">
                CASE STUDY {portfolioProject.num}
              </span>
              <span className="text-xs font-editorial-mono text-[#9D988F]">
                // {portfolioProject.tagline}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              {portfolioProject.liveUrl && (
                <a
                  href={portfolioProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#EAA728] text-[#08080A] text-xs font-editorial-mono font-bold hover:bg-[#F4F1EA] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>LIVE PRODUCTION SITE ↗</span>
                </a>
              )}
              <a
                href={portfolioProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F4F1EA]/20 text-xs font-editorial-mono text-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#08080A] transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB REPOSITORY ↗</span>
              </a>
            </div>
          </div>

          {/* Case Study Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-start">
            
            {/* Left 7 Cols: Title, Problem, Solution, Architecture */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="font-editorial-sans font-bold text-3xl sm:text-4xl text-[#F4F1EA] tracking-tight">
                  {portfolioProject.title}
                </h3>
                <p className="text-xs font-editorial-mono text-sky-400 uppercase tracking-wider mt-1">
                  INTERACTIVE DOCUMENTARY & DUAL-ENGINE MOTION ARCHITECTURE
                </p>
              </div>

              <p className="text-base text-[#9D988F] font-body leading-relaxed">
                {portfolioProject.description}
              </p>

              {/* Problem / Solution Callout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                  <span className="text-[10px] font-editorial-mono text-red-400 uppercase tracking-widest block mb-1">
                    [INDUSTRY CLICHE]
                  </span>
                  <p className="text-xs text-[#9D988F] font-body leading-relaxed">
                    {portfolioProject.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-sky-500/20 bg-sky-500/5">
                  <span className="text-[10px] font-editorial-mono text-sky-400 uppercase tracking-widest block mb-1">
                    [ARCHITECTURAL REMEDY]
                  </span>
                  <p className="text-xs text-[#9D988F] font-body leading-relaxed">
                    {portfolioProject.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Points */}
              <div className="pt-2">
                <span className="text-xs font-editorial-mono text-[#F4F1EA] uppercase tracking-wider block mb-3 font-semibold">
                  KEY ENGINEERING HIGHLIGHTS:
                </span>
                <ul className="space-y-2 text-xs text-[#9D988F] font-body">
                  {portfolioProject.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-mono mt-0.5">0{idx + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-2 pt-4">
                {portfolioProject.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-editorial-mono px-3 py-1 rounded bg-[#08080A] border border-[#F4F1EA]/15 text-[#F4F1EA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Motion Engine Separation Blueprint */}
            <div className="lg:col-span-5 p-6 rounded-xl border border-[#F4F1EA]/10 bg-[#0B0B0E] font-editorial-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#F4F1EA]/10 mb-4">
                <span className="flex items-center gap-1.5 text-sky-400 font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  DUAL-ENGINE COEXISTENCE
                </span>
                <span className="text-[10px] text-emerald-400">NO PROPERTY COLLISION</span>
              </div>

              <div className="space-y-3 font-mono text-[11px]">
                <div className="p-3.5 rounded bg-[#111114] border border-[#EAA728]/30">
                  <div className="flex items-center justify-between text-[#EAA728] font-bold text-xs mb-1">
                    <span>GSAP + ScrollTrigger</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#EAA728]/20">Macro Scroll</span>
                  </div>
                  <p className="text-[10px] text-[#9D988F] font-body">
                    Handles opening curtain timelines, scroll-driven reveals, image clipping, and SVG string tension paths.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#111114] border border-sky-400/30">
                  <div className="flex items-center justify-between text-sky-400 font-bold text-xs mb-1">
                    <span>Framer Motion</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-sky-400/20">Micro Physics</span>
                  </div>
                  <p className="text-[10px] text-[#9D988F] font-body">
                    Drives tactile hover elevation, 3D pill button tilt, modal entrance springs, and navigation drawer transitions.
                  </p>
                </div>

                <div className="p-3.5 rounded bg-[#111114] border border-emerald-400/30">
                  <div className="flex items-center justify-between text-emerald-400 font-bold text-xs mb-1">
                    <span>GPU Flashlight Mask</span>
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-emerald-400/20">rAF + CSS Vars</span>
                  </div>
                  <p className="text-[10px] text-[#9D988F] font-body">
                    Tracks cursor at 60fps via requestAnimationFrame, updating CSS custom properties with zero React component re-renders.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F4F1EA]/10 text-[10px] text-[#5E5A54] flex justify-between">
                <span>FPS: 60 UNLOCKED</span>
                <span>LAYOUT SHIFTS: ZERO</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
