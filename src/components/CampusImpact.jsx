import React, { useState } from 'react';
import { partnerClubsData } from '../data/clubs';
import { playWhooshSound } from '../utils/audio';

export default function CampusImpact({ onOpenBooking }) {
  const [activeClubId, setActiveClubId] = useState('ieee');

  const activeClub = partnerClubsData.find((c) => c.id === activeClubId) || partnerClubsData[0];

  const handleSelectClub = (id) => {
    setActiveClubId(id);
    playWhooshSound();
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#B21F29]">
            About VTU Media Club
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Empowering the <span className="font-editorial text-[#B21F29] font-normal text-[1.12em]">University</span><br className="hidden sm:inline" />
            &amp; every <span className="font-editorial text-[#930510] font-normal text-[1.12em]">Student Club</span>
          </h2>
          <p className="text-sm text-zinc-400">
            We operate as VTU's in-house creative studio — eliminating external agency costs while giving academic departments and 28+ student societies cinema-grade coverage, branding, and live production.
          </p>
        </div>

        {/* 4 Impact Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 reveal-up">

          {/* Pillar 1: University Official Media */}
          <div className="spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-[#B21F29]/40 p-7 sm:p-8 flex flex-col justify-between space-y-6" data-tilt="4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#B21F29]/15 border border-[#B21F29]/30 flex items-center justify-center text-[#B21F29]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#f5e6e8]">UNIVERSITY LEVEL</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Official University Broadcasts &amp; Archives</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Multi-camera auditorium live streams for Annual Convocations, Vice-Chancellor keynotes, NAAC/NIRF institutional documentaries, and press-ready photography for official university portals, national newspapers, and admissions campaigns.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
              <span className="px-3 py-1 rounded-full text-[11px] bg-[#B21F29]/10 text-[#f5e6e8] border border-[#B21F29]/20">Multi-Cam Live Streams</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">NAAC/NIRF Documentaries</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">Press Stills Distribution</span>
            </div>
          </div>

          {/* Pillar 2: Supporting Other Student Clubs */}
          <div className="spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-[#930510]/40 p-7 sm:p-8 flex flex-col justify-between space-y-6" data-tilt="4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#930510]/15 border border-[#930510]/30 flex items-center justify-center text-[#930510]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#f5e6e8]">28+ PARTNER CLUBS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">End-to-End Media Support for Sister Clubs</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                From IEEE hackathons and Robotics expos to Dance, Music, Literary, and Sports clubs — we design launch teasers, shoot high-energy aftermovies, craft sponsor pitch reels, and boost their event registrations by up to 3x at zero cost.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
              <span className="px-3 py-1 rounded-full text-[11px] bg-[#930510]/10 text-[#f5e6e8] border border-[#930510]/20">Zero-Cost Club Support</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">Promo Teasers &amp; Posters</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">Sponsor Showcase Reels</span>
            </div>
          </div>

          {/* Pillar 3: Same-Day Campus Newsroom */}
          <div className="spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-[#72090F]/40 p-7 sm:p-8 flex flex-col justify-between space-y-6" data-tilt="4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#72090F]/20 border border-[#72090F]/40 flex items-center justify-center text-[#B21F29]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-[#f5e6e8]">RAPID TURNAROUND</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Real-Time Campus Newsroom &amp; Same-Day Drops</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Our rapid-response edit desk delivers curated photo albums and vertical highlight reels within 4 hours of event wrap, ensuring VTU's achievements trend across LinkedIn and Instagram while the energy is still live.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
              <span className="px-3 py-1 rounded-full text-[11px] bg-[#72090F]/15 text-[#f5e6e8] border border-[#72090F]/30">4-Hour Highlight Reels</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">Press-Ready Stills</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">Live Story Coverage</span>
            </div>
          </div>

          {/* Pillar 4: Student Skill & Gear Ecosystem */}
          <div className="spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-amber-400/40 p-7 sm:p-8 flex flex-col justify-between space-y-6" data-tilt="4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-amber-200">CREATIVE LAB</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">Workshops, Gear Access &amp; Student Portfolios</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We run open-for-all bootcamps in cinematography, DaVinci color grading, lighting, and graphic design — helping engineering students build professional creative portfolios and freelance careers alongside their degree.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
              <span className="px-3 py-1 rounded-full text-[11px] bg-amber-500/10 text-amber-200 border border-amber-400/20">Monthly Bootcamps</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">Shared Cinema Gear</span>
              <span className="px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]">Industry Mentorship</span>
            </div>
          </div>

        </div>

        {/* INTERACTIVE PARTNER CLUBS COLLABORATION MATRIX */}
        <div className="mb-12 p-6 sm:p-8 rounded-[1.85rem] bg-surface/90 border border-white/[0.1] reveal-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-xs uppercase font-mono tracking-wider text-[#B21F29]">Club Collaboration Matrix</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">Explore How We Support Campus Societies</h3>
            </div>
            <span className="text-xs text-zinc-500">Click a club to inspect deliverables</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {partnerClubsData.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelectClub(c.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  c.id === activeClubId
                    ? 'bg-[#72090F]/30 border-[#B21F29] text-white shadow-glow-terracotta'
                    : 'bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                <span className="mr-1">{c.icon}</span>{c.name}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-obsidian border border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-[#B21F29]/20 text-[#f5e6e8] border border-[#B21F29]/30">{activeClub.tag}</span>
                  <span className="text-xs font-mono text-zinc-400">• {activeClub.badge}</span>
                </div>
                <h4 className="text-2xl font-semibold text-white leading-tight">{activeClub.name}</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">{activeClub.summary}</p>
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#B21F29]">Deliverables Provided at ₹0 Cost:</p>
                  <div className="flex flex-wrap gap-2">
                    {activeClub.deliverables.map((d, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs bg-white/[0.05] border border-white/10 text-zinc-200">✓ {d}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 p-5 rounded-2xl bg-surface border border-white/[0.08] space-y-3">
                <div className="p-3 rounded-xl bg-[#72090F]/20 border border-[#B21F29]/30">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-[#B21F29]">Audience Impact</p>
                  <p className="text-base font-bold text-white font-mono mt-0.5">{activeClub.reachImpact}</p>
                </div>
                <blockquote className="text-xs text-zinc-300 italic border-l-2 border-[#B21F29] pl-3 leading-relaxed">
                  "{activeClub.quote}"
                </blockquote>
                <p className="text-[11px] text-zinc-500 text-right font-medium">{activeClub.coordinator}</p>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}
