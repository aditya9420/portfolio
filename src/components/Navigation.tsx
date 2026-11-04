import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface NavigationProps {
  onOpenContact: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'certifications', 'collaborate'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '01 / ABOUT', href: '#about', id: 'about' },
    { label: '02 / SKILLS', href: '#skills', id: 'skills' },
    { label: '03 / PROJECTS', href: '#projects', id: 'projects' },
    { label: '04 / EDUCATION', href: '#education', id: 'education' },
    { label: '05 / CERTS', href: '#certifications', id: 'certifications' },
  ];

  return (
    <>
      {/* Top Editorial Telemetry Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 border-b border-[#F4F1EA]/10 text-[11px] font-editorial-mono tracking-widest text-[#9D988F] bg-[#08080A]/95 backdrop-blur-md relative z-50">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#EAA728] animate-pulse"></span>
            ISSUE 2026 // MONOGRAPH NO. 01
          </span>
          <span className="text-[#5E5A54]">|</span>
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#EAA728]" />
            COORDINATES: {PORTFOLIO_DATA.profile.coordinates}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 text-[#F4F1EA]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            VERIFIED CREDENTIAL ARCHIVE
          </span>
          <span className="text-[#5E5A54]">|</span>
          <span className="text-[#EAA728] font-medium">STATUS: READY FOR SDE ROLES</span>
        </div>
      </div>

      {/* Main Masthead Navigation */}
      <header 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#08080A]/90 backdrop-blur-xl border-b border-[#F4F1EA]/10 shadow-2xl py-3.5' 
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Editorial Brand */}
          <a 
            href="#hero" 
            className="group flex flex-col focus:outline-none"
            aria-label="Aditya Chavan Portfolio Homepage"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-editorial-sans font-bold text-lg md:text-xl tracking-tight text-[#F4F1EA] group-hover:text-[#EAA728] transition-colors">
                ADITYA CHAVAN
              </span>
              <span className="text-[10px] font-editorial-mono tracking-widest text-[#EAA728] font-semibold">
                [AC.DEV]
              </span>
            </div>
            <span className="text-[10px] font-editorial-mono tracking-wider text-[#9D988F] uppercase -mt-0.5">
              Full-Stack Software Developer
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-[12px] font-editorial-mono tracking-wider" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#EAA728] font-semibold' 
                      : 'text-[#9D988F] hover:text-[#F4F1EA]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EAA728]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="relative overflow-hidden group px-4 py-2 rounded-full bg-[#F4F1EA] text-[#08080A] font-editorial-mono text-[12px] font-semibold tracking-wider flex items-center gap-1.5 shadow-md hover:bg-[#EAA728] transition-colors duration-200"
              aria-label="Open contact dialogue"
            >
              <span>COLLABORATE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#F4F1EA] hover:text-[#EAA728] transition-colors border border-[#F4F1EA]/20 rounded-md"
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[68px] z-50 bg-[#111114]/98 backdrop-blur-2xl border-b border-[#F4F1EA]/15 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="text-[10px] font-editorial-mono text-[#EAA728] tracking-widest uppercase border-b border-[#F4F1EA]/10 pb-2">
                INDEX OF CHAPTERS
              </div>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-editorial-mono py-2 flex items-center justify-between border-b border-[#F4F1EA]/5 ${
                    activeSection === item.id ? 'text-[#EAA728] font-bold' : 'text-[#F4F1EA]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[#5E5A54] text-xs">→</span>
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-lg bg-[#EAA728] text-[#08080A] font-editorial-mono text-xs font-bold uppercase tracking-wider text-center"
                >
                  START A CONVERSATION
                </button>
                <a
                  href={PORTFOLIO_DATA.profile.resumePdf}
                  download
                  className="w-full py-2.5 rounded-lg border border-[#F4F1EA]/20 text-[#F4F1EA] font-editorial-mono text-xs tracking-wider text-center"
                >
                  DOWNLOAD CURRICULUM VITAE (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
