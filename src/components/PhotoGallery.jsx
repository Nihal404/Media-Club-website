import React, { useState } from 'react';
import { galleryStills, galleryCategories } from '../data/gallery';
import { playWhooshSound, playShutterSound } from '../utils/audio';

export default function PhotoGallery({ onOpenLightbox, onOpenCategory }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const cats = ['All', 'Campus Fests', 'Cinematography', 'Portraits', 'Behind the Scenes', 'Sports & Action'];

  const filteredStills = activeFilter === 'All'
    ? galleryStills
    : galleryStills.filter((s) => s.cat === activeFilter);

  const marqueeRows = [
    { items: galleryStills.slice(0, 6), anim: 'animate-marquee-left-slow' },
    { items: galleryStills.slice(6, 12), anim: 'animate-marquee-right-slow' },
    { items: galleryStills.slice(12, 18), anim: 'animate-marquee-left-slow', duration: '56s' }
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-28 border-t border-white/[0.06] overflow-hidden">

      {/* 3-Row Alternating Cinema Stills Marquee */}
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 reveal-up">
        <div>
          <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Visual Gallery &amp; Archive</p>
          <h2 className="text-2xl sm:text-4xl font-semibold text-white mt-1">
            Stills from the <span className="font-editorial text-[#B21F29] font-normal text-[1.12em]">archive</span>
          </h2>
        </div>
        <p className="text-xs text-zinc-400">Hover to pause • Click any frame for EXIF &amp; fullscreen lightbox</p>
      </div>

      <div className="relative space-y-4 sm:space-y-5 edge-fade-mask marquee-pause mb-24">
        {marqueeRows.map((row, rIdx) => {
          const cards = row.items.map((still, localIdx) => {
            const globalIdx = rIdx * 6 + localIdx;
            return (
              <button
                key={localIdx}
                onClick={() => { playShutterSound(); onOpenLightbox(globalIdx); }}
                className="group relative w-48 sm:w-60 md:w-68 h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/[0.09] bg-surface shrink-0 focus:outline-none hover:border-indigo-400/50 transition-all"
              >
                <img src={still.img} alt={still.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                  <span className="text-xs font-semibold text-white truncate">{still.title}</span>
                  <span className="text-[10px] text-zinc-300 truncate">{still.creator} • {still.cat}</span>
                </div>
              </button>
            );
          });
          return (
            <div key={rIdx} className={`${row.anim} gap-4 sm:gap-5 px-2`} style={row.duration ? { animationDuration: row.duration } : {}}>
              {cards}
              {cards}
            </div>
          );
        })}
      </div>

      {/* Interactive Filterable Photo Gallery Grid */}
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 reveal-up">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#B21F29] mb-3">
              Curated Photo Gallery
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Explore <span className="font-editorial text-[#B21F29] font-normal text-[1.12em]">Galleries</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => { setActiveFilter(c); playWhooshSound(); }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === c
                    ? 'bg-[#72090F]/30 text-white border border-[#B21F29]/60 shadow-glow-terracotta'
                    : 'bg-white/[0.03] text-zinc-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Filterable Stills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-up">
          {filteredStills.map((s, idx) => {
            const realIdx = galleryStills.indexOf(s);
            return (
              <button
                key={idx}
                onClick={() => { playShutterSound(); onOpenLightbox(realIdx); }}
                className="group relative aspect-[4/3] rounded-[1.4rem] overflow-hidden bg-surface border border-white/[0.09] hover:border-[#B21F29]/50 text-left focus:outline-none shadow-lg transition-all hover:-translate-y-1"
              >
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[10px] font-medium text-[#f5e6e8]">{s.cat}</span>
                </div>
                <div className="absolute bottom-3.5 left-4 right-4 space-y-1">
                  <h4 className="text-sm sm:text-base font-semibold text-white truncate">{s.title}</h4>
                  <div className="flex items-center justify-between text-[11px] text-zinc-300">
                    <span>by {s.creator}</span>
                    <span className="font-mono text-[10px] text-[#B21F29] opacity-0 group-hover:opacity-100 transition-opacity">EXIF ↗</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 3x2 Mini Bento Collage Collections */}
        <div className="pt-10 space-y-6 reveal-up">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-semibold text-white">
              Department <span className="font-editorial text-zinc-300 font-normal text-[1.15em]">Collections</span>
            </h3>
            <span className="text-xs text-zinc-500">Click any deck to inspect full album</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryCategories.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => { playWhooshSound(); onOpenCategory(idx); }}
                className="spotlight-card group cursor-pointer rounded-[1.6rem] p-3.5 bg-surface/90 border border-white/[0.09] hover:border-[#B21F29]/45 hover:-translate-y-1 transition-all duration-300 shadow-lg"
              >
                <div className="space-y-2">
                  <div className="grid grid-cols-3 gap-2">
                    {cat.thumbs.map((t, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden bg-obsidian border border-white/[0.06]">
                        <img src={t} alt={cat.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-obsidian border border-white/[0.06]">
                    <img src={cat.wide} alt={`${cat.title} Showcase`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3.5 px-1">
                  <h3 className="text-base font-semibold text-white group-hover:text-[#f5e6e8] transition-colors">{cat.title}</h3>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#72090F]/25 text-[#B21F29] border border-[#B21F29]/30">{cat.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
