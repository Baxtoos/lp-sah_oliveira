import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Results } from './components/Results';
import { Differentials } from './components/Differentials';
import { Booking } from './components/Booking';
import { CtaBanner } from './components/CtaBanner';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-ink text-white font-body antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Differentials />
        <Booking />
        <CtaBanner />
        <InstagramSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

