import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { 
  MessageCircle, 
  Palette, 
  Code2, 
  CheckCheck, 
  Gift, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const Process: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MessageCircle className="w-5 h-5 text-white" />;
      case 1:
        return <Palette className="w-5 h-5 text-white" />;
      case 2:
        return <Code2 className="w-5 h-5 text-white" />;
      case 3:
        return <CheckCheck className="w-5 h-5 text-white" />;
      case 4:
        return <Gift className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FAFCFF] relative overflow-hidden">
      
      {/* Background Blueprint Grid & Ambience */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Editorial Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[120px] sm:text-[180px] font-black text-blue-600/[0.035] font-mono leading-none z-0">
        04_PROCESS
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="font-mono text-[10px] text-blue-500 font-bold">04 //</span>
            <span>CÁC BƯỚC THỰC HIỆN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            QUY TRÌNH LÀM WEBSITE
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-8 h-px bg-blue-300" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-8 h-px bg-blue-300" />
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            Quy trình 5 bước tinh gọn, minh bạch, giúp bạn theo dõi tiến độ dễ dàng và sở hữu website đúng hẹn.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Connecting Blueprint Line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-200 via-blue-500 to-blue-200 pointer-events-none" />

          <div className="space-y-8 md:space-y-12">
            {PROCESS_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.step} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Left Column (Desktop) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'} order-2 mt-4 md:mt-0`}>
                    <div className="group relative p-6 sm:p-7 rounded-3xl bg-white border border-blue-100 hover:border-blue-500 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden">
                      
                      {/* Watermark in Card */}
                      <div className="absolute top-2 right-4 text-5xl font-mono font-black text-blue-900/[0.04] pointer-events-none select-none">
                        #{step.step}
                      </div>

                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="text-blue-600 font-extrabold text-sm font-mono">
                          BƯỚC {step.step}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                        {step.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Micro Checklist */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {step.details.map((d, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-lg border border-blue-100"
                          >
                            <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node / Icon Badge with Pulse Ring */}
                  <div className="z-10 flex items-center justify-center order-1 md:order-none relative">
                    <div className="w-13 h-13 rounded-2xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-white">
                      {getStepIcon(index)}
                    </div>
                  </div>

                  {/* Right Column (Placeholder for spacing on Desktop) */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-3 pl-12' : 'order-1 pr-12 text-right'}`}>
                    <div className="text-4xl font-black text-blue-100 font-mono select-none">
                      STEP_{step.step}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA to start */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 font-medium bg-white px-5 py-2.5 rounded-full border border-blue-100 shadow-2xs">
            <span>Sẵn sàng cùng mình bắt đầu từ</span>
            <span className="font-bold text-blue-600">Bước 01 — Trao đổi</span>
            <span>?</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </div>
        </div>

      </div>
    </section>
  );
};
