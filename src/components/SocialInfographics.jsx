import React, { useState } from 'react';
import { socialAnalyticsByYear } from '../data/analytics';
import { playWhooshSound } from '../utils/audio';

export default function SocialInfographics() {
  const [activeYear, setActiveYear] = useState('2026');

  const years = ['2024', '2025', '2026', 'allTime'];
  const data = socialAnalyticsByYear[activeYear];

  const handleYearChange = (y) => {
    setActiveYear(y);
    playWhooshSound();
  };

  const circumference = 2 * Math.PI * 26;

  return (
    <section id="infographics" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">

        {/* Header + Year Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 reveal-up">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 rec-dot"></span>
              Live Digital Footprint & Analytics
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Social Media <span className="font-editorial text-indigo-300 font-normal text-[1.12em]">Infographics</span>
            </h2>
            <p className="text-sm text-zinc-400">
              How our reels, aftermovies, and photography campaigns amplify VTU's voice across Instagram, YouTube, LinkedIn, and X.
            </p>
          </div>

          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-surface border border-white/[0.09] self-start lg:self-auto shadow-lg">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => handleYearChange(y)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
                  activeYear === y
                    ? 'font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 shadow-glow-indigo'
                    : 'font-medium text-zinc-400 hover:text-white'
                }`}
              >
                {y === 'allTime' ? 'All-Time' : y === '2026' ? '2026 Live' : y}
              </button>
            ))}
          </div>
        </div>

        {/* Row 1: 4 Platform KPI Cards with Animated SVG Ring Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 reveal-up">
          {data.kpis.map((item, idx) => {
            const offset = circumference - (item.pct / 100) * circumference;
            return (
              <div key={idx} className="spotlight-card rounded-[1.5rem] bg-surface/90 border border-white/[0.09] hover:border-white/20 p-5 flex items-center justify-between gap-4 transition-all">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-white">{item.platform}</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-[10px] font-mono">{item.delta}</span>
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">{item.metric}</p>
                  <p className="text-[11px] text-zinc-400">{item.sub} • <span className="text-indigo-300 font-mono">{item.reach}</span></p>
                </div>
                <div className="relative w-16 h-16 shrink-0">
                  <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                    <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5.5" />
                    <circle
                      className="ring-arc"
                      cx="32"
                      cy="32"
                      r="26"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeDasharray={circumference.toFixed(1)}
                      strokeDashoffset={offset.toFixed(1)}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[11px] font-mono font-semibold text-zinc-200">{item.pct}%</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Animated Monthly Reach Bar Chart + Donut Infographic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 reveal-up">

          {/* Monthly Views & Engagement Bar Infographic */}
          <div className="lg:col-span-7 spotlight-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-indigo-300">Campaign Reach Velocity</p>
                <h3 className="text-xl font-semibold text-white mt-1">Monthly Impressions &amp; Reel Views</h3>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white font-mono">{data.total}</p>
                <p className="text-xs text-emerald-400 font-medium">{data.growth}</p>
              </div>
            </div>

            {/* Interactive Bar Chart */}
            <div className="relative h-56 flex items-end justify-between gap-2 sm:gap-3 pt-6 pb-2 border-b border-white/[0.08]">
              {data.months.map((item, i) => {
                const viewsFactor = activeYear === '2026' ? 0.65 : activeYear === '2025' ? 0.45 : activeYear === '2024' ? 0.28 : 1.1;
                const viewsText = Math.round(item.v * viewsFactor) + 'K';
                return (
                  <div key={i} className="group flex-1 h-full flex flex-col items-center justify-end gap-2">
                    <div className="relative w-full h-full flex items-end justify-center">
                      <div className="pointer-events-none opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:-translate-y-2 transition-all absolute -top-10 px-2.5 py-1 rounded-md bg-obsidian border border-white/20 text-center text-[10px] font-mono text-white whitespace-nowrap z-20 shadow-xl">
                        <p className="font-bold text-indigo-300">{viewsText} Reach</p>
                        <p className="text-[9px] text-zinc-400">{item.top}</p>
                      </div>
                      <div
                        className={`bar-fill w-full max-w-[36px] rounded-t-xl ${
                          item.peak
                            ? 'bg-gradient-to-t from-[#72090F] via-[#930510] to-[#B21F29] shadow-glow-terracotta'
                            : 'bg-gradient-to-t from-[#3D0B0D]/80 via-[#53080E]/90 to-[#930510]/85 group-hover:brightness-125'
                        }`}
                        style={{ height: `${item.v}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 group-hover:text-white">{item.m}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 text-[11px] text-zinc-400">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-[#72090F] to-[#930510]"></span>Organic Reach</span>
                <span className="inline-flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#B21F29]"></span>Fest Peak</span>
              </div>
              <span className="font-mono text-zinc-500">Hover bars for top reel</span>
            </div>
          </div>

          {/* Content Breakdown SVG Donut & Platform Engagement Stats */}
          <div className="lg:col-span-5 spotlight-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#B21F29]">Format Distribution</p>
              <h3 className="text-xl font-semibold text-white mt-1">Content Mix &amp; Virality</h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 my-6">
              <div className="relative w-40 h-40 shrink-0">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="13" />
                  <circle className="ring-arc" cx="60" cy="60" r="46" fill="none" stroke="#B21F29" strokeWidth="13" strokeLinecap="round" strokeDasharray="127 289" strokeDashoffset="0" />
                  <circle className="ring-arc" cx="60" cy="60" r="46" fill="none" stroke="#930510" strokeWidth="13" strokeLinecap="round" strokeDasharray="75 289" strokeDashoffset="-129" />
                  <circle className="ring-arc" cx="60" cy="60" r="46" fill="none" stroke="#72090F" strokeWidth="13" strokeLinecap="round" strokeDasharray="52 289" strokeDashoffset="-206" />
                  <circle className="ring-arc" cx="60" cy="60" r="46" fill="none" stroke="#53080E" strokeWidth="13" strokeLinecap="round" strokeDasharray="32 289" strokeDashoffset="-260" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-bold text-white font-mono">{data.eng}</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider">Avg Eng.</span>
                </div>
              </div>

              <div className="w-full space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-zinc-200"><span className="w-2.5 h-2.5 rounded-full bg-[#B21F29]"></span>Short-Form Reels</span>
                  <span className="font-mono text-white font-semibold">44%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-zinc-200"><span className="w-2.5 h-2.5 rounded-full bg-[#930510]"></span>4K Aftermovies</span>
                  <span className="font-mono text-white font-semibold">26%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-zinc-200"><span className="w-2.5 h-2.5 rounded-full bg-[#72090F]"></span>Photo Carousels</span>
                  <span className="font-mono text-white font-semibold">18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-zinc-200"><span className="w-2.5 h-2.5 rounded-full bg-[#53080E]"></span>Live Broadcasts</span>
                  <span className="font-mono text-white font-semibold">12%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 pt-4 border-t border-white/[0.08] text-center">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-sm font-bold text-white font-mono">4.2h</p>
                <p className="text-[10px] text-zinc-400">Reel Turnaround</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-sm font-bold text-white font-mono">68K</p>
                <p className="text-[10px] text-zinc-400">Top Reel Views</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-sm font-bold text-white font-mono">98%</p>
                <p className="text-[10px] text-zinc-400">Club Satisfaction</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
