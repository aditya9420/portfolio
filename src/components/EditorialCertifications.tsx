import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ShieldCheck, ArrowUpRight, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

gsap.registerPlugin(ScrollTrigger);

export const EditorialCertifications: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      '.cert-dossier-card',
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.1,
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
      id="certifications"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-[#F4F1EA]/10 relative z-10"
    >
      {/* Chapter Marker Header */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-12 border-b border-[#F4F1EA]/10">
        <div>
          <span className="text-xs font-editorial-mono text-[#EAA728] tracking-widest uppercase block mb-1">
            CHAPTER 05 // VERIFIED CREDENTIALS
          </span>
          <h2 className="font-editorial-serif text-3xl sm:text-5xl text-[#F4F1EA]">
            Continuous Competency.
          </h2>
        </div>
        <div className="text-xs font-editorial-mono text-[#9D988F]">
          <span>RECORD COUNT: {PORTFOLIO_DATA.certifications.length} CERTIFICATIONS</span>
          <span className="block text-[#5E5A54]">FORAGE · LETSUPGRADE · PROGRAMMING HUB · MONGODB</span>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
        {PORTFOLIO_DATA.certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="cert-dossier-card cursor-pointer p-6 rounded-2xl border border-[#F4F1EA]/10 bg-[#111114]/80 hover:border-[#EAA728]/40 hover:bg-[#18181D] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4F1EA]/10">
                <span className="text-[10px] font-editorial-mono px-2 py-0.5 rounded bg-[#EAA728]/10 text-[#EAA728] border border-[#EAA728]/20 uppercase tracking-wider font-semibold">
                  {cert.category}
                </span>
                <span className="text-[10px] font-editorial-mono text-[#5E5A54] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  VERIFIED
                </span>
              </div>

              <h3 className="font-editorial-sans font-bold text-lg text-[#F4F1EA] group-hover:text-[#EAA728] transition-colors mb-1">
                {cert.name}
              </h3>

              <div className="text-xs font-editorial-mono text-[#9D988F]">
                ISSUER: <span className="text-[#F4F1EA] font-medium">{cert.issuer}</span>
              </div>
            </div>

            {/* Bottom Affordance */}
            <div className="mt-6 pt-4 border-t border-[#F4F1EA]/10 flex items-center justify-between text-xs font-editorial-mono text-[#9D988F] group-hover:text-[#EAA728] transition-colors">
              <span className="flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                {cert.file ? 'Inspect Document' : 'View Record Details'}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
