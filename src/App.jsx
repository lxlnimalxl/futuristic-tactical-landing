import React, { useState } from 'react';
import Header from './components/common/Header';
import HeroSection from './components/sections/HeroSection';
import FeatureSection from './components/sections/FeatureSection';
import CharactersSection from './components/sections/CharactersSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import Footer from './components/sections/Footer';
import BuyGameModal from './components/modals/BuyGameModal';
import ContactModal from './components/modals/ContactModal';
import TrailerModal from './components/modals/TrailerModal';

export default function App() {
  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [trailerModalOpen, setTrailerModalOpen] = useState(false);
  const [selectedPlanForBuy, setSelectedPlanForBuy] = useState(null);

  const handleOpenBuy = (plan = null) => {
    setSelectedPlanForBuy(plan);
    setBuyModalOpen(true);
  };

  const handleSelectFeatureCard = (cardId) => {
    if (cardId === 'gameplay') {
      const el = document.getElementById('features');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (cardId === 'heroes') {
      const el = document.getElementById('characters');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTrailerModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black selection:bg-[#3040D3] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenBuy={() => handleOpenBuy()}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenBuy={() => handleOpenBuy()}
          onOpenTrailer={() => setTrailerModalOpen(true)}
          onSelectFeatureCard={handleSelectFeatureCard}
        />

        <FeatureSection />

        <CharactersSection />

        <PricingSection onOpenBuy={(plan) => handleOpenBuy(plan)} />

        <FAQSection onOpenContact={() => setContactModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Interactive Dialog Modals */}
      <BuyGameModal
        isOpen={buyModalOpen}
        onClose={() => setBuyModalOpen(false)}
        selectedPlan={selectedPlanForBuy}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <TrailerModal
        isOpen={trailerModalOpen}
        onClose={() => setTrailerModalOpen(false)}
        onOpenBuy={() => handleOpenBuy()}
      />
    </div>
  );
}
