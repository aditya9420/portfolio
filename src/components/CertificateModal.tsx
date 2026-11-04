import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Download, FileText } from 'lucide-react';
import { Certification } from '../data/portfolioData';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const isPdf = cert.file?.toLowerCase().endsWith('.pdf');
  const isImage = cert.file?.toLowerCase().endsWith('.png') || cert.file?.toLowerCase().endsWith('.jpeg') || cert.file?.toLowerCase().endsWith('.jpg');

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#08080A]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#111114] border border-[#F4F1EA]/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#F4F1EA]/10 bg-[#0B0B0E]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-editorial-mono px-2 py-0.5 rounded bg-[#EAA728]/10 text-[#EAA728] border border-[#EAA728]/20 font-bold uppercase">
                  {cert.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-editorial-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED RECORD
                </span>
              </div>
              <h3 id="cert-modal-title" className="font-editorial-sans font-bold text-lg text-[#F4F1EA] mt-1">
                {cert.name}
              </h3>
              <p className="text-xs font-editorial-mono text-[#9D988F]">
                ISSUER: {cert.issuer}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {cert.file && (
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-[#F4F1EA]/20 text-xs font-editorial-mono text-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#08080A] transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open File</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-[#9D988F] hover:text-[#F4F1EA] hover:bg-[#F4F1EA]/10 transition-colors"
                aria-label="Close certificate inspector"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body Viewer */}
          <div className="relative flex-1 min-h-[420px] bg-[#050508] p-4 flex items-center justify-center overflow-auto">
            {cert.file ? (
              isPdf ? (
                <iframe
                  src={cert.file}
                  title={cert.name}
                  className="w-full h-full min-h-[500px] rounded-lg border border-[#F4F1EA]/10"
                />
              ) : isImage ? (
                <img
                  src={cert.file}
                  alt={cert.name}
                  className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-lg"
                />
              ) : (
                <div className="text-center p-8 space-y-4 font-editorial-mono text-xs text-[#9D988F]">
                  <FileText className="w-12 h-12 text-[#EAA728] mx-auto opacity-70" />
                  <p>Document archive: {cert.name}</p>
                  <a
                    href={cert.file}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#EAA728] text-[#08080A] font-bold"
                  >
                    <Download className="w-4 h-4" /> Download Certificate File
                  </a>
                </div>
              )
            ) : (
              <div className="text-center p-8 space-y-3 font-editorial-mono text-xs text-[#9D988F] max-w-md">
                <ShieldCheck className="w-12 h-12 text-[#EAA728] mx-auto" />
                <p className="text-sm font-semibold text-[#F4F1EA]">Curriculum Credential Validated</p>
                <p>
                  This course or simulation certification was completed directly under <span className="text-[#EAA728]">{cert.issuer}</span> as recorded in Aditya Chavan's verified curriculum vitae.
                </p>
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="px-6 py-3 border-t border-[#F4F1EA]/10 bg-[#0B0B0E] text-[10px] font-editorial-mono text-[#5E5A54] flex justify-between items-center">
            <span>ARCHIVE ID: {cert.id.toUpperCase()}</span>
            <span>VERIFIED ON FILE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
