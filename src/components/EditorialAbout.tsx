import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const EditorialAbout: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      '.about-fade',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#F4F1EA]/10 relative z-10"
    >
      {/* Chapter Marker Header */}
      <div className="about-fade flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-12 border-b border-[#F4F1EA]/10">
        <div>
          <span className="text-xs font-editorial-mono text-[#EAA728] tracking-widest uppercase block mb-1">
            CHAPTER 01 // FOUNDATIONS & IDENTITY
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl text-[#F4F1EA]">
            The Architect's Journal.
          </h2>
        </div>
        <div className="text-xs font-editorial-mono text-[#9D988F] text-right">
          <span>SUBJECT: ADITYA CHAVAN</span>
          <span className="block text-[#5E5A54]">ACADEMIC CODE: DEOGIRI-BCS-2027</span>
        </div>
      </div>

      {/* Main Grid: Narrative + Experience Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
        
        {/* Left Column: Documentary Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <p className="about-fade font-editorial-serif italic text-2xl sm:text-3xl text-[#F4F1EA] leading-relaxed border-l-2 border-[#EAA728] pl-6 py-2">
            "{PORTFOLIO_DATA.about.prologue}"
          </p>

          <p className="about-fade text-base sm:text-lg text-[#9D988F] font-body leading-relaxed">
            {PORTFOLIO_DATA.about.paragraph1}
          </p>

          <p className="about-fade text-base sm:text-lg text-[#9D988F] font-body leading-relaxed">
            {PORTFOLIO_DATA.about.paragraph2}
          </p>

          {/* Core Philosophy Highlights */}
          <div className="about-fade grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="p-5 rounded-xl border border-[#F4F1EA]/10 bg-[#111114]/60">
              <div className="flex items-center gap-2 text-sm font-editorial-sans font-bold text-[#F4F1EA] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#EAA728]" />
                Deterministic Architecture
              </div>
              <p className="text-xs text-[#9D988F] leading-relaxed font-body">
                Relational schema design, normalization, sanitized database transactions, and scalable code structures.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#F4F1EA]/10 bg-[#111114]/60">
              <div className="flex items-center gap-2 text-sm font-editorial-sans font-bold text-[#F4F1EA] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#EAA728]" />
                User-Centric Engineering
              </div>
              <p className="text-xs text-[#9D988F] leading-relaxed font-body">
                Fast rendering, responsive design systems, accessible controls, and purposeful motion that informs rather than distracts.
              </p>
            </div>
          </div>

          {/* Verified Stats Row */}
          <div className="about-fade grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#F4F1EA]/10">
            {PORTFOLIO_DATA.about.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-editorial-serif text-3xl sm:text-4xl text-[#EAA728] font-normal">
                  {stat.num}
                </span>
                <span className="text-[10px] font-editorial-mono font-bold text-[#F4F1EA] tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] font-editorial-mono text-[#5E5A54] mt-0.5">
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Verified Industry Experience & Simulations Dossier */}
        <div className="lg:col-span-5 space-y-6">
          <div className="about-fade p-6 sm:p-8 rounded-2xl border border-[#F4F1EA]/15 bg-[#111114] shadow-xl relative overflow-hidden">
            {/* Stamp label */}
            <div className="flex items-center justify-between pb-6 border-b border-[#F4F1EA]/10">
              <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#EAA728] uppercase tracking-wider font-semibold">
                <Briefcase className="w-4 h-4" />
                VERIFIED INDUSTRY ENGAGEMENT
              </div>
              <span className="text-[10px] font-editorial-mono text-[#5E5A54]">DOSSIER #01</span>
            </div>

            {/* Experience Items List */}
            <div className="divide-y divide-[#F4F1EA]/10">
              {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="py-6 first:pt-6 last:pb-0">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-editorial-mono px-2 py-0.5 rounded bg-[#EAA728]/10 text-[#EAA728] border border-[#EAA728]/30 uppercase tracking-wider">
                        {exp.badge}
                      </span>
                      <h3 className="font-editorial-sans font-bold text-lg text-[#F4F1EA] mt-2">
                        {exp.role}
                      </h3>
                      <div className="text-xs font-editorial-mono text-[#9D988F]">
                        {exp.company} · <span className="text-[#EAA728]">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#9D988F] font-body leading-relaxed mt-2 mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#9D988F] font-body">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#EAA728] mt-0.5">›</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Academic Base Affiliation */}
            <div className="mt-6 pt-6 border-t border-[#F4F1EA]/10 flex items-center justify-between text-xs font-editorial-mono text-[#9D988F]">
              <span className="flex items-center gap-1.5 text-[#F4F1EA]">
                <GraduationCap className="w-4 h-4 text-[#EAA728]" />
                Deogiri ITMS Candidate
              </span>
              <a href="#education" className="text-[#EAA728] hover:underline flex items-center gap-1">
                View Academics <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
