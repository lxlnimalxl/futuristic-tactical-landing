import React from 'react';
import pilotImg from '../../assets/feature-pilot.png';
import { HudRings, IconGameplay, BackgroundWatermark } from '../common/Icons';
import { playTechHover } from '../../utils/audio';

export default function FeatureSection() {
  const features = [
    {
      id: 'survival',
      title: 'Intense Survival Gameplay',
      description:
        'Test your skills and instincts as you navigate through hostile environments, scavenge for resources, and make crucial choices to survive in a world on the brink of collapse.',
      tag: 'MOD_01',
      stats: 'PERMADEATH // SEVERITY: HIGH'
    },
    {
      id: 'combat',
      title: 'Tactical Combat and Customization',
      description:
        'Engage in adrenaline-pumping combat encounters, utilizing a range of futuristic weapons, gadgets, and abilities. Customize your play style, strategize your approach, and outmaneuver enemies for tactical advantage.',
      tag: 'MOD_02',
      stats: 'ARSENAL // 48+ WEAPON MODS'
    },
    {
      id: 'coop',
      title: 'Cooperative Multiplayer',
      description:
        'Join forces with friends or other players in cooperative multiplayer mode. Tackle challenging missions together, coordinate strategies, and combine your unique abilities.',
      tag: 'MOD_03',
      stats: 'SQUAD SIZE // 4 PLAYERS'
    }
  ];

  return (
    <section id="features" className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Watermark */}
      <BackgroundWatermark
        text="INNOVATION"
        className="top-12 -right-20 opacity-50 select-none pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-title font-bold text-2xl sm:text-3xl md:text-4xl text-black mb-4 leading-tight tracking-tight">
            Harness the Power Of Innovation In A Game Of Survival
          </h2>
          <p className="font-mono text-base sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Discover unique mechanics and enhancements that take your gaming experience to new heights.
          </p>
        </div>

        {/* Desktop Asymmetric Showcase Layout matching Figma */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Cards (Card 1 & Card 3) */}
          <div className="lg:col-span-4 flex flex-col gap-10 justify-between">
            
            {/* Feature 1: Intense Survival Gameplay */}
            <div
              onMouseEnter={playTechHover}
              className="relative bg-white border-2 border-[#3040D3] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15"
              style={{
                clipPath: 'polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)'
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <IconGameplay className="w-8 h-8" />
                <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                  {features[0].tag}
                </span>
              </div>
              <h3 className="font-title font-bold text-xl text-black mb-3 leading-snug">
                {features[0].title}
              </h3>
              <p className="font-mono text-neutral-800 text-sm leading-relaxed mb-4">
                {features[0].description}
              </p>
              <div className="font-mono text-[11px] font-bold text-[#3040D3] uppercase tracking-wider border-t border-blue-100 pt-3 flex items-center justify-between">
                <span>{features[0].stats}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3040D3]" />
              </div>
            </div>

            {/* Feature 3: Cooperative Multiplayer */}
            <div
              onMouseEnter={playTechHover}
              className="relative bg-white border-2 border-[#3040D3] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15"
              style={{
                clipPath: 'polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)'
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <IconGameplay className="w-8 h-8" />
                <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                  {features[2].tag}
                </span>
              </div>
              <h3 className="font-title font-bold text-xl text-black mb-3 leading-snug">
                {features[2].title}
              </h3>
              <p className="font-mono text-neutral-800 text-sm leading-relaxed mb-4">
                {features[2].description}
              </p>
              <div className="font-mono text-[11px] font-bold text-[#3040D3] uppercase tracking-wider border-t border-blue-100 pt-3 flex items-center justify-between">
                <span>{features[2].stats}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3040D3]" />
              </div>
            </div>

          </div>

          {/* Center Column: Futuristic Pilot Hero Visual with Rotating Holographic HUD */}
          <div className="lg:col-span-4 relative flex items-center justify-center my-6 lg:my-0">
            <div className="relative w-full max-w-[420px] flex items-center justify-center">
              
              {/* Rotating Sci-Fi Hologram HUD behind pilot */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                <HudRings className="w-[125%] h-[125%]" />
              </div>

              {/* Pilot Graphic */}
              <div className="relative z-10 animate-float flex justify-center">
                <img
                  src={pilotImg}
                  alt="Shadowfall Cyber Pilot Specialist"
                  className="w-full max-h-[580px] object-contain drop-shadow-[0_25px_50px_rgba(48,64,211,0.25)]"
                />

                {/* Cyberpunk Telemetry Tag */}
                <div className="absolute top-8 left-0 bg-white/90 backdrop-blur-md border border-[#3040D3] px-3 py-1 font-mono text-[10px] text-blue-700 font-bold tracking-widest">
                  TARGET LOCK: ACTIVE
                </div>

                <div className="absolute bottom-10 right-0 bg-white/90 backdrop-blur-md border border-[#3040D3] px-3 py-1 font-mono text-[10px] text-blue-700 font-bold tracking-widest">
                  PILOT BIO-RESONANCE: OK
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Card (Card 2) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            {/* Feature 2: Tactical Combat and Customization */}
            <div
              onMouseEnter={playTechHover}
              className="relative bg-white border-2 border-[#3040D3] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15"
              style={{
                clipPath: 'polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)'
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <IconGameplay className="w-8 h-8" />
                <span className="font-mono text-xs font-bold text-blue-600 tracking-widest">
                  {features[1].tag}
                </span>
              </div>
              <h3 className="font-title font-bold text-xl text-black mb-3 leading-snug">
                {features[1].title}
              </h3>
              <p className="font-mono text-neutral-800 text-sm leading-relaxed mb-4">
                {features[1].description}
              </p>
              <div className="font-mono text-[11px] font-bold text-[#3040D3] uppercase tracking-wider border-t border-blue-100 pt-3 flex items-center justify-between">
                <span>{features[1].stats}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3040D3]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
