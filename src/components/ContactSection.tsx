import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, ArrowUpRight, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FCFDFF] relative overflow-hidden">
      
      {/* Background Subtle Tech Shapes */}
      <div className="absolute inset-0 bg-circuit-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Editorial Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[120px] sm:text-[180px] font-black text-blue-600/[0.035] font-mono leading-none z-0">
        05_CONTACT
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="font-mono text-[10px] text-blue-500 font-bold">05 //</span>
            <span>LIÊN HỆ TRỰC TIẾP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            KẾT NỐI VỚI BẢO
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-8 h-px bg-blue-300" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-8 h-px bg-blue-300" />
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Bạn đang cần một website? Hãy liên hệ với mình để trao đổi ý tưởng.
          </p>
        </div>

        {/* 3 Large Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. ZALO */}
          <div className="relative group">
            <a
              href={PERSONAL_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-8 sm:p-9 rounded-3xl bg-white border border-blue-100 hover:border-blue-600 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Zalo Icon */}
              <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300 shadow-xs">
                <span className="font-black text-2xl tracking-tight">Zalo</span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 font-mono">
                💬 ZALO
              </span>

              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-mono">
                {PERSONAL_INFO.phoneFormatted}
              </h3>

              <p className="text-xs text-slate-500 mb-6">
                Nhắn tin trao đổi ý tưởng nhanh chóng
              </p>

              {/* Action Button */}
              <span className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-700 group-hover:text-white font-bold text-xs transition-colors shadow-2xs">
                <span>Nhắn Zalo cho Bảo</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>

              {/* Tooltip */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-900 text-white text-[11px] font-medium py-1 px-2.5 rounded-lg pointer-events-none shadow-md">
                Nhắn Zalo cho Bảo
              </div>
            </a>
          </div>

          {/* 2. FACEBOOK */}
          <div className="relative group">
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-8 sm:p-9 rounded-3xl bg-white border border-blue-100 hover:border-blue-600 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Facebook Icon */}
              <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300 shadow-xs">
                <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 font-mono">
                📘 FACEBOOK
              </span>

              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Bảo Nguyễn
              </h3>

              <p className="text-xs text-slate-500 mb-6">
                Xem trang cá nhân & nhắn tin trực tiếp
              </p>

              {/* Action Button */}
              <span className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-700 group-hover:text-white font-bold text-xs transition-colors shadow-2xs">
                <span>Kết nối Facebook</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>

              {/* Tooltip */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-900 text-white text-[11px] font-medium py-1 px-2.5 rounded-lg pointer-events-none shadow-md">
                Kết nối Facebook
              </div>
            </a>
          </div>

          {/* 3. GỌI ĐIỆN */}
          <div className="relative group">
            <a
              href={PERSONAL_INFO.phoneCallUrl}
              className="flex flex-col items-center text-center p-8 sm:p-9 rounded-3xl bg-white border border-blue-100 hover:border-blue-600 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-blue-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Phone Icon */}
              <div className="w-20 h-20 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300 shadow-xs">
                <Phone className="w-9 h-9" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1.5 font-mono">
                📞 GỌI ĐIỆN
              </span>

              <h3 className="text-xl font-extrabold text-slate-900 mb-2 font-mono">
                {PERSONAL_INFO.phoneFormatted}
              </h3>

              <p className="text-xs text-slate-500 mb-6">
                Gọi điện thoại trao đổi ngay lập tức
              </p>

              {/* Action Button */}
              <span className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-700 group-hover:text-white font-bold text-xs transition-colors shadow-2xs">
                <span>Gọi cho Bảo</span>
                <ArrowUpRight className="w-4 h-4" />
              </span>

              {/* Tooltip */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-slate-900 text-white text-[11px] font-medium py-1 px-2.5 rounded-lg pointer-events-none shadow-md">
                Gọi cho Bảo
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
