import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { playTechClick, playTechDeploy } from '../../utils/audio';
import { X, CheckCircle2, ShieldCheck, Key, Copy, Check } from 'lucide-react';

export default function BuyGameModal({ isOpen, onClose, selectedPlan }) {
  const [tier, setTier] = useState(selectedPlan ? selectedPlan.id : 'pro');
  const [platform, setPlatform] = useState('steam');
  const [completed, setCompleted] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePurchase = (e) => {
    e.preventDefault();
    playTechDeploy();

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3040D3', '#5B6CF8', '#10B981', '#F59E0B']
    });

    const seg1 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const seg2 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const seg3 = Math.random().toString(36).substring(2, 6).toUpperCase();
    const generated = `CYBER-${seg1}-${seg2}-${seg3}`;

    setLicenseKey(generated);
    setCompleted(true);
  };

  const copyKey = () => {
    playTechClick();
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const price = tier === 'basic' ? '$29.99' : '$40.99';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative bg-white border-2 border-[#3040D3] max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden"
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

        {!completed ? (
          <div>
            <div className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">
              SECURE DEPLOYMENT PROTOCOL
            </div>
            <h3 className="font-title font-bold text-2xl text-black mb-1">
              Acquire Game License
            </h3>
            <p className="font-mono text-sm text-neutral-600 mb-6">
              Select your operative tier and battle deployment platform.
            </p>

            <form onSubmit={handlePurchase} className="space-y-5">
              <div>
                <label className="block font-mono text-xs font-bold text-neutral-700 uppercase mb-2">
                  1. Select Plan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      playTechClick();
                      setTier('basic');
                    }}
                    className={`p-3 border-2 text-left cursor-pointer transition-all ${
                      tier === 'basic'
                        ? 'border-[#3040D3] bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-title text-sm font-bold text-black">Basic Plan</div>
                    <div className="font-mono text-xs text-neutral-500">Survivor's Pack</div>
                    <div className="font-mono text-sm font-bold text-[#3040D3] mt-1">$29.99</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      playTechClick();
                      setTier('pro');
                    }}
                    className={`p-3 border-2 text-left cursor-pointer transition-all relative ${
                      tier === 'pro'
                        ? 'border-[#3040D3] bg-blue-50/50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="absolute -top-2 right-2 bg-[#3040D3] text-white text-[9px] font-mono px-1.5 py-0.5 uppercase tracking-wider">
                      Popular
                    </span>
                    <div className="font-title text-sm font-bold text-black">Pro Plan</div>
                    <div className="font-mono text-xs text-neutral-500">Apocalypse Bundle</div>
                    <div className="font-mono text-sm font-bold text-[#3040D3] mt-1">$40.99</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-neutral-700 uppercase mb-2">
                  2. Choose Platform
                </label>
                <div className="grid grid-cols-4 gap-2 font-mono text-xs font-bold text-center">
                  {[
                    { id: 'steam', label: 'Steam' },
                    { id: 'epic', label: 'Epic' },
                    { id: 'ps5', label: 'Console 1' },
                    { id: 'xbox', label: 'Console 2' }
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        playTechClick();
                        setPlatform(p.id);
                      }}
                      className={`py-2 px-2 border cursor-pointer transition-all uppercase ${
                        platform === p.id
                          ? 'border-[#3040D3] bg-[#3040D3] text-white'
                          : 'border-gray-200 text-neutral-700 hover:border-gray-400'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs font-bold text-neutral-700 uppercase mb-2">
                  3. Operative Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="agent@cybervoid.net"
                  className="w-full px-3.5 py-2.5 border border-gray-300 font-mono text-sm focus:border-[#3040D3] outline-none"
                />
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-neutral-500">Total Due</div>
                  <div className="font-title font-bold text-2xl text-black">{price}</div>
                </div>

                <button
                  type="submit"
                  className="btn-chamfer-solid px-8 py-3 font-mono font-bold text-sm tracking-wider uppercase cursor-pointer"
                >
                  Confirm & Deploy
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>256-bit Encrypted Cyber-Checkout</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-title font-bold text-2xl text-black">
              Deployment Authenticated!
            </h3>
            <p className="font-mono text-sm text-neutral-600 max-w-sm mx-auto">
              Your digital license key has been generated and dispatched to your email.
            </p>

            <div className="bg-neutral-100 border border-neutral-300 p-4 rounded-sm flex items-center justify-between gap-3 font-mono">
              <div className="flex items-center gap-2 text-sm font-bold text-black tracking-widest">
                <Key className="w-4 h-4 text-[#3040D3]" />
                <span>{licenseKey}</span>
              </div>
              <button
                onClick={copyKey}
                className="p-2 hover:bg-neutral-200 rounded text-neutral-700 transition-colors"
                title="Copy Key"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={() => {
                playTechClick();
                setCompleted(false);
                onClose();
              }}
              className="btn-chamfer-solid w-full py-3 font-mono font-bold text-sm uppercase tracking-wider cursor-pointer mt-4"
            >
              Launch Client
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
