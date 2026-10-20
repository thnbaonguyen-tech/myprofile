import React from 'react';

interface SectionDividerProps {
  number: string;
  title: string;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ number, title, className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden select-none pointer-events-none py-6 ${className}`}>
      {/* Background Huge Watermark */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative flex items-center justify-between">
        {/* Editorial Number & Title */}
        <div className="flex items-baseline gap-4">
          <span className="text-5xl sm:text-7xl lg:text-8xl font-black text-blue-600/[0.045] font-mono tracking-tighter">
            {number}
          </span>
          <span className="hidden sm:inline text-xs sm:text-sm font-extrabold tracking-widest uppercase text-blue-600/15 font-mono">
            // {title}
          </span>
        </div>

        {/* Blueprint Circuit Accents */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-blue-500/30">
            <span>SEC_{number}</span>
            <div className="w-8 h-px bg-blue-200/60" />
            <span>SYS.OK</span>
          </div>
          <span className="text-blue-400/30 text-xs font-mono">+</span>
          <div className="w-16 sm:w-28 h-px bg-gradient-to-r from-blue-300/40 via-blue-400/20 to-transparent" />
          <span className="text-blue-400/30 text-xs font-mono">×</span>
        </div>
      </div>

      {/* Thin Horizontal Grid Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
    </div>
  );
};
