import React from 'react';
import SplitText from './SplitText';

export default function Hero({ onOpenBooking, onOpenShowreel }) {
  return (
    <section id="home" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-7 reveal-up is-visible">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B21F29]/30 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md">
              <img src="assets/logo.png" alt="VTU Media" className="h-4 w-auto object-contain" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#B21F29] rec-dot"></span>
              <span>VTU Media Club</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">Official University Creative Wing</span>
            </div>

            <SplitText
              tag="h1"
              text="Capturing every frame of cinematic campus life"
              className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-white leading-[1.08]"
              effect="rise"
              splitType="chars"
              delay={35}
              duration={1.1}
              staggerFrom="start"
              trigger="load"
              hoverEffect="lift"
              textAlign="left"
            />

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-normal">
              We are VTU's student collective of filmmakers, cinematographers, colorists, and broadcast engineers — crafting cinema-grade festival aftermovies, powering every campus club's visual identity, and broadcasting university milestones worldwide.
            </p>

            {/* Hero Action Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a href="#gallery" className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#72090F] via-[#930510] to-[#B21F29] hover:brightness-110 shadow-glow-terracotta border border-[#B21F29]/50 transition-all hover:-translate-y-0.5 group">
                <span>View Photo Gallery</span>
                <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <button onClick={onOpenBooking} className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-zinc-100 border border-white/[0.14] bg-white/[0.04] hover:bg-[#B21F29]/20 hover:border-[#B21F29]/40 transition-all hover:-translate-y-0.5 backdrop-blur-md">
                Book Club Coverage
              </button>

              <button onClick={() => onOpenShowreel(0)} className="group inline-flex items-center gap-3 px-3.5 py-2 rounded-full text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                <span className="w-10 h-10 rounded-full bg-[#B21F29]/20 border border-[#B21F29]/40 flex items-center justify-center group-hover:bg-[#B21F29]/40 group-hover:scale-105 transition-all shadow-md">
                  <svg className="w-4 h-4 text-[#fda4af] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="underline decoration-white/20 underline-offset-4 group-hover:decoration-[#B21F29]">Watch 2026 Showreel</span>
              </button>
            </div>

            {/* Animated 3-Metric Stat Pill + Member Avatar Stack */}
            <div className="pt-3 space-y-5">
              <div className="inline-grid grid-cols-3 divide-x divide-white/[0.09] rounded-2xl bg-gradient-to-r from-[#3D0B0D]/50 via-white/[0.02] to-[#53080E]/40 border border-white/[0.1] backdrop-blur-xl px-2 sm:px-4 py-3.5 w-full sm:w-auto shadow-lg">
                <div className="px-3 sm:px-6 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-tight"><span className="count-up" data-target="140">140</span>+</p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-medium">Events Covered</p>
                </div>
                <div className="px-3 sm:px-6 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-tight"><span className="count-up" data-target="420">420</span>K+</p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-medium">Social Reach</p>
                </div>
                <div className="px-3 sm:px-6 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-bold text-white tracking-tight"><span className="count-up" data-target="28">28</span>+</p>
                  <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-medium">Clubs Supported</p>
                </div>
              </div>

              {/* Overlapping Member Avatar Stack */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80" alt="Arpan" className="w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80" alt="Grish" className="w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20" />
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&q=80" alt="Sunil" className="w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20" />
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80" alt="Ramesh" className="w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20" />
                  <a href="#team" className="w-10 h-10 rounded-full bg-[#53080E] ring-2 ring-black border border-[#B21F29]/40 flex items-center justify-center text-[11px] font-semibold text-white hover:bg-[#B21F29]/50 transition-colors">
                    +15
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">Featured Creators & Council</p>
                  <p className="text-xs text-zinc-400">Jnana Sangama Campus • Cinematography, Aerial, Color & Live Broadcast</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Tilting Vertical Spotlight Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal-up is-visible">
            <div className="relative w-full max-w-[410px] group tilt-card" data-tilt="8">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-[#B21F29]/45 via-[#930510]/25 to-[#53080E]/25 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative rounded-[1.85rem] overflow-hidden border border-white/[0.15] bg-surface aspect-[4/5] shadow-2xl">
                <video
                  src="assets/vtu_aftermovie.mp4"
                  poster="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=950&q=85"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-106 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-obsidian/30"></div>

                {/* Top HUD Pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B21F29] rec-dot"></span>
                    FEATURED PREMIERE
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#f5e6e8]">
                    24 FPS • S-LOG3
                  </span>
                </div>

                {/* Center Play Affordance */}
                <button onClick={() => onOpenShowreel(0)} aria-label="Play VTU Fest Official Aftermovie" className="absolute inset-0 flex items-center justify-center focus:outline-none">
                  <span className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-95 opacity-90 group-hover:scale-105 group-hover:opacity-100 group-hover:bg-[#B21F29]/40 transition-all duration-300 shadow-glow-terracotta">
                    <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>

                {/* Frosted-Glass Bottom Metadata */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/[0.14] p-4 space-y-3">
                  <div>
                    <p id="heroCardBadge" className="text-[11px] uppercase tracking-wider text-[#B21F29] font-semibold">Latest Production</p>
                    <h2 id="heroCardTitle" className="text-lg sm:text-xl font-semibold text-white leading-snug mt-0.5">
                      VTU Fest '26 <span className="font-editorial text-[#f5e6e8] font-normal text-2xl">Official Aftermovie</span>
                    </h2>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/[0.1]">
                    <div className="space-y-0.5">
                      <p className="text-[11px] text-zinc-400">Runtime & Master</p>
                      <p id="heroCardRuntime" className="text-xs font-semibold text-white font-mono">03:42 • 4K RAW</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[11px] text-zinc-400">Shoot Lead</p>
                      <p id="heroCardLead" className="text-xs font-semibold text-zinc-100">Aarav Deshpande</p>
                    </div>
                    <button onClick={() => onOpenShowreel(0)} className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#B21F29] to-[#72090F] hover:brightness-110 border border-[#B21F29]/40 shadow-glow-terracotta transition-all shrink-0">
                      Watch Reel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
