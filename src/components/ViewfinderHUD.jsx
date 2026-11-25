import React, { useState, useEffect } from 'react';

export default function ViewfinderHUD({ active }) {
  const [timecode, setTimecode] = useState('00:14:32:18');

  useEffect(() => {
    if (!active) return;
    let frames = 18, secs = 32, mins = 14;
    const timer = setInterval(() => {
      frames++;
      if (frames >= 24) {
        frames = 0;
        secs++;
        if (secs >= 60) {
          secs = 0;
          mins++;
        }
      }
      setTimecode(`00:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(frames).padStart(2, '0')}`);
    }, 1000 / 24);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <div id="viewfinderHud" className={active ? '' : 'hud-hidden'} aria-hidden="true">
      <div className="hud-corner-tl"></div>
      <div className="hud-corner-tr"></div>
      <div className="hud-corner-bl"></div>
      <div className="hud-corner-br"></div>
      <div className="hud-center-reticle"></div>

      {/* Top HUD Info Bar */}
      <div className="absolute top-6 inset-x-16 flex items-center justify-between text-xs font-mono text-zinc-300">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#72090F]/30 border border-[#B21F29]/50 text-[#B21F29] font-bold text-[11px]">
            <span className="w-2 h-2 rounded-full bg-[#B21F29] rec-dot"></span>
            ● REC
          </span>
          <span className="text-white font-semibold">{timecode}</span>
          <span className="hidden sm:inline text-zinc-500">•</span>
          <span className="hidden sm:inline text-[#B21F29]">DCI 4K • 23.976 FPS</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="px-2 py-0.5 rounded bg-black/50 border border-white/20 text-zinc-200">LUT: KODAK 2383</span>
          <span className="text-[#B21F29] font-semibold">BAT 98% [||||]</span>
          <span className="hidden md:inline text-zinc-400">RAW 12-BIT</span>
        </div>
      </div>

      {/* Bottom HUD Status Bar */}
      <div className="absolute bottom-6 inset-x-16 flex items-center justify-between text-xs font-mono text-zinc-300">
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-zinc-100">ISO 800</span>
          <span className="text-zinc-100">1/48s</span>
          <span className="text-zinc-100">f/1.4</span>
          <span className="hidden sm:inline text-[#B21F29]">WB 5600K</span>
        </div>
        {/* Animated Audio VU Meters */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-zinc-400">CH1/CH2</span>
          <div className="flex items-end gap-1 h-5 w-12 bg-black/60 p-1 rounded border border-white/15">
            <div className="vu-bar-1 w-2 bg-[#53080E] rounded-xs"></div>
            <div className="vu-bar-2 w-2 bg-[#72090F] rounded-xs"></div>
            <div className="vu-bar-3 w-2 bg-[#930510] rounded-xs"></div>
            <div className="vu-bar-4 w-2 bg-[#B21F29] rounded-xs"></div>
          </div>
          <span className="text-[10px] text-[#B21F29] font-bold">-12 dB</span>
        </div>
      </div>
    </div>
  );
}
