import React, { useState } from 'react';

export default function Footer({ onOpenBooking, showToast }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast(`Subscribed ${email} to VTU Media premiere alerts & workshops.`);
    setEmail('');
  };

  return (
    <footer className="relative z-10 pb-12 pt-4">
      <div className="max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-4 px-1">
          <span>• Cinema-Grade Student Collective</span>
          <span>• Jnana Sangama, Belagavi</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Bento Card */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-[1.75rem] glass-panel p-7 sm:p-9 flex flex-col justify-between min-h-[270px]">
            <img
              src="assets/logo.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none select-none absolute -bottom-6 -right-6 h-56 sm:h-72 w-auto object-contain opacity-[0.05] -rotate-6"
            />
            <div className="relative z-10 space-y-3 max-w-md">
              <a href="#home" className="inline-flex items-center gap-3">
                <img src="assets/logo.png" alt="VTU Media" className="h-11 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(178,31,41,0.4)] hover:brightness-110 transition-all" />
              </a>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We empower student filmmakers, photographers, and designers across VTU to document culture, elevate partner clubs, and broadcast university milestones to the world.
              </p>
            </div>
            <div className="relative z-10 mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <div>
                <p className="text-[11px] text-zinc-500">VTU Media Club © 2026. All Rights Reserved.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href="#home" className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors">Home</a>
                <a href="#gallery" className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors">Gallery</a>
                <a href="#about" className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors">About</a>
                <a href="#team" className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors">Team Profile</a>
                <button onClick={onOpenBooking} className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-[#B21F29] bg-[#72090F]/20 border border-[#B21F29]/30 hover:bg-[#72090F]/35 transition-colors">Book Us</button>
              </div>
            </div>
          </div>

          {/* Right Bento Card */}
          <div className="lg:col-span-5 rounded-[1.75rem] glass-panel p-7 sm:p-9 flex flex-col justify-between min-h-[270px]">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white leading-snug">
                Follow the <span className="font-editorial text-2xl text-zinc-300 font-normal">Collective</span>
              </h3>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => showToast('Instagram: @vtumediaclub (24.8K Followers)')}
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-[#B21F29]/60 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </button>
                <button
                  onClick={() => showToast('YouTube: VTU Media Club Official (185K+ Views)')}
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-indigo-400/40 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </button>
                <button
                  onClick={() => showToast('X / Twitter: @vtumedia_live (132K Impressions)')}
                  aria-label="X"
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-indigo-400/40 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button
                  onClick={() => showToast('LinkedIn: VTU Media Collective (11.4K Alumni)')}
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-[#B21F29]/60 flex items-center justify-center text-xs font-bold text-zinc-300 hover:text-white transition-all"
                >
                  in
                </button>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="mt-8 space-y-2.5">
              <label htmlFor="footerEmail" className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                <svg className="w-3.5 h-3.5 text-[#B21F29]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Reel Dispatch &amp; Workshop Alerts
              </label>
              <div className="relative flex items-center">
                <input
                  id="footerEmail"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@vtu.ac.in"
                  className="w-full pl-4 pr-12 py-3 rounded-full glass-input text-xs text-white placeholder:text-zinc-500 focus:outline-none transition-colors"
                />
                <button type="submit" aria-label="Subscribe" className="absolute right-1.5 w-8 h-8 rounded-full bg-white text-obsidian hover:bg-[#B21F29] hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <p className="text-[11px] text-zinc-500">Get premiere alerts, free workshop dates &amp; shoot availability.</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
