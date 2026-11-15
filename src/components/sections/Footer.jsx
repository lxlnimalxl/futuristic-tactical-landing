import React, { useState } from 'react';
import { LogoFull, InstagramIcon, FacebookIcon, TwitterIcon } from '../common/Icons';
import { playTechClick } from '../../utils/audio';
import { Check } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    playTechClick();
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#3040D3] text-white pt-16 pb-12 overflow-hidden border-t-4 border-black">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Grid matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-14 items-start">
          
          {/* Col 1: Logo & Tagline */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div className="mb-4">
              <LogoFull textColor="text-white" iconColor="#ffffff" />
            </div>
            <p className="font-mono text-base sm:text-lg text-white/90 leading-relaxed max-w-sm">
              Experience the game that will change the way you play.
            </p>
          </div>

          {/* Col 2: Newsletter Subscription */}
          <div className="md:col-span-5">
            <h4 className="font-mono text-base sm:text-lg text-white font-medium mb-4 leading-snug">
              Subscribe to stay tuned for latest updates. <br className="hidden sm:inline" />
              Let's do it!
            </h4>

            {subscribed ? (
              <div className="flex items-center gap-2 bg-white/20 border border-white/40 px-4 py-3 rounded-sm font-mono text-sm text-white">
                <Check className="w-5 h-5 text-emerald-300" />
                <span>Subscription confirmed! Transmission link deployed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email Address"
                  required
                  className="bg-white text-black placeholder:text-neutral-400 font-mono text-sm px-4 py-3 flex-1 outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  onClick={playTechClick}
                  className="bg-white text-black font-mono font-bold text-sm sm:text-base px-6 py-3 hover:bg-neutral-100 transition-colors cursor-pointer shrink-0 uppercase tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Col 3: Socials & Contact */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col gap-6 justify-between">
            {/* Follow Us */}
            <div>
              <h4 className="font-title font-bold text-base text-white mb-3 tracking-wider">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={playTechClick}
                  className="w-9 h-9 rounded-full bg-white text-[#3040D3] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={playTechClick}
                  className="w-9 h-9 rounded-full bg-white text-[#3040D3] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={playTechClick}
                  className="w-9 h-9 rounded-full bg-white text-[#3040D3] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-title font-bold text-base text-white mb-1.5 tracking-wider">
                Contact Us
              </h4>
              <a
                href="tel:+18008543680"
                className="font-mono text-sm sm:text-base text-white/95 hover:underline tracking-wide"
              >
                +1 800 854-36-80
              </a>
            </div>
          </div>

        </div>

        {/* Divider Line matching Figma */}
        <div className="w-full h-px bg-white/30 mb-8" />

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs sm:text-sm text-white/80">
          <div>
            © 2023 All Rights Reserved
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#privacy" className="hover:text-white hover:underline transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white hover:underline transition-colors">
              Terms of Use
            </a>
            <a href="#refunds" className="hover:text-white hover:underline transition-colors">
              Sales and Refunds
            </a>
            <a href="#legal" className="hover:text-white hover:underline transition-colors">
              Legal
            </a>
            <a href="#sitemap" className="hover:text-white hover:underline transition-colors">
              Site Map
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
