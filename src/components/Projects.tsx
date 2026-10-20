import React, { useState } from 'react';
import { PROJECTS, ProjectItem, PERSONAL_INFO } from '../data/portfolioData';
import { 
  ExternalLink, 
  CheckCircle2, 
  X, 
  MessageSquare, 
  Eye, 
  Sparkles,
  ArrowRight,
  Layers,
  Monitor
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['Tất cả', 'Portfolio', 'Landing Page', 'Education', 'Creative'];

  const filteredProjects = selectedCategory === 'Tất cả'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#FCFDFF] relative overflow-hidden">
      
      {/* Background Blueprint Grid & Ambience */}
      <div className="absolute inset-0 bg-circuit-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Editorial Watermark */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[120px] sm:text-[180px] font-black text-blue-600/[0.035] font-mono leading-none z-0">
        03_PROJECTS
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="font-mono text-[10px] text-blue-500 font-bold">03 //</span>
            <span>SHOWCASE & DEMO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            MỘT SỐ DỰ ÁN
          </h2>

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="w-8 h-px bg-blue-300" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-16 h-1 bg-blue-600 rounded-full" />
            <span className="text-blue-600 text-xs font-mono font-bold">+</span>
            <div className="w-8 h-px bg-blue-300" />
          </div>

          <p className="text-slate-600 text-base leading-relaxed">
            Các sản phẩm mẫu thể hiện phong cách lập trình sạch sẽ, tối ưu responsive và tốc độ cao. Dễ dàng tùy biến theo thương hiệu của bạn.
          </p>
        </div>

        {/* Filter Tabs with Blueprint Styling */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200/90'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Portfolio Gallery */}
        <div className="space-y-10">
          
          {/* Featured Hero Project Card (Project 01) if present in filtered list */}
          {filteredProjects[0] && (
            <div className="group relative bg-white rounded-3xl border border-blue-100 hover:border-blue-500 shadow-sm hover:shadow-2xl hover:shadow-blue-500/12 transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Large Visual Frame */}
                <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-slate-100">
                  <img
                    src={filteredProjects[0].image}
                    alt={filteredProjects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Subtle Blueprint Grid Line on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end p-6 sm:p-8">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold bg-blue-600 px-2.5 py-0.5 rounded-md uppercase">
                          {filteredProjects[0].badge}
                        </span>
                        <span className="text-xs text-blue-200 font-mono">
                          FEATURED // 01
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {filteredProjects[0].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Info & Tech Breakdown Column */}
                <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between relative bg-white">
                  
                  {/* Watermark in background */}
                  <div className="absolute top-2 right-4 text-7xl font-mono font-black text-blue-900/[0.04] pointer-events-none select-none">
                    01
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                        {filteredProjects[0].category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">#PROJECT_01</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {filteredProjects[0].description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {filteredProjects[0].features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {filteredProjects[0].technologies.map((t) => (
                        <span key={t} className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => setActiveModalProject(filteredProjects[0])}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>XEM WEBSITE</span>
                    </button>
                    <a
                      href={PERSONAL_INFO.zaloUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold py-3 px-4 rounded-xl border border-blue-200 transition-colors"
                      title="Hỏi làm tương tự"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Hỏi mẫu này</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* Grid for Remaining Projects (Project 02, 03, 04) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.slice(1).map((project, idx) => {
              const projectIndex = `0${idx + 2}`;

              return (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-3xl border border-blue-100 hover:border-blue-500 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Thumbnail Frame */}
                  <div className="relative aspect-16/10 bg-slate-100 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Faded overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 bg-white text-blue-700 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-md hover:bg-blue-50 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Xem chi tiết</span>
                      </button>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/95 backdrop-blur-xs text-blue-700 border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                        {project.badge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-slate-900/80 backdrop-blur-xs text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-md">
                        #{projectIndex}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between relative">
                    {/* Watermark in background */}
                    <div className="absolute bottom-2 right-4 text-6xl font-mono font-black text-blue-900/[0.035] pointer-events-none select-none">
                      {projectIndex}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 mb-1">
                        <span>// {project.category}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                        {project.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-medium bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Button */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>XEM WEBSITE</span>
                      </button>
                      <a
                        href={PERSONAL_INFO.zaloUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors"
                        title="Tư vấn mẫu này qua Zalo"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Demo Notice Note with Blueprint Accent */}
        <div className="mt-14 text-center text-xs text-slate-500 font-mono">
          <span>// NOTE: Các dự án trên là </span>
          <span className="font-bold text-blue-600">PROJECT DEMO</span>
          <span> minh họa năng lực thiết kế & giao diện. Khi làm việc, Bảo sẽ xây dựng sản phẩm hoàn toàn riêng biệt theo yêu cầu của bạn.</span>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase tracking-wider mr-2">
                  {activeModalProject.badge}
                </span>
                <span className="text-xs font-medium text-slate-500 font-mono">
                  Danh mục: {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-colors"
                aria-label="Đóng modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-video bg-slate-100 border border-slate-200">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Mô tả dự án
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Điểm nổi bật của phiên bản mẫu này
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProject.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-blue-50/60 p-2.5 rounded-xl border border-blue-100">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Công nghệ áp dụng
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Bạn thích mẫu thiết kế này?
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200/60 transition-colors"
                >
                  Đóng
                </button>
                <a
                  href={PERSONAL_INFO.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Yêu cầu làm tương tự</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
