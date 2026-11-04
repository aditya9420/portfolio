import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Linkedin, Github, Code, Copy, Check, Send, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08080A]/90 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-xl bg-[#111114] border border-[#F4F1EA]/20 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 overflow-hidden"
        >
          {/* Subtle top editorial glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EAA728] via-[#F4F1EA] to-[#EAA728]" />

          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-[#F4F1EA]/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#EAA728] tracking-widest uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                INITIATE DIRECT CORRESPONDENCE
              </div>
              <h2 id="contact-modal-title" className="font-editorial-serif text-3xl sm:text-4xl text-[#F4F1EA]">
                Let's Build Something Worth Shipping.
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#9D988F] hover:text-[#F4F1EA] hover:bg-[#F4F1EA]/10 transition-colors"
              aria-label="Close dialogue"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-[#9D988F] font-body leading-relaxed mt-4 mb-6">
            Currently available for Software Developer roles, full-stack engineering contracts, and technical problem-solving engagements. Reach out directly through any verified channel below:
          </p>

          {/* Contact Direct Channels */}
          <div className="space-y-3 font-editorial-mono text-xs">
            
            {/* Email Channel */}
            <div className="p-4 rounded-xl border border-[#F4F1EA]/10 bg-[#08080A] flex items-center justify-between gap-3 group hover:border-[#EAA728]/40 transition-colors">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-lg bg-[#111114] text-[#EAA728]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-[#5E5A54] uppercase block">PRIMARY ELECTRONIC MAIL</span>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`} 
                    className="text-[#F4F1EA] hover:text-[#EAA728] font-medium text-xs sm:text-sm truncate block"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.email, 'email')}
                className="p-2 rounded-lg bg-[#18181D] hover:bg-[#202026] text-[#9D988F] hover:text-[#F4F1EA] transition-colors flex-shrink-0"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Channel */}
            <div className="p-4 rounded-xl border border-[#F4F1EA]/10 bg-[#08080A] flex items-center justify-between gap-3 group hover:border-[#EAA728]/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#111114] text-[#EAA728]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#5E5A54] uppercase block">TELEPHONE CONTACT</span>
                  <a 
                    href={`tel:${PORTFOLIO_DATA.profile.phone}`} 
                    className="text-[#F4F1EA] hover:text-[#EAA728] font-medium text-xs sm:text-sm"
                  >
                    {PORTFOLIO_DATA.profile.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.profile.phone, 'phone')}
                className="p-2 rounded-lg bg-[#18181D] hover:bg-[#202026] text-[#9D988F] hover:text-[#F4F1EA] transition-colors flex-shrink-0"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-3 gap-3 pt-4 font-editorial-mono text-xs">
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#F4F1EA]/10 bg-[#08080A] hover:bg-[#18181D] hover:border-[#EAA728]/40 text-center flex flex-col items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#EAA728]" />
              <span className="text-[11px] text-[#F4F1EA] font-semibold">LinkedIn</span>
              <span className="text-[9px] text-[#5E5A54]">Connect ↗</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#F4F1EA]/10 bg-[#08080A] hover:bg-[#18181D] hover:border-[#EAA728]/40 text-center flex flex-col items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4 text-[#EAA728]" />
              <span className="text-[11px] text-[#F4F1EA] font-semibold">GitHub</span>
              <span className="text-[9px] text-[#5E5A54]">Repositories ↗</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-[#F4F1EA]/10 bg-[#08080A] hover:bg-[#18181D] hover:border-[#EAA728]/40 text-center flex flex-col items-center gap-1.5 transition-colors"
            >
              <Code className="w-4 h-4 text-[#EAA728]" />
              <span className="text-[11px] text-[#F4F1EA] font-semibold">LeetCode</span>
              <span className="text-[9px] text-[#5E5A54]">Problem Solving ↗</span>
            </a>
          </div>

          {/* Direct CTA */}
          <div className="pt-6 mt-6 border-t border-[#F4F1EA]/10 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Software%20Developer%20Opportunity%20-%20Aditya%20Chavan`}
              className="flex-1 py-3.5 px-6 rounded-full bg-[#EAA728] text-[#08080A] font-editorial-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-[#F4F1EA] transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>START A PROJECT / SEND EMAIL</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.resumePdf}
              download
              className="py-3.5 px-6 rounded-full border border-[#F4F1EA]/20 text-[#F4F1EA] font-editorial-mono text-xs font-medium text-center hover:bg-[#F4F1EA]/10 transition-colors"
            >
              RESUME (PDF) ↓
            </a>
          </div>

          {/* Footer note */}
          <div className="mt-4 text-center text-[10px] font-editorial-mono text-[#5E5A54]">
            LOCATION: CHHATRAPATI SAMBHAJINAGAR, MAHARASHTRA, INDIA
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
