import React, { useState, useRef } from 'react';
import { featuredCreators, allMembers } from '../data/members';
import { playWhooshSound, playShutterSound } from '../utils/audio';

export default function MembersWall({ onOpenMemberModal }) {
  const [activeDept, setActiveDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const carouselRef = useRef(null);
  const depts = ['All', 'Cinematography', 'Photography', 'Editing & Color', 'Graphic Design', 'Motion & VFX', 'Live & Audio', 'Social Media'];

  const scrollCreators = (delta) => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: delta * 360, behavior: 'smooth' });
    playWhooshSound();
  };

  let filteredMembers = activeDept === 'All'
    ? allMembers
    : allMembers.filter((m) => m.dept === activeDept);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

        {/* Horizontal Scrollable Featured Leads Carousel */}
        <div className="relative mb-20 reveal-up">
          <div className="relative flex items-center justify-center">
            {/* Left Scroll Button */}
            <button
              onClick={() => scrollCreators(-1)}
              aria-label="Scroll Left"
              className="hidden md:flex absolute -left-3 lg:-left-5 z-20 w-11 h-11 rounded-full border border-white/[0.12] bg-obsidian/90 backdrop-blur-md hover:bg-[#B21F29]/25 hover:border-[#B21F29]/60 items-center justify-center text-zinc-200 hover:text-white transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Scrollable Track */}
            <div
              ref={carouselRef}
              className="flex gap-6 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4 items-stretch cursor-grab active:cursor-grabbing"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredCreators.map((c, idx) => (
                <div
                  key={idx}
                  className="w-[280px] sm:w-[330px] md:w-[360px] shrink-0 snap-center relative rounded-3xl overflow-hidden transition-all duration-300 p-6 sm:p-7 bg-surface/90 border border-white/[0.1] hover:border-[#B21F29]/60 hover:shadow-glow-terracotta hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border border-white/20 shrink-0">
                        <img src={c.avatar} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#B21F29]/20 to-transparent"></div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white leading-tight">{c.name}</h4>
                        <p className="text-xs text-[#B21F29] font-mono mt-0.5">{c.role}</p>
                        <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{c.handle}</p>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">{c.bio}</p>
                  </div>
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/[0.08] text-[11px] font-mono text-zinc-400">
                    {c.stats.map((s, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scrollCreators(1)}
              aria-label="Scroll Right"
              className="hidden md:flex absolute -right-3 lg:-right-5 z-20 w-11 h-11 rounded-full border border-white/[0.12] bg-obsidian/90 backdrop-blur-md hover:bg-[#B21F29]/25 hover:border-[#B21F29]/60 items-center justify-center text-zinc-200 hover:text-white transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Interactive Scroll & Drag Hint */}
          <div className="flex items-center justify-between text-xs text-zinc-500 px-2 mt-2">
            <span>← Drag or scroll horizontally to view all creators →</span>
            <div className="flex md:hidden gap-2">
              <button onClick={() => scrollCreators(-1)} className="px-3 py-1 rounded-full border border-white/[0.12] bg-white/[0.04] text-[11px]">← Prev</button>
              <button onClick={() => scrollCreators(1)} className="px-3 py-1 rounded-full border border-white/[0.12] bg-white/[0.04] text-[11px]">Next →</button>
            </div>
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

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => { setActiveDept(d); playWhooshSound(); }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeDept === d
                    ? 'bg-[#72090F]/30 text-white border border-[#B21F29]/60 shadow-glow-terracotta'
                    : 'bg-white/[0.03] text-zinc-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {d}
              </button>
            ))}
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
