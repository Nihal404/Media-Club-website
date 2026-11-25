import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GlowCursor from './components/GlowCursor';
import ViewfinderHUD from './components/ViewfinderHUD';
import Hero from './components/Hero';
import GearStrip from './components/GearStrip';
import SocialInfographics from './components/SocialInfographics';
import CampusImpact from './components/CampusImpact';
import MembersWall from './components/MembersWall';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { isSoundEnabled, toggleSoundState, playWhooshSound, playShutterSound } from './utils/audio';
import { initCanvasParticles } from './utils/canvas';

export default function App() {
  const [hudActive, setHudActive] = useState(false);
  const [soundActive, setSoundActive] = useState(false);
  const [showreelIdx, setShowreelIdx] = useState(null);
  const [memberIdx, setMemberIdx] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [categoryIdx, setCategoryIdx] = useState(null);
  const [joinOpen, setJoinOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast dispatch
  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4200);
  };

  // Background Canvas & Scroll progress effect
  useEffect(() => {
    const cleanupCanvas = initCanvasParticles('cinemaFxCanvas');

    const handleScroll = () => {
      const bar = document.getElementById('scrollProgress');
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      bar.style.width = `${pct}%`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e) => {
      const spot = document.getElementById('cursorSpotlight');
      if (!spot) return;
      spot.style.opacity = '1';
      spot.style.left = `${e.clientX}px`;
      spot.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowreelIdx(null);
        setMemberIdx(null);
        setLightboxIdx(null);
        setCategoryIdx(null);
        setJoinOpen(false);
        setBookingOpen(false);
      }
      if (lightboxIdx !== null) {
        if (e.key === 'ArrowRight') setLightboxIdx((i) => (i + 1) % 18);
        if (e.key === 'ArrowLeft') setLightboxIdx((i) => (i - 1 + 18) % 18);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 3D Tilt & Spotlight card binding
    const bindTilt = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (isTouch) return;

      document.querySelectorAll('.tilt-card').forEach((card) => {
        if (card.dataset.tiltBound) return;
        card.dataset.tiltBound = 'true';
        const maxTilt = Number(card.dataset.tilt || 6);
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateY(-2px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
      });

      document.querySelectorAll('.spotlight-card').forEach((card) => {
        if (card.dataset.spotBound) return;
        card.dataset.spotBound = 'true';
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
      });
    };

    bindTilt();
    const tiltInterval = setInterval(bindTilt, 2000);

    return () => {
      cleanupCanvas();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(tiltInterval);
    };
  }, [lightboxIdx]);

  const handleToggleHud = () => {
    setHudActive((prev) => {
      const next = !prev;
      playWhooshSound();
      showToast(next ? 'Cinema Viewfinder HUD: Active' : 'Cinema Viewfinder HUD: Closed');
      return next;
    });
  };

  const handleToggleSound = () => {
    const newState = toggleSoundState((state) => {
      setSoundActive(state);
      showToast(state ? 'Cinema Sound FX: Enabled' : 'Cinema Sound FX: Muted');
    });
    setSoundActive(newState);
  };

  return (
    <div className="min-h-screen bg-transparent text-zinc-100 antialiased selection:bg-[#930510]/40 selection:text-white">
      {/* Scroll Progress Bar */}
      <div id="scrollProgress" aria-hidden="true"></div>

      {/* Fluid Cinema WebGL2 Glow Cursor from React Bits */}
      <GlowCursor
        className="pointer-events-none fixed inset-0 z-40 w-full h-full"
        color="#B21F29"
        secondaryColor="#72090F"
        intensity={1.3}
        trailWidth={3}
        linger={1.4}
        glow={1.2}
        hotspot={0.8}
        followSpeed={0.6}
        clickBurst={true}
        theme="dark"
      />

      {/* Background Interactive Particles Canvas */}
      <canvas id="cinemaFxCanvas" aria-hidden="true"></canvas>

      {/* Subtle Film Grain & Cursor Spotlight */}
      <div className="film-grain" aria-hidden="true"></div>
      <div id="cursorSpotlight" className="hidden md:block" aria-hidden="true"></div>

      {/* Ambient Floating Maroon Orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
        <div className="orb-float absolute -top-40 left-1/4 w-[46rem] h-[46rem] rounded-full bg-gradient-to-br from-[#B21F29]/35 via-[#930510]/28 to-transparent blur-[140px]"></div>
        <div className="orb-float-delayed absolute top-1/3 -right-36 w-[42rem] h-[42rem] rounded-full bg-gradient-to-bl from-[#930510]/30 via-[#72090F]/24 to-transparent blur-[140px]"></div>
        <div className="orb-float absolute top-2/3 -left-36 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-[#B21F29]/28 via-[#72090F]/22 to-transparent blur-[130px]"></div>
        <div className="orb-float-delayed absolute -bottom-36 right-1/4 w-[48rem] h-[48rem] rounded-full bg-gradient-to-tl from-[#930510]/32 via-[#53080E]/26 to-transparent blur-[150px]"></div>
      </div>

      {/* Fullscreen Viewfinder HUD Mode */}
      <ViewfinderHUD active={hudActive} />

      {/* Header Navigation */}
      <Navbar
        hudActive={hudActive}
        onToggleHud={handleToggleHud}
        soundActive={soundActive}
        onToggleSound={handleToggleSound}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenJoin={() => setJoinOpen(true)}
      />

      {/* 4 Core Pages Container */}
      <main className="relative z-10">
        {/* PAGE 1: HOME PAGE */}
        <div id="page-home">
          <Hero
            onOpenBooking={() => setBookingOpen(true)}
            onOpenShowreel={(idx) => setShowreelIdx(idx)}
          />
          <GearStrip />
        </div>

        {/* PAGE 2: GALLERY */}
        <div id="page-gallery">
          <PhotoGallery
            onOpenLightbox={(idx) => setLightboxIdx(idx)}
            onOpenCategory={(idx) => setCategoryIdx(idx)}
          />
        </div>

        {/* 3. SOCIAL MEDIA INFOGRAPHICS */}
        <SocialInfographics />

        {/* PAGE 4: ABOUT */}
        <div id="page-about">
          <CampusImpact onOpenBooking={() => setBookingOpen(true)} />
        </div>

        {/* PAGE 4: TEAM PROFILE (STORYTELLERS & ALL MEMBERS) */}
        <div id="page-team">
          <MembersWall onOpenMemberModal={(idx) => setMemberIdx(idx)} />
        </div>

          {/* Join CTA Section as part of About */}
          <section id="join" className="relative py-20 sm:py-28 border-t border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center reveal-up is-visible">
                <div className="md:col-span-5 flex flex-col items-center md:items-start space-y-6">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-[#B21F29]/30 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md">
                    <img src="assets/logo.png" alt="" className="h-4 w-auto object-contain" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B21F29] rec-dot"></span>
                    <span>Recruitment Open — 2026 Batch</span>
                  </div>
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] shadow-glow-terracotta/25 group">
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow p-2">
                      <defs>
                        <path id="circleTextPath" d="M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0" />
                      </defs>
                      <text fill="rgba(228,228,231,0.58)" fontSize="11.2" fontWeight="600" letterSpacing="3.6">
                        <textPath href="#circleTextPath" startOffset="0%">
                          VTU MEDIA CLUB • CAPTURE CREATE INSPIRE •
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#120406] border border-[#B21F29]/40 flex items-center justify-center shadow-inner p-3.5 group-hover:scale-105 transition-all shadow-glow-terracotta/30">
                        <img src="assets/logo.png" alt="VTU Media Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(178,31,41,0.6)]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 text-center md:text-right space-y-6">
                  <p className="text-sm sm:text-base text-zinc-400 tracking-wide">Let's roll</p>
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.03]">
                    Join the<br />
                    <span className="font-editorial text-zinc-300 font-normal text-[1.12em]">Community</span>
                  </h2>
                  <p className="text-sm text-zinc-400 max-w-md ml-auto mr-auto md:mr-0">
                    Whether you shoot on cinema rigs, grade in DaVinci, design motion graphics, or want to learn from day one — your seat in the studio is waiting.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-end gap-4">
                    <button onClick={() => setBookingOpen(true)} className="px-5 py-3 rounded-full text-xs font-medium text-zinc-300 border border-white/[0.12] hover:bg-white/[0.06] transition-all">
                      Book Campus Coverage
                    </button>
                    <button onClick={() => setJoinOpen(true)} className="group inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.14] hover:border-[#B21F29]/50 transition-all">
                      <span className="text-sm font-medium text-white underline decoration-white/30 underline-offset-4 group-hover:decoration-white">Apply to Join</span>
                      <span className="w-9 h-9 rounded-full bg-white text-obsidian flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer
        onOpenBooking={() => setBookingOpen(true)}
        showToast={showToast}
      />

      {/* All Dialogs & Modals */}
      <Modals
        showreelIdx={showreelIdx}
        onCloseShowreel={() => setShowreelIdx(null)}
        memberIdx={memberIdx}
        onCloseMember={() => setMemberIdx(null)}
        lightboxIdx={lightboxIdx}
        onCloseLightbox={() => setLightboxIdx(null)}
        onStepLightbox={(delta) => setLightboxIdx((i) => (i + delta + 18) % 18)}
        categoryIdx={categoryIdx}
        onCloseCategory={() => setCategoryIdx(null)}
        joinOpen={joinOpen}
        onCloseJoin={() => setJoinOpen(false)}
        bookingOpen={bookingOpen}
        onCloseBooking={() => setBookingOpen(false)}
        onOpenBooking={() => setBookingOpen(true)}
        toasts={toasts}
        showToast={showToast}
      />
    </div>
  );
}
