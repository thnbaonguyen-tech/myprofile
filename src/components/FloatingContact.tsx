import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  MessageCircle, 
  X, 
  Phone, 
  Mail, 
  ChevronUp, 
  Sparkles 
} from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      
      {/* Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-400 flex items-center justify-center shadow-md transition-all hover:-translate-y-0.5"
          aria-label="Cuộn lên đầu trang"
          title="Lên đầu trang"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Menu Popover */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 p-3 flex flex-col gap-2 min-w-[210px] animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          <div className="px-2 py-1 border-b border-slate-100 mb-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Liên hệ với Bảo Nguyễn</span>
            </div>
            <p className="text-[10px] text-slate-400">Chọn phương thức bạn tiện nhất</p>
          </div>

          {/* 1. ZALO */}
          <a
            href={PERSONAL_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-blue-50/80 hover:bg-blue-600 text-blue-700 hover:text-white transition-all group font-semibold text-xs"
            title="Nhắn Zalo cho Bảo"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
              Zalo
            </div>
            <div className="flex flex-col">
              <span className="font-bold">💬 Nhắn Zalo cho Bảo</span>
              <span className="text-[10px] text-slate-500 group-hover:text-blue-100">{PERSONAL_INFO.phoneFormatted}</span>
            </div>
          </a>

          {/* 2. FACEBOOK */}
          <a
            href={PERSONAL_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-all group font-semibold text-xs"
            title="Kết nối Facebook"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-105 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold">📘 Kết nối Facebook</span>
              <span className="text-[10px] text-slate-400">Trang cá nhân của Bảo</span>
            </div>
          </a>

          {/* 3. GỌI ĐIỆN */}
          <a
            href={PERSONAL_INFO.phoneCallUrl}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-all group font-semibold text-xs"
            title="Gọi cho Bảo"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-105 transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">📞 Gọi cho Bảo</span>
              <span className="text-[10px] text-slate-400">{PERSONAL_INFO.phoneFormatted}</span>
            </div>
          </a>

          {/* 4. EMAIL */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-all group font-semibold text-xs"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-105 transition-all">
              <Mail className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold">✉️ Gửi Email</span>
              <span className="text-[10px] text-slate-400">thnbaonguyen@...</span>
            </div>
          </a>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group/main">
        {/* Pulsing gentle glow effect behind button */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />
        )}

        {/* Hover Tooltip when collapsed */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover/main:opacity-100 transition-all duration-200 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl pointer-events-none whitespace-nowrap shadow-xl border border-slate-700/50">
            Liên hệ với Bảo Nguyễn
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/25 transition-all duration-300 transform active:scale-95 ${
            isOpen
              ? 'bg-slate-900 text-white rotate-90 ring-4 ring-slate-100'
              : 'bg-gradient-to-tr from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white hover:scale-105 ring-4 ring-blue-100/80'
          }`}
          aria-label="Mở menu liên hệ"
          title="Liên hệ với Bảo Nguyễn"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

    </div>
  );
};
