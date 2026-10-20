import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MessageSquare, Phone, ArrowRight, Sparkles } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#FCFDFF] via-blue-50/50 to-[#FCFDFF] relative overflow-hidden">
      
      {/* Background Subtle Tech Shapes */}
      <div className="absolute inset-0 bg-circuit-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-8 left-8 text-blue-400/30 font-mono text-xs select-none pointer-events-none hidden sm:block">
        + INITIATE_CALL
      </div>
      <div className="absolute bottom-8 right-8 text-blue-400/30 font-mono text-xs select-none pointer-events-none hidden sm:block">
        + READY_FOR_WORK
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Khởi động dự án của bạn</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
          BẠN ĐANG CẦN MỘT WEBSITE?
        </h2>

        {/* Subtitle */}
        <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Hãy gửi ý tưởng của bạn, mình sẽ cùng bạn biến nó thành một website hoàn chỉnh.
        </p>

        {/* Big Action Button & Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PERSONAL_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base px-7 py-3.5 rounded-2xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all transform active:scale-95 group"
            title="Nhắn Zalo cho Bảo"
          >
            <span className="text-xl">💬</span>
            <span>LIÊN HỆ BẢO NGUYỄN</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-bold text-sm px-6 py-3.5 rounded-2xl border-2 border-slate-200 hover:border-blue-300 transition-all shadow-xs"
            title="Kết nối Facebook"
          >
            <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>

          <a
            href={PERSONAL_INFO.phoneCallUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-bold text-sm px-6 py-3.5 rounded-2xl border-2 border-slate-200 hover:border-blue-300 transition-all shadow-xs"
            title="Gọi cho Bảo"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>{PERSONAL_INFO.phoneFormatted}</span>
          </a>
        </div>

        {/* Trust Note */}
        <p className="text-xs text-slate-500 mt-6 font-mono">
          ⚡ Phản hồi nhanh chóng qua Zalo • Tư vấn nhiệt tình & Hoàn toàn miễn phí
        </p>

      </div>
    </section>
  );
};
