import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { CallToAction } from './components/CallToAction';
import { QRCodeSection } from './components/QRCodeSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFDFF] text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections with Technical Editorial Dividers */}
      <main className="flex-1">
        <Hero />
        
        <SectionDivider number="01" title="ABOUT" />
        <About />
        
        <SectionDivider number="02" title="SERVICES" />
        <Services />
        
        <SectionDivider number="03" title="PROJECTS" />
        <Projects />
        
        <SectionDivider number="04" title="PROCESS" />
        <Process />

        <SectionDivider number="05" title="CONTACT" />
        <ContactSection />

        {/* CTA Section */}
        <CallToAction />

        {/* QR WEBSITE Section (directly above Footer) */}
        <QRCodeSection />
      </main>

      {/* Deep Navy Footer */}
      <Footer />

      {/* Floating Action Button (Zalo, Phone, FB, etc.) */}
      <FloatingContact />
    </div>
  );
}
