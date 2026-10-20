import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { ExternalLink, Copy, Check, Smartphone, Sparkles } from 'lucide-react';

export const QRCodeSection: React.FC = () => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [targetUrl, setTargetUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // Dynamic production URL detection
    const getUrl = (): string => {
      if (typeof window === 'undefined') {
        return 'https://ais-pre-l3v7xq2ssi7bqnh3wwm7fh-883700163715.asia-southeast1.run.app';
      }
      const host = window.location.hostname;
      const isLocal = host === 'localhost' || host === '127.0.0.1' || host === '';
      if (isLocal) {
        return 'https://ais-pre-l3v7xq2ssi7bqnh3wwm7fh-883700163715.asia-southeast1.run.app';
      }
      return window.location.origin;
    };

    const url = getUrl();
    setTargetUrl(url);

    // High resolution QR code with navy/blue code on clean white background
    QRCode.toDataURL(url, {
      width: 512,
      margin: 1.5,
      color: {
        dark: '#1D4ED8', // Navy/vibrant blue
        light: '#FFFFFF', // Pure white
      },
      errorCorrectionLevel: 'H',
    })
      .then((dataUrl) => {
        setQrDataUrl(dataUrl);
      })
      .catch((err) => {
        console.error('Failed to generate QR code', err);
      });
  }, []);

  const handleCopyLink = () => {
    if (!targetUrl) return;
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-8 sm:py-10 bg-[#FCFDFF] relative overflow-hidden border-t border-blue-50/80">
      
      {/* Background Subtle Tech Shapes */}
      <div className="absolute inset-0 bg-circuit-pattern pointer-events-none opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-36 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Compact Card (~250-300px height container, horizontal on PC, vertical on mobile) */}
        <div className="bg-white rounded-3xl border border-blue-100/90 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 p-5 sm:p-6 md:p-7">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            
            {/* Left: QR Code Box */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="p-2.5 bg-white rounded-2xl border-2 border-blue-200/90 shadow-xs hover:border-blue-500 transition-colors">
                {qrDataUrl ? (
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                    <img
                      src={qrDataUrl}
                      alt="QR Code Website Bảo Nguyễn"
                      className="w-full h-full object-contain"
                    />
                    {/* Small center emblem */}
                    <div className="absolute inset-0 m-auto w-7 h-7 rounded-md bg-white border border-blue-200 shadow-2xs flex items-center justify-center font-black text-[10px] text-blue-600 pointer-events-none">
                      BN
                    </div>
                  </div>
                ) : (
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 text-xs">
                    Đang tạo QR...
                  </div>
                )}
              </div>
            </div>

            {/* Center/Right Info: Tiêu đề & Thông tin */}
            <div className="flex-1 text-center md:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 font-mono text-[11px] font-bold uppercase tracking-wider mb-2 border border-blue-100">
                <Smartphone className="w-3 h-3" />
                <span>QUÉT QR ĐỂ XEM WEBSITE</span>
              </div>

              {/* Exact Requested Title */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1">
                BẢO NGUYỄN — WEB DEVELOPER
              </h3>

              {/* Exact Requested Subtitle */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Quét mã để xem portfolio trên điện thoại.
              </p>

              {/* Action Buttons: MỞ WEBSITE & SAO CHÉP LINK */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                <a
                  href={targetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>MỞ WEBSITE</span>
                </a>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-semibold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors"
                  title="Sao chép liên kết trang web"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span className="text-emerald-700 font-bold">ĐÃ SAO CHÉP LINK!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Sao chép link</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
