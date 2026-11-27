import React, { useState, useRef } from 'react';
import { featuredCreators, allMembers } from '../data/members';
import { playWhooshSound, playShutterSound } from '../utils/audio';

const CORE_NAMES = ['Vikram', 'Harshada', 'Nihal', 'Adarsh', 'Prajwal V Gowda', 'Agam', 'Araman'];
function getMemberCategory(m) {
  if (m && (m.category === 'Core Team' || m.category === 'Members')) return m.category;
  return (m && CORE_NAMES.includes(m.name)) ? 'Core Team' : 'Members';
}

export default function MembersWall({ onOpenMemberModal }) {
  const [activeCategory, setActiveCategory] = useState('Core Team');
  const categories = [
    { id: 'Core Team', label: 'Core Team' },
    { id: 'Members', label: 'Members' }
  ];

  const scrollCreators = (delta) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: delta * 360, behavior: 'smooth' });
    playWhooshSound();
  };

  let filteredMembers = allMembers.filter((m) => getMemberCategory(m) === activeCategory);

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filteredMembers = filteredMembers.filter((m) =>
      m.name.toLowerCase().includes(q) ||
      m.role.toLowerCase().includes(q) ||
      m.gear.toLowerCase().includes(q) ||
      m.bio.toLowerCase().includes(q)
    );
  }

  return (
    <section id="team" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300">
            Team Profile &amp; Creator Roster
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Meet the <span className="font-editorial text-[#B21F29] font-normal text-[1.15em]">storytellers</span><br />
            behind the lens
          </h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            Hover any portrait for live cinema color-reveal, lens flare shimmer, and camera viewfinder HUD effects, or click to inspect their gear kit and campus credits.
          </p>
        </div>

        {/* Featured Storytellers Grid (Directly Show All Cards) */}
        <div className="relative mb-20 reveal-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch w-full">
            {featuredCreators.map((c, idx) => (
              <div
                key={idx}
                className="w-full relative rounded-3xl overflow-hidden transition-all duration-300 p-7 sm:p-8 bg-surface/90 border border-white/[0.12] hover:border-[#B21F29]/70 hover:shadow-[0_20px_50px_rgba(178,31,41,0.25)] hover:-translate-y-2 flex flex-col justify-between group min-h-[300px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-white/20 shrink-0">
                      <img src={c.avatar} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#B21F29]/20 to-transparent"></div>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">{c.name}</h4>
                      <p className="text-xs sm:text-sm text-[#B21F29] font-mono mt-1 font-medium">{c.role}</p>
                      <p className="text-xs text-zinc-400 font-mono mt-0.5">{c.handle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed pt-1">{c.bio}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 pt-5 mt-5 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
                  {c.stats.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ALL MEMBERS PHOTO PORTRAIT WALL */}
        <div className="space-y-8 reveal-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#B21F29] font-semibold">Full Club Roster (16 Active Members)</p>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                All Club <span className="font-editorial text-zinc-300 font-normal text-[1.15em]">Members</span>
              </h3>
            </div>
            {/* Member Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search member, gear, skill..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-surface border border-white/[0.1] text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#B21F29]/70 transition-colors"
              />
              <svg className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Two Segregations: Core Team & Members */}
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => {
              const count = allMembers.filter(m => getMemberCategory(m) === c.id).length;
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => { setActiveCategory(c.id); playWhooshSound(); }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#B21F29] text-white border border-[#B21F29] shadow-lg shadow-[#B21F29]/40 scale-105'
                      : 'bg-white/[0.04] text-zinc-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  <span>{c.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${isActive ? 'bg-black/35 text-white' : 'bg-white/10 text-zinc-300'}`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Member Portrait Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredMembers.map((m, idx) => {
              const realIdx = allMembers.indexOf(m);
              return (
                <div
                  key={idx}
                  onClick={() => { playShutterSound(); onOpenMemberModal(realIdx); }}
                  className="member-card tilt-card group relative cursor-pointer rounded-[1.5rem] overflow-hidden bg-surface border border-white/[0.09] hover:border-[#B21F29]/60 shadow-xl transition-all"
                  data-tilt="6"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-obsidian">
                    <img src={m.img} alt={m.name} loading="lazy" className="member-photo w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>

                    {/* Camera Viewfinder Corner Brackets on Hover */}
                    <div className="pointer-events-none absolute inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B21F29] rounded-tl-sm"></span>
                      <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B21F29] rounded-tr-sm"></span>
                      <span className="absolute bottom-16 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B21F29] rounded-bl-sm"></span>
                      <span className="absolute bottom-16 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B21F29] rounded-br-sm"></span>
                    </div>

                    {/* Top Department Pill & Rec Dot */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-medium text-[#f5e6e8]">{m.dept}</span>
                      <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono text-[#B21F29] opacity-0 group-hover:opacity-100 transition-opacity">{m.exif.split('•')[0]}</span>
                    </div>

                    {/* Bottom Identity Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/[0.1] group-hover:border-[#B21F29]/40 transition-colors">
                      <h4 className="text-sm font-semibold text-white truncate">{m.name}</h4>
                      <p className="text-[11px] text-[#B21F29] truncate">{m.role}</p>
                      <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-white/[0.08] text-[10px] text-zinc-400 font-mono">
                        <span className="truncate">{m.handle}</span>
                        <span className="text-white opacity-70 group-hover:opacity-100 font-sans">Kit →</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
