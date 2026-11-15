import React, { useState } from 'react';
import { BackgroundWatermark } from '../common/Icons';
import { playTechClick, playTechHover } from '../../utils/audio';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Is this game a single-player or multiplayer experience?',
      a: 'Both! The game features an expansive narrative-driven single-player campaign alongside a 4-player cooperative tactical multiplayer mode and competitive PvP battlegrounds. Seamless cross-platform squad matchmaking is fully supported.'
    },
    {
      q: 'What sets the factions apart, and can I switch between them?',
      a: 'Each faction controls distinct technological trees, combat doctrines, and specialized augmentations. While your operative pledges initial allegiance at character creation, you can defect through covert espionage missions later in the narrative.'
    },
    {
      q: 'How does the crafting system work in the game?',
      a: 'Scavenge fallen tech units and nano-materials across ruined sectors to forge over 150+ modular weapon attachments, bio-armor plating, and deployable tactical drones at field fabrication terminals.'
    },
    {
      q: "Will my decisions affect the game's outcome, and are there multiple endings?",
      a: 'Yes. Branching dialogue choices, sector control milestones, and critical moral decisions regarding AI core restoration directly lead to 5 completely unique cinematic endings and persistent world states.'
    },
    {
      q: 'What content can I expect with the upcoming expansions?',
      a: 'Quarterly expansions introduce new subterranean sector maps, 2 additional operative classes, seasonal battle passes, high-threat community raid bosses, and extended story campaign chapters free for all Pro Plan owners.'
    }
  ];

  const toggleItem = (idx) => {
    playTechClick();
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      {/* Background Watermark */}
      <BackgroundWatermark
        text="QUERIES"
        className="top-12 -left-20 opacity-50 select-none pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-title font-bold text-2xl sm:text-3xl md:text-4xl text-black mb-4 leading-tight tracking-tight">
            Unveiling Clarity: Your Questions Answered
          </h2>
          <p className="font-mono text-base sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Navigate Through Frequently Asked Questions to Enhance Your Understanding of the Survival Experience
          </p>
        </div>

        {/* Accordion List matching Figma */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={playTechHover}
                className="bg-white border border-gray-200 shadow-md shadow-gray-100 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-neutral-50/70 transition-colors"
                >
                  <span className="font-mono font-bold text-base sm:text-lg text-black leading-snug">
                    {faq.q}
                  </span>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 text-[#3040D3] flex items-center justify-center">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 font-mono text-neutral-800 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-neutral-50/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* "Still have a question?" Bottom Callout matching Figma */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-title font-bold text-2xl sm:text-3xl text-black mb-3">
            Still have a question?
          </h3>
          <p className="font-mono text-base sm:text-lg text-neutral-800 mb-8 leading-relaxed">
            Feel free to reach out for clarifications and inquiries.
          </p>
          <button
            onClick={() => {
              playTechClick();
              if (onOpenContact) onOpenContact();
            }}
            className="btn-chamfer-solid px-9 py-3.5 font-mono font-bold text-base tracking-wider uppercase cursor-pointer"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
