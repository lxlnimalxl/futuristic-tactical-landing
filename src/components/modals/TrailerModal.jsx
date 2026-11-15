import React from 'react';
import { playTechClick } from '../../utils/audio';
import { X, Play, Shield, Globe, Award } from 'lucide-react';

export default function TrailerModal({ isOpen, onClose, onOpenBuy }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative bg-white border-2 border-[#3040D3] max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        style={{
          clipPath: 'polygon(32px 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%, 0 32px)'
        }}
      >
        <button
          onClick={() => {
            playTechClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-black hover:bg-neutral-100 rounded-full cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
            CLASSIFIED BRIEFING // ARCHIVE #902
          </div>
          <h3 className="font-title font-bold text-2xl sm:text-3xl text-black mb-2">
            Cybervoid Chronicles: Lore & Mechanics
          </h3>
          <p className="font-mono text-sm text-neutral-600 mb-6">
            In the year 2184, the planetary neural grid collapsed, plunging Earth into fractured biome-sectors controlled by synthetic warlords.
          </p>

          <div className="relative aspect-video bg-neutral-900 border border-neutral-700 flex items-center justify-center overflow-hidden mb-6 group cursor-pointer">
            <div className="absolute inset-0 bg-radial from-blue-900/30 to-black/80" />
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3040D3] text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 ml-1" fill="currentColor" />
              </div>
              <span className="font-mono text-xs text-white/80 tracking-widest uppercase">
                Watch Cinematic Reveal Trailer (4K 60FPS)
              </span>
            </div>
            
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 font-mono">
            <div className="p-3.5 bg-neutral-50 border-l-2 border-[#3040D3]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3040D3] mb-1">
                <Shield className="w-4 h-4" />
                <span>DYNAMIC AI</span>
              </div>
              <p className="text-xs text-neutral-600">
                Self-learning machine adversaries adapt to your squad's firing angles in real-time.
              </p>
            </div>

            <div className="p-3.5 bg-neutral-50 border-l-2 border-[#3040D3]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3040D3] mb-1">
                <Globe className="w-4 h-4" />
                <span>SECTOR CONTROL</span>
              </div>
              <p className="text-xs text-neutral-600">
                Persistent territorial war where captured power relays alter global drop rates.
              </p>
            </div>

            <div className="p-3.5 bg-neutral-50 border-l-2 border-[#3040D3]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3040D3] mb-1">
                <Award className="w-4 h-4" />
                <span>MODULAR LOOT</span>
              </div>
              <p className="text-xs text-neutral-600">
                Over 250+ weapon modifications with zero microtransactions or pay-to-win gear.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-gray-100">
            <button
              onClick={() => {
                playTechClick();
                onClose();
              }}
              className="px-6 py-2.5 font-mono text-sm text-neutral-700 hover:text-black font-semibold cursor-pointer"
            >
              Close Briefing
            </button>
            <button
              onClick={() => {
                playTechClick();
                onClose();
                if (onOpenBuy) onOpenBuy();
              }}
              className="btn-chamfer-solid px-8 py-2.5 font-mono font-bold text-sm uppercase tracking-wider cursor-pointer"
            >
              Pre-Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
