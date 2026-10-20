import React from 'react';
import { PERSONAL_INFO, HIGHLIGHT_STATS, WORK_VALUES } from '../data/portfolioData';
import { 
  Code2, 
  Smartphone, 
  Layout, 
  Sliders, 
  Check, 
  Users2, 
  Sparkles,
  Compass,
  ArrowRight
} from 'lucide-react';

export const About: React.FC = () => {
  const statIcons = [Code2, Smartphone, Layout, Sliders];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FCFDFF] relative overflow-hidden">
      
      {/* Background Blueprint Grid & Watermark Number */}
      <div className="absolute inset-0 bg-circuit-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Editorial Watermark */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[120px] sm:text-[180px] font-black text-blue-600/[0.03] font-mono leading-none z-0">
        01_ABOUT
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="font-mono text-[10px] text-blue-500 font-bold">01 //</span>
            <span>MÌNH LÀ AI?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            ĐAM MÊ CÔNG NGHỆ & SÁNG TẠO WEB
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-blue-300" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-8 h-px bg-blue-300" />
          </div>

          {/* Author Badge with Real Photo */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-blue-200/80 shadow-xs mb-6">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500 shadow-xs shrink-0 bg-slate-100">
              <img 
                src={PERSONAL_INFO.avatarUrl} 
                alt="Bảo Nguyễn" 
                className="w-full h-full object-cover object-top" 
              />
            </div>
            <div className="text-left">
              <div className="text-sm font-extrabold text-slate-900 leading-tight">Bảo Nguyễn</div>
              <div className="text-[11px] text-blue-600 font-mono font-semibold">Web Developer • Nhận làm web</div>
            </div>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            {PERSONAL_INFO.fullBio}
          </p>
        </div>

        {/* 4 Statistics / Highlights Cards with Watermarks & Blobs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {HIGHLIGHT_STATS.map((stat, index) => {
            const IconComponent = statIcons[index % statIcons.length];
            const stepNum = `0${index + 1}`;

            return (
              <div
                key={stat.label}
                className="group relative p-6 rounded-3xl bg-white border border-blue-100 hover:border-blue-500 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Subtle Gradient Blob */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-100/40 rounded-full blur-xl group-hover:bg-blue-400/20 transition-all pointer-events-none" />

                {/* Large Faded Watermark Number */}
                <div className="absolute bottom-2 right-4 text-5xl font-mono font-black text-blue-900/[0.04] group-hover:text-blue-600/10 transition-colors pointer-events-none select-none">
                  {stepNum}
                </div>

                {/* Icon in Blueprint Badge */}
                <div className="w-13 h-13 rounded-2xl bg-blue-50/90 border border-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 group-hover:text-blue-400 transition-colors">
                    #{stepNum}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed relative z-10">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Target Audience & Work Principles with Art Deco Accents */}
        <div className="relative bg-white rounded-3xl border border-blue-100 p-7 sm:p-10 shadow-sm overflow-hidden">
          
          {/* Subtle Blueprint Grid Accent inside */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-grid-pattern opacity-40 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Users2 className="w-4 h-4" />
                <span>// CLIENT_TARGETS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                Đồng hành cùng các dự án vừa & nhỏ
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Mình tập trung phục vụ những ai cần website gọn đẹp, chạy mượt mà không mất thời gian hay chi phí rườm rà.
              </p>

              {/* Target tags with checkmarks */}
              <div className="flex flex-wrap gap-2">
                {[
                  'Cá nhân',
                  'Học sinh & Sinh viên',
                  'Cửa hàng nhỏ',
                  'Người bán hàng online',
                  'Doanh nghiệp nhỏ',
                  'Nhà sáng tạo nội dung'
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl border border-blue-200/80 hover:bg-blue-100/60 transition-colors"
                  >
                    <Check className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WORK_VALUES.map((val, idx) => (
                <div 
                  key={val.title} 
                  className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <h4 className="font-bold text-slate-900 text-sm">
                        {val.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">0{idx + 1}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
