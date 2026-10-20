import React from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Rocket, 
  UserCheck, 
  Building2, 
  ShoppingBag, 
  Wrench, 
  Check, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Layers
} from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-blue-600 stroke-[1.75]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-blue-600 stroke-[1.75]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-600 stroke-[1.75]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-blue-600 stroke-[1.75]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-blue-600 stroke-[1.75]" />;
      default:
        return <Rocket className="w-6 h-6 text-blue-600 stroke-[1.75]" />;
    }
  };

  // Unique subtle blob gradients for each card
  const blobColors = [
    'from-blue-200/40 via-sky-100/30 to-transparent',
    'from-indigo-200/40 via-blue-100/30 to-transparent',
    'from-cyan-200/40 via-sky-100/30 to-transparent',
    'from-blue-300/30 via-indigo-100/20 to-transparent',
    'from-sky-200/40 via-blue-100/30 to-transparent',
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAFCFF] relative overflow-hidden">
      
      {/* Background Subtle Tech Shapes */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Editorial Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[120px] sm:text-[180px] font-black text-blue-600/[0.035] font-mono leading-none z-0">
        02_SERVICES
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="font-mono text-[10px] text-blue-500 font-bold">02 //</span>
            <span>DỊCH VỤ THIẾT KẾ & CODE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            MÌNH CÓ THỂ LÀM GÌ CHO BẠN?
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-8 h-px bg-blue-300" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-8 h-px bg-blue-300" />
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            Dịch vụ thiết kế và lập trình website linh hoạt, phù hợp từ nhu cầu cá nhân đơn giản đến cửa hàng kinh doanh.
          </p>
        </div>

        {/* Services Grid (5 cards with custom art details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES.map((service, index) => {
            const isLastOnDesktop = index === 4;
            const cardNum = `0${index + 1}`;
            const gradientBlob = blobColors[index % blobColors.length];

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-blue-100 hover:border-blue-500 shadow-xs hover:shadow-2xl hover:shadow-blue-500/12 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  isLastOnDesktop ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Abstract Ambient Gradient Blob inside Card */}
                <div 
                  className={`absolute -top-14 -right-14 w-40 h-40 bg-gradient-to-br ${gradientBlob} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}
                />

                {/* Big Faded Watermark Number in Card Background */}
                <div className="absolute top-2 right-4 text-6xl sm:text-7xl font-mono font-black text-blue-900/[0.04] group-hover:text-blue-600/10 transition-colors pointer-events-none select-none">
                  {cardNum}
                </div>

                {/* Card Main Content */}
                <div className="relative z-10">
                  {/* Card Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50/90 border border-blue-200/70 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <div className="group-hover:text-white transition-colors">
                        {getIcon(service.icon)}
                      </div>
                    </div>
                    {service.highlightTag && (
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50/90 px-3 py-1 rounded-full border border-blue-200 shadow-2xs">
                        {service.highlightTag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-blue-500 font-bold">
                      // {cardNum}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Checklist Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button with Glowing Hover State */}
                <div className="relative z-10 pt-4 border-t border-slate-100">
                  <a
                    href={PERSONAL_INFO.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold text-xs transition-all duration-200 group/btn shadow-2xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-blue-600 group-hover/btn:text-white transition-colors" />
                      Tư vấn gói này qua Zalo
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Note with Technical Details */}
        <div className="mt-14 p-5 rounded-2xl bg-white border border-blue-100 max-w-2xl mx-auto shadow-xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs text-slate-600 leading-normal">
            💡 Bạn chưa rõ website của mình thuộc loại nào? Đừng ngần ngại{' '}
            <a href={PERSONAL_INFO.zaloUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">
              nhắn tin Zalo ({PERSONAL_INFO.phoneFormatted})
            </a>
            , Bảo sẽ tư vấn cấu trúc tối ưu nhất hoàn toàn miễn phí!
          </p>
        </div>

      </div>
    </section>
  );
};
