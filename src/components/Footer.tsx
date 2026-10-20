import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1528] text-white pt-14 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                BN.
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Bảo Nguyễn — Web Developer
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Thiết kế website bằng sự sáng tạo và công nghệ.
            </p>
          </div>

          {/* Social / Contact Icons */}
          <div className="flex items-center gap-3">
            {/* Zalo */}
            <a
              href={PERSONAL_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
              title="Nhắn Zalo cho Bảo"
              aria-label="Nhắn Zalo cho Bảo"
            >
              <span>Zalo</span>
            </a>

            {/* Facebook */}
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-blue-600 text-slate-300 hover:text-white transition-all border border-slate-700/80"
              title="Kết nối Facebook"
              aria-label="Kết nối Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Phone */}
            <a
              href={PERSONAL_INFO.phoneCallUrl}
              className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-blue-600 text-slate-300 hover:text-white transition-all border border-slate-700/80"
              title="Gọi cho Bảo"
              aria-label="Gọi cho Bảo"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-800/90 hover:bg-blue-600 text-slate-300 hover:text-white transition-all border border-slate-700/80"
              title="Gửi Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Copyright & Blueprint metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center gap-3">
            <p>© 2026 Bảo Nguyễn. All rights reserved.</p>
            <span className="hidden sm:inline font-mono text-[10px] text-slate-500">// BN_STUDIO_V2.0</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Thiết kế & Lập trình bởi Bảo Nguyễn</span>
            <a href="#hero" className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors font-mono">
              <span>TOP ↑</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
