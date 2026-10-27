import React from 'react';

interface ClayMascotProps {
  expression?: 'happy' | 'thinking' | 'celebrating' | 'curious' | 'focused';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  speechBubble?: string;
  className?: string;
  onClick?: () => void;
}

export const ClayMascot: React.FC<ClayMascotProps> = ({
  expression = 'happy',
  size = 'md',
  speechBubble,
  className = '',
  onClick
}) => {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    hero: 'w-48 h-48 md:w-60 md:h-60'
  };

  // Eyes and mouth depending on expression
  const renderFace = () => {
    switch (expression) {
      case 'thinking':
        return (
          <>
            {/* Thinking eyes: looking up-right */}
            <circle cx="42" cy="46" r="4.5" fill="#1E1B18" />
            <circle cx="44" cy="44" r="1.5" fill="#FFFFFF" />
            <circle cx="68" cy="44" r="4.5" fill="#1E1B18" />
            <circle cx="70" cy="42" r="1.5" fill="#FFFFFF" />
            {/* Cute crooked mouth */}
            <path d="M 50 63 Q 56 61 62 64" stroke="#1E1B18" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Little question mark thought bubble dot */}
            <circle cx="76" cy="36" r="2" fill="#D96B43" />
          </>
        );
      case 'celebrating':
        return (
          <>
            {/* Joyful squinting crescent eyes ^ ^ */}
            <path d="M 38 46 Q 44 40 50 46" stroke="#1E1B18" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M 62 46 Q 68 40 74 46" stroke="#1E1B18" strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {/* Wide happy open mouth */}
            <path d="M 46 56 Q 56 70 66 56 Z" fill="#D96B43" stroke="#1E1B18" strokeWidth="2.5" />
            <path d="M 50 62 Q 56 65 62 62" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Rosy cheeks */}
            <circle cx="34" cy="52" r="5" fill="#FF8A65" opacity="0.6" />
            <circle cx="78" cy="52" r="5" fill="#FF8A65" opacity="0.6" />
          </>
        );
      case 'focused':
        return (
          <>
            {/* Sharp attentive eyes */}
            <circle cx="44" cy="48" r="5" fill="#1E1B18" />
            <circle cx="46" cy="46" r="2" fill="#FFFFFF" />
            <circle cx="68" cy="48" r="5" fill="#1E1B18" />
            <circle cx="70" cy="46" r="2" fill="#FFFFFF" />
            {/* Determined smile */}
            <path d="M 48 62 Q 56 67 64 62" stroke="#1E1B18" strokeWidth="3" strokeLinecap="round" fill="none" />
          </>
        );
      case 'curious':
        return (
          <>
            {/* One wide eye, one squint */}
            <circle cx="42" cy="47" r="6" fill="#1E1B18" />
            <circle cx="44" cy="45" r="2.2" fill="#FFFFFF" />
            <circle cx="68" cy="48" r="4.2" fill="#1E1B18" />
            <circle cx="69" cy="47" r="1.5" fill="#FFFFFF" />
            {/* Small 'o' mouth */}
            <circle cx="56" cy="62" r="3.5" fill="#1E1B18" />
            {/* Rosy blush */}
            <circle cx="34" cy="52" r="4" fill="#FF8A65" opacity="0.5" />
            <circle cx="78" cy="52" r="4" fill="#FF8A65" opacity="0.5" />
          </>
        );
      case 'happy':
      default:
        return (
          <>
            {/* Sparkly friendly eyes */}
            <circle cx="42" cy="48" r="5" fill="#1E1B18" />
            <circle cx="44" cy="46" r="2" fill="#FFFFFF" />
            <circle cx="40" cy="50" r="0.8" fill="#FFFFFF" />
            <circle cx="68" cy="48" r="5" fill="#1E1B18" />
            <circle cx="70" cy="46" r="2" fill="#FFFFFF" />
            <circle cx="66" cy="50" r="0.8" fill="#FFFFFF" />
            {/* Sweet smile */}
            <path d="M 46 60 Q 56 68 66 60" stroke="#1E1B18" strokeWidth="3" strokeLinecap="round" fill="none" />
            {/* Rosy blush */}
            <circle cx="34" cy="54" r="5" fill="#FF8A65" opacity="0.6" />
            <circle cx="78" cy="54" r="5" fill="#FF8A65" opacity="0.6" />
          </>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative inline-flex flex-col items-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Optional Speech Bubble */}
      {speechBubble && (
        <div className="mb-2 max-w-xs px-3.5 py-2 bg-white dark:bg-[#2A2622] text-[#2D2926] dark:text-[#F5ECE7] rounded-2xl shadow-lg border border-[#D96B43]/20 text-xs md:text-sm font-medium animate-float relative z-10 text-center">
          <span>{speechBubble}</span>
          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white dark:border-t-[#2A2622]"></div>
        </div>
      )}

      {/* Tactile Clay Mascot Body */}
      <div className={`${sizeClasses[size]} relative transition-transform duration-300 hover:scale-105 active:scale-95`}>
        <svg viewBox="0 0 110 110" className="w-full h-full drop-shadow-md">
          <defs>
            {/* Clay Gradient Warm Terracotta */}
            <linearGradient id="clayGradient" x1="20%" y1="10%" x2="80%" y2="90%">
              <stop offset="0%" stopColor="#F39C6B" />
              <stop offset="60%" stopColor="#D96B43" />
              <stop offset="100%" stopColor="#A8441F" />
            </linearGradient>

            {/* Clay Highlight for 3D tactile sheen */}
            <radialGradient id="clayHighlight" cx="35%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#FFE0CC" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#F39C6B" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#A8441F" stopOpacity="0" />
            </radialGradient>

            {/* Head Blob Soft Filter */}
            <filter id="clayShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#451A0A" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Clay Ear Tufts / Antenna */}
          <path
            d="M 28 28 C 22 14 36 8 42 22 Z"
            fill="url(#clayGradient)"
            stroke="#A8441F"
            strokeWidth="1.5"
          />
          <path
            d="M 82 28 C 88 14 74 8 68 22 Z"
            fill="url(#clayGradient)"
            stroke="#A8441F"
            strokeWidth="1.5"
          />

          {/* Organic Rounded Clay Blob Body */}
          <path
            d="M 55 12 
               C 85 12, 98 32, 98 58 
               C 98 84, 82 98, 55 98 
               C 26 98, 12 84, 12 58 
               C 12 32, 28 12, 55 12 Z"
            fill="url(#clayGradient)"
            stroke="#A8441F"
            strokeWidth="2"
            filter="url(#clayShadow)"
          />

          {/* Tactile Highlight for hand-molded clay sheen */}
          <path
            d="M 55 16 
               C 80 16, 92 34, 92 56 
               C 92 68, 86 84, 75 88 
               C 55 70, 36 60, 24 50 
               C 22 34, 34 16, 55 16 Z"
            fill="url(#clayHighlight)"
          />

          {/* Friendly Handcrafted Belly Patch */}
          <ellipse cx="55" cy="74" rx="20" ry="14" fill="#FFEFE6" opacity="0.65" />

          {/* Face Elements */}
          {renderFace()}

          {/* Tiny Handcrafted Clay Blob Feet */}
          <circle cx="36" cy="98" r="8" fill="#C2532B" stroke="#A8441F" strokeWidth="1.5" />
          <circle cx="74" cy="98" r="8" fill="#C2532B" stroke="#A8441F" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Mascot Name Badge (Small) */}
      <span className="mt-1 text-[11px] font-bold tracking-wider uppercase text-[#D96B43] dark:text-[#F39C6B]">
        Golu AI
      </span>
    </div>
  );
};
