import React, { useState } from 'react';
import { CheckIcon, BackgroundWatermark, IconGameplay } from '../common/Icons';
import { playTechClick, playTechHover } from '../../utils/audio';

export default function PricingSection({ onOpenBuy }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      subtitle: "Survivor's Starter Pack",
      monthlyPrice: '$29.99',
      annualPrice: '$23.99',
      period: '/mo',
      savings: 'Save 20%',
      features: [
        'Access to the full game with all core features.',
        'Single-player mode available.',
        'Limited selection of character customization options.',
        'Exclusive in-game items: "Rookie\'s Rations" supply pack.',
        'Standard server priority & community forum access.'
      ]
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      subtitle: 'Apocalypse Conqueror Bundle',
      monthlyPrice: '$40.99',
      annualPrice: '$32.99',
      period: '/mo',
      savings: 'Save 25%',
      isPopular: true,
      features: [
        'All features of the Basic Plan included.',
        'Unlock access to multiplayer mode, team up with friends.',
        'Extensive range of character customization choices.',
        'Exclusive in-game items: "Veteran\'s Arsenal" weapon pack.',
        'Priority access to upcoming expansions and updates.'
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-white overflow-hidden border-t border-gray-100">
      {/* Background Watermark */}
      <BackgroundWatermark
        text="PRICING"
        className="top-12 -right-16 opacity-50 select-none pointer-events-none"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-title font-bold text-2xl sm:text-3xl md:text-4xl text-black mb-4 leading-tight tracking-tight">
            Invest in Your Survival: Pricing Tiers
          </h2>
          <p className="font-mono text-base sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed">
            Explore Our Pricing Options Tailored to Your Gameplay Goals and Preferences
          </p>

          {/* Billing Switcher Buttons matching Figma */}
          <div className="mt-8 inline-flex items-center p-1 bg-neutral-100 border border-neutral-300 gap-1">
            <button
              onClick={() => {
                playTechClick();
                setBillingCycle('monthly');
              }}
              className={`px-6 py-2.5 font-mono font-bold text-sm sm:text-base tracking-wider transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#3040D3] text-white shadow-md'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => {
                playTechClick();
                setBillingCycle('annual');
              }}
              className={`px-6 py-2.5 font-mono font-bold text-sm sm:text-base tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[#3040D3] text-white shadow-md'
                  : 'text-neutral-700 hover:text-black'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* 2 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                onMouseEnter={playTechHover}
                className="relative bg-white border-2 border-[#3040D3] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{
                  clipPath: 'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)'
                }}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-10 bg-[#3040D3] text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    RECOMMENDED TIER
                  </div>
                )}

                <div>
                  {/* Icon & Plan Title */}
                  <div className="flex justify-center mb-4">
                    <IconGameplay className="w-8 h-8 text-black" />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="font-title font-bold text-2xl text-black mb-1">
                      {plan.name}
                    </h3>
                    <p className="font-mono text-sm text-neutral-500">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center py-4 border-y border-gray-100 mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-title font-bold text-4xl sm:text-5xl text-black">
                        {price}
                      </span>
                      <span className="font-mono text-neutral-500 text-lg">
                        {plan.period}
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <span className="font-mono text-xs text-emerald-600 font-bold block mt-1">
                        Billed annually ({plan.savings} applied)
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      playTechClick();
                      if (onOpenBuy) onOpenBuy(plan);
                    }}
                    className="w-full btn-chamfer-solid py-3.5 font-mono font-bold text-base tracking-wider uppercase mb-8 cursor-pointer"
                  >
                    Buy Game
                  </button>

                  {/* Feature Checklist */}
                  <div className="space-y-4">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          <CheckIcon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-neutral-800 text-sm leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Blueprint Note */}
                <div className="mt-8 pt-4 border-t border-gray-100 font-mono text-[11px] text-neutral-400 text-center tracking-wider uppercase">
                  INSTANT DIGITAL STEAM / EPIC KEY DELIVERED
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
