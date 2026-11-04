import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench, Cpu, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export const EditorialSkills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      '.skill-group-card',
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Core Languages':
        return <Code className="w-5 h-5 text-[#EAA728]" />;
      case 'Web Technologies':
        return <Layers className="w-5 h-5 text-sky-400" />;
      case 'Databases & Schemas':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#F4F1EA]/10 relative z-10"
    >
      {/* Chapter Marker Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-12 border-b border-[#F4F1EA]/10">
        <div>
          <span className="text-xs font-editorial-mono text-[#EAA728] tracking-widest uppercase block mb-1">
            CHAPTER 02 // TECHNICAL TAXONOMY
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl text-[#F4F1EA]">
            Architectural Competencies.
          </h2>
        </div>
        <div className="text-xs font-editorial-mono text-[#9D988F]">
          <span>TAXONOMY: VERIFIED RESUME STACK</span>
          <span className="block text-[#5E5A54]">SPECIALIZATION: FULL-STACK & RELATIONAL SYSTEMS</span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {PORTFOLIO_DATA.skills.map((group, idx) => (
          <div
            key={idx}
            className="skill-group-card flex flex-col justify-between p-6 rounded-xl border border-[#F4F1EA]/10 bg-[#111114]/90 hover:border-[#EAA728]/40 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Top border colored accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#EAA728] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F4F1EA]/10">
                <div className="p-2.5 rounded-lg bg-[#08080A] border border-[#F4F1EA]/10">
                  {getCategoryIcon(group.category)}
                </div>
                <span className="text-[10px] font-editorial-mono text-[#5E5A54] tracking-widest">
                  SECTOR 0{idx + 1}
                </span>
              </div>

              <h3 className="font-editorial-sans font-bold text-lg text-[#F4F1EA] mb-1">
                {group.category}
              </h3>
              <p className="text-xs text-[#9D988F] font-body mb-6">
                {group.subtitle}
              </p>

              {/* Skills Item List */}
              <div className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ x: 4 }}
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-editorial-mono transition-colors ${
                      skill.highlight
                        ? 'border-[#EAA728]/30 bg-[#EAA728]/5 text-[#F4F1EA]'
                        : 'border-[#F4F1EA]/10 bg-[#08080A]/60 text-[#9D988F]'
                    }`}
                  >
                    <span className="font-medium flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.highlight ? 'bg-[#EAA728]' : 'bg-[#5E5A54]'}`} />
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="text-[9px] uppercase tracking-wider text-[#EAA728] font-bold">
                        CORE
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Meta note */}
            <div className="mt-8 pt-4 border-t border-[#F4F1EA]/10 text-[10px] font-editorial-mono text-[#5E5A54] flex items-center justify-between">
              <span>SYSTEM APPLICATION</span>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Full-Stack Execution Workflow Schematic */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-[#F4F1EA]/10 bg-[#0B0B0E] relative overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-[#F4F1EA]/10 mb-6">
          <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#EAA728] tracking-wider uppercase font-semibold">
            <Cpu className="w-4 h-4" />
            END-TO-END APPLICATION WORKFLOW
          </div>
          <span className="text-[10px] font-editorial-mono text-[#5E5A54]">
            [SYSTEM PIPELINE: USER → LOGIC → PERSISTENCE]
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-editorial-mono">
          <div className="p-4 rounded-xl border border-[#F4F1EA]/10 bg-[#111114]">
            <span className="text-[#EAA728] font-bold block mb-1">01 / PRESENTATION TIER</span>
            <span className="text-[#F4F1EA] font-semibold block text-sm mb-1">React + Tailwind CSS</span>
            <p className="text-[#9D988F] font-body text-xs">
              Deterministic, responsive user interfaces with component-level state and accessible interaction patterns.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#F4F1EA]/10 bg-[#111114]">
            <span className="text-sky-400 font-bold block mb-1">02 / APPLICATION SERVICE</span>
            <span className="text-[#F4F1EA] font-semibold block text-sm mb-1">Node.js · PHP · C++</span>
            <p className="text-[#9D988F] font-body text-xs">
              Secure request validation, session management, business rule dispatch, and algorithmic computation.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[#F4F1EA]/10 bg-[#111114]">
            <span className="text-emerald-400 font-bold block mb-1">03 / STORAGE TIER</span>
            <span className="text-[#F4F1EA] font-semibold block text-sm mb-1">MySQL · PostgreSQL</span>
            <p className="text-[#9D988F] font-body text-xs">
              Relational schemas, foreign-key relational integrity, structured query execution, and reliable CRUD storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
