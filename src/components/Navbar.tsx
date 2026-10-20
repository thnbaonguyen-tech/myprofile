import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#hero' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Dự án', href: '#projects' },
    { name: 'Quy trình', href: '#process' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-blue-100/70 py-3'
          : 'bg-white/70 backdrop-blur-xs py-4 md:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 focus:outline-hidden"
          aria-label="Bảo Nguyễn Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-500 text-white flex items-center justify-center font-extrabold text-lg shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform">
            BN.
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 tracking-tight text-base leading-tight">
              Bảo Nguyễn
            </span>
            <span className="text-[11px] font-medium text-blue-600 uppercase tracking-wider">
              Web Developer
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-600 bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/60 transition-all"
            title="Facebook Bảo Nguyễn"
            aria-label="Facebook Bảo Nguyễn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a
            href={PERSONAL_INFO.phoneCallUrl}
            className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-3 py-2 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors"
            title="Gọi cho Bảo"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{PERSONAL_INFO.phoneFormatted}</span>
          </a>

          <a
            href={PERSONAL_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-xs shadow-blue-600/20 hover:shadow-md hover:shadow-blue-600/30 transition-all transform active:scale-95"
            title="Nhắn Zalo cho Bảo"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Liên hệ ngay</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PERSONAL_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-slate-700 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            title="Facebook"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a
            href={PERSONAL_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-xs"
            title="Nhắn Zalo cho Bảo"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Zalo</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-hidden"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-blue-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2.5 rounded-xl shadow-xs text-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Nhắn Zalo: {PERSONAL_INFO.phoneFormatted}</span>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 font-semibold py-2 rounded-xl text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
              <a
                href={PERSONAL_INFO.phoneCallUrl}
                className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 font-semibold py-2 rounded-xl text-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Gọi điện</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
