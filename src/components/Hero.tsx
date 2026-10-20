import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  Send,
  Phone,
  Code2,
  Terminal,
  ZoomIn,
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#FCFDFF]">
      
      {/* Abstract Blueprint Grid & Delicate Circuit Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-70" />
      
      {/* Delicate Ambient Blue Gradient Orbs */}
      <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 to-sky-100/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-gradient-to-bl from-blue-300/20 via-sky-200/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Crosshairs & Coordinates */}
      <div className="absolute top-28 left-6 sm:left-12 pointer-events-none text-blue-400/40 font-mono text-[11px] select-none hidden lg:block">
        <span>+ 21.0285° N, 105.8542° E</span>
        <div className="w-12 h-px bg-blue-200/60 mt-1" />
      </div>
      <div className="absolute top-36 right-8 sm:right-16 pointer-events-none text-blue-400/40 font-mono text-xs select-none hidden lg:block">
        <span>[BN.DEV_STUDIO_2026]</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typography, Tagline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge with Blueprint Accents */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200 text-blue-700 text-xs font-semibold mb-6 shadow-2xs backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="tracking-wide">Nhận thiết kế website theo yêu cầu</span>
              <span className="text-blue-300 font-mono text-[10px] hidden sm:inline">• 2026</span>
            </div>

            {/* Main Name with High-End Editorial Typography */}
            <div className="relative mb-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-blue-600 tracking-tight leading-none">
                BẢO NGUYỄN
              </h1>
              {/* Subtle tech label */}
              <div className="absolute -top-4 right-0 text-[10px] font-mono font-bold tracking-widest text-blue-500/50 uppercase select-none">
                PORTFOLIO // 01
              </div>
            </div>

            {/* Role with Gradient */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-700 to-sky-500 bg-clip-text text-transparent tracking-tight mb-5">
              WEB DEVELOPER
            </h2>

            {/* Tagline Description */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8">
              Thiết kế website hiện đại – nhanh – đẹp – phù hợp với nhu cầu cá nhân và kinh doanh.
            </p>

            {/* CTA Buttons & Direct Quick Contact Icons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all transform active:scale-95 group text-sm sm:text-base text-center"
              >
                <span>XEM DỰ ÁN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50/80 border-2 border-blue-600 text-blue-600 font-bold px-7 py-3.5 rounded-xl transition-all shadow-xs transform active:scale-95 text-sm sm:text-base text-center"
              >
                <span>LIÊN HỆ NGAY</span>
                <Send className="w-4 h-4" />
              </a>

              {/* Clickable Quick Contact Icons: Zalo, Facebook, Phone */}
              <div className="flex items-center justify-center gap-2.5 pt-2 sm:pt-0 sm:pl-3 sm:border-l sm:border-slate-200">
                {/* Zalo */}
                <a
                  href={PERSONAL_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200/90 flex items-center justify-center font-bold text-xs shadow-2xs hover:scale-105 transition-all group/zalo relative"
                  title="Nhắn Zalo cho Bảo"
                  aria-label="Nhắn Zalo cho Bảo"
                >
                  <span className="font-extrabold text-xs">Zalo</span>
                </a>

                {/* Facebook */}
                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200/90 flex items-center justify-center shadow-2xs hover:scale-105 transition-all group/fb relative"
                  title="Kết nối Facebook"
                  aria-label="Kết nối Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Phone */}
                <a
                  href={PERSONAL_INFO.phoneCallUrl}
                  className="w-11 h-11 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-200/90 flex items-center justify-center shadow-2xs hover:scale-105 transition-all group/phone relative"
                  title="Gọi cho Bảo"
                  aria-label="Gọi cho Bảo"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Technical Trust Features */}
            <div className="pt-6 border-t border-blue-100/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Chuẩn Responsive 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Tốc độ tải siêu nhanh</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bảo hành & Hỗ trợ tận tâm</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Photo Portrait Composition with Lightbox Trigger */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-blue-500/12 via-sky-400/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Circuit Line SVG Geometry Behind Card */}
            <svg className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] pointer-events-none stroke-blue-200/70 fill-none" viewBox="0 0 450 450">
              <circle cx="225" cy="225" r="210" strokeDasharray="6 6" strokeWidth="1" className="opacity-40" />
              <circle cx="225" cy="225" r="185" strokeWidth="0.8" className="opacity-25" />
              <path d="M 20 225 L 70 225 L 90 205 L 140 205" strokeWidth="1.2" className="opacity-60" />
              <path d="M 430 225 L 380 225 L 360 245 L 310 245" strokeWidth="1.2" className="opacity-60" />
              <circle cx="90" cy="205" r="3" fill="#2563EB" className="opacity-70" />
              <circle cx="360" cy="245" r="3" fill="#2563EB" className="opacity-70" />
            </svg>

            {/* Real Portrait Card (Clickable to Lightbox) */}
            <div 
              onClick={() => setIsLightboxOpen(true)}
              className="relative w-full max-w-[340px] sm:max-w-[370px] rounded-3xl bg-white p-3.5 border-2 border-blue-200/80 shadow-2xl shadow-blue-500/12 transition-all duration-300 hover:shadow-blue-500/25 hover:border-blue-500 cursor-pointer group"
              title="Nhấn để xem ảnh phóng to"
            >
              
              {/* Image Frame maintaining natural vertical ratio */}
              <div className="relative rounded-2xl overflow-hidden aspect-3/4 bg-slate-50 border border-blue-100">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Bảo Nguyễn - Web Developer"
                  className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                />

                {/* Hover Zoom Prompt Badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold py-1 px-2.5 rounded-lg flex items-center gap-1 shadow-md">
                  <ZoomIn className="w-3.5 h-3.5 text-blue-400" />
                  <span>Phóng to</span>
                </div>

                {/* Subtle Gradient Shadow at base */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Identity Tag at the bottom of the card */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900">Bảo Nguyễn</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/80">
                    WEB DEVELOPER
                  </span>
                </div>
              </div>

              {/* Floating Decorative Tech Badges */}
              
              {/* Element 1: </> badge */}
              <div className="absolute -top-3.5 -left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-blue-200/80 shadow-lg text-blue-600 font-mono font-extrabold text-xs flex items-center gap-1.5 animate-float-slow select-none pointer-events-none">
                <Code2 className="w-3.5 h-3.5" />
                <span>&lt;/&gt;</span>
              </div>

              {/* Element 2: { CODE } badge */}
              <div className="absolute -bottom-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-blue-200/80 shadow-lg text-blue-600 font-mono font-extrabold text-xs flex items-center gap-1.5 animate-float-reverse select-none pointer-events-none">
                <Terminal className="w-3.5 h-3.5" />
                <span>&#123; CODE &#125;</span>
              </div>

              {/* Element 3: 01 index badge */}
              <div className="absolute top-1/4 -right-4 bg-blue-600 text-white font-mono text-[10px] font-black px-2.5 py-1 rounded-xl shadow-md select-none animate-float-slow pointer-events-none">
                01
              </div>

              {/* Element 4: WEB pill */}
              <div className="absolute bottom-1/4 -left-4 bg-white/95 backdrop-blur-xs text-slate-800 font-mono text-[10px] font-bold px-2.5 py-1 rounded-lg border border-slate-200 shadow-md flex items-center gap-1 select-none animate-float-reverse pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>WEB</span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* High-Resolution Photo Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-blue-100 flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header Bar */}
            <div className="p-4 sm:px-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  BN
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Bảo Nguyễn
                  </h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Web Developer • Ảnh đại diện chính thức
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors"
                aria-label="Đóng"
                title="Đóng lightbox"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* High-Res Photo Container */}
            <div className="p-4 sm:p-6 bg-slate-100 flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden shadow-md max-h-[65vh] bg-white">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Bảo Nguyễn - Web Developer"
                  className="max-h-[65vh] w-auto object-contain"
                />
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="p-4 sm:px-6 bg-white border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Độ phân giải gốc: 896 × 1195 px
              </span>
              <a
                href={PERSONAL_INFO.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-xs transition-colors"
              >
                <span>Nhắn tin Zalo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
