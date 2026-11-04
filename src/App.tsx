import React, { useState } from 'react';
import { FilmGrain } from './components/FilmGrain';
import { Navigation } from './components/Navigation';
import { HeroOpening } from './components/HeroOpening';
import { EditorialAbout } from './components/EditorialAbout';
import { EditorialSkills } from './components/EditorialSkills';
import { EditorialProjects } from './components/EditorialProjects';
import { EditorialEducation } from './components/EditorialEducation';
import { EditorialCertifications } from './components/EditorialCertifications';
import { SignatureCollaborate } from './components/SignatureCollaborate';
import { EditorialFooter } from './components/EditorialFooter';
import { ContactModal } from './components/ContactModal';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#08080A] text-[#F4F1EA] selection:bg-[#EAA728] selection:text-[#08080A] overflow-x-hidden">
      {/* Cinematic Procedural Film Grain Overlay */}
      <FilmGrain />

      {/* Editorial Navigation Masthead */}
      <Navigation onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Narrative Landmark */}
      <main id="main-content">
        {/* Cinematic Opening Hero with Sequenced GSAP Timeline & Torch Reveal */}
        <HeroOpening onOpenContact={() => setIsContactOpen(true)} />

        {/* Chapter 01: Foundations, Identity & Modi Innovations Internship */}
        <EditorialAbout />

        {/* Chapter 02: Architectural Competencies & Taxonomy */}
        <EditorialSkills />

        {/* Chapter 03: Field Case Studies (e-Agri Portal & Portfolio System) */}
        <EditorialProjects />

        {/* Chapter 04: Academic Foundations & Pedagogy */}
        <EditorialEducation />

        {/* Chapter 05: Verified Credentials & Simulations */}
        <EditorialCertifications />

        {/* Signature Piece: Standalone "LET'S COLLABORATE" Section */}
        <SignatureCollaborate onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Editorial Colophon & Telemetry Footer */}
      <EditorialFooter />

      {/* Direct Contact Overlay Dialogue */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
