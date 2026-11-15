import React from 'react';
import heroImg from '../../assets/hero.png';
import {
  HexagonGlow,
  IconGameplay,
  IconItems,
  IconHeroes,
  ArrowRightCircle,
  BackgroundWatermark
} from '../common/Icons';
import { playTechClick, playTechHover } from '../../utils/audio';

export default function HeroSection({ onOpenBuy, onOpenTrailer, onSelectFeatureCard }) {
  const cards = [
    {
      id: 'gameplay',
      title: 'Gameplay and Features',
      icon: <IconGameplay className="w-9 h-9" />,
      tag: 'SYS_01',
      description: 'Dynamic sandbox survival in high-threat sectors.'
    },
    {
      id: 'items',
      title: 'Items and Collectibles',
      icon: <IconItems className="w-9 h-9" />,
      tag: 'SYS_02',
      description: 'Nano-tech crafting and legendary artifact loot.'
    },
    {
      id: 'heroes',
      title: 'Heroes and Game Locations',
      icon: <IconHeroes className="w-9 h-9" />,
      tag: 'SYS_03',
      description: 'Cybernetic specialists across neon metropolis ruins.'
    }
  ];

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-16 lg:pb-24 overflow-hidden bg-white scroll-mt-24">
      {/* Background Watermark */}
      <BackgroundWatermark
        text="CYBERVOID"
        className="top-2 sm:top-6 -left-10 opacity-70 select-none pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Typography & Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 mb-4 self-start px-3 py-1 bg-blue-50 border border-blue-200/80 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-[#3040D3] animate-ping" />
              <span className="font-mono text-xs font-bold text-[#3040D3] uppercase tracking-wider">
                Next-Gen Tactical Cyber-Action // v2.0
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-title font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-black leading-[1.12] tracking-tight max-w-2xl mb-6">
              Unleash your survival instincts in a futuristic apocalypse.
            </h1>

            {/* Subheading */}
            <p className="font-mono text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed max-w-xl mb-8">
              Engage in heart-pounding combat across ruined cityscapes and war-torn landscapes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              <button
                onClick={() => {
                  playTechClick();
                  if (onOpenBuy) onOpenBuy();
                }}
                className="btn-chamfer-solid px-8 sm:px-10 py-3.5 sm:py-4 font-mono font-bold text-base sm:text-lg tracking-wider uppercase cursor-pointer"
              >
                Buy Game
              </button>

              <button
                onClick={() => {
                  playTechClick();
                  if (onOpenTrailer) onOpenTrailer();
                }}
                className="btn-chamfer-outline border-2 border-[#3040D3] px-7 sm:px-9 py-3 sm:py-3.5 font-mono font-bold text-base sm:text-lg tracking-wider text-[#3040D3] uppercase cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)'
                }}
              >
                Learn More
              </button>
            </div>

            {/* 3 Tech Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {cards.map((card) => (
                <div
                  key={card.id}
                  onMouseEnter={playTechHover}
                  onClick={() => {
                    playTechClick();
                    if (onSelectFeatureCard) onSelectFeatureCard(card.id);
                  }}
                  className="group relative bg-white border-2 border-[#3040D3] p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between min-h-[220px]"
                  style={{
                    clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'
                  }}
                >
                  <div className="absolute top-1 right-2 font-mono text-[9px] font-bold text-blue-600 tracking-widest opacity-60">
                    {card.tag}
                  </div>
                  
                  <div className="mb-4 text-black group-hover:scale-105 transition-transform origin-left">
                    {card.icon}
                  </div>

                  <div>
                    <h3 className="font-mono font-bold text-base text-black mb-1 group-hover:text-[#3040D3] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="font-mono text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex justify-end mt-4">
                    <ArrowRightCircle className="w-8 h-8 group-hover:bg-[#2432B8]" />
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual with Glowing Hexagon */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[500px] lg:max-w-[580px] flex items-center justify-center">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                <HexagonGlow className="w-[110%] h-[110%]" />
              </div>

              <div className="relative z-10 animate-float flex justify-center">
                <img
                  src={heroImg}
                  alt="Futuristic Tactical Operative"
                  className="w-full max-h-[640px] lg:max-h-[720px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
                />

                <div className="absolute bottom-6 -left-2 sm:left-4 bg-white/90 backdrop-blur-md border border-[#3040D3] px-4 py-2 shadow-lg shadow-blue-500/10 hidden sm:block font-mono">
                  <div className="text-[10px] text-blue-600 font-bold tracking-widest uppercase">
                    SECTOR // ALPHA-9
                  </div>
                  <div className="text-xs font-bold text-black flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    STATUS: COMBAT READY
                  </div>
                </div>

                <div className="absolute top-12 -right-2 sm:right-2 bg-white/90 backdrop-blur-md border border-[#3040D3] px-3.5 py-1.5 shadow-lg shadow-blue-500/10 hidden sm:block font-mono">
                  <div className="text-[10px] text-blue-600 font-bold tracking-widest uppercase">
                    TACTICAL UNIT
                  </div>
                  <div className="text-xs font-bold text-black">
                    CLASS: VANGUARD
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
