import React from 'react';
import { ArrowUp, Github, Linkedin, Code, Mail, Phone, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EditorialFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 lg:px-12 bg-[#08080A] border-t border-[#F4F1EA]/10 text-xs font-editorial-mono text-[#9D988F] relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Colophon Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#F4F1EA]/10 items-start">
          
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2 text-[#F4F1EA] font-editorial-sans font-bold text-base">
              <span>ADITYA CHAVAN</span>
              <span className="text-xs font-editorial-mono text-[#EAA728]">[AC.DEV]</span>
            </div>
            <p className="text-xs text-[#9D988F] font-body max-w-sm leading-relaxed">
              Computer Science undergraduate building responsive, database-driven applications with React, Node.js, and PHP/MySQL. Based in Chhatrapati Sambhajinagar, Maharashtra.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-[#5E5A54] pt-2">
              <Compass className="w-3 h-3 text-[#EAA728]" />
              <span>COORDINATES: {PORTFOLIO_DATA.profile.coordinates}</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] text-[#5E5A54] uppercase tracking-wider block">NAVIGATION CHAPTERS</span>
            <ul className="space-y-1.5 text-xs text-[#9D988F]">
              <li><a href="#about" className="hover:text-[#EAA728] transition-colors">01 / Foundations & Identity</a></li>
              <li><a href="#skills" className="hover:text-[#EAA728] transition-colors">02 / Technical Taxonomy</a></li>
              <li><a href="#projects" className="hover:text-[#EAA728] transition-colors">03 / Field Case Studies</a></li>
              <li><a href="#education" className="hover:text-[#EAA728] transition-colors">04 / Academic Pedagogy</a></li>
              <li><a href="#certifications" className="hover:text-[#EAA728] transition-colors">05 / Verified Credentials</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <span className="text-[10px] text-[#5E5A54] uppercase tracking-wider block">VERIFIED DIRECT REACH</span>
            <div className="space-y-1.5 text-xs">
              <a 
                href={`mailto:${PORTFOLIO_DATA.profile.email}`} 
                className="flex items-center gap-2 text-[#F4F1EA] hover:text-[#EAA728] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#EAA728]" />
                <span>{PORTFOLIO_DATA.profile.email}</span>
              </a>
              <a 
                href={`tel:${PORTFOLIO_DATA.profile.phone}`} 
                className="flex items-center gap-2 text-[#9D988F] hover:text-[#F4F1EA] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#EAA728]" />
                <span>{PORTFOLIO_DATA.profile.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111114] border border-[#F4F1EA]/10 hover:border-[#EAA728]/40 text-[#F4F1EA] hover:text-[#EAA728] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111114] border border-[#F4F1EA]/10 hover:border-[#EAA728]/40 text-[#F4F1EA] hover:text-[#EAA728] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111114] border border-[#F4F1EA]/10 hover:border-[#EAA728]/40 text-[#F4F1EA] hover:text-[#EAA728] transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5E5A54]">
          <div>
            <span>© 2026 Aditya Chavan · Software Developer Portfolio</span>
            <span className="block text-[10px] text-[#5E5A54]/80 mt-0.5">
              Built with React, TypeScript, GSAP, Framer Motion, and Tailwind CSS.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#F4F1EA]/15 text-[#9D988F] hover:text-[#F4F1EA] hover:border-[#EAA728] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#EAA728]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
