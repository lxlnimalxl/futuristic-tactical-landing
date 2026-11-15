import React, { useState } from 'react';
import char1Img from '../../assets/char-magnus.png';
import char2Img from '../../assets/char-malcolm.png';
import char3Img from '../../assets/char-azeroth.png';
import char4Img from '../../assets/char-kamui.png';
import char5Img from '../../assets/char-vulkan.png';
import { BackgroundWatermark } from '../common/Icons';
import { playTechClick, playTechHover } from '../../utils/audio';
import { Cpu, X } from 'lucide-react';

export default function CharactersSection() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    {
      id: 'orion',
      name: 'ORION',
      role: 'Heavy Assault / Breach Specialist',
      image: char1Img,
      badge: 'UNIT #01',
      stats: { attack: 94, defense: 88, mobility: 65, tech: 72 },
      perk: 'Reinforced Armor: Takes 30% reduced explosive and kinetic damage.',
      ultimate: 'Seismic Shockwave: Pulverizes hostile energy shields.',
      bio: 'A cybernetically enhanced frontline operative who specializes in heavy kinetic cannons and barrier destruction.'
    },
    {
      id: 'soren',
      name: 'SOREN',
      role: 'Covert Infiltrator / Recon Scout',
      image: char2Img,
      badge: 'UNIT #02',
      stats: { attack: 98, defense: 54, mobility: 90, tech: 85 },
      perk: 'Silent Footstep: Gear produces minimal acoustic trace and bypasses sensors.',
      ultimate: 'Camouflage Protocol: Light-bending camouflage for 12 seconds.',
      bio: 'A long-range sharpshooter operating with pinpoint railgun optics calibrated for hostile territories.'
    },
    {
      id: 'mira',
      name: 'MIRA',
      role: 'Neural Analyst / Systems Specialist',
      image: char3Img,
      badge: 'PRIME UNIT',
      isCenter: true,
      stats: { attack: 85, defense: 78, mobility: 82, tech: 99 },
      perk: 'System Overclock: Accelerates team gadget recharge by 40%.',
      ultimate: 'Electromagnetic Field: Emits an energy pulse disabling enemy devices.',
      bio: 'A high-tier tech specialist capable of interfacing directly with complex electronic infrastructures.'
    },
    {
      id: 'kaelen',
      name: 'KAELEN',
      role: 'Agile Operative / Fast Strike',
      image: char4Img,
      badge: 'UNIT #04',
      stats: { attack: 92, defense: 68, mobility: 96, tech: 80 },
      perk: 'Tactical Dash: Rapid evasive maneuvers dodging oncoming fire.',
      ultimate: 'Energy Blade Burst: High-frequency strikes through defensive plating.',
      bio: 'Trained in close-quarters urban operations, Kaelen excels in extreme agility and rapid flanking.'
    },
    {
      id: 'talon',
      name: 'TALON',
      role: 'Demolitions / Zone Control',
      image: char5Img,
      badge: 'UNIT #05',
      stats: { attack: 90, defense: 92, mobility: 60, tech: 88 },
      perk: 'Hazard Suit: Extreme protection against environmental heat and contaminants.',
      ultimate: 'Thermal Surge: Denies hostile advance with intense heat projection.',
      bio: 'An expert engineer specialized in combat area denial and fortified position breakthroughs.'
    }
  ];

  const handleSelect = (char) => {
    playTechClick();
    setSelectedCharacter(char);
  };

  return (
    <section id="characters" className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-gray-100 scroll-mt-24">
      <BackgroundWatermark
        text="OPERATIVES"
        className="top-8 -left-20 opacity-50 select-none pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-title font-bold text-2xl sm:text-3xl md:text-4xl text-black mb-4 leading-tight tracking-tight">
            From Outcasts To Legends
          </h2>
          <p className="font-mono text-base sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Witness the rise of unlikely heroes who defy the odds and challenge fate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-center justify-center max-w-6xl mx-auto">
          
          {/* Card 1: ORION */}
          <div
            onMouseEnter={playTechHover}
            onClick={() => handleSelect(characters[0])}
            className="group relative bg-white border-2 border-[#3040D3] p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            style={{
              clipPath: 'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)'
            }}
          >
            <div className="absolute top-2 right-3 font-mono text-[10px] font-bold text-blue-600 tracking-wider">
              {characters[0].badge}
            </div>

            <div className="relative overflow-hidden bg-neutral-900 mb-5" style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}>
              <img
                src={characters[0].image}
                alt={characters[0].name}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            <div className="text-center py-2">
              <h3 className="font-title font-bold text-2xl text-black tracking-wider group-hover:text-[#3040D3] transition-colors">
                {characters[0].name}
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-1">
                {characters[0].role}
              </p>
            </div>
          </div>

          {/* Card 3: MIRA (Central Card) */}
          <div
            onMouseEnter={playTechHover}
            onClick={() => handleSelect(characters[2])}
            className="group relative bg-white border-2 border-[#3040D3] p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/25 lg:-translate-y-4"
            style={{
              clipPath: 'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)'
            }}
          >
            <div className="absolute top-2 right-3 font-mono text-[10px] font-bold text-blue-600 tracking-wider flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-ping" />
              {characters[2].badge}
            </div>

            <div className="relative overflow-hidden bg-neutral-900 mb-5" style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}>
              <img
                src={characters[2].image}
                alt={characters[2].name}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            <div className="text-center py-2">
              <h3 className="font-title font-bold text-2xl text-black tracking-wider group-hover:text-[#3040D3] transition-colors">
                {characters[2].name}
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-1">
                {characters[2].role}
              </p>
            </div>
          </div>

          {/* Card 2: SOREN */}
          <div
            onMouseEnter={playTechHover}
            onClick={() => handleSelect(characters[1])}
            className="group relative bg-white border-2 border-[#3040D3] p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            style={{
              clipPath: 'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)'
            }}
          >
            <div className="absolute top-2 right-3 font-mono text-[10px] font-bold text-blue-600 tracking-wider">
              {characters[1].badge}
            </div>

            <div className="relative overflow-hidden bg-neutral-900 mb-5" style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}>
              <img
                src={characters[1].image}
                alt={characters[1].name}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            <div className="text-center py-2">
              <h3 className="font-title font-bold text-2xl text-black tracking-wider group-hover:text-[#3040D3] transition-colors">
                {characters[1].name}
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-1">
                {characters[1].role}
              </p>
            </div>
          </div>

          {/* Card 4: KAELEN */}
          <div
            onMouseEnter={playTechHover}
            onClick={() => handleSelect(characters[3])}
            className="group relative bg-white border-2 border-[#3040D3] p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 lg:col-start-1"
            style={{
              clipPath: 'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)'
            }}
          >
            <div className="absolute top-2 right-3 font-mono text-[10px] font-bold text-blue-600 tracking-wider">
              {characters[3].badge}
            </div>

            <div className="relative overflow-hidden bg-neutral-900 mb-5" style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}>
              <img
                src={characters[3].image}
                alt={characters[3].name}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            <div className="text-center py-2">
              <h3 className="font-title font-bold text-2xl text-black tracking-wider group-hover:text-[#3040D3] transition-colors">
                {characters[3].name}
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-1">
                {characters[3].role}
              </p>
            </div>
          </div>

          {/* Middle Indicator */}
          <div className="hidden lg:flex flex-col items-center justify-center p-6 text-center font-mono">
            <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#3040D3] flex items-center justify-center text-[#3040D3] mb-3 animate-spin-slow">
              <Cpu className="w-6 h-6" />
            </div>
            <p className="text-xs text-neutral-500 tracking-wider uppercase">
              SELECT ANY OPERATIVE TO VIEW SPECIFICATIONS & ABILITIES
            </p>
          </div>

          {/* Card 5: TALON */}
          <div
            onMouseEnter={playTechHover}
            onClick={() => handleSelect(characters[4])}
            className="group relative bg-white border-2 border-[#3040D3] p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
            style={{
              clipPath: 'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)'
            }}
          >
            <div className="absolute top-2 right-3 font-mono text-[10px] font-bold text-blue-600 tracking-wider">
              {characters[4].badge}
            </div>

            <div className="relative overflow-hidden bg-neutral-900 mb-5" style={{
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}>
              <img
                src={characters[4].image}
                alt={characters[4].name}
                className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            <div className="text-center py-2">
              <h3 className="font-title font-bold text-2xl text-black tracking-wider group-hover:text-[#3040D3] transition-colors">
                {characters[4].name}
              </h3>
              <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest mt-1">
                {characters[4].role}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Operative Dossier Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative bg-white border-2 border-[#3040D3] max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden"
            style={{
              clipPath: 'polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)'
            }}
          >
            <button
              onClick={() => {
                playTechClick();
                setSelectedCharacter(null);
              }}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-full cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 relative bg-neutral-900 overflow-hidden" style={{
                clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)'
              }}>
                <img
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                  className="w-full h-64 object-cover object-top"
                />
              </div>

              <div className="sm:col-span-7">
                <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  OPERATIVE DOSSIER // {selectedCharacter.badge}
                </div>
                <h3 className="font-title font-bold text-3xl text-black mb-1">
                  {selectedCharacter.name}
                </h3>
                <p className="font-mono text-sm text-neutral-600 mb-4">
                  {selectedCharacter.role}
                </p>

                <p className="font-mono text-xs text-neutral-800 leading-relaxed mb-4">
                  {selectedCharacter.bio}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="bg-blue-50 border-l-2 border-[#3040D3] p-2 text-xs font-mono">
                    <span className="font-bold text-[#3040D3]">PASSIVE: </span>
                    {selectedCharacter.perk}
                  </div>
                  <div className="bg-neutral-50 border-l-2 border-black p-2 text-xs font-mono">
                    <span className="font-bold text-black">TACTICAL: </span>
                    {selectedCharacter.ultimate}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>ATTACK</span>
                      <span className="font-bold">{selectedCharacter.stats.attack}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5">
                      <div className="bg-[#3040D3] h-1.5" style={{ width: `${selectedCharacter.stats.attack}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>DEFENSE</span>
                      <span className="font-bold">{selectedCharacter.stats.defense}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5">
                      <div className="bg-[#3040D3] h-1.5" style={{ width: `${selectedCharacter.stats.defense}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
