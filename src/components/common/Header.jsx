import React, { useState } from 'react';
import { LogoFull, HeaderVectorLine } from './Icons';
import { playTechClick } from '../../utils/audio';
import { Menu, X } from 'lucide-react';

export default function Header({ onOpenBuy, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    playTechClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 pb-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="cursor-pointer group flex items-center"
          >
            <LogoFull textColor="text-black group-hover:text-[#3040D3] transition-colors" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 font-mono text-sm tracking-wide text-neutral-800">
            <button
              onClick={() => scrollToSection('hero')}
              className="hover:text-[#3040D3] transition-colors relative py-1 hover:font-bold cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-[#3040D3] transition-colors relative py-1 hover:font-bold cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('characters')}
              className="hover:text-[#3040D3] transition-colors relative py-1 hover:font-bold cursor-pointer"
            >
              Characters
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="hover:text-[#3040D3] transition-colors relative py-1 hover:font-bold cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                playTechClick();
                if (onOpenContact) onOpenContact();
              }}
              className="hover:text-[#3040D3] transition-colors relative py-1 hover:font-bold cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => {
                playTechClick();
                if (onOpenBuy) onOpenBuy();
              }}
              className="btn-chamfer-solid px-7 py-2.5 font-mono font-bold text-sm tracking-wider uppercase cursor-pointer"
            >
              Buy Game
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => {
              playTechClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-neutral-800 hover:text-[#3040D3] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Cyberpunk chamfer tech line below navbar */}
      <HeaderVectorLine className="text-black hidden sm:block opacity-90" />

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-mono text-base font-semibold">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 hover:text-[#3040D3]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-left py-2 hover:text-[#3040D3]"
            >
              About & Features
            </button>
            <button
              onClick={() => scrollToSection('characters')}
              className="text-left py-2 hover:text-[#3040D3]"
            >
              Characters
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-left py-2 hover:text-[#3040D3]"
            >
              Pricing
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="text-left py-2 hover:text-[#3040D3]"
            >
              Contact Us
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenBuy) onOpenBuy();
            }}
            className="w-full btn-chamfer-solid py-3 font-mono font-bold tracking-wider uppercase"
          >
            Buy Game
          </button>
        </div>
      )}
    </header>
  );
}
