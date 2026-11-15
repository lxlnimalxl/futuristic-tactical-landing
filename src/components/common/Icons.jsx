import React from 'react';

// Sci-Fi Logo Emblem
export function LogoIcon({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8798 0C9.47817 0 7.07648 0.725359 5.02916 2.17557C5.68465 2.93516 6.35374 3.69208 7.00017 4.41397C7.80747 3.82593 8.63522 3.46476 9.45098 3.29236L9.94806 2.79533L10.2815 2.46184L10.6134 2.79538L11.002 3.18398C14.9653 3.46808 18.0764 7.97271 16.1065 12.0197L22.0715 17.9846C24.8122 13.4204 24.2153 7.41986 20.2782 3.48278C17.9571 1.16153 14.9185 5.03096e-05 11.8799 5.03096e-05L11.8798 0ZM2.31881 0.386992L0.457839 2.24781C2.36814 3.74957 4.49247 5.56533 6.24662 7.12272L6.61947 7.45464L6.26711 7.807L3.88238 10.1917L4.87342 11.1812L6.61005 9.44452L20.1067 22.9427L24 23.9132L22.9004 20.149L21.5424 18.791L21.5445 18.7884L15.6172 12.8612L15.6156 12.8634L9.40377 6.6508L11.271 4.7836L10.2815 3.79417L7.94238 6.13173L7.59163 6.48092L7.26127 6.11446C5.6914 4.37727 3.83617 2.28848 2.31881 0.386992ZM2.25437 4.92046C-1.11595 9.56583 -0.707468 16.0908 3.48124 20.2796C6.14559 22.944 9.75492 24.0774 13.2246 23.6837C6.60527 23.7338 0.801189 17.2122 2.79852 10.4371L2.55318 10.1917L2.8851 9.85819L3.0487 9.69459C3.40247 8.76275 3.90825 7.83126 4.58398 6.91497C3.81413 6.24233 3.03756 5.57743 2.25437 4.92036V4.92046ZM8.31367 7.23748C8.93196 7.23748 9.43216 7.73925 9.43216 8.35749C9.43216 8.46944 9.41545 8.57645 9.38484 8.67844L21.3117 20.6068L20.6478 21.2707L8.76046 9.38477C8.61951 9.44615 8.4674 9.47773 8.31367 9.47754C7.69532 9.47754 7.19366 8.97598 7.19366 8.35754C7.19366 7.73914 7.69532 7.23753 8.31367 7.23753V7.23748Z"
        fill={color}
      />
    </svg>
  );
}

// Logo with Text
export function LogoFull({ textColor = "text-black", iconColor = "#3040D3" }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <LogoIcon className="w-7 h-7" color={iconColor} />
      <span className={`font-title font-bold text-lg md:text-xl tracking-[0.15em] ${textColor}`}>
        CYBERVOID
      </span>
    </div>
  );
}

// Cut Tech Line Under Navigation
export function HeaderVectorLine({ className = "w-full" }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        className="w-full h-[18px] md:h-[26px] preserve-3d"
        viewBox="0 0 1440 28"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1H480.5L506 26.5H929L954.5 1H1440"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

// Glowing Hexagon Frame behind Hero
export function HexagonGlow({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="w-full h-full animate-glow-pulse"
        viewBox="0 0 589 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="hexGlow" x="0" y="0" width="589" height="670" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="22" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="hexGrad" x1="294" y1="40" x2="294" y2="628" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3040D3" />
            <stop offset="0.5" stopColor="#5B6CF8" />
            <stop offset="1" stopColor="#2432B8" />
          </linearGradient>
        </defs>
        <path
          d="M294.282 40.6399L548.814 187.628V481.603L294.282 628.59L39.75 481.603V187.628L294.282 40.6399Z"
          stroke="url(#hexGrad)"
          strokeWidth="12"
          filter="url(#hexGlow)"
        />
        <path
          d="M294.282 40.6399L548.814 187.628V481.603L294.282 628.59L39.75 481.603V187.628L294.282 40.6399Z"
          stroke="#ffffff"
          strokeWidth="2"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
}

// Concentric HUD Rings behind Feature Section Soldier
export function HudRings({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="w-full h-full animate-spin-slow opacity-85"
        viewBox="0 0 700 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="350" cy="350" r="320" stroke="#3040D3" strokeWidth="2" strokeDasharray="16 12" opacity="0.6" />
        <path d="M120 350 A230 230 0 0 1 580 350" stroke="#3040D3" strokeWidth="4" opacity="0.75" />
        <path d="M580 350 A230 230 0 0 1 120 350" stroke="#3040D3" strokeWidth="4" strokeDasharray="24 16" opacity="0.75" />
        <circle cx="350" cy="350" r="160" stroke="#3040D3" strokeWidth="3" strokeDasharray="8 8" opacity="0.8" />
        <circle cx="350" cy="350" r="140" stroke="#3040D3" strokeWidth="1.5" opacity="0.4" />
        <line x1="350" y1="20" x2="350" y2="60" stroke="#3040D3" strokeWidth="3" />
        <line x1="350" y1="640" x2="350" y2="680" stroke="#3040D3" strokeWidth="3" />
        <line x1="20" y1="350" x2="60" y2="350" stroke="#3040D3" strokeWidth="3" />
        <line x1="640" y1="350" x2="680" y2="350" stroke="#3040D3" strokeWidth="3" />
      </svg>
    </div>
  );
}

// Feature Icon 1: Controller Shapes
export function IconGameplay({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.3333 23.3333H36.6666V36.6666H23.3333V23.3333Z" fill="black" />
      <path d="M10.8333 3.33325L18.3333 16.6666H3.33331L10.8333 3.33325Z" fill="black" />
      <circle cx="30" cy="10" r="6.66667" fill="black" />
      <path d="M4 24L16 36M16 24L4 36" stroke="black" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Feature Icon 2: Crossed Swords / Blades
export function IconItems({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.75 36.0001L26.875 31.1667L23.2083 34.8334L22.0417 33.6667C21.4028 33.0279 21.0833 32.2362 21.0833 31.2917C21.0833 30.3473 21.4028 29.5556 22.0417 28.9167L29.0833 21.8751C29.7222 21.2362 30.5139 20.9167 31.4583 20.9167C32.4028 20.9167 33.1945 21.2362 33.8333 21.8751L35 23.0417L31.3333 26.7084L36.1667 31.5834C36.5 31.9167 36.6667 32.3056 36.6667 32.7501C36.6667 33.1945 36.5 33.5834 36.1667 33.9167L34.0833 36.0001C33.75 36.3334 33.3611 36.5001 32.9167 36.5001C32.4722 36.5001 32.0833 36.3334 31.75 36.0001ZM36.6667 9.83341L17.75 28.7501L17.9583 28.9167C18.5972 29.5556 18.9167 30.3473 18.9167 31.2917C18.9167 32.2362 18.5972 33.0279 17.9583 33.6667L16.7917 34.8334L13.125 31.1667L8.25001 36.0001C7.91668 36.3334 7.52779 36.5001 7.08334 36.5001C6.6389 36.5001 6.25001 36.3334 5.91668 36.0001L3.83334 33.9167C3.50001 33.5834 3.33334 33.1945 3.33334 32.7501C3.33334 32.3056 3.50001 31.9167 3.83334 31.5834L8.66668 26.7084L5.00001 23.0417L6.16668 21.8751C6.80557 21.2362 7.59723 20.9167 8.54168 20.9167C9.48612 20.9167 10.2778 21.2362 10.9167 21.8751L11.0833 22.0834L30 3.16675H36.6667V9.83341ZM11.5833 18.0834L3.33334 9.83341V3.16675H10L18.25 11.4167L11.5833 18.0834Z"
        fill="black"
      />
    </svg>
  );
}

// Feature Icon 3: Shield Crest
export function IconHeroes({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.3636 0L36.7273 7.27273V18.1818C36.7273 28.2727 29.7455 37.7091 20.3636 40C10.9818 37.7091 4 28.2727 4 18.1818V7.27273L20.3636 0ZM27.6364 23.6364H13.0909V26.3636C13.0909 26.8545 13.4364 27.2 13.9455 27.2727H26.6C27.1636 27.2727 27.5455 26.9818 27.6364 26.5273V23.6364ZM29.4545 12.7273L24.6 17.5818L20.3636 13.3455L16.1273 17.5818L11.2727 12.7273L13.0909 21.8182H27.6364L29.4545 12.7273Z"
        fill="black"
      />
    </svg>
  );
}

// Arrow Button Circle
export function ArrowRightCircle({ className = "w-8 h-8", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-[#3040D3] text-white flex items-center justify-center hover:bg-[#2432B8] hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-500/25 ${className}`}
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}

// Blue Feature Checkmark
export function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
        fill="#3040D3"
      />
    </svg>
  );
}

// Background Faded Text Watermark
export function BackgroundWatermark({ text = "CYBERVOID", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute uppercase font-title font-bold text-[72px] sm:text-[110px] md:text-[160px] lg:text-[210px] tracking-widest text-transparent ${className}`}
      style={{
        WebkitTextStroke: "1.5px rgba(0, 0, 0, 0.04)",
        zIndex: 0
      }}
    >
      {text}
    </div>
  );
}

// Social Icons (SVG)
export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}
