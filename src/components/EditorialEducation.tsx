import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Award, Calendar, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const EditorialEducation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      '.edu-timeline-item',
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.18,
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
      id="education"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#F4F1EA]/10 relative z-10"
    >
      {/* Chapter Marker Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-12 border-b border-[#F4F1EA]/10">
        <div>
          <span className="text-xs font-editorial-mono text-[#EAA728] tracking-widest uppercase block mb-1">
            CHAPTER 04 // ACADEMIC RECORD
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl text-[#F4F1EA]">
            Education & Pedagogy.
          </h2>
        </div>
        <div className="text-xs font-editorial-mono text-[#9D988F]">
          <span>VERIFIED BY RESUME & CERTIFICATES</span>
          <span className="block text-[#5E5A54]">CHHATRAPATI SAMBHAJINAGAR, MAHARASHTRA</span>
        </div>
      </div>

      {/* Editorial Timeline */}
      <div className="relative pl-6 sm:pl-10 mt-12 space-y-12 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-[#EAA728] before:via-[#F4F1EA]/20 before:to-transparent">
        {PORTFOLIO_DATA.education.map((item, index) => (
          <div key={index} className="edu-timeline-item relative group">
            
            {/* Timeline node icon */}
            <div className="absolute -left-[30px] sm:-left-[38px] top-1 w-6 h-6 rounded-full bg-[#08080A] border-2 border-[#EAA728] flex items-center justify-center text-[10px] text-[#EAA728] group-hover:scale-110 group-hover:bg-[#EAA728] group-hover:text-[#08080A] transition-all">
              ✦
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-[#F4F1EA]/10 bg-[#111114]/80 hover:border-[#EAA728]/30 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F4F1EA]/10">
                <span className="inline-flex items-center gap-1.5 text-xs font-editorial-mono text-[#EAA728] font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.period}
                </span>

                {item.score && (
                  <span className="inline-flex items-center gap-1 text-xs font-editorial-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                    <Award className="w-3 h-3" />
                    SCORE: {item.score}
                  </span>
                )}
              </div>

              <h3 className="font-editorial-sans font-bold text-xl sm:text-2xl text-[#F4F1EA] mb-1">
                {item.degree}
              </h3>

              <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#9D988F] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#EAA728]" />
                <span>{item.institution}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#9D988F] font-body leading-relaxed max-w-3xl">
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
