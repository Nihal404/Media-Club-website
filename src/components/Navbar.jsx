import React, { useEffect, useState } from 'react';
import RubberSegment from './RubberSegment';

export default function Navbar({
  hudActive,
  onToggleHud,
  soundActive,
  onToggleSound,
  onOpenBooking,
  onOpenJoin,
  activePage,
  onPageChange,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // For the scrollable home page, track if user is in gallery section
  useEffect(() => {
    if (activePage !== 'home' && activePage !== 'gallery') return;

    const sections = ['home', 'gallery'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          onPageChange(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage, onPageChange]);

  const handleNavClick = (value) => {
    setMobileOpen(false);
    if (value === 'home') {
      // If already on home/gallery page, scroll to top
      if (activePage === 'home' || activePage === 'gallery') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      onPageChange('home');
    } else if (value === 'gallery') {
      // If already on home page, scroll to gallery section
      if (activePage === 'home' || activePage === 'gallery') {
        const el = document.getElementById('gallery');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      onPageChange('gallery');
    } else {
      // 'about' and 'team' open as new page views
      onPageChange(value);
    }
  };

  return (
    <header id="navbar" className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-obsidian/75 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo — always goes home */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-1.5 sm:gap-2 group focus:outline-none py-1"
        >
          <img
            src="assets/vtu_seal.webp"
            alt="Visvesvaraya Technological University"
            className="h-9 sm:h-10 w-auto object-contain rounded-full group-hover:scale-105 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] shrink-0"
          />
          <span className="h-5 w-px bg-white/20 shrink-0" aria-hidden="true"></span>
          <img
            src="assets/logo.png"
            alt="VTU Media Club"
            className="h-10 sm:h-11 w-auto object-contain -ml-1 group-hover:scale-105 group-hover:brightness-110 transition-all duration-300 drop-shadow-[0_0_12px_rgba(178,31,41,0.35)]"
          />
        </button>

        {/* Center Pill Navigation (Desktop) */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center">
          <RubberSegment
            items={[
              { value: 'home', label: 'Home' },
              { value: 'gallery', label: 'Gallery' },
              { value: 'about', label: 'About' },
              { value: 'team', label: 'Team Profile' }
            ]}
            value={activePage}
            onChange={handleNavClick}
            trackColor="rgba(255,255,255,0.07)"
            thumbColor="rgba(255,255,255,0.13)"
            textColor="#d4d4d8"
            activeTextColor="#ffffff"
            size="md"
            radius={999}
            inset={4}
            equalSlots
            stretch={100}
            squash={3}
            speed={1}
            glide={75}
            draggable
            aria-label="Primary Navigation"
            className="navbar-rubber-glass"
          />
        </nav>

        {/* Right Action & Interactive Controls */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Cinema Viewfinder HUD Toggle */}
          <button
            onClick={onToggleHud}
            aria-label="Toggle Cinema HUD"
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 border ${
              hudActive
                ? 'border-[#B21F29] text-white bg-[#B21F29]/25 shadow-glow-terracotta'
                : 'text-zinc-300 border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B21F29]"></span>
            <span>HUD Mode</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-200 border border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/25 transition-all"
          >
            Book Coverage
          </button>
          <button
            onClick={onOpenJoin}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#B21F29] via-[#930510] to-[#72090F] hover:brightness-110 shadow-glow-terracotta border border-[#B21F29]/40 transition-all"
          >
            Join Crew
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] transition-colors"
        >
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-obsidian/95 backdrop-blur-2xl px-5 py-5 space-y-4">
          <div className="flex flex-col space-y-1">
            {[
              { value: 'home', label: 'Home' },
              { value: 'gallery', label: 'Gallery' },
              { value: 'about', label: 'About' },
              { value: 'team', label: 'Team Profile' },
            ].map(({ value, label }) => (
              <button
                key={value}
                onClick={() => handleNavClick(value)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium text-left transition-all ${
                  activePage === value
                    ? 'text-white bg-white/[0.08]'
                    : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]">
            <button onClick={() => { setMobileOpen(false); onOpenBooking(); }} className="py-2.5 rounded-full text-xs font-medium text-zinc-200 border border-white/[0.14] bg-white/[0.03]">Book Coverage</button>
            <button onClick={() => { setMobileOpen(false); onOpenJoin(); }} className="py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#B21F29] via-[#930510] to-[#72090F] shadow-glow-terracotta">Join Crew</button>
          </div>
        </div>
      )}
    </header>
  );
}
