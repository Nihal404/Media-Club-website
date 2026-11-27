/**
 * VTU Media Club — Cinema, Editorial & Production Collective
 * React 18 Application Bundle
 *
 * Provides instant browser-ready execution mounting into #root,
 * integrating Web Audio synthesizer, canvas particles, 3D tilt,
 * coverflow, infographics, and cinema visual filters.
 */

(function () {
  'use strict';

  // Template HTML for React App component
  var APP_TEMPLATE = "<!-- Scroll Progress Bar -->\n  \n\n  <!-- Interactive Background Particles Canvas -->\n  \n\n  <!-- Cinema Intro Preloader (Auto-dismisses quickly or click Skip) -->\n  \n\n  <!-- Ambient Cinematic Maroon Aurora Orbs -->\n  <div class=\"pointer-events-none fixed inset-0 overflow-hidden z-0\" aria-hidden=\"true\">\n    <div class=\"orb-float absolute -top-40 left-1/4 w-[46rem] h-[46rem] rounded-full bg-gradient-to-br from-[#B21F29]/35 via-[#930510]/28 to-transparent blur-[140px]\"></div>\n    <div class=\"orb-float-delayed absolute top-1/3 -right-36 w-[42rem] h-[42rem] rounded-full bg-gradient-to-bl from-[#930510]/30 via-[#72090F]/24 to-transparent blur-[140px]\"></div>\n    <div class=\"orb-float absolute top-2/3 -left-36 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-[#B21F29]/28 via-[#72090F]/22 to-transparent blur-[130px]\"></div>\n    <div class=\"orb-float-delayed absolute -bottom-36 right-1/4 w-[48rem] h-[48rem] rounded-full bg-gradient-to-tl from-[#930510]/32 via-[#53080E]/26 to-transparent blur-[150px]\"></div>\n  </div>\n\n  <!-- ===================================================================== -->\n  <!-- 1. STICKY FROSTED NAVIGATION BAR                                      -->\n  <!-- ===================================================================== -->\n  <header id=\"navbar\" class=\"sticky top-0 z-50 w-full border-b border-white/[0.07] bg-obsidian/75 backdrop-blur-xl transition-all duration-300\">\n    <div class=\"w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-3.5 flex items-center justify-between gap-4\">\n      <!-- Brand Wordmark -->\n      <a href=\"#home\" class=\"flex items-center gap-1.5 sm:gap-2 group focus:outline-none py-1\">\n        <img src=\"assets/vtu_seal.webp\" alt=\"Visvesvaraya Technological University\" class=\"h-9 sm:h-10 w-auto object-contain rounded-full group-hover:scale-105 transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] shrink-0\" />\n        <span class=\"h-5 w-px bg-white/20 shrink-0\" aria-hidden=\"true\"></span>\n        <img src=\"assets/logo.png\" alt=\"VTU Media Club\" class=\"h-10 sm:h-11 w-auto object-contain -ml-1 group-hover:scale-105 group-hover:brightness-110 transition-all duration-300 drop-shadow-[0_0_12px_rgba(178,31,41,0.35)]\" />\n      </a>\n\n      <!-- Center Pill Navigation (Desktop) -->\n      <nav aria-label=\"Primary Navigation\" class=\"hidden lg:flex items-center\">\n        <div id=\"navbarRubberSegment\" class=\"rubber-segment navbar-rubber-segment\" role=\"radiogroup\" aria-label=\"Primary Navigation\">\n          <button type=\"button\" role=\"radio\" aria-checked=\"true\" tabindex=\"0\" class=\"rubber-segment__item\" data-slot=\"0\" data-value=\"home\">Home</button>\n          <button type=\"button\" role=\"radio\" aria-checked=\"false\" tabindex=\"-1\" class=\"rubber-segment__item\" data-slot=\"1\" data-value=\"gallery\">Gallery</button>\n          <button type=\"button\" role=\"radio\" aria-checked=\"false\" tabindex=\"-1\" class=\"rubber-segment__item\" data-slot=\"2\" data-value=\"about\">About</button>\n          <button type=\"button\" role=\"radio\" aria-checked=\"false\" tabindex=\"-1\" class=\"rubber-segment__item\" data-slot=\"3\" data-value=\"team\">Team Profile</button>\n          <div id=\"navbarRubberThumb\" class=\"rubber-segment__thumb\" aria-hidden=\"true\">\n            <span class=\"rubber-segment__item rubber-segment__copy\">Home</span>\n            <span class=\"rubber-segment__item rubber-segment__copy\">Gallery</span>\n            <span class=\"rubber-segment__item rubber-segment__copy\">About</span>\n            <span class=\"rubber-segment__item rubber-segment__copy\">Team Profile</span>\n          </div>\n        </div>\n      </nav>\n\n      <!-- Right Action & Interactive Controls Buttons -->\n      <div class=\"hidden sm:flex items-center gap-2\">\n        <!-- Cinema Viewfinder HUD Toggle -->\n        <button onclick=\"toggleViewfinderHud()\" id=\"hudToggleBtn\" aria-label=\"Toggle Cinema HUD\" class=\"px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-all flex items-center gap-1.5\">\n          <span class=\"w-1.5 h-1.5 rounded-full bg-indigo-400\"></span>\n          <span>HUD Mode</span>\n        </button>\n\n\n        <button onclick=\"openBookingModal()\" class=\"px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-200 border border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/25 transition-all\">\n          Book Coverage\n        </button>\n        <button onclick=\"openJoinModal()\" class=\"px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-600 hover:brightness-110 shadow-glow-indigo border border-indigo-400/40 transition-all\">\n          Join Crew\n        </button>\n      </div>\n\n      <!-- Mobile Hamburger Toggle -->\n      <button id=\"mobileMenuBtn\" onclick=\"toggleMobileMenu()\" aria-label=\"Toggle Menu\" class=\"lg:hidden p-2.5 rounded-full border border-white/[0.1] bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] transition-colors\">\n        <svg id=\"hamburgerIcon\" class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 7h16M4 12h16M4 17h16\" />\n        </svg>\n        <svg id=\"closeMenuIcon\" class=\"w-5 h-5 hidden\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n        </svg>\n      </button>\n    </div>\n\n    <!-- Mobile Navigation Drawer -->\n    <div id=\"mobileMenu\" class=\"hidden lg:hidden border-t border-white/[0.08] bg-[#020101]/95 backdrop-blur-2xl px-5 py-5 space-y-4\">\n      <div class=\"flex flex-col space-y-1\">\n        <a href=\"#home\" onclick=\"toggleMobileMenu()\" class=\"px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-white/[0.06]\">Home</a>\n        <a href=\"#gallery\" onclick=\"toggleMobileMenu()\" class=\"px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05]\">Gallery</a>\n        <a href=\"#\" onclick=\"window.navigateToPage&&window.navigateToPage('about');toggleMobileMenu()\" class=\"px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05]\">About</a>\n        <a href=\"#\" onclick=\"window.navigateToPage&&window.navigateToPage('team');toggleMobileMenu()\" class=\"px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.05]\">Team Profile</a>\n      </div>\n      <div class=\"grid grid-cols-2 gap-3 pt-2 border-t border-white/[0.08]\">\n        <button onclick=\"toggleMobileMenu(); openBookingModal()\" class=\"py-2.5 rounded-full text-xs font-medium text-zinc-200 border border-white/[0.14] bg-white/[0.03]\">Book Coverage</button>\n        <button onclick=\"toggleMobileMenu(); openJoinModal()\" class=\"py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#930510] to-[#B21F29] shadow-glow-terracotta\">Join Crew</button>\n      </div>\n    </div>\n  </header>\n\n  <main class=\"relative z-10\">\n\n    <!-- ===================================================================== -->\n    <!-- PAGE 1: HOME (Hero + Gear + Gallery + Infographics)                  -->\n    <!-- ===================================================================== -->\n    <div id=\"mainHomePage\">\n\n    <!-- ===================================================================== -->\n    <!-- 2. SPLIT HERO SECTION WITH 3D TILT SPOTLIGHT                          -->\n    <!-- ===================================================================== -->\n    <section id=\"home\" class=\"relative pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden\">\n      <!-- Subtle Cinema Radial Atmosphere -->\n      <div class=\"absolute top-1/4 left-0 w-96 h-96 bg-[#72090F]/20 rounded-full blur-3xl pointer-events-none -z-10\"></div>\n      <div class=\"absolute bottom-10 right-10 w-96 h-96 bg-[#930510]/15 rounded-full blur-3xl pointer-events-none -z-10\"></div>\n\n      <div class=\"max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16\">\n        <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center\">\n\n          <!-- Left Column: Typography, Story, CTAs, Stats & Avatars -->\n          <div class=\"lg:col-span-7 space-y-7 reveal-up is-visible\">\n            <!-- Official Crest Badge -->\n            <div class=\"inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#B21F29]/30 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md\">\n              <img src=\"assets/logo.png\" alt=\"VTU Media\" class=\"h-4 w-auto object-contain\" />\n              <span class=\"w-1.5 h-1.5 rounded-full bg-[#B21F29] rec-dot\"></span>\n              <span class=\"font-semibold text-white tracking-wide\">VTU Media Club</span>\n              <span class=\"text-zinc-600\">\u2022</span>\n              <span class=\"text-zinc-400\">Official University Creative Wing</span>\n            </div>\n\n            <!-- Main Editorial Headline -->\n            <h1 class=\"text-4xl sm:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-white leading-[1.08]\">\n              Capturing every <span class=\"font-editorial text-[#fda4af] text-[1.18em] font-normal px-1 italic\">frame</span><br class=\"hidden sm:inline\" />\n              of <span class=\"font-editorial text-[#B21F29] text-[1.15em] font-normal pr-1 italic\">cinematic</span> campus life\n            </h1>\n\n            <!-- Subtitle -->\n            <p class=\"text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed font-normal\">\n              We are VTU's student collective of filmmakers, cinematographers, colorists, and broadcast engineers \u2014 crafting cinema-grade festival aftermovies, powering every campus club's visual identity, and broadcasting university milestones worldwide.\n            </p>\n\n            <!-- Hero Action Buttons -->\n            <div class=\"flex flex-wrap items-center gap-3.5 pt-1\">\n              <!-- View Photo Gallery CTA -->\n              <a href=\"#gallery\" class=\"inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#72090F] via-[#930510] to-[#B21F29] hover:brightness-110 shadow-glow-terracotta border border-[#B21F29]/50 transition-all hover:-translate-y-0.5 group\">\n                <span>View Photo Gallery</span>\n                <svg class=\"w-4 h-4 text-white group-hover:translate-x-1 transition-transform\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 5l7 7m0 0l-7 7m7-7H3\"/>\n                </svg>\n              </a>\n\n              <!-- Book Coverage Modal -->\n              <button onclick=\"openBookingModal()\" class=\"inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-zinc-100 border border-white/[0.14] bg-white/[0.04] hover:bg-[#B21F29]/20 hover:border-[#B21F29]/40 transition-all hover:-translate-y-0.5 backdrop-blur-md\">\n                Book Club Coverage\n              </button>\n\n              <!-- Watch Showreel -->\n              <button onclick=\"openShowreelModal(0)\" class=\"group inline-flex items-center gap-3 px-3.5 py-2 rounded-full text-sm font-medium text-zinc-300 hover:text-white transition-colors\">\n                <span class=\"w-10 h-10 rounded-full bg-[#B21F29]/20 border border-[#B21F29]/40 flex items-center justify-center group-hover:bg-[#B21F29]/40 group-hover:scale-105 transition-all shadow-md\">\n                  <svg class=\"w-4 h-4 text-[#fda4af] ml-0.5\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n                    <path d=\"M8 5v14l11-7z\" />\n                  </svg>\n                </span>\n                <span class=\"underline decoration-white/20 underline-offset-4 group-hover:decoration-[#B21F29]\">Watch 2026 Showreel</span>\n              </button>\n            </div>\n\n            <!-- Stats & Creators Stack -->\n            <div class=\"pt-3 space-y-5\">\n              <!-- Glassmorphic Stat Pill -->\n              <div class=\"inline-grid grid-cols-3 divide-x divide-white/[0.09] rounded-2xl bg-gradient-to-r from-[#3D0B0D]/50 via-white/[0.02] to-[#53080E]/40 border border-white/[0.1] backdrop-blur-xl px-2 sm:px-4 py-3.5 w-full sm:w-auto shadow-lg\">\n                <div class=\"px-3 sm:px-6 text-center sm:text-left\">\n                  <p class=\"text-xl sm:text-2xl font-bold text-white tracking-tight\"><span class=\"count-up\" data-target=\"140\">140</span>+</p>\n                  <p class=\"text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-medium\">Events Covered</p>\n                </div>\n                <div class=\"px-3 sm:px-6 text-center sm:text-left\">\n                  <p class=\"text-xl sm:text-2xl font-bold text-white tracking-tight\"><span class=\"count-up\" data-target=\"420\">420</span>K+</p>\n                  <p class=\"text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-medium\">Social Reach</p>\n                </div>\n                <div class=\"px-3 sm:px-6 text-center sm:text-left\">\n                  <p class=\"text-xl sm:text-2xl font-bold text-white tracking-tight\"><span class=\"count-up\" data-target=\"28\">28</span>+</p>\n                  <p class=\"text-[11px] sm:text-xs text-zinc-400 mt-0.5 font-medium\">Clubs Supported</p>\n                </div>\n              </div>\n\n              <!-- Overlapping Member Avatar Stack with Arpan, Grish, Sunil, Ramesh -->\n              <div class=\"flex items-center gap-4\">\n                <div class=\"flex -space-x-3\">\n                  <img src=\"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80\" alt=\"Arpan\" class=\"w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20\" />\n                  <img src=\"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80\" alt=\"Grish\" class=\"w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20\" />\n                  <img src=\"https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=160&q=80\" alt=\"Sunil\" class=\"w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20\" />\n                  <img src=\"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80\" alt=\"Ramesh\" class=\"w-10 h-10 rounded-full object-cover ring-2 ring-black border border-white/20\" />\n                  <a href=\"#team\" class=\"w-10 h-10 rounded-full bg-[#53080E] ring-2 ring-black border border-[#B21F29]/40 flex items-center justify-center text-[11px] font-semibold text-white hover:bg-[#B21F29]/50 transition-colors\">+15</a>\n                </div>\n                <div>\n                  <p class=\"text-sm font-semibold text-white leading-tight\">Featured Creators & Council</p>\n                  <p class=\"text-xs text-zinc-400\">Jnana Sangama Campus \u2022 Cinematography, Aerial, Color & Live Broadcast</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Right Column: 3D Tilting Vertical Spotlight Card -->\n          <div class=\"lg:col-span-5 flex justify-center lg:justify-end reveal-up is-visible\">\n            <div class=\"relative w-full max-w-[420px] group tilt-card\" data-tilt=\"8\">\n              <!-- Ambient Glow Accent -->\n              <div class=\"absolute -inset-1 rounded-[2.2rem] bg-gradient-to-tr from-[#72090F]/60 via-[#930510]/35 to-[#B21F29]/30 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500\"></div>\n\n              <div class=\"relative rounded-[2rem] overflow-hidden border border-white/[0.15] bg-[#120406] aspect-[4/5] shadow-2xl\">\n                <video\n                  id=\"heroSpotlightVideo\"\n                  src=\"assets/vtu_aftermovie.mp4\"\n                  poster=\"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=950&q=85\"\n                  autoplay\n                  muted\n                  loop\n                  playsinline\n                  class=\"w-full h-full object-cover scale-[1.02] group-hover:scale-106 transition-transform duration-700 ease-out\"\n                ></video>\n                <div class=\"absolute inset-0 bg-gradient-to-t from-[#020101] via-[#020101]/35 to-[#020101]/20\"></div>\n\n                <!-- Top HUD Badges -->\n                <div class=\"absolute top-4 left-4 right-4 flex items-center justify-between\">\n                  <span class=\"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white shadow-md\">\n                    <span class=\"w-2 h-2 rounded-full bg-[#B21F29] rec-dot\"></span>\n                    FEATURED PREMIERE\n                  </span>\n                  <span class=\"px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-300 shadow-md\">\n                    24 FPS \u2022 S-LOG3\n                  </span>\n                </div>\n\n                <!-- Center Play Affordance -->\n                <button onclick=\"openShowreelModal(0)\" aria-label=\"Play VTU Fest Official Aftermovie\" class=\"absolute inset-0 flex items-center justify-center focus:outline-none group/play\">\n                  <span class=\"w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-95 group-hover/play:scale-110 group-hover/play:bg-[#B21F29]/70 group-hover/play:border-[#B21F29] transition-all duration-300 shadow-glow-terracotta\">\n                    <svg class=\"w-8 h-8 ml-1 text-white\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n                      <path d=\"M8 5v14l11-7z\" />\n                    </svg>\n                  </span>\n                </button>\n\n                <!-- Frosted-Glass Bottom Metadata -->\n                <div class=\"absolute bottom-4 left-4 right-4 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/[0.14] p-4 space-y-3 shadow-xl\">\n                  <div>\n                    <p id=\"heroCardBadge\" class=\"text-[11px] uppercase tracking-wider text-[#fda4af] font-semibold font-mono\">Latest Production</p>\n                    <h2 id=\"heroCardTitle\" class=\"text-lg sm:text-xl font-semibold text-white leading-snug mt-0.5\">\n                      VTU Fest '26 <span class=\"font-editorial text-[#fda4af] font-normal text-2xl italic\">Official Aftermovie</span>\n                    </h2>\n                  </div>\n                  <div class=\"flex items-center justify-between gap-2 pt-2 border-t border-white/[0.1]\">\n                    <div class=\"space-y-0.5\">\n                      <p class=\"text-[11px] text-zinc-400 font-mono\">Runtime & Master</p>\n                      <p id=\"heroCardRuntime\" class=\"text-xs font-semibold text-white font-mono\">03:42 \u2022 4K RAW</p>\n                    </div>\n                    <div class=\"space-y-0.5\">\n                      <p class=\"text-[11px] text-zinc-400 font-mono\">Shoot Lead</p>\n                      <p id=\"heroCardLead\" class=\"text-xs font-semibold text-zinc-100 font-sans\">Aarav Deshpande</p>\n                    </div>\n                    <button id=\"heroCardBtn\" onclick=\"openShowreelModal(0)\" class=\"px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#930510] to-[#B21F29] hover:brightness-110 border border-[#B21F29]/50 shadow-glow-terracotta transition-all shrink-0\">\n                      Watch Reel\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </section>\n\n    <!-- ===================================================================== -->\n    <!-- 3. SCROLLING PRODUCTION & GEAR STRIP                                  -->\n    <!-- ===================================================================== -->\n    <section aria-label=\"Production Properties and Gear Stack\" class=\"relative py-5 border-y border-white/[0.08] bg-gradient-to-r from-indigo-950/20 via-white/[0.02] to-violet-950/20 backdrop-blur-sm overflow-hidden marquee-pause\">\n      <div class=\"edge-fade-mask overflow-hidden\">\n        <div class=\"animate-marquee-left items-center gap-12 whitespace-nowrap\">\n          <div class=\"flex items-center gap-12 pr-12 text-sm sm:text-base font-semibold tracking-wide text-zinc-300/85\">\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-indigo-400\"></span>VTU FEST '26</span>\n            <span class=\"font-editorial text-xl text-zinc-400 font-normal\">Convocation Live 4K</span>\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-violet-400\"></span>HACKATHON DOCS</span>\n            <span class=\"tracking-widest text-zinc-200\">SONY FX3 & FX6</span>\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-emerald-400\"></span>DAVINCI RESOLVE</span>\n            <span class=\"font-editorial text-xl text-zinc-300 font-normal\">Premiere Pro</span>\n            <span class=\"tracking-widest text-zinc-200\">DJI RS4 PRO</span>\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-indigo-400\"></span>AFTER EFFECTS</span>\n            <span class=\"tracking-wider text-zinc-300\">APUTURE 600D</span>\n            <span class=\"font-editorial text-xl text-zinc-400 font-normal\">ATEM Mini Extreme ISO</span>\n            <span class=\"tracking-widest text-zinc-200\">6S FPV RIG</span>\n          </div>\n          <div class=\"flex items-center gap-12 pr-12 text-sm sm:text-base font-semibold tracking-wide text-zinc-300/85\" aria-hidden=\"true\">\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-indigo-400\"></span>VTU FEST '26</span>\n            <span class=\"font-editorial text-xl text-zinc-400 font-normal\">Convocation Live 4K</span>\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-violet-400\"></span>HACKATHON DOCS</span>\n            <span class=\"tracking-widest text-zinc-200\">SONY FX3 & FX6</span>\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-emerald-400\"></span>DAVINCI RESOLVE</span>\n            <span class=\"font-editorial text-xl text-zinc-300 font-normal\">Premiere Pro</span>\n            <span class=\"tracking-widest text-zinc-200\">DJI RS4 PRO</span>\n            <span class=\"flex items-center gap-2.5\"><span class=\"w-1.5 h-1.5 rounded-full bg-indigo-400\"></span>AFTER EFFECTS</span>\n            <span class=\"tracking-wider text-zinc-300\">APUTURE 600D</span>\n            <span class=\"font-editorial text-xl text-zinc-400 font-normal\">ATEM Mini Extreme ISO</span>\n            <span class=\"tracking-widest text-zinc-200\">6S FPV RIG</span>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- ===================================================================== -->\n    <!-- 4. 3-ROW STAGGERED CINEMA ARCHIVE MARQUEE + FILTERABLE PHOTO GALLERY  -->\n    <!-- ===================================================================== -->\n    <section id=\"gallery\" class=\"relative py-20 sm:py-28 border-t border-white/[0.06] overflow-hidden\">\n\n      <!-- 3-Row Alternating Cinema Stills Marquee -->\n      <div class=\"max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 reveal-up\">\n        <div>\n          <p class=\"text-xs uppercase tracking-widest text-zinc-500 font-semibold\">Live Archive Reel</p>\n          <h2 class=\"text-2xl sm:text-4xl font-semibold text-white mt-1\">\n            Stills from the <span class=\"font-editorial text-zinc-300 font-normal text-[1.12em]\">archive</span>\n          </h2>\n        </div>\n        <p class=\"text-xs text-zinc-400\">Hover to pause \u2022 Click any frame for EXIF &amp; fullscreen lightbox</p>\n      </div>\n\n      <div class=\"relative space-y-4 sm:space-y-5 edge-fade-mask marquee-pause mb-24\">\n        <div id=\"marqueeRow1\" class=\"animate-marquee-left-slow gap-4 sm:gap-5 px-2\"></div>\n        <div id=\"marqueeRow2\" class=\"animate-marquee-right-slow gap-4 sm:gap-5 px-2\"></div>\n        <div id=\"marqueeRow3\" class=\"animate-marquee-left-slow gap-4 sm:gap-5 px-2\" style=\"animation-duration: 56s;\"></div>\n      </div>\n\n      <!-- Interactive Filterable Photo Gallery Grid -->\n      <div class=\"max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12\">\n        <div class=\"flex flex-col md:flex-row md:items-end justify-between gap-4 reveal-up\">\n          <div>\n            <div class=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-300 mb-3\">\n              Curated Photo Gallery\n            </div>\n            <h2 class=\"text-3xl sm:text-5xl font-semibold tracking-tight text-white\">\n              Explore <span class=\"font-editorial text-indigo-300 font-normal text-[1.12em]\">Galleries</span>\n            </h2>\n          </div>\n          <!-- Gallery Category Filter Pills -->\n          <div id=\"galleryFilterBar\" class=\"flex flex-wrap gap-2\"></div>\n        </div>\n\n        <!-- Filterable Stills Grid -->\n        <div id=\"filterableGalleryGrid\" class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal-up\"></div>\n\n        <!-- 3x2 Mini Bento Collage Collections -->\n        <div class=\"pt-10 space-y-6 reveal-up\">\n          <div class=\"flex items-center justify-between\">\n            <h3 class=\"text-xl sm:text-2xl font-semibold text-white\">\n              Department <span class=\"font-editorial text-zinc-300 font-normal text-[1.15em]\">Collections</span>\n            </h3>\n            <span class=\"text-xs text-zinc-500\">Click any deck to inspect full album</span>\n          </div>\n          <div id=\"categoryCardsGrid\" class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\"></div>\n        </div>\n      </div>\n\n    </section>\n\n    <!-- ===================================================================== -->\n    <!-- 5. SOCIAL MEDIA INFOGRAPHICS & GROWTH DASHBOARD                       -->\n    <!-- ===================================================================== -->\n    <section id=\"infographics\" class=\"relative py-20 sm:py-28 border-t border-white/[0.06]\">\n      <div class=\"max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16\">\n\n        <!-- Header + Year Switcher -->\n        <div class=\"flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 reveal-up\">\n          <div class=\"space-y-3 max-w-2xl\">\n            <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-emerald-300\">\n              <span class=\"w-1.5 h-1.5 rounded-full bg-emerald-400 rec-dot\"></span>\n              Live Digital Footprint & Analytics\n            </div>\n            <h2 class=\"text-3xl sm:text-5xl font-semibold tracking-tight text-white\">\n              Social Media <span class=\"font-editorial text-indigo-300 font-normal text-[1.12em]\">Infographics</span>\n            </h2>\n            <p class=\"text-sm text-zinc-400\">\n              How our reels, aftermovies, and photography campaigns amplify VTU's voice across Instagram, YouTube, LinkedIn, and X.\n            </p>\n          </div>\n\n          <!-- Interactive Period Toggle -->\n          <div class=\"inline-flex items-center gap-1 p-1.5 rounded-full bg-surface border border-white/[0.09] self-start lg:self-auto shadow-lg\">\n            <button onclick=\"setAnalyticsYear('2024')\" id=\"btnYear2024\" class=\"year-btn px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-all\">2024</button>\n            <button onclick=\"setAnalyticsYear('2025')\" id=\"btnYear2025\" class=\"year-btn px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-all\">2025</button>\n            <button onclick=\"setAnalyticsYear('2026')\" id=\"btnYear2026\" class=\"year-btn px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 shadow-glow-indigo transition-all\">2026 Live</button>\n            <button onclick=\"setAnalyticsYear('allTime')\" id=\"btnYearallTime\" class=\"year-btn px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-all\">All-Time</button>\n          </div>\n        </div>\n\n        <!-- Row 1: 4 Platform KPI Cards with Animated Progress Rings -->\n        <div id=\"socialKpiGrid\" class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6 reveal-up\"></div>\n\n        <!-- Row 2: Animated Monthly Reach Bar Chart + Content Format Donut Infographic -->\n        <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-6 reveal-up\">\n\n          <!-- Monthly Views & Engagement Bar Infographic -->\n          <div class=\"lg:col-span-7 spotlight-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between\">\n            <div class=\"flex flex-wrap items-start justify-between gap-4 mb-6\">\n              <div>\n                <p class=\"text-xs font-mono uppercase tracking-wider text-indigo-300\">Campaign Reach Velocity</p>\n                <h3 class=\"text-xl font-semibold text-white mt-1\">Monthly Impressions &amp; Reel Views</h3>\n              </div>\n              <div class=\"text-right\">\n                <p id=\"chartTotalLabel\" class=\"text-2xl font-bold text-white font-mono\">428.5K</p>\n                <p id=\"chartGrowthLabel\" class=\"text-xs text-emerald-400 font-medium\">+64% YoY Organic</p>\n              </div>\n            </div>\n\n            <!-- Interactive Bar Chart Canvas -->\n            <div class=\"relative h-56 flex items-end justify-between gap-2 sm:gap-3 pt-6 pb-2 border-b border-white/[0.08]\" id=\"monthlyBarChart\"></div>\n\n            <!-- Month Labels & Legend -->\n            <div class=\"flex items-center justify-between pt-4 text-[11px] text-zinc-400\">\n              <div class=\"flex items-center gap-4\">\n                <span class=\"inline-flex items-center gap-1.5\"><span class=\"w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-indigo-600 to-violet-400\"></span>Organic Reach</span>\n                <span class=\"inline-flex items-center gap-1.5\"><span class=\"w-2.5 h-2.5 rounded-sm bg-emerald-400/80\"></span>Fest Peak</span>\n              </div>\n              <span class=\"font-mono text-zinc-500\">Hover bars for top reel</span>\n            </div>\n          </div>\n\n          <!-- Content Breakdown SVG Donut & Platform Engagement Stats -->\n          <div class=\"lg:col-span-5 spotlight-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] p-6 sm:p-8 flex flex-col justify-between\">\n            <div>\n              <p class=\"text-xs font-mono uppercase tracking-wider text-violet-300\">Format Distribution</p>\n              <h3 class=\"text-xl font-semibold text-white mt-1\">Content Mix &amp; Virality</h3>\n            </div>\n\n            <!-- SVG Donut + Legend -->\n            <div class=\"flex flex-col sm:flex-row items-center gap-6 my-6\">\n              <div class=\"relative w-40 h-40 shrink-0\">\n                <svg viewBox=\"0 0 120 120\" class=\"w-full h-full -rotate-90\">\n                  <circle cx=\"60\" cy=\"60\" r=\"46\" fill=\"none\" stroke=\"rgba(255,255,255,0.06)\" stroke-width=\"13\" />\n                  <!-- Reels 44% -->\n                  <circle id=\"donutSeg1\" class=\"ring-arc\" cx=\"60\" cy=\"60\" r=\"46\" fill=\"none\" stroke=\"#6366f1\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-dasharray=\"127 289\" stroke-dashoffset=\"0\" />\n                  <!-- Aftermovies 26% -->\n                  <circle id=\"donutSeg2\" class=\"ring-arc\" cx=\"60\" cy=\"60\" r=\"46\" fill=\"none\" stroke=\"#a855f7\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-dasharray=\"75 289\" stroke-dashoffset=\"-129\" />\n                  <!-- Photo Stills 18% -->\n                  <circle id=\"donutSeg3\" class=\"ring-arc\" cx=\"60\" cy=\"60\" r=\"46\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-dasharray=\"52 289\" stroke-dashoffset=\"-206\" />\n                  <!-- Live Broadcasts 12% -->\n                  <circle id=\"donutSeg4\" class=\"ring-arc\" cx=\"60\" cy=\"60\" r=\"46\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"13\" stroke-linecap=\"round\" stroke-dasharray=\"32 289\" stroke-dashoffset=\"-260\" />\n                </svg>\n                <div class=\"absolute inset-0 flex flex-col items-center justify-center text-center\">\n                  <span id=\"donutCenterStat\" class=\"text-2xl font-bold text-white font-mono\">11.4%</span>\n                  <span class=\"text-[10px] text-zinc-400 uppercase tracking-wider\">Avg Eng.</span>\n                </div>\n              </div>\n\n              <div class=\"w-full space-y-3 text-xs\">\n                <div class=\"flex items-center justify-between\">\n                  <span class=\"flex items-center gap-2 text-zinc-200\"><span class=\"w-2.5 h-2.5 rounded-full bg-indigo-500\"></span>Short-Form Reels</span>\n                  <span class=\"font-mono text-white font-semibold\">44%</span>\n                </div>\n                <div class=\"flex items-center justify-between\">\n                  <span class=\"flex items-center gap-2 text-zinc-200\"><span class=\"w-2.5 h-2.5 rounded-full bg-purple-500\"></span>4K Aftermovies</span>\n                  <span class=\"font-mono text-white font-semibold\">26%</span>\n                </div>\n                <div class=\"flex items-center justify-between\">\n                  <span class=\"flex items-center gap-2 text-zinc-200\"><span class=\"w-2.5 h-2.5 rounded-full bg-emerald-500\"></span>Photo Carousels</span>\n                  <span class=\"font-mono text-white font-semibold\">18%</span>\n                </div>\n                <div class=\"flex items-center justify-between\">\n                  <span class=\"flex items-center gap-2 text-zinc-200\"><span class=\"w-2.5 h-2.5 rounded-full bg-amber-500\"></span>Live Broadcasts</span>\n                  <span class=\"font-mono text-white font-semibold\">12%</span>\n                </div>\n              </div>\n            </div>\n\n            <!-- Viral Highlights Strip -->\n            <div class=\"grid grid-cols-3 gap-2.5 pt-4 border-t border-white/[0.08] text-center\">\n              <div class=\"p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]\">\n                <p class=\"text-sm font-bold text-white font-mono\">4.2h</p>\n                <p class=\"text-[10px] text-zinc-400\">Reel Turnaround</p>\n              </div>\n              <div class=\"p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]\">\n                <p class=\"text-sm font-bold text-white font-mono\">68K</p>\n                <p class=\"text-[10px] text-zinc-400\">Top Reel Views</p>\n              </div>\n              <div class=\"p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]\">\n                <p class=\"text-sm font-bold text-white font-mono\">98%</p>\n                <p class=\"text-[10px] text-zinc-400\">Club Satisfaction</p>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        \n\n      </div>\n    </section>\n\n    <!-- ===================================================================== -->\n        </div>\n\n    <!-- ===================================================================== -->\n    <!-- PAGE 2: ABOUT (+ Join Community CTA)                                 -->\n    <!-- ===================================================================== -->\n    <div id=\"mainAboutPage\" style=\"display: none;\">\n    <!-- 6. HOW VTU MEDIA CLUB HELPS THE UNIVERSITY & OTHER CLUBS              -->\n    <!-- ===================================================================== -->\n    <section id=\"about\" class=\"relative py-20 sm:py-28 border-t border-white/[0.06]\">\n      <div class=\"max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16\">\n\n        <!-- Header -->\n        <div class=\"text-center max-w-3xl mx-auto space-y-3 mb-16 reveal-up\">\n          <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-indigo-300\">\n            Campus Creative Infrastructure\n          </div>\n          <h2 class=\"text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight\">\n            Empowering the <span class=\"font-editorial text-indigo-300 font-normal text-[1.12em]\">University</span><br class=\"hidden sm:inline\" />\n            &amp; every <span class=\"font-editorial text-emerald-300/90 font-normal text-[1.12em]\">Student Club</span>\n          </h2>\n          <p class=\"text-sm text-zinc-400\">\n            We operate as VTU's in-house creative studio \u2014 eliminating external agency costs while giving academic departments and 28+ student societies cinema-grade coverage, branding, and live production.\n          </p>\n        </div>\n\n        <!-- 4 Impact Pillars Bento Grid -->\n        <div class=\"grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 reveal-up\">\n\n          <!-- Pillar 1: University Official Media -->\n          <div class=\"spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-indigo-400/40 p-7 sm:p-8 flex flex-col justify-between space-y-6\" data-tilt=\"4\">\n            <div class=\"space-y-4\">\n              <div class=\"flex items-center justify-between\">\n                <div class=\"w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300\">\n                  <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z\" />\n                  </svg>\n                </div>\n                <span class=\"px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-indigo-200\">UNIVERSITY LEVEL</span>\n              </div>\n              <h3 class=\"text-xl sm:text-2xl font-semibold text-white\">Official University Broadcasts &amp; Archives</h3>\n              <p class=\"text-sm text-zinc-400 leading-relaxed\">\n                Multi-camera auditorium live streams for Annual Convocations, Vice-Chancellor keynotes, NAAC/NIRF institutional documentaries, and press-ready photography for official university portals, national newspapers, and admissions campaigns.\n              </p>\n            </div>\n            <div class=\"flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]\">\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-indigo-500/10 text-indigo-200 border border-indigo-400/20\">Multi-Cam Live Streams</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">NAAC/NIRF Documentaries</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">Press Stills Distribution</span>\n            </div>\n          </div>\n\n          <!-- Pillar 2: Supporting Other Student Clubs -->\n          <div class=\"spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-emerald-400/40 p-7 sm:p-8 flex flex-col justify-between space-y-6\" data-tilt=\"4\">\n            <div class=\"space-y-4\">\n              <div class=\"flex items-center justify-between\">\n                <div class=\"w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300\">\n                  <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z\" />\n                  </svg>\n                </div>\n                <span class=\"px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-emerald-200\">28+ PARTNER CLUBS</span>\n              </div>\n              <h3 class=\"text-xl sm:text-2xl font-semibold text-white\">End-to-End Media Support for Sister Clubs</h3>\n              <p class=\"text-sm text-zinc-400 leading-relaxed\">\n                From IEEE hackathons and Robotics expos to Dance, Music, Literary, and Sports clubs \u2014 we design launch teasers, shoot high-energy aftermovies, craft sponsor pitch reels, and boost their event registrations by up to 3x at zero cost.\n              </p>\n            </div>\n            <div class=\"flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]\">\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-emerald-500/10 text-emerald-200 border border-emerald-400/20\">Zero-Cost Club Support</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">Promo Teasers &amp; Posters</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">Sponsor Showcase Reels</span>\n            </div>\n          </div>\n\n          <!-- Pillar 3: Same-Day Campus Newsroom -->\n          <div class=\"spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-violet-400/40 p-7 sm:p-8 flex flex-col justify-between space-y-6\" data-tilt=\"4\">\n            <div class=\"space-y-4\">\n              <div class=\"flex items-center justify-between\">\n                <div class=\"w-12 h-12 rounded-2xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center text-violet-300\">\n                  <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13 10V3L4 14h7v7l9-11h-7z\" />\n                  </svg>\n                </div>\n                <span class=\"px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-violet-200\">RAPID TURNAROUND</span>\n              </div>\n              <h3 class=\"text-xl sm:text-2xl font-semibold text-white\">Real-Time Campus Newsroom &amp; Same-Day Drops</h3>\n              <p class=\"text-sm text-zinc-400 leading-relaxed\">\n                Our rapid-response edit desk delivers curated photo albums and vertical highlight reels within 4 hours of event wrap, ensuring VTU's achievements trend across LinkedIn and Instagram while the energy is still live.\n              </p>\n            </div>\n            <div class=\"flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]\">\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-violet-500/10 text-violet-200 border border-violet-400/20\">4-Hour Highlight Reels</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">Press-Ready Stills</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">Live Story Coverage</span>\n            </div>\n          </div>\n\n          <!-- Pillar 4: Student Skill & Gear Ecosystem -->\n          <div class=\"spotlight-card tilt-card rounded-[1.75rem] bg-surface/90 border border-white/[0.09] hover:border-amber-400/40 p-7 sm:p-8 flex flex-col justify-between space-y-6\" data-tilt=\"4\">\n            <div class=\"space-y-4\">\n              <div class=\"flex items-center justify-between\">\n                <div class=\"w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300\">\n                  <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z\" />\n                  </svg>\n                </div>\n                <span class=\"px-3 py-1 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/[0.08] text-amber-200\">CREATIVE LAB</span>\n              </div>\n              <h3 class=\"text-xl sm:text-2xl font-semibold text-white\">Workshops, Gear Access &amp; Student Portfolios</h3>\n              <p class=\"text-sm text-zinc-400 leading-relaxed\">\n                We run open-for-all bootcamps in cinematography, DaVinci color grading, lighting, and graphic design \u2014 helping engineering students build professional creative portfolios and freelance careers alongside their degree.\n              </p>\n            </div>\n            <div class=\"flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]\">\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-amber-500/10 text-amber-200 border border-amber-400/20\">Monthly Bootcamps</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">Shared Cinema Gear</span>\n              <span class=\"px-3 py-1 rounded-full text-[11px] bg-white/[0.04] text-zinc-300 border border-white/[0.08]\">Industry Mentorship</span>\n            </div>\n          </div>\n\n        </div>\n\n        <!-- INTERACTIVE PARTNER CLUBS COLLABORATION MATRIX -->\n        <div class=\"mb-12 p-6 sm:p-8 rounded-[1.85rem] bg-surface/90 border border-white/[0.1] reveal-up\">\n          <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6\">\n            <div>\n              <p class=\"text-xs uppercase font-mono tracking-wider text-indigo-300\">Club Collaboration Matrix</p>\n              <h3 class=\"text-xl sm:text-2xl font-semibold text-white mt-0.5\">Explore How We Support Campus Societies</h3>\n            </div>\n            <span class=\"text-xs text-zinc-500\">Click a club to inspect deliverables</span>\n          </div>\n\n          <!-- Club Selection Tabs -->\n          <div id=\"clubTabButtons\" class=\"flex flex-wrap gap-2 mb-6\"></div>\n\n          <!-- Active Club Showcase Card -->\n          <div id=\"activeClubCard\" class=\"p-6 rounded-2xl bg-obsidian border border-white/[0.08]\"></div>\n        </div>\n\n        \n\n      </div>\n    </section>\n\n    <!-- ===================================================================== -->\n    <!-- 8. JOIN THE COMMUNITY SPLIT CTA                                       -->\n    <!-- ===================================================================== -->\n    <section id=\"join\" class=\"relative py-20 sm:py-28 border-t border-white/[0.06]\">\n      <div class=\"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8\">\n        <div class=\"grid grid-cols-1 md:grid-cols-12 gap-12 items-center reveal-up\">\n\n          <!-- Left Side: Rotating Circular Emblem Stamp -->\n          <div class=\"md:col-span-5 flex flex-col items-center md:items-start space-y-6\">\n            <div class=\"inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-[#B21F29]/30 text-xs font-medium text-zinc-300 shadow-sm backdrop-blur-md\">\n              <img src=\"assets/logo.png\" alt=\"\" class=\"h-4 w-auto object-contain\" />\n              <span class=\"w-1.5 h-1.5 rounded-full bg-[#B21F29] rec-dot\"></span>\n              <span>Recruitment Open \u2014 2026 Batch</span>\n            </div>\n\n            <div class=\"relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] shadow-glow-terracotta/25 group\">\n              <svg viewBox=\"0 0 200 200\" class=\"w-full h-full animate-spin-slow p-2\">\n                <defs>\n                  <path id=\"circleTextPath\" d=\"M 100, 100 m -74, 0 a 74,74 0 1,1 148,0 a 74,74 0 1,1 -148,0\" />\n                </defs>\n                <text fill=\"rgba(228,228,231,0.58)\" font-size=\"11.2\" font-weight=\"600\" letter-spacing=\"3.6\">\n                  <textPath href=\"#circleTextPath\" startOffset=\"0%\">\n                    VTU MEDIA CLUB \u2022 CAPTURE CREATE INSPIRE \u2022\n                  </textPath>\n                </text>\n              </svg>\n              <div class=\"absolute inset-0 flex items-center justify-center\">\n                <div class=\"w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#120406] border border-[#B21F29]/40 flex items-center justify-center shadow-inner p-3.5 group-hover:scale-105 transition-all shadow-glow-terracotta/30\">\n                  <img src=\"assets/logo.png\" alt=\"VTU Media Logo\" class=\"w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(178,31,41,0.6)]\" />\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Right Side: Large Right-Aligned Editorial Heading & Apply CTA -->\n          <div class=\"md:col-span-7 text-center md:text-right space-y-6\">\n            <p class=\"text-sm sm:text-base text-zinc-400 tracking-wide\">Let's roll</p>\n            <h2 class=\"text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.03]\">\n              Join the<br />\n              <span class=\"font-editorial text-zinc-300 font-normal text-[1.12em]\">Community</span>\n            </h2>\n            <p class=\"text-sm text-zinc-400 max-w-md ml-auto mr-auto md:mr-0\">\n              Whether you shoot on cinema rigs, grade in DaVinci, design motion graphics, or want to learn from day one \u2014 your seat in the studio is waiting.\n            </p>\n            <div class=\"pt-2 flex flex-wrap items-center justify-center md:justify-end gap-4\">\n              <button onclick=\"openBookingModal()\" class=\"px-5 py-3 rounded-full text-xs font-medium text-zinc-300 border border-white/[0.12] hover:bg-white/[0.06] transition-all\">\n                Book Campus Coverage\n              </button>\n              <button onclick=\"openJoinModal()\" class=\"group inline-flex items-center gap-3.5 pl-6 pr-2 py-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.14] hover:border-indigo-400/50 transition-all\">\n                <span class=\"text-sm font-medium text-white underline decoration-white/30 underline-offset-4 group-hover:decoration-white\">Apply to Join</span>\n                <span class=\"w-9 h-9 rounded-full bg-white text-obsidian flex items-center justify-center group-hover:translate-x-0.5 transition-transform\">\n                  <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" viewBox=\"0 0 24 24\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 5l7 7-7 7\" />\n                  </svg>\n                </span>\n              </button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </section>\n\n      </div>\n\n    <!-- ===================================================================== -->\n    <!-- PAGE 3: TEAM PROFILE (Creators + All Members Wall)                   -->\n    <!-- ===================================================================== -->\n    <div id=\"mainTeamPage\" style=\"display: none;\">\n    <!-- 7. ALL MEMBERS PORTRAIT WALL & FEATURED LEADS WITH EFFECTS            -->\n    <!-- ===================================================================== -->\n    <section id=\"team\" class=\"relative py-20 sm:py-28 border-t border-white/[0.06]\">\n      <div class=\"max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16\">\n\n        <!-- Header -->\n        <div class=\"text-center max-w-2xl mx-auto space-y-3 mb-14 reveal-up\">\n          <div class=\"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300\">\n            The Collective Roster\n          </div>\n          <h2 class=\"text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight\">\n            Meet the <span class=\"font-editorial text-emerald-300/90 font-normal text-[1.15em]\">storytellers</span><br />\n            behind the lens\n          </h2>\n          <p class=\"text-sm text-zinc-400 max-w-md mx-auto\">\n            Hover any portrait for live cinema color-reveal, lens flare shimmer, and camera viewfinder HUD effects, or click to inspect their gear kit and campus credits.\n          </p>\n        </div>\n\n        <!-- Featured Storytellers Grid (Directly Show All Cards) -->\n        <div class=\"mb-20 reveal-up\">\n          <div id=\"creatorsCarousel\" class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch w-full\"></div>\n        </div>\n\n        \n\n        <!-- ALL MEMBERS PHOTO PORTRAIT WALL WITH DEPARTMENT FILTERS, SEARCH & EFFECTS -->\n        <div class=\"space-y-8 reveal-up\">\n          <div class=\"flex flex-col md:flex-row md:items-end justify-between gap-4\">\n            <div>\n              <p class=\"text-xs uppercase tracking-widest text-indigo-400 font-semibold\">Full Club Roster (16 Active Members)</p>\n              <h3 class=\"text-2xl sm:text-3xl font-semibold text-white mt-1\">\n                All Club <span class=\"font-editorial text-zinc-300 font-normal text-[1.15em]\">Members</span>\n              </h3>\n            </div>\n            <!-- Member Search Bar -->\n            <div class=\"relative w-full md:w-64\">\n              <input\n                type=\"text\"\n                id=\"memberSearchInput\"\n                oninput=\"handleMemberSearch(this.value)\"\n                placeholder=\"Search member, gear, skill...\"\n                class=\"w-full pl-9 pr-4 py-2 rounded-full bg-surface border border-white/[0.1] text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-400/60 transition-colors\"\n              />\n              <svg class=\"w-4 h-4 text-zinc-500 absolute left-3 top-2.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\" />\n              </svg>\n            </div>\n          </div>\n\n          <!-- Department Filter Pills -->\n          <div id=\"memberFilterBar\" class=\"flex flex-wrap gap-2\"></div>\n\n          <!-- Interactive Member Portrait Cards Grid -->\n          <div id=\"allMembersGrid\" class=\"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6\"></div>\n        </div>\n\n      </div>\n    </section>\n\n    <!-- ===================================================================== -->\n        </div>\n\n  </main>\n\n  <!-- ===================================================================== -->\n  <!-- 9. BENTO-STYLE DARK FOOTER                                           -->\n  <!-- ===================================================================== -->\n  <footer class=\"relative z-10 pb-12 pt-4\">\n    <div class=\"max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16\">\n      <div class=\"flex items-center justify-between text-[11px] text-zinc-500 pb-4 px-1\">\n        <span>\u2022 Cinema-Grade Student Collective</span>\n        <span>\u2022 Jnana Sangama, Belagavi</span>\n      </div>\n\n      <div class=\"grid grid-cols-1 lg:grid-cols-12 gap-5\">\n        <!-- Left Bento Card -->\n        <div class=\"lg:col-span-7 relative overflow-hidden rounded-[1.75rem] bg-surface/90 border border-white/[0.08] p-7 sm:p-9 flex flex-col justify-between min-h-[270px]\">\n          <img src=\"assets/logo.png\" alt=\"\" aria-hidden=\"true\" class=\"pointer-events-none select-none absolute -bottom-6 -right-6 h-56 sm:h-72 w-auto object-contain opacity-[0.05] -rotate-6\" />\n          <div class=\"relative z-10 space-y-3 max-w-md\">\n            <a href=\"#home\" class=\"inline-flex items-center gap-3\">\n              <img src=\"assets/logo.png\" alt=\"VTU Media\" class=\"h-11 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(178,31,41,0.4)] hover:brightness-110 transition-all\" />\n            </a>\n            <p class=\"text-xs sm:text-sm text-zinc-400 leading-relaxed\">\n              We empower student filmmakers, photographers, and designers across VTU to document culture, elevate partner clubs, and broadcast university milestones to the world.\n            </p>\n          </div>\n          <div class=\"relative z-10 mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-5\">\n            <p class=\"text-[11px] text-zinc-500\">VTU Media Club \u00a9 2026. All Rights Reserved.</p>\n            <div class=\"flex flex-wrap gap-2\">\n              <a href=\"#home\" class=\"px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors\">Home</a>\n              <a href=\"#gallery\" class=\"px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors\">Gallery</a>\n              <a href=\"#team\" class=\"px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors\">Team Profile</a>\n              <a href=\"#about\" class=\"px-3.5 py-1.5 rounded-full text-[11px] font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.1] hover:text-white transition-colors\">About</a>\n              <button onclick=\"openBookingModal()\" class=\"px-3.5 py-1.5 rounded-full text-[11px] font-medium text-[#B21F29] bg-[#72090F]/20 border border-[#B21F29]/30 hover:bg-[#72090F]/35 transition-colors\">Book Us</button>\n            </div>\n          </div>\n        </div>\n\n        <!-- Right Bento Card -->\n        <div class=\"lg:col-span-5 rounded-[1.75rem] bg-surface/90 border border-white/[0.08] p-7 sm:p-9 flex flex-col justify-between min-h-[270px]\">\n          <div class=\"space-y-4\">\n            <h3 class=\"text-lg font-medium text-white leading-snug\">\n              Follow the <span class=\"font-editorial text-2xl text-zinc-300 font-normal\">Collective</span>\n            </h3>\n            <div class=\"flex items-center gap-2.5\">\n              <button onclick=\"showToast('Instagram: @vtumediaclub (24.8K Followers)')\" aria-label=\"Instagram\" class=\"w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-indigo-400/40 flex items-center justify-center text-zinc-300 hover:text-white transition-all\">\n                <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n                  <rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"></rect>\n                  <path d=\"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z\"></path>\n                  <line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>\n                </svg>\n              </button>\n              <button onclick=\"showToast('YouTube: VTU Media Club Official (185K+ Views)')\" aria-label=\"YouTube\" class=\"w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-indigo-400/40 flex items-center justify-center text-zinc-300 hover:text-white transition-all\">\n                <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" viewBox=\"0 0 24 24\">\n                  <path d=\"M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z\"></path>\n                  <polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>\n                </svg>\n              </button>\n              <button onclick=\"showToast('X / Twitter: @vtumedia_live (132K Impressions)')\" aria-label=\"X\" class=\"w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-indigo-400/40 flex items-center justify-center text-zinc-300 hover:text-white transition-all\">\n                <svg class=\"w-3.5 h-3.5\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n                  <path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/>\n                </svg>\n              </button>\n              <button onclick=\"showToast('LinkedIn: VTU Media Collective (11.4K Alumni)')\" aria-label=\"LinkedIn\" class=\"w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.12] hover:border-indigo-400/40 flex items-center justify-center text-xs font-bold text-zinc-300 hover:text-white transition-all\">\n                in\n              </button>\n            </div>\n          </div>\n\n          <form onsubmit=\"handleFooterSubscribe(event)\" class=\"mt-8 space-y-2.5\">\n            <label for=\"footerEmail\" class=\"flex items-center gap-2 text-xs font-medium text-zinc-300\">\n              <svg class=\"w-3.5 h-3.5 text-indigo-400\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\">\n                <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\" />\n              </svg>\n              Reel Dispatch &amp; Workshop Alerts\n            </label>\n            <div class=\"relative flex items-center\">\n              <input id=\"footerEmail\" type=\"email\" required placeholder=\"your.name@vtu.ac.in\" class=\"w-full pl-4 pr-12 py-3 rounded-full bg-obsidian/90 border border-white/[0.1] text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-400/60 transition-colors\" />\n              <button type=\"submit\" aria-label=\"Subscribe\" class=\"absolute right-1.5 w-8 h-8 rounded-full bg-white text-obsidian hover:bg-indigo-200 flex items-center justify-center transition-colors\">\n                <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.3\" viewBox=\"0 0 24 24\">\n                  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 5l7 7m0 0l-7 7m7-7H3\" />\n                </svg>\n              </button>\n            </div>\n            <p class=\"text-[11px] text-zinc-500\">Get premiere alerts, free workshop dates &amp; shoot availability.</p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </footer>\n\n  <!-- ===================================================================== -->\n  <!-- INTERACTIVE MODALS & LIGHTBOXES                                       -->\n  <!-- ===================================================================== -->\n\n  <!-- 1. SIMULATED SHOWREEL CINEMA PLAYER MODAL -->\n  <div id=\"showreelModal\" class=\"hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl\" onclick=\"if(event.target === this) closeShowreelModal()\">\n    <div class=\"modal-animate relative w-full max-w-4xl rounded-3xl overflow-hidden bg-[#120406] border border-white/[0.14] shadow-2xl\">\n      <div class=\"flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-[#020101]/80\">\n        <div class=\"flex items-center gap-3\">\n          <span class=\"w-2.5 h-2.5 rounded-full bg-[#B21F29] rec-dot\"></span>\n          <span id=\"reelModalTitle\" class=\"text-sm font-semibold text-white\">VTU Fest '26 Official Aftermovie</span>\n          <span class=\"hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#B21F29]/20 border border-[#B21F29]/40 text-[10px] font-mono text-[#fda4af]\">4K DCI \u2022 24 FPS</span>\n        </div>\n        <div class=\"flex items-center gap-3\">\n          <a href=\"https://drive.google.com/file/d/16KJ910LFb41wSqM4JIhKxU3kTfws1dIA/view?usp=sharing\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.06] border border-white/10 hover:border-[#B21F29]/60 hover:text-white transition-all\">\n            <span>Google Drive</span>\n            <span class=\"text-[#B21F29]\">\u2197</span>\n          </a>\n          <button onclick=\"closeShowreelModal()\" aria-label=\"Close Player\" class=\"w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] flex items-center justify-center text-zinc-300 transition-colors\">\u2715</button>\n        </div>\n      </div>\n\n      <div class=\"relative aspect-video bg-black overflow-hidden flex items-center justify-center\">\n        <video\n          id=\"modalReelVideo\"\n          src=\"assets/vtu_aftermovie.mp4\"\n          controls\n          playsinline\n          class=\"w-full h-full object-contain\"\n        ></video>\n      </div>\n    </div>\n  </div>\n\n  <!-- ===================================================================== -->\n  <!-- MAIN JAVASCRIPT APPLICATION LOGIC                                     -->\n  <!-- ===================================================================== -->";

  // React Component Definition
  
  /* =====================================================================
   * REACT BITS — GLOW CURSOR (WEBGL2 FLUID SIMULATION)
   * ===================================================================== */
const VERTEX = `#version 300 es
in vec2 aPosition;
uniform vec2 uTexel;
out vec2 vUv;
out vec2 vL;
out vec2 vR;
out vec2 vT;
out vec2 vB;
void main() {
  vUv = aPosition * 0.5 + 0.5;
  vL = vUv - vec2(uTexel.x, 0.0);
  vR = vUv + vec2(uTexel.x, 0.0);
  vT = vUv + vec2(0.0, uTexel.y);
  vB = vUv - vec2(0.0, uTexel.y);
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const HEADER = `#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in vec2 vL;
in vec2 vR;
in vec2 vT;
in vec2 vB;
out vec4 outColor;
`;

const SPLAT = `${HEADER}
uniform sampler2D uTarget;
uniform float uAspect;
uniform vec2 uA;
uniform vec2 uB;
uniform float uRadius;
uniform float uWide;
uniform vec3 uValue;
uniform float uMode;
uniform float uStrength;
float erf(float x) {
  float x2 = x * x;
  float a = 0.147;
  return sign(x) * sqrt(1.0 - exp(-x2 * (1.2732395 + a * x2) / (1.0 + a * x2)));
}
float sweep(float along, float length, float across, float radius) {
  return exp(-across * across / (radius * radius)) * 0.5 * (erf(along / radius) - erf((along - length) / radius));
}
void main() {
  vec2 p = vec2(vUv.x * uAspect, vUv.y);
  vec2 a = vec2(uA.x * uAspect, uA.y);
  vec2 ab = vec2(uB.x * uAspect, uB.y) - a;
  float len = length(ab);
  vec2 dir = len > 1e-6 ? ab / len : vec2(1.0, 0.0);
  vec2 ap = p - a;
  vec3 base = texture(uTarget, vUv).xyz;
  if (uMode > 1.5) {
    float along = dot(ap, dir);
    float across = dot(ap, vec2(-dir.y, dir.x));
    if (uMode > 2.5) {
      outColor = vec4(mix(base, uValue, sweep(along, len, across, uRadius) * uStrength), 1.0);
      return;
    }
    vec3 add = vec3(uValue.xy * sweep(along, len, across, uRadius), uValue.z * sweep(along, len, across, uWide));
    outColor = vec4(base + add, 1.0);
    return;
  }
  float h = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-9), 0.0, 1.0);
  vec2 d = ap - ab * h;
  float r2 = dot(d, d);
  float falloff = exp(-r2 / (uRadius * uRadius));
  float wide = exp(-r2 / (uWide * uWide));
  vec3 result = uMode > 0.5 ? mix(base, uValue, falloff * uStrength) : base + vec3(uValue.xy * falloff, uValue.z * wide);
  outColor = vec4(result, 1.0);
}`;

const ADVECT = `${HEADER}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uVelocityTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  outColor = texture(uSource, coord) * uDecay;
}`;

const MACCORMACK = `${HEADER}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform sampler2D uForward;
uniform sampler2D uBack;
uniform vec2 uVelocityTexel;
uniform vec2 uSourceTexel;
uniform float uDt;
uniform vec4 uDecay;
void main() {
  vec2 coord = vUv - uDt * texture(uVelocity, vUv).xy * uVelocityTexel;
  vec4 forward = texture(uForward, vUv);
  vec4 corrected = forward + 0.5 * (texture(uSource, vUv) - texture(uBack, vUv));
  vec2 base = (floor(coord / uSourceTexel - 0.5) + 0.5) * uSourceTexel;
  vec4 a = texture(uSource, base);
  vec4 b = texture(uSource, base + vec2(uSourceTexel.x, 0.0));
  vec4 c = texture(uSource, base + vec2(0.0, uSourceTexel.y));
  vec4 d = texture(uSource, base + uSourceTexel);
  vec4 low = min(min(a, b), min(c, d));
  vec4 high = max(max(a, b), max(c, d));
  outColor = clamp(corrected, low, high) * uDecay;
}`;

const DIVERGENCE = `${HEADER}
uniform sampler2D uVelocity;
void main() {
  float left = texture(uVelocity, vL).x;
  float right = texture(uVelocity, vR).x;
  float top = texture(uVelocity, vT).y;
  float bottom = texture(uVelocity, vB).y;
  vec2 center = texture(uVelocity, vUv).xy;
  if (vL.x < 0.0) left = -center.x;
  if (vR.x > 1.0) right = -center.x;
  if (vT.y > 1.0) top = -center.y;
  if (vB.y < 0.0) bottom = -center.y;
  outColor = vec4(0.5 * (right - left + top - bottom), 0.0, 0.0, 1.0);
}`;

const SCALE = `${HEADER}
uniform sampler2D uSource;
uniform float uValue;
void main() {
  outColor = texture(uSource, vUv) * uValue;
}`;

const PRESSURE = `${HEADER}
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  float divergence = texture(uDivergence, vUv).x;
  outColor = vec4((left + right + bottom + top - divergence) * 0.25, 0.0, 0.0, 1.0);
}`;

const GRADIENT = `${HEADER}
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main() {
  float left = texture(uPressure, vL).x;
  float right = texture(uPressure, vR).x;
  float top = texture(uPressure, vT).x;
  float bottom = texture(uPressure, vB).x;
  vec2 velocity = texture(uVelocity, vUv).xy - vec2(right - left, top - bottom);
  outColor = vec4(velocity, 0.0, 1.0);
}`;

const SHADE = `
uniform vec3 uColor;
uniform vec3 uSecondary;
uniform float uIntensity;
uniform float uHotspot;
vec3 shade(vec3 dye) {
  float energy = max(dye.x, 0.0);
  float heat = clamp(dye.y, 0.0, energy);
  float gas = max(dye.z, 0.0);
  float fresh = heat / max(energy, 0.0001);
  vec3 tint = mix(uSecondary, uColor, fresh);
  return (tint * energy + uSecondary * gas + vec3(heat * heat * 0.3 * uHotspot)) * uIntensity;
}
`;

const PREFILTER = `${HEADER}${SHADE}
uniform sampler2D uDye;
uniform vec2 uDyeTexel;
void main() {
  vec2 o = uDyeTexel * 0.5;
  vec3 light = shade(texture(uDye, vUv + vec2(-o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, -o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(-o.x, o.y)).xyz);
  light += shade(texture(uDye, vUv + vec2(o.x, o.y)).xyz);
  outColor = vec4(light * 0.25, 1.0);
}`;

const DOWN = `${HEADER}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv).rgb * 4.0;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb;
  outColor = vec4(color / 8.0, 1.0);
}`;

const UP = `${HEADER}
uniform sampler2D uSource;
uniform vec2 uSourceTexel;
void main() {
  vec2 o = uSourceTexel;
  vec3 color = texture(uSource, vUv + vec2(-o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(o.x * 2.0, 0.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, -o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(0.0, o.y * 2.0)).rgb;
  color += texture(uSource, vUv + vec2(-o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, -o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(-o.x, o.y)).rgb * 2.0;
  color += texture(uSource, vUv + vec2(o.x, o.y)).rgb * 2.0;
  outColor = vec4(color / 12.0, 1.0);
}`;

const DISPLAY = `${HEADER}${SHADE}
uniform sampler2D uDye;
uniform sampler2D uBloom;
uniform float uGlow;
uniform float uGrain;
uniform float uTime;
uniform float uLight;
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
void main() {
  vec3 dye = texture(uDye, vUv).xyz;
  vec3 light = shade(dye);
  vec3 bloom = texture(uBloom, vUv).rgb * uGlow;
  float edge = smoothstep(0.0, 0.02, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)));
  float grain = 1.0 + (hash(gl_FragCoord.xy + fract(uTime * 13.7) * 97.0) - 0.5) * uGrain * 2.0;
  if (uLight > 0.5) {
    float energy = max(dye.x, 0.0);
    float heat = clamp(dye.y, 0.0, energy);
    float gas = max(dye.z, 0.0);
    float fresh = heat / max(energy, 0.0001);
    vec3 tint = mix(uSecondary, uColor, fresh);
    float halo = dot(bloom, vec3(0.2126, 0.7152, 0.0722));
    float density = 1.0 - exp(-((energy * 1.1 + gas * 0.8) * uIntensity + halo * 0.25));
    float tone = dot(tint, vec3(0.2126, 0.7152, 0.0722));
    vec3 ink = tint * min(1.0, 0.5 / max(tone, 0.001)) * mix(0.95, 0.72, smoothstep(0.5, 3.0, energy));
    ink = mix(ink, vec3(1.0), clamp(heat * heat * 0.05 * uHotspot, 0.0, 0.45));
    density = clamp(density * grain, 0.0, 1.0) * edge;
    outColor = vec4(ink * density, density);
  } else {
    vec3 color = 1.0 - exp(-(light + bloom) * grain);
    color *= edge;
    outColor = vec4(color, max(color.r, max(color.g, color.b)));
  }
}`;

const QUALITY = {
  low: { sim: 96, dye: 384 },
  medium: { sim: 128, dye: 576 },
  high: { sim: 160, dye: 768 }
};

const PRESSURE_STEPS = 20;
const FLOW = 0.75;
const BLOOM_LEVELS = 5;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
};

const toHsv = ([r, g, b]) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;
  if (delta > 0) {
    if (max === r) hue = ((g - b) / delta) % 6;
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
  }
  return [(hue * 60 + 360) % 360, max > 0 ? delta / max : 0, max];
};

const fromHsv = (hue, saturation, value) => {
  const h = (((hue % 360) + 360) % 360) / 60;
  const c = value * saturation;
  const x = c * (1 - Math.abs((h % 2) - 1));
  const m = value - c;
  const [r, g, b] =
    h < 1 ? [c, x, 0] : h < 2 ? [x, c, 0] : h < 3 ? [0, c, x] : h < 4 ? [0, x, c] : h < 5 ? [x, 0, c] : [c, 0, x];
  return [r + m, g + m, b + m];
};

const GlowCursor = ({
  color = '#5f8bff',
  secondaryColor,
  intensity = 1.3,
  trailWidth = 3,
  linger = 1.4,
  glow = 1.2,
  hotspot = 0.8,
  followSpeed = 0.6,
  grain = 0,
  clickBurst = true,
  quality = 'high',
  theme = 'dark',
  blendMode,
  maxDevicePixelRatio = 2,
  enabled = true,
  children,
  className = '',
  style,
  ...rest
}) => {
  const containerRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const settingsRef = React.useRef(null);
  settingsRef.current = {
    color: String(color),
    secondaryColor: secondaryColor ? String(secondaryColor) : '',
    intensity: Math.max(0, intensity),
    trailWidth: clamp(trailWidth, 0.5, 40),
    linger: clamp(linger, 0.1, 10),
    glow: Math.max(0, glow),
    hotspot: Math.max(0, hotspot),
    followSpeed: clamp(followSpeed, 0, 1),
    grain: Math.max(0, grain),
    clickBurst,
    quality: QUALITY[quality] ? quality : 'high',
    theme,
    maxDevicePixelRatio,
    enabled
  };

  React.useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });
    if (!container || !canvas || !gl || !gl.getExtension('EXT_color_buffer_float')) return undefined;

    const vertexShader = compile(gl, gl.VERTEX_SHADER, VERTEX);
    if (!vertexShader) return undefined;

    const build = source => {
      const fragment = compile(gl, gl.FRAGMENT_SHADER, source);
      const program = gl.createProgram();
      if (!fragment || !program) return null;
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragment);
      gl.bindAttribLocation(program, 0, 'aPosition');
      gl.linkProgram(program);
      gl.deleteShader(fragment);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        return null;
      }
      const uniforms = {};
      const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < count; i++) {
        const info = gl.getActiveUniform(program, i);
        if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
      }
      return { program, uniforms };
    };

    const passes = {
      splat: build(SPLAT),
      advect: build(ADVECT),
      maccormack: build(MACCORMACK),
      divergence: build(DIVERGENCE),
      scale: build(SCALE),
      pressure: build(PRESSURE),
      gradient: build(GRADIENT),
      prefilter: build(PREFILTER),
      down: build(DOWN),
      up: build(UP),
      display: build(DISPLAY)
    };
    if (Object.values(passes).some(pass => !pass)) return undefined;

    const vao = gl.createVertexArray();
    const buffer = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const probe = document.createElement('canvas');
    probe.width = 1;
    probe.height = 1;
    const probeContext = probe.getContext('2d', { willReadFrequently: true });
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    const state = {
      width: 1,
      height: 1,
      ratio: 1,
      colorKey: '',
      color: [0.37, 0.55, 1],
      secondary: [0.25, 0.3, 1],
      pointer: { x: 0, y: 0, inside: false },
      emitter: { x: 0, y: 0, vx: 0, vy: 0, px: 0, py: 0, travelled: 0 },
      ready: false,
      bursts: [],
      active: -Infinity,
      time: 0,
      allocated: '',
      targets: null
    };
    let raf = 0;
    let last = 0;
    let alive = true;
    let visible = true;

    const toRgb = (value, fallback) => {
      if (!probeContext || !value) return fallback;
      const css = /^[0-9a-f]{3,8}$/i.test(value) ? `#${value}` : value;
      probeContext.clearRect(0, 0, 1, 1);
      probeContext.fillStyle = '#000000';
      probeContext.fillStyle = css;
      probeContext.fillRect(0, 0, 1, 1);
      const [r, g, b] = probeContext.getImageData(0, 0, 1, 1).data;
      return [r / 255, g / 255, b / 255];
    };

    const resolveColors = s => {
      const key = `${s.color}|${s.secondaryColor}`;
      if (key === state.colorKey) return;
      state.colorKey = key;
      state.color = toRgb(s.color, [0.37, 0.55, 1]);
      if (s.secondaryColor) {
        state.secondary = toRgb(s.secondaryColor, state.color);
      } else {
        const [hue, saturation, value] = toHsv(state.color);
        state.secondary = fromHsv(hue + 8, Math.min(1, saturation * 1.1 + 0.05), value);
      }
    };

    const createTarget = (width, height, internalFormat, format, filter) => {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, width, height, 0, format, gl.HALF_FLOAT, null);
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, width, height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return { texture, fbo, width, height, texel: [1 / width, 1 / height] };
    };

    const createPair = (width, height, internalFormat, format, filter) => {
      let read = createTarget(width, height, internalFormat, format, filter);
      let write = createTarget(width, height, internalFormat, format, filter);
      return {
        get read() {
          return read;
        },
        get write() {
          return write;
        },
        swap() {
          const next = read;
          read = write;
          write = next;
        },
        targets() {
          return [read, write];
        }
      };
    };

    const destroyTarget = target => {
      gl.deleteTexture(target.texture);
      gl.deleteFramebuffer(target.fbo);
    };

    const release = () => {
      const t = state.targets;
      if (!t) return;
      [
        ...t.velocity.targets(),
        ...t.dye.targets(),
        ...t.pressure.targets(),
        t.divergence,
        t.forward,
        t.back,
        ...t.bloom
      ].forEach(destroyTarget);
      state.targets = null;
    };

    const clearTargets = () => {
      const t = state.targets;
      if (!t) return;
      gl.clearColor(0, 0, 0, 0);
      [...t.velocity.targets(), ...t.dye.targets(), ...t.pressure.targets()].forEach(target => {
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        gl.clear(gl.COLOR_BUFFER_BIT);
      });
    };

    const allocate = () => {
      const s = settingsRef.current;
      const key = `${s.quality}|${state.width}|${state.height}|${canvas.width}|${canvas.height}`;
      if (key === state.allocated && state.targets) return;
      release();
      state.allocated = key;
      const preset = QUALITY[s.quality];
      const aspect = state.width / state.height;
      const dims = base => (aspect >= 1 ? [Math.round(base * aspect), base] : [base, Math.round(base / aspect)]);
      const [simW, simH] = dims(preset.sim);
      let [dyeW, dyeH] = dims(preset.dye);
      const shrink = Math.min(1, canvas.width / dyeW, canvas.height / dyeH);
      dyeW = Math.max(2, Math.round(dyeW * shrink));
      dyeH = Math.max(2, Math.round(dyeH * shrink));
      const bloom = [];
      let bloomW = dyeW >> 1;
      let bloomH = dyeH >> 1;
      for (let i = 0; i < BLOOM_LEVELS; i++) {
        bloom.push(createTarget(Math.max(1, bloomW), Math.max(1, bloomH), gl.RGBA16F, gl.RGBA, gl.LINEAR));
        bloomW >>= 1;
        bloomH >>= 1;
      }
      state.targets = {
        velocity: createPair(simW, simH, gl.RG16F, gl.RG, gl.LINEAR),
        dye: createPair(dyeW, dyeH, gl.RGBA16F, gl.RGBA, gl.LINEAR),
        forward: createTarget(dyeW, dyeH, gl.RGBA16F, gl.RGBA, gl.LINEAR),
        back: createTarget(dyeW, dyeH, gl.RGBA16F, gl.RGBA, gl.LINEAR),
        pressure: createPair(simW, simH, gl.R16F, gl.RED, gl.NEAREST),
        divergence: createTarget(simW, simH, gl.R16F, gl.RED, gl.NEAREST),
        bloom
      };
    };

    let resizePending = false;
    const applyResize = () => {
      const s = settingsRef.current;
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const ratio = Math.min(window.devicePixelRatio || 1, Math.max(0.5, s.maxDevicePixelRatio || 2));
      const pixelWidth = Math.max(1, Math.round(width * ratio));
      const pixelHeight = Math.max(1, Math.round(height * ratio));
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      state.width = width;
      state.height = height;
      state.ratio = ratio;
      allocate();
    };

    const resize = () => {
      resizePending = true;
      wake();
    };

    const draw = target => {
      if (target) {
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        gl.viewport(0, 0, target.width, target.height);
      } else {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.width, canvas.height);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const use = (pass, texel) => {
      gl.useProgram(pass.program);
      if (pass.uniforms.uTexel) gl.uniform2f(pass.uniforms.uTexel, texel[0], texel[1]);
      return pass.uniforms;
    };

    const bind = (unit, target) => {
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, target.texture);
      return unit;
    };

    const splat = (pair, ax, ay, bx, by, radius, value, mode, strength, wide = radius) => {
      const u = use(passes.splat, pair.read.texel);
      gl.uniform1i(u.uTarget, bind(0, pair.read));
      gl.uniform1f(u.uAspect, state.width / state.height);
      gl.uniform2f(u.uA, ax / state.width, 1 - ay / state.height);
      gl.uniform2f(u.uB, bx / state.width, 1 - by / state.height);
      gl.uniform1f(u.uRadius, radius / state.height);
      gl.uniform1f(u.uWide, wide / state.height);
      gl.uniform3f(u.uValue, value[0], value[1], value[2]);
      gl.uniform1f(u.uMode, mode);
      gl.uniform1f(u.uStrength, strength);
      draw(pair.write);
      pair.swap();
    };

    const toGrid = (vx, vy) => {
      const { velocity } = state.targets;
      return [(vx * velocity.read.width) / state.width, (-vy * velocity.read.height) / state.height];
    };

    const lightRadius = s => Math.max(s.trailWidth * 0.5, (state.height / state.targets.dye.read.height) * 0.9);

    const emit = (s, dt, now) => {
      const { emitter, pointer } = state;
      const { velocity, dye } = state.targets;
      emitter.px = emitter.x;
      emitter.py = emitter.y;
      if (reduce || s.followSpeed >= 1) {
        emitter.x = pointer.x;
        emitter.y = pointer.y;
      } else {
        const omega = 10 + s.followSpeed * 50;
        const steps = Math.max(1, Math.ceil(dt / 0.004));
        const h = dt / steps;
        for (let k = 0; k < steps; k++) {
          emitter.vx += (omega * omega * (pointer.x - emitter.x) - 2 * omega * emitter.vx) * h;
          emitter.vy += (omega * omega * (pointer.y - emitter.y) - 2 * omega * emitter.vy) * h;
          emitter.x += emitter.vx * h;
          emitter.y += emitter.vy * h;
        }
      }
      const dx = emitter.x - emitter.px;
      const dy = emitter.y - emitter.py;
      const length = Math.hypot(dx, dy);
      if (length < 0.05 || !s.enabled) return;
      const radius = lightRadius(s);
      if (!reduce) {
        const target = toGrid(dx / Math.max(dt, 1e-3), dy / Math.max(dt, 1e-3));
        splat(
          velocity,
          emitter.px,
          emitter.py,
          emitter.x,
          emitter.y,
          radius * 4 + 18,
          [target[0], target[1], 0],
          3,
          FLOW * 0.6
        );
      }
      splat(dye, emitter.px, emitter.py, emitter.x, emitter.y, radius, [5.6, 5.6, 0.7], 2, 1, radius * 5 + 6);
      state.active = now;
    };

    const burst = (s, x, y, now) => {
      const { velocity, dye } = state.targets;
      const radius = lightRadius(s);
      const jets = 6;
      const base = Math.random() * Math.PI * 2;
      for (let k = 0; k < jets; k++) {
        const angle = base + (k / jets) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
        const cx = Math.cos(angle);
        const cy = Math.sin(angle);
        const reach = 20 + Math.random() * 14;
        const ax = x + cx * 3;
        const ay = y + cy * 3;
        const bx = x + cx * reach;
        const by = y + cy * reach;
        if (!reduce) {
          const target = toGrid(Math.cos(angle + 0.6) * 760, Math.sin(angle + 0.6) * 760);
          splat(velocity, ax, ay, bx, by, 18, [target[0], target[1], 0], 1, 0.9);
        }
        splat(dye, ax, ay, bx, by, radius * 1.1, [2.4, 2.4, 0.3], 0, 1, radius * 5 + 6);
      }
      splat(dye, x, y, x + 0.01, y, radius * 2.2, [1.8, 1.8, 0.4], 0, 1, radius * 7 + 10);
      state.active = now;
    };

    const step = (s, dt) => {
      const { velocity, dye, pressure, divergence } = state.targets;
      if (!reduce) {
        let u = use(passes.divergence, velocity.read.texel);
        gl.uniform1i(u.uVelocity, bind(0, velocity.read));
        draw(divergence);

        u = use(passes.scale, pressure.read.texel);
        gl.uniform1i(u.uSource, bind(0, pressure.read));
        gl.uniform1f(u.uValue, 0.8);
        draw(pressure.write);
        pressure.swap();

        u = use(passes.pressure, pressure.read.texel);
        gl.uniform1i(u.uDivergence, bind(1, divergence));
        for (let i = 0; i < PRESSURE_STEPS; i++) {
          gl.uniform1i(u.uPressure, bind(0, pressure.read));
          draw(pressure.write);
          pressure.swap();
        }

        u = use(passes.gradient, velocity.read.texel);
        gl.uniform1i(u.uPressure, bind(0, pressure.read));
        gl.uniform1i(u.uVelocity, bind(1, velocity.read));
        draw(velocity.write);
        velocity.swap();

        u = use(passes.advect, velocity.read.texel);
        gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
        gl.uniform1i(u.uVelocity, bind(0, velocity.read));
        gl.uniform1i(u.uSource, bind(0, velocity.read));
        gl.uniform1f(u.uDt, dt);
        const calm = Math.exp(-dt * 1.2);
        gl.uniform4f(u.uDecay, calm, calm, 1, 1);
        draw(velocity.write);
        velocity.swap();
      }

      const decay = [
        Math.exp((-dt * 4.6) / (s.linger * 0.8)),
        Math.exp((-dt * 4.6) / (s.linger * 0.2)),
        Math.exp((-dt * 4.6) / (s.linger * 1.2)),
        1
      ];
      const { forward, back } = state.targets;
      if (reduce) {
        const u = use(passes.advect, dye.read.texel);
        gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
        gl.uniform1i(u.uVelocity, bind(0, velocity.read));
        gl.uniform1i(u.uSource, bind(1, dye.read));
        gl.uniform1f(u.uDt, 0);
        gl.uniform4f(u.uDecay, decay[0], decay[1], decay[2], decay[3]);
        draw(dye.write);
        dye.swap();
        return;
      }
      let u = use(passes.advect, dye.read.texel);
      gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
      gl.uniform1i(u.uVelocity, bind(0, velocity.read));
      gl.uniform1i(u.uSource, bind(1, dye.read));
      gl.uniform1f(u.uDt, dt);
      gl.uniform4f(u.uDecay, 1, 1, 1, 1);
      draw(forward);
      gl.uniform1i(u.uSource, bind(1, forward));
      gl.uniform1f(u.uDt, -dt);
      draw(back);
      u = use(passes.maccormack, dye.read.texel);
      gl.uniform2f(u.uVelocityTexel, velocity.read.texel[0], velocity.read.texel[1]);
      gl.uniform2f(u.uSourceTexel, dye.read.texel[0], dye.read.texel[1]);
      gl.uniform1i(u.uVelocity, bind(0, velocity.read));
      gl.uniform1i(u.uSource, bind(1, dye.read));
      gl.uniform1i(u.uForward, bind(2, forward));
      gl.uniform1i(u.uBack, bind(3, back));
      gl.uniform1f(u.uDt, dt);
      gl.uniform4f(u.uDecay, decay[0], decay[1], decay[2], decay[3]);
      draw(dye.write);
      dye.swap();
    };

    const setShade = (u, s) => {
      gl.uniform3f(u.uColor, state.color[0], state.color[1], state.color[2]);
      gl.uniform3f(u.uSecondary, state.secondary[0], state.secondary[1], state.secondary[2]);
      gl.uniform1f(u.uIntensity, s.intensity);
      gl.uniform1f(u.uHotspot, s.hotspot);
    };

    const render = s => {
      const { dye, bloom } = state.targets;
      if (s.glow > 0) {
        let u = use(passes.prefilter, bloom[0].texel);
        gl.uniform1i(u.uDye, bind(0, dye.read));
        gl.uniform2f(u.uDyeTexel, dye.read.texel[0], dye.read.texel[1]);
        setShade(u, s);
        draw(bloom[0]);
        u = use(passes.down, bloom[0].texel);
        for (let i = 1; i < bloom.length; i++) {
          gl.uniform1i(u.uSource, bind(0, bloom[i - 1]));
          gl.uniform2f(u.uSourceTexel, bloom[i - 1].texel[0], bloom[i - 1].texel[1]);
          draw(bloom[i]);
        }
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE);
        u = use(passes.up, bloom[0].texel);
        for (let i = bloom.length - 1; i > 0; i--) {
          gl.uniform1i(u.uSource, bind(0, bloom[i]));
          gl.uniform2f(u.uSourceTexel, bloom[i].texel[0], bloom[i].texel[1]);
          draw(bloom[i - 1]);
        }
        gl.disable(gl.BLEND);
      }
      const u = use(passes.display, [1 / canvas.width, 1 / canvas.height]);
      gl.uniform1i(u.uDye, bind(0, dye.read));
      gl.uniform1i(u.uBloom, bind(1, bloom[0]));
      setShade(u, s);
      gl.uniform1f(u.uGlow, s.glow > 0 ? (s.glow * 1.4) / BLOOM_LEVELS : 0);
      gl.uniform1f(u.uGrain, s.grain);
      gl.uniform1f(u.uTime, state.time);
      gl.uniform1f(u.uLight, s.theme === 'light' ? 1 : 0);
      draw(null);
    };

    const blank = () => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
    };

    const frame = now => {
      raf = 0;
      if (resizePending) {
        resizePending = false;
        applyResize();
      }
      if (!alive || !visible || document.hidden) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(1 / 30, (now - last) / 1000) : 1 / 60;
      last = now;
      state.time += dt;
      const wanted = Math.min(window.devicePixelRatio || 1, Math.max(0.5, s.maxDevicePixelRatio || 2));
      if (Math.abs(wanted - state.ratio) > 0.01) applyResize();
      allocate();
      resolveColors(s);
      gl.bindVertexArray(vao);
      gl.disable(gl.BLEND);

      if (state.ready) emit(s, dt, now);
      while (state.bursts.length) {
        const [x, y] = state.bursts.shift();
        burst(s, x, y, now);
      }
      step(s, dt);
      render(s);

      const quiet = now - state.active > s.linger * 1200 + 900;
      const resting = Math.hypot(state.emitter.vx, state.emitter.vy) < 1;
      if (quiet && resting) {
        clearTargets();
        blank();
        last = 0;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (!raf && alive && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const onPointerMove = event => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      if (!inside) {
        if (state.pointer.inside) {
          state.pointer.inside = false;
          state.ready = false;
          wake();
        }
        return;
      }
      if (!state.ready) {
        state.emitter.x = x;
        state.emitter.y = y;
        state.emitter.px = x;
        state.emitter.py = y;
        state.emitter.vx = 0;
        state.emitter.vy = 0;
        state.ready = true;
      }
      state.pointer.x = x;
      state.pointer.y = y;
      state.pointer.inside = true;
      wake();
    };

    const onPointerDown = event => {
      const s = settingsRef.current;
      if (!s.clickBurst || !s.enabled) return;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      state.bursts.push([x, y]);
      wake();
    };

    const onPointerLeave = () => {
      state.pointer.inside = false;
      state.ready = false;
      wake();
    };

    const onVisibility = () => {
      last = 0;
      wake();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      wake();
    });
    resizeObserver.observe(container);
    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(container);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);
    resize();
    blank();

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      release();
      Object.values(passes).forEach(pass => gl.deleteProgram(pass.program));
      gl.deleteShader(vertexShader);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
    };
  }, []);

  const mode = blendMode ?? (theme === 'light' ? 'normal' : 'screen');

  return React.createElement(
    'div',
    Object.assign(
      {
        ref: containerRef,
        className: 'glow-cursor' + (className ? ' ' + className : ''),
        style: style
      },
      rest
    ),
    React.createElement('canvas', {
      ref: canvasRef,
      className: 'glow-cursor__canvas',
      style: { mixBlendMode: mode },
      'aria-hidden': 'true'
    }),
    children ? React.createElement('div', { className: 'glow-cursor__content' }, children) : null
  );
};



  
  /* =====================================================================
   * REACT BITS — RUBBER SEGMENT HEADER NAVIGATION RUNTIME
   * ===================================================================== */
  function initNavbarRubberSegment() {
    var segment = document.getElementById('navbarRubberSegment');
    var thumb = document.getElementById('navbarRubberThumb');
    if (!segment || !thumb) return;

    var items = segment.querySelectorAll('.rubber-segment__item:not(.rubber-segment__copy)');
    if (!items.length) return;

    var currentIndex = 0;
    var inset = 3;
    var slots = [];

    function measure() {
      var segRect = segment.getBoundingClientRect();
      slots = [];
      items.forEach(function (btn) {
        var r = btn.getBoundingClientRect();
        slots.push({
          l: r.left - segRect.left - inset,
          r: r.right - segRect.left - inset,
          width: r.width,
          height: r.height
        });
      });
      applySlot(currentIndex, false);
    }

    var currentL = 0;
    var currentR = 0;

    function applySlot(index, withAnimation) {
      if (index < 0 || index >= slots.length) return;
      var slot = slots[index];
      if (!slot) return;
      currentIndex = index;

      items.forEach(function (btn, i) {
        btn.setAttribute('aria-checked', i === index ? 'true' : 'false');
        btn.setAttribute('tabindex', i === index ? '0' : '-1');
      });

      var targetL = slot.l;
      var targetR = slot.r;

      if (!withAnimation) {
        currentL = targetL;
        currentR = targetR;
        thumb.style.transition = 'none';
        thumb.style.clipPath = 'inset(0px calc(100% - ' + targetR + 'px) 0px ' + targetL + 'px round 9999px)';
        return;
      }

      // Elastic rubber stretch & squash overshoot
      var movingRight = targetL > currentL;
      thumb.style.transition = 'clip-path 0.32s cubic-bezier(0.23, 1, 0.32, 1)';
      var squashAmount = 3.5;
      var overshootL = movingRight ? targetL : (targetL - squashAmount);
      var overshootR = movingRight ? (targetR + squashAmount) : targetR;
      
      thumb.style.clipPath = 'inset(0px calc(100% - ' + overshootR + 'px) 0px ' + overshootL + 'px round 9999px)';

      setTimeout(function () {
        thumb.style.transition = 'clip-path 0.18s cubic-bezier(0.25, 1, 0.5, 1)';
        thumb.style.clipPath = 'inset(0px calc(100% - ' + targetR + 'px) 0px ' + targetL + 'px round 9999px)';
        currentL = targetL;
        currentR = targetR;
      }, 180);
    }

    // Page switching: 'about' and 'team' open as new page views
    // 'home' and 'gallery' remain on the single scrollable page
    var pageItems = ['home', 'gallery', 'about', 'team'];

    function showPage(pageId) {
      var homeSections = document.getElementById('mainHomePage');
      var aboutSection = document.getElementById('mainAboutPage');
      var teamSection = document.getElementById('mainTeamPage');
      var footer = document.querySelector('footer');

      var slotMap = { home: 0, gallery: 1, about: 2, team: 3 };
      if (typeof slotMap[pageId] === 'number' && typeof applySlot === 'function') {
        applySlot(slotMap[pageId], true);
      }

      if (pageId === 'about') {
        // Trigger cinema loading animation for About!
        if (typeof window.showPreloader === 'function') {
          window.showPreloader(1200);
        }

        if (homeSections) homeSections.style.display = 'none';
        if (teamSection) teamSection.style.display = 'none';
        if (aboutSection) {
          aboutSection.style.display = '';
          aboutSection.style.animation = 'pageSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both';
        }
        if (footer) footer.style.display = '';
        window.scrollTo({ top: 0 });
      } else if (pageId === 'team') {
        // Trigger cinema loading animation for Team Profile!
        if (typeof window.showPreloader === 'function') {
          window.showPreloader(1200);
        }

        if (homeSections) homeSections.style.display = 'none';
        if (aboutSection) aboutSection.style.display = 'none';
        if (teamSection) {
          teamSection.style.display = '';
          teamSection.style.animation = 'pageSlideIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both';
          if (typeof renderAllMembers === 'function') renderAllMembers();
          if (typeof renderCreators === 'function') renderCreators();
        }
        if (footer) footer.style.display = '';
        window.scrollTo({ top: 0 });
      } else if (pageId === 'gallery') {
        if (homeSections) homeSections.style.display = '';
        if (aboutSection) aboutSection.style.display = 'none';
        if (teamSection) teamSection.style.display = 'none';
        if (footer) footer.style.display = '';
        setTimeout(function () {
          var el = document.getElementById('gallery');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        // home
        if (homeSections) homeSections.style.display = '';
        if (aboutSection) aboutSection.style.display = 'none';
        if (teamSection) teamSection.style.display = 'none';
        if (footer) footer.style.display = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    // Expose globally for any caller
    window.navigateToPage = showPage;

    items.forEach(function (btn, idx) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = btn.getAttribute('data-value');
        if (targetId) {
          showPage(targetId);
        }
      });
    });

    // Auto-track scroll position to slide the rubber thumb (only for home/gallery)
    var scrollThrottle = false;
    window.addEventListener('scroll', function () {
      if (scrollThrottle) return;
      scrollThrottle = true;
      requestAnimationFrame(function () {
        scrollThrottle = false;
        var homeSections = document.getElementById('mainHomePage');
        if (!homeSections || homeSections.style.display === 'none') return;
        var scrollY = window.scrollY + 180;
        var galleryEl = document.getElementById('gallery');
        if (galleryEl && galleryEl.offsetTop <= scrollY) {
          if (currentIndex !== 1) applySlot(1, true);
        } else {
          if (currentIndex !== 0) applySlot(0, true);
        }
      });
    }, { passive: true });

    // Universal navigation link listener for all #home, #gallery, #about, #team links
    document.addEventListener('click', function (e) {
      var anchor = e.target.closest('a');
      if (!anchor) return;
      var href = anchor.getAttribute('href');
      if (!href) return;

      if (href === '#about') {
        e.preventDefault();
        showPage('about');
      } else if (href === '#team') {
        e.preventDefault();
        showPage('team');
      } else if (href === '#home') {
        e.preventDefault();
        showPage('home');
      } else if (href === '#gallery') {
        e.preventDefault();
        showPage('gallery');
      }
    });

    measure();
    window.addEventListener('resize', measure, { passive: true });
    if (document.fonts) document.fonts.ready.then(measure);
    setTimeout(measure, 150);
    setTimeout(measure, 600);
  }

  function App() {
    React.useEffect(function () {
      // Initialize app logic when DOM is mounted
      try {
        // ── Page Section Wrapping ──
        // Wrap the about and team sections in containers so they can be
        // shown/hidden when the user clicks About or Team Profile in the navbar.
        // The home page (home + gear + gallery + infographics) stays scrollable.
        

        if (typeof initNavbarRubberSegment === 'function') {
          initNavbarRubberSegment();
        }
        if (typeof initCanvasParticles === 'function') {
          initCanvasParticles();
        }
        if (typeof renderCoverflow === 'function') {
          renderCoverflow();
        }
        if (typeof renderSocialInfographics === 'function') {
          renderSocialInfographics();
        }
        if (typeof renderClubImpactMatrix === 'function') {
          renderClubImpactMatrix();
        }
        if (typeof renderCreators === 'function') {
          renderCreators();
        }
        if (typeof renderAllMembers === 'function') {
          renderAllMembers();
        }
        if (typeof renderGalleryMarquee === 'function') {
          renderGalleryMarquee();
        }
        if (typeof renderFilterableGallery === 'function') {
          renderFilterableGallery();
        }
        if (typeof renderCategoryCards === 'function') {
          renderCategoryCards();
        }
        if (typeof bindInteractiveEffects === 'function') {
          bindInteractiveEffects();
        }
        if (typeof initScrollRevealAndCounters === 'function') {
          initScrollRevealAndCounters();
        }
        if (typeof applyHeroVideoConfig === 'function') {
          applyHeroVideoConfig();
        }
        if (typeof hydrateFromLiveSiteData === 'function') {
          hydrateFromLiveSiteData();
        }

        // Coverflow touch swipe support
        var cfTouchStartX = 0;
        var cfStage = document.getElementById('coverflowStage');
        if (cfStage) {
          cfStage.addEventListener('touchstart', function (e) {
            cfTouchStartX = e.touches[0].clientX;
          }, { passive: true });
          cfStage.addEventListener('touchend', function (e) {
            var diff = e.changedTouches[0].clientX - cfTouchStartX;
            if (Math.abs(diff) > 45 && typeof shiftCoverflow === 'function') {
              shiftCoverflow(diff < 0 ? 1 : -1);
            }
          }, { passive: true });
        }

        // Dismiss cinema preloader
        if (window.dismissPreloader) {
          setTimeout(window.dismissPreloader, 5000);
        }
      } catch (err) {
        console.error('VTU Media Club React mount error:', err);
        if (window.dismissPreloader) window.dismissPreloader();
      }
    }, []);

    return React.createElement(
      'div',
      {
        id: 'vtu-app-container',
        className: 'relative min-h-screen'
      },
      React.createElement(GlowCursor, {
        className: 'pointer-events-none fixed inset-0 z-40 w-full h-full',
        color: '#B21F29',
        secondaryColor: '#72090F',
        intensity: 1.3,
        trailWidth: 3,
        linger: 1.4,
        glow: 1.2,
        hotspot: 0.8,
        followSpeed: 0.6,
        clickBurst: true,
        theme: 'dark'
      }),
      React.createElement('div', {
        dangerouslySetInnerHTML: { __html: APP_TEMPLATE }
      })
    );
  }

  // Embed JavaScript logic, data repositories, and interactive handlers

    
    function getStoredData(key, fallback) {
      try {
        const item = localStorage.getItem(key);
        if (item) return JSON.parse(item);
        if (window.__LIVE_SITE_DATA__ && window.__LIVE_SITE_DATA__[key]) {
          return window.__LIVE_SITE_DATA__[key];
        }
        return fallback;
      } catch (e) {
        return fallback;
      }
    }

    async function hydrateFromLiveSiteData() {
      try {
        const res = await fetch('site-data.json?v=' + Date.now(), { cache: 'no-store' });
        if (res.ok) {
          const liveData = await res.json();
          window.__LIVE_SITE_DATA__ = liveData;
          let changed = false;
          ['vtu_media_productions', 'vtu_media_creators', 'vtu_media_members', 'vtu_media_gallery', 'vtu_media_hero_video'].forEach(k => {
            if (liveData[k]) {
              const current = localStorage.getItem(k);
              const serialized = JSON.stringify(liveData[k]);
              if (!current || current !== serialized) {
                localStorage.setItem(k, serialized);
                changed = true;
              }
            }
          });
          if (changed && typeof refreshAllDynamicSections === 'function') {
            refreshAllDynamicSections();
          }
        }
      } catch (err) {
        console.warn('Hydration from site-data.json fallback:', err);
      }
    }
    window.hydrateFromLiveSiteData = hydrateFromLiveSiteData;

    /* -----------------------------------------------------------------------
     * 1. DATA REPOSITORY EMBEDDED
     * --------------------------------------------------------------------- */
    const defaultProductions = [
  {
    "title": "VTU Fest '26 Official Aftermovie",
    "category": "Aftermovies",
    "director": "Aarav Deshpande",
    "duration": "03:42",
    "tag": "4K DCI RAW",
    "views": "48.2K",
    "summary": "Three electric days of mainstage concerts, cultural parades, and crowd euphoria cut to an original cinematic score.",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    "camera": "Sony FX3 \u2022 35mm GM",
    "lut": "Kodak 2383 Film Print",
    "accent": "from-indigo-500/35 to-violet-600/35"
  },
  {
    "title": "Midnight CodeSprint 48H",
    "category": "Aftermovies",
    "director": "Diya Patil",
    "duration": "02:18",
    "tag": "DOCUSERIES",
    "views": "18.9K",
    "summary": "Fast-paced docu-reel tracking 60 student engineering teams building AI and robotics prototypes overnight.",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85",
    "camera": "Sony A7SIII \u2022 24-70mm",
    "lut": "Technicolor Cyan Core",
    "accent": "from-cyan-500/30 to-indigo-600/35"
  },
  {
    "title": "Echoes of Belagavi",
    "category": "Short Films",
    "director": "Kabir Deshmukh",
    "duration": "06:15",
    "tag": "SHORT FILM",
    "views": "31.4K",
    "summary": "Award-winning student short exploring monsoon dusk, heritage architecture, and collegiate friendships across Jnana Sangama.",
    "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=85",
    "camera": "ARRI Alexa Mini LF",
    "lut": "Vintage 35mm Tungsten",
    "accent": "from-violet-500/35 to-fuchsia-600/30"
  },
  {
    "title": "25th Convocation Live Multi-Cam",
    "category": "Live Broadcast",
    "director": "Ishita Rao",
    "duration": "04:05",
    "tag": "MULTI-CAM 4K",
    "views": "62.1K",
    "summary": "5-camera ATEM switched broadcast with real-time lower-thirds, satellite uplink, and global alumni stream.",
    "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85",
    "camera": "Sony FX6 & ATEM ISO",
    "lut": "Broadcast Rec.709 Clean",
    "accent": "from-emerald-500/30 to-indigo-600/35"
  },
  {
    "title": "Neon Stage: Battle of Bands",
    "category": "Motion & VFX",
    "director": "Elian Shetty",
    "duration": "02:54",
    "tag": "VFX REEL",
    "views": "27.7K",
    "summary": "Audio-reactive LED backdrop visuals paired with gimbal tracking shots, laser sync, and kinetic 3D typography.",
    "image": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=85",
    "camera": "Sony FX3 \u2022 DJI RS4",
    "lut": "Neon Cyberpunk Grade",
    "accent": "from-indigo-500/35 to-rose-500/30"
  },
  {
    "title": "Jnana Sangama Campus Aerial FPV",
    "category": "Drone Cinema",
    "director": "Rohan Kamath",
    "duration": "02:40",
    "tag": "60FPS FPV",
    "views": "35.8K",
    "summary": "High-velocity acrobatic drone sweep over VTU headquarters, senate hall, lush botanical gardens, and tech parks.",
    "image": "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=85",
    "camera": "Custom 6S FPV \u2022 GoPro 12",
    "lut": "Golden Dusk Vivid",
    "accent": "from-amber-500/35 to-violet-600/30"
  },
  {
    "title": "Formula Student Track Trials",
    "category": "Aftermovies",
    "director": "Varun Gowda",
    "duration": "01:55",
    "tag": "120FPS SLOW-MO",
    "views": "23.4K",
    "summary": "Adrenaline-fueled mechanical engineering documentary capturing the VTU racing car accelerating at dawn.",
    "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=85",
    "camera": "Sony A7IV \u2022 70-200mm",
    "lut": "Monza High Contrast",
    "accent": "from-rose-500/35 to-amber-600/30"
  },
  {
    "title": "Kinetic Campus Brand Pack",
    "category": "Motion & VFX",
    "director": "Tanvi Naik",
    "duration": "01:36",
    "tag": "3D MOTION",
    "views": "19.5K",
    "summary": "Modular broadcast intro package and 3D stingers built for 12 VTU student clubs and university summits.",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85",
    "camera": "Blender 4.0 & After Effects",
    "lut": "ACEScg Linear to Rec.709",
    "accent": "from-purple-500/35 to-indigo-600/30"
  }
];
    const productions = getStoredData('vtu_media_productions', defaultProductions);

    // Hero Video Config Dynamic Ingest
    const defaultHeroVideo = {
      badge: "Latest Production",
      titlePrefix: "VTU Fest '26",
      titleItalic: "Official Aftermovie",
      title: "VTU Fest '26 Official Aftermovie",
      runtime: "03:42 • 4K RAW",
      shootLead: "Aarav Deshpande",
      buttonText: "Watch Reel",
      videoUrl: "assets/vtu_aftermovie.mp4",
      driveUrl: "https://drive.google.com/file/d/16KJ910LFb41wSqM4JIhKxU3kTfws1dIA/view?usp=sharing"
    };

    // Apply hero video config to DOM elements
    function applyHeroVideoConfig() {
      const cfg = getStoredData('vtu_media_hero_video', defaultHeroVideo);

      const badgeEl = document.getElementById('heroCardBadge');
      if (badgeEl && cfg.badge) badgeEl.textContent = cfg.badge;

      const titleEl = document.getElementById('heroCardTitle');
      if (titleEl) {
        const prefix = cfg.titlePrefix !== undefined ? cfg.titlePrefix : "VTU Fest '26";
        const italic = cfg.titleItalic !== undefined ? cfg.titleItalic : "Official Aftermovie";
        titleEl.innerHTML = `${prefix} <span class="font-editorial text-[#fda4af] font-normal text-2xl italic">${italic}</span>`;
      }

      const runtimeEl = document.getElementById('heroCardRuntime');
      if (runtimeEl && cfg.runtime) runtimeEl.textContent = cfg.runtime;

      const leadEl = document.getElementById('heroCardLead');
      if (leadEl && cfg.shootLead) leadEl.textContent = cfg.shootLead;

      const btnEl = document.getElementById('heroCardBtn');
      if (btnEl && cfg.buttonText) btnEl.textContent = cfg.buttonText;

      const v = document.getElementById('modalReelVideo');
      if (v && cfg.videoUrl) v.src = cfg.videoUrl;

      const titleEl2 = document.getElementById('reelModalTitle');
      if (titleEl2) {
        titleEl2.textContent = (cfg.titlePrefix ? cfg.titlePrefix + ' ' : '') + (cfg.titleItalic || cfg.title || "Official Aftermovie");
      }

      const driveEl = document.getElementById('reelModalDriveLink');
      if (driveEl && cfg.driveUrl) driveEl.href = cfg.driveUrl;

      const heroBgVideo = document.getElementById('heroBackgroundVideo');
      if (heroBgVideo && cfg.videoUrl) heroBgVideo.src = cfg.videoUrl;
    }

    const socialAnalyticsByYear = {
  "2024": {
    "total": "164.2K",
    "growth": "+38% YoY Organic",
    "eng": "8.2%",
    "watchHours": "12.4K hrs",
    "kpis": [
      {
        "platform": "Instagram",
        "handle": "@vtumediaclub",
        "metric": "9.4K",
        "sub": "Followers",
        "pct": 58,
        "color": "#ec4899",
        "delta": "+41%",
        "reach": "380K Imp"
      },
      {
        "platform": "YouTube",
        "handle": "VTU Media Official",
        "metric": "68K",
        "sub": "Annual Views",
        "pct": 52,
        "color": "#ef4444",
        "delta": "+34%",
        "reach": "8.2K Watch Hrs"
      },
      {
        "platform": "LinkedIn",
        "handle": "VTU Collective",
        "metric": "3.2K",
        "sub": "Campus Reach",
        "pct": 46,
        "color": "#3b82f6",
        "delta": "+52%",
        "reach": "92K Views"
      },
      {
        "platform": "X / Live",
        "handle": "@vtumedia_live",
        "metric": "42K",
        "sub": "Event Impressions",
        "pct": 49,
        "color": "#10b981",
        "delta": "+29%",
        "reach": "42K Live"
      }
    ],
    "months": [
      {
        "m": "Jan",
        "v": 32,
        "peak": false,
        "top": "Orientation Reel"
      },
      {
        "m": "Feb",
        "v": 46,
        "peak": false,
        "top": "Hackathon Teaser"
      },
      {
        "m": "Mar",
        "v": 78,
        "peak": true,
        "top": "VTU Fest '24 Day 1"
      },
      {
        "m": "Apr",
        "v": 54,
        "peak": false,
        "top": "Fest Recap Video"
      },
      {
        "m": "May",
        "v": 40,
        "peak": false,
        "top": "Farewell Doc"
      },
      {
        "m": "Aug",
        "v": 58,
        "peak": false,
        "top": "New Batch Welcome"
      },
      {
        "m": "Sep",
        "v": 64,
        "peak": false,
        "top": "Robo-Wars Highlights"
      },
      {
        "m": "Oct",
        "v": 82,
        "peak": true,
        "top": "Convocation 2024"
      },
      {
        "m": "Nov",
        "v": 70,
        "peak": false,
        "top": "Club Showcase Deck"
      }
    ]
  },
  "2025": {
    "total": "296.8K",
    "growth": "+51% YoY Organic",
    "eng": "9.9%",
    "watchHours": "19.8K hrs",
    "kpis": [
      {
        "platform": "Instagram",
        "handle": "@vtumediaclub",
        "metric": "17.2K",
        "sub": "Followers",
        "pct": 76,
        "color": "#ec4899",
        "delta": "+83%",
        "reach": "920K Imp"
      },
      {
        "platform": "YouTube",
        "handle": "VTU Media Official",
        "metric": "124K",
        "sub": "Annual Views",
        "pct": 71,
        "color": "#ef4444",
        "delta": "+82%",
        "reach": "16.4K Watch Hrs"
      },
      {
        "platform": "LinkedIn",
        "handle": "VTU Collective",
        "metric": "6.8K",
        "sub": "Campus Reach",
        "pct": 68,
        "color": "#3b82f6",
        "delta": "+112%",
        "reach": "240K Views"
      },
      {
        "platform": "X / Live",
        "handle": "@vtumedia_live",
        "metric": "79K",
        "sub": "Event Impressions",
        "pct": 66,
        "color": "#10b981",
        "delta": "+88%",
        "reach": "79K Live"
      }
    ],
    "months": [
      {
        "m": "Jan",
        "v": 44,
        "peak": false,
        "top": "New Year Drone Reel"
      },
      {
        "m": "Feb",
        "v": 58,
        "peak": false,
        "top": "Robotics Expo"
      },
      {
        "m": "Mar",
        "v": 88,
        "peak": true,
        "top": "VTU Fest '25 Aftermovie"
      },
      {
        "m": "Apr",
        "v": 66,
        "peak": false,
        "top": "Battle of Bands Cut"
      },
      {
        "m": "May",
        "v": 52,
        "peak": false,
        "top": "Sports Finals Reel"
      },
      {
        "m": "Aug",
        "v": 72,
        "peak": false,
        "top": "Freshers Premiere"
      },
      {
        "m": "Sep",
        "v": 78,
        "peak": false,
        "top": "E-Cell Demo Day"
      },
      {
        "m": "Oct",
        "v": 94,
        "peak": true,
        "top": "Convocation 2025 Live"
      },
      {
        "m": "Nov",
        "v": 80,
        "peak": false,
        "top": "Short Film Teaser"
      }
    ]
  },
  "2026": {
    "total": "428.5K",
    "growth": "+64% YoY Organic",
    "eng": "11.4%",
    "watchHours": "28.4K hrs",
    "kpis": [
      {
        "platform": "Instagram",
        "handle": "@vtumediaclub",
        "metric": "24.8K",
        "sub": "Followers",
        "pct": 91,
        "color": "#ec4899",
        "delta": "+44%",
        "reach": "1.8M Imp"
      },
      {
        "platform": "YouTube",
        "handle": "VTU Media Official",
        "metric": "185K",
        "sub": "Total Views",
        "pct": 86,
        "color": "#ef4444",
        "delta": "+49%",
        "reach": "28.4K Watch Hrs"
      },
      {
        "platform": "LinkedIn",
        "handle": "VTU Collective",
        "metric": "11.4K",
        "sub": "Alumni & Industry",
        "pct": 82,
        "color": "#3b82f6",
        "delta": "+68%",
        "reach": "480K Views"
      },
      {
        "platform": "X / Live",
        "handle": "@vtumedia_live",
        "metric": "132K",
        "sub": "Live Impressions",
        "pct": 88,
        "color": "#10b981",
        "delta": "+67%",
        "reach": "132K Live"
      }
    ],
    "months": [
      {
        "m": "Jan",
        "v": 56,
        "peak": false,
        "top": "Campus Winter Drone"
      },
      {
        "m": "Feb",
        "v": 68,
        "peak": false,
        "top": "CodeSprint Docuseries"
      },
      {
        "m": "Mar",
        "v": 98,
        "peak": true,
        "top": "VTU Fest '26 Flash Mob"
      },
      {
        "m": "Apr",
        "v": 76,
        "peak": false,
        "top": "Pro-Show 4K Cut"
      },
      {
        "m": "May",
        "v": 64,
        "peak": false,
        "top": "NIRF Doc Trailer"
      },
      {
        "m": "Aug",
        "v": 82,
        "peak": false,
        "top": "Orientation Mega Reel"
      },
      {
        "m": "Sep",
        "v": 88,
        "peak": false,
        "top": "National Summit"
      },
      {
        "m": "Oct",
        "v": 100,
        "peak": true,
        "top": "25th Convocation 4K"
      },
      {
        "m": "Nov",
        "v": 92,
        "peak": false,
        "top": "Belagavi Monsoons Short"
      }
    ]
  },
  "allTime": {
    "total": "889.5K",
    "growth": "+210% Lifetime Organic",
    "eng": "10.6%",
    "watchHours": "60.6K hrs",
    "kpis": [
      {
        "platform": "Instagram",
        "handle": "@vtumediaclub",
        "metric": "24.8K",
        "sub": "Active Followers",
        "pct": 98,
        "color": "#ec4899",
        "delta": "+164%",
        "reach": "3.1M Total Imp"
      },
      {
        "platform": "YouTube",
        "handle": "VTU Media Official",
        "metric": "377K",
        "sub": "Cumulative Views",
        "pct": 95,
        "color": "#ef4444",
        "delta": "+140%",
        "reach": "60.6K Watch Hrs"
      },
      {
        "platform": "LinkedIn",
        "handle": "VTU Collective",
        "metric": "21.4K",
        "sub": "Alumni Network",
        "pct": 92,
        "color": "#3b82f6",
        "delta": "+195%",
        "reach": "812K Views"
      },
      {
        "platform": "X / Live",
        "handle": "@vtumedia_live",
        "metric": "253K",
        "sub": "Lifetime Impressions",
        "pct": 94,
        "color": "#10b981",
        "delta": "+172%",
        "reach": "253K Live"
      }
    ],
    "months": [
      {
        "m": "2023",
        "v": 45,
        "peak": false,
        "top": "Founding Reel Series"
      },
      {
        "m": "Q1 '24",
        "v": 62,
        "peak": false,
        "top": "Fest '24 Campaign"
      },
      {
        "m": "Q3 '24",
        "v": 70,
        "peak": false,
        "top": "Convocation '24"
      },
      {
        "m": "Q1 '25",
        "v": 84,
        "peak": false,
        "top": "Fest '25 Aftermovie"
      },
      {
        "m": "Q3 '25",
        "v": 88,
        "peak": false,
        "top": "Convocation '25"
      },
      {
        "m": "Q1 '26",
        "v": 95,
        "peak": true,
        "top": "Fest '26 Mega Premiere"
      },
      {
        "m": "Q2 '26",
        "v": 92,
        "peak": false,
        "top": "Monsoon Cinema Reel"
      },
      {
        "m": "Q3 '26",
        "v": 100,
        "peak": true,
        "top": "25th Silver Jubilee Live"
      },
      {
        "m": "Q4 '26",
        "v": 96,
        "peak": false,
        "top": "Annual Club Showcase"
      }
    ]
  }
};
    const partnerClubsData = [
  {
    "id": "ieee",
    "name": "IEEE VTU Branch",
    "tag": "TECHNICAL SOCIETY",
    "icon": "\u26a1",
    "badge": "380+ Tech Participants",
    "summary": "We shoot 48-hour hackathon aftermovies, live stream keynote speakers, and produce high-converting teaser promos.",
    "deliverables": [
      "Midnight Hackathon 48H Aftermovie",
      "Speaker Auditorium Multi-Cam Feed",
      "Sponsor Showcase Reels & Pitch Deck"
    ],
    "reachImpact": "+280% Event Registrations \u2022 42K Online Views",
    "quote": "VTU Media Club transformed our technical symposium into a premier campus experience. Their same-night reel brought us our biggest sponsor.",
    "coordinator": "Prof. S. R. Hegde \u2022 Branch Counselor"
  },
  {
    "id": "robotics",
    "name": "Robotics & AI Society",
    "tag": "HARDWARE & ROBOTICS",
    "icon": "\ud83e\udd16",
    "badge": "24 Competing Teams",
    "summary": "High-speed 120fps slow-motion capture of combat robot arena battles, autonomous line-followers, and quadcopter fly-offs.",
    "deliverables": [
      "Robo-Wars Slow-Mo Highlights (120fps)",
      "Arena Battle Promo Trailers",
      "Technical Team Profiles"
    ],
    "reachImpact": "34K Reel Impressions \u2022 18 Engineering Colleges Reached",
    "quote": "Capturing high-velocity robot impacts requires serious camera skill. The media team delivered cinematic perfection.",
    "coordinator": "Dr. Manjunath K. \u2022 Faculty Advisor"
  },
  {
    "id": "cultural",
    "name": "Cultural Wing & Dance Club",
    "tag": "ARTS & PERFORMANCE",
    "icon": "\ud83c\udfad",
    "badge": "1,200+ Audience Peak",
    "summary": "Stage LED visual backdrops, multi-camera concert switching, dynamic gimbal tracking shots, and music video teasers.",
    "deliverables": [
      "Mainstage Concert Recap Film",
      "Audio-Reactive LED Stage Backdrops",
      "High-Energy Dance Performance Reels"
    ],
    "reachImpact": "68K Viral Instagram Views \u2022 4.2h Turnaround",
    "quote": "They made our dance crew look like an international touring team. The energy in their color grading is unbelievable.",
    "coordinator": "Ananya Sharma \u2022 Dance Wing Head"
  },
  {
    "id": "sports",
    "name": "VTU Sports Directorate",
    "tag": "ATHLETICS & TOURNAMENTS",
    "icon": "\ud83c\udfc6",
    "badge": "16 Inter-Collegiate Cups",
    "summary": "Golden-hour track & field sports photography, split-second athletic action portraits, and championship docu-reels.",
    "deliverables": [
      "Track & Field Golden Hour Photo Series",
      "Tournament Recap Aftermovie",
      "Athlete Spotlight Editorial Stills"
    ],
    "reachImpact": "1,400+ Published Sports Photos \u2022 Regional Press Coverage",
    "quote": "Every athlete feels like an Olympian with the photos they capture. The university sports record has never looked better.",
    "coordinator": "K. V. Patil \u2022 Physical Education Director"
  },
  {
    "id": "ecell",
    "name": "E-Cell & Startup Hub",
    "tag": "ENTREPRENEURSHIP",
    "icon": "\ud83d\ude80",
    "badge": "12 Funded Student Startups",
    "summary": "Pitch-deck showcase films, venture capital demo day live streams, and founder docuseries establishing student startup authority.",
    "deliverables": [
      "Startup Demo Day Live Stream",
      "Founder Story Spotlight Reels",
      "Investor Pitch Highlight Recaps"
    ],
    "reachImpact": "12 Seed Fund Connections \u2022 45K LinkedIn Impressions",
    "quote": "Professional video coverage gave our student founders the credibility needed when pitching to angel investors.",
    "coordinator": "Vikram Desai \u2022 E-Cell President"
  },
  {
    "id": "nss",
    "name": "NSS & Red Cross Society",
    "tag": "COMMUNITY & SOCIAL SERVICE",
    "icon": "\ud83e\udd1d",
    "badge": "850+ Donors & Volunteers",
    "summary": "Impactful documentary storytelling covering campus blood donation drives, environmental cleanups, and rural education camps.",
    "deliverables": [
      "Blood Donation Mega Camp Video",
      "Green Jnana Sangama Eco Reel",
      "Rural Outreach Photo Essay"
    ],
    "reachImpact": "Record 850 Blood Units Collected \u2022 State Recognition",
    "quote": "Their emotional and dignified storytelling directly motivated hundreds of first-time blood donors to step forward.",
    "coordinator": "Pooja Hiremath \u2022 NSS Student Lead"
  }
];
    const defaultFeaturedCreators = [
  {
    name: "Arpan Satapathy",
    handle: "@arpan.cine",
    role: "Executive Creative Director & DOP",
    bio: "Directs overarching cinematic vision, multi-camera auditorium stage setups, and high-fidelity lighting master plans for university landmark productions.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85",
    stats: ["Creative Lead", "DOP Directorate", "Sony FX3 Rig"]
  },
  {
    name: "Grish Ganeshgudi",
    handle: "@grish.visuals",
    role: "Head of Cinematography & Aerial",
    bio: "Commands on-ground cinema rigs, rapid FPV drone flythroughs, and dynamic stage tracking shots across mega campus festivals.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85",
    stats: ["Cinematography", "FPV & RS4 Pro", "Aerial Cinema"]
  },
  {
    name: "Sourabh Pote",
    handle: "@sunil.post",
    role: "Chief Editor & Colorist",
    bio: "Orchestrates rhythmic aftermovie narrative pacing, DaVinci Resolve film-emulation color workflows, and same-day highlight assemblies.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=85",
    stats: ["Post Lead", "DaVinci Resolve", "Kodak 2383"]
  },
  {
    name: "Ramesh Bekkeri",
    handle: "@ramesh.live",
    role: "Live Production & Broadcast Director",
    bio: "Directs multi-camera auditorium switching, low-latency live broadcast streams, sound mix engineering, and campus event broadcast networks.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=85",
    stats: ["Broadcast Lead", "ATEM Live Switch", "Sound Systems"]
  }
];
    const featuredCreators = getStoredData('vtu_media_creators', defaultFeaturedCreators);
    const defaultAllMembers = [
  {
    name: "Vikram",
    category: "Core Team",
    role: "Club President & Lead Editor",
    dept: "Cinematography",
    handle: "@vikram.vtu",
    gear: "Sony FX3 • DaVinci Resolve Studio • Director Rig",
    credits: "President • 2VX23CB060 • Master Assembly",
    bio: "President of VTU Media Club (2VX23CB060). Leads executive operations, university institutional coverage, multi-cam auditorium broadcasts, and master editorial assembly.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
    exif: "2VX23CB060 • Sony FX3 • 35mm f/1.4"
  },
  {
    name: "Harshada",
    category: "Core Team",
    role: "Club Vice President",
    dept: "Cinematography",
    handle: "@harshada.vtu",
    gear: "Production Coordination • Logistics Matrix",
    credits: "Vice President • 2VX24CB027 • Executive Wing",
    bio: "Vice President of VTU Media Club (2VX24CB027). Coordinates sister club partnerships, production logistics, university media liaison, and festival event planning.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85",
    exif: "2VX24CB027 • Production Directorate"
  },
  {
    name: "Nihal",
    category: "Core Team",
    role: "Lead Videographer & Senior Editor",
    dept: "Cinematography",
    handle: "@nihal.cine",
    gear: "Sony A7IV • 24-70mm f/2.8 GM • S-Log3",
    credits: "Videography & Editing • 2VX25VL026",
    bio: "Leads on-ground camera operations (2VX25VL026), dynamic gimbal tracking shots, auditorium stages, and narrative aftermovie editing for flagship VTU productions.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25VL026 • 4K DCI • 1/120s • S-Log3"
  },
  {
    name: "Adarsh",
    category: "Core Team",
    role: "Head of PR & Graphic Design",
    dept: "Motion & VFX",
    handle: "@adarsh.creative",
    gear: "Adobe Photoshop • Illustrator • Brand Design",
    credits: "PR, Graphics & Treasury • 2VX24CB003",
    bio: "Heads Public Relations and Graphic Design (2VX24CB003). Manages media relations, brand identity suites, official posters, and oversees club treasury disbursements.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85",
    exif: "2VX24CB003 • Vector Art • PR Strategy"
  },
  {
    name: "Prajwal V Gowda",
    category: "Core Team",
    role: "Web UI/UX Lead & Data Systems",
    dept: "Motion & VFX",
    handle: "@prajwal.dev",
    gear: "React • Tailwind CSS • Cloud Data SAN",
    credits: "Web UI/UX & Data • 2VX24CB061",
    bio: "Architect of the VTU Media digital web platform (2VX24CB061). Designs interactive digital experiences, portal interfaces, and manages campus media databases.",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=85",
    exif: "2VX24CB061 • UI/UX Architecture"
  },
  {
    name: "Arun",
    category: "Members",
    role: "Cinematographer & Data Systems",
    dept: "Cinematography",
    handle: "@arun.visuals",
    gear: "Cinema Rigs • 4K DCI • High-Speed Storage",
    credits: "Videography & Data • 2VX25VL009",
    bio: "Captures multi-angle event videography (2VX25VL009) and manages real-time media ingestion, RAID archival storage, and digital asset workflows.",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25VL009 • DCI 4K RAW • Ingest Desk"
  },
  {
    name: "Krutika",
    category: "Members",
    role: "Cinematographer & Camera Operator",
    dept: "Cinematography",
    handle: "@krutika.frames",
    gear: "Sony Cinema Line • 50mm f/1.4 Prime • Gimbal",
    credits: "Videography Team • 2VX25CS033",
    bio: "Captures expressive festival cinematography (2VX25CS033), stage performances, artistic slow-motion sequences, and speaker spotlight coverage.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25CS033 • 50mm f/1.4 • 60fps"
  },
  {
    name: "Krupal",
    category: "Members",
    role: "Senior Video Editor",
    dept: "Editing & Color",
    handle: "@krupal.edits",
    gear: "DaVinci Resolve Studio • Premiere Pro",
    credits: "Editorial Team • 2VX25CB042",
    bio: "Drives rhythmic aftermovie pacing (2VX25CB042), rapid turnaround highlight cuts, and multi-track audio synching for university events.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25CB042 • ProRes 422 HQ • 24fps"
  },
  {
    name: "Om",
    category: "Members",
    role: "Film Editor & Colorist",
    dept: "Editing & Color",
    handle: "@om.cuts",
    gear: "DaVinci Resolve • Final Cut Pro • Kodak 2383",
    credits: "Editorial Team • 2VX25RA029",
    bio: "Handles filmic color grading (2VX25RA029), dynamic range mastering, sound design integration, and documentary assembly.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25RA029 • DaVinci Wide Gamut ACES"
  },
  {
    name: "Araman",
    category: "Core Team",
    role: "Social Media Lead",
    dept: "Editing & Color",
    handle: "@araman.social",
    gear: "Social Growth Strategy • CapCut Pro • Analytics",
    credits: "Social Media Lead • 2VX24CB014",
    bio: "Leads VTU Media's digital outreach (2VX24CB014), viral reel concepts, trend analytics, and real-time social broadcasting for campus life.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85",
    exif: "2VX24CB014 • 9:16 Vertical • Viral Desk"
  },
  {
    name: "Srushti",
    category: "Members",
    role: "Social Media Strategist",
    dept: "Editing & Color",
    handle: "@srushti.creates",
    gear: "Mobile Direction • Trend Algorithms",
    credits: "Social Media Team • 2VX25CB101",
    bio: "Crafts high-impact Instagram Reels (2VX25CB101), interactive campus stories, live fest broadcasts, and community highlight threads.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25CB101 • 4K Vertical • Story Desk"
  },
  {
    name: "Keerti",
    category: "Members",
    role: "Digital Outreach Specialist",
    dept: "Editing & Color",
    handle: "@keerti.media",
    gear: "Community Ingest • Mobile Cinema",
    credits: "Social Media Team • 2VX24CB035",
    bio: "Fosters engagement across university departments (2VX24CB035), student clubs, live festival takeovers, and creator spotlight series.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85",
    exif: "2VX24CB035 • Social Community Desk"
  },
  {
    name: "Apoorva",
    category: "Members",
    role: "Social Media Content Specialist",
    dept: "Editing & Color",
    handle: "@apoorva.digital",
    gear: "Creative Copywriting • Visual Storytelling",
    credits: "Social Media Team • 2VX25CB126",
    bio: "Drafts engaging promotional campaigns (2VX25CB126), festival schedule announcements, and interactive audience polls.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25CB126 • Copy & Visual Layouts"
  },
  {
    name: "Nagaraj",
    category: "Members",
    role: "Graphic Designer",
    dept: "Graphic Design",
    handle: "@nagaraj.design",
    gear: "Adobe Illustrator • Photoshop • Blender",
    credits: "Graphics Design Team • 2VX25VL028",
    bio: "Designs official event posters (2VX25VL028), print collateral, certificates, merchandise key art, and stage screen graphics.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25VL028 • Vector Art & Key Graphics"
  },
  {
    name: "Agam",
    category: "Core Team",
    role: "Treasurer & Production Logistics",
    dept: "Live & Audio",
    handle: "@agam.production",
    gear: "Treasury Ingest • Equipment Logistics Matrix",
    credits: "Treasurer • 2VX25CB125 • Production",
    bio: "Oversees club treasury (2VX25CB125), equipment allocations, production requisitions, vendor coordination, and fest operational budgeting.",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=85",
    exif: "2VX25CB125 • Financial & Gear Logistics"
  }
];
    const allMembers = getStoredData('vtu_media_members', defaultAllMembers);
    const defaultGalleryStills = [
  {
    "title": "Mainstage Laser Finale",
    "cat": "Campus Fests",
    "creator": "Aarav Deshpande",
    "exif": "Sony FX3 \u2022 35mm f/1.4 \u2022 ISO 1600 \u2022 1/250s",
    "img": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Backstage Portrait in Blue",
    "cat": "Portraits",
    "creator": "Mira Kulkarni",
    "exif": "Sony A7IV \u2022 85mm f/1.8 \u2022 ISO 640 \u2022 1/160s",
    "img": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Late Night Edit Suite",
    "cat": "Behind the Scenes",
    "creator": "Niharika Joshi",
    "exif": "Sony A7SIII \u2022 24mm f/2.0 \u2022 ISO 1250 \u2022 1/50s",
    "img": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Crowd Euphoria \u2014 Day 2",
    "cat": "Campus Fests",
    "creator": "Varun Gowda",
    "exif": "Canon R6 \u2022 50mm f/1.4 \u2022 ISO 2000 \u2022 1/320s",
    "img": "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Monsoon Dusk Architecture",
    "cat": "Cinematography",
    "creator": "Rohan Kamath",
    "exif": "Sony FX3 \u2022 16mm f/2.8 \u2022 ISO 400 \u2022 1/60s",
    "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Acoustic Night Mic Check",
    "cat": "Behind the Scenes",
    "creator": "Aditya Patil",
    "exif": "Sony A7IV \u2022 50mm f/1.8 \u2022 ISO 800 \u2022 1/125s",
    "img": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Editorial Studio Warmth",
    "cat": "Portraits",
    "creator": "Mira Kulkarni",
    "exif": "Sony A7IV \u2022 85mm f/1.4 \u2022 ISO 200 \u2022 1/200s",
    "img": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Cinema Rig Calibration",
    "cat": "Behind the Scenes",
    "creator": "Pranav Hegde",
    "exif": "Sony FX3 \u2022 35mm f/2.0 \u2022 ISO 500 \u2022 1/100s",
    "img": "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Neon Keylight Study",
    "cat": "Portraits",
    "creator": "Elian Shetty",
    "exif": "Sony A7SIII \u2022 50mm f/1.2 \u2022 ISO 1000 \u2022 1/250s",
    "img": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Track Finals Golden Hour",
    "cat": "Sports & Action",
    "creator": "Varun Gowda",
    "exif": "Sony A7IV \u2022 70-200mm f/2.8 \u2022 ISO 320 \u2022 1/1600s",
    "img": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Spotlight Silhouette",
    "cat": "Campus Fests",
    "creator": "Pranav Hegde",
    "exif": "Sony FX3 \u2022 85mm f/1.8 \u2022 ISO 1600 \u2022 1/200s",
    "img": "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Motion Shader Study",
    "cat": "Cinematography",
    "creator": "Tanvi Naik",
    "exif": "Blender Cycles \u2022 4K ACEScg \u2022 60fps",
    "img": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Director's Slate Take 4",
    "cat": "Cinematography",
    "creator": "Kabir Deshmukh",
    "exif": "Sony FX3 \u2022 24mm f/1.4 \u2022 ISO 800 \u2022 1/48s",
    "img": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Auditorium Keynote Live",
    "cat": "Behind the Scenes",
    "creator": "Ishita Rao",
    "exif": "Sony A7IV \u2022 35mm f/1.8 \u2022 ISO 1000 \u2022 1/125s",
    "img": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Starlit Campus Ridge",
    "cat": "Cinematography",
    "creator": "Rohan Kamath",
    "exif": "Sony A7SIII \u2022 14mm f/1.8 \u2022 ISO 3200 \u2022 15s",
    "img": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Lens Flare Close-Up",
    "cat": "Behind the Scenes",
    "creator": "Aarav Deshpande",
    "exif": "Sony FX3 \u2022 50mm f/1.2 \u2022 ISO 400 \u2022 1/500s",
    "img": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Hackathon Midnight Glow",
    "cat": "Sports & Action",
    "creator": "Diya Patil",
    "exif": "Sony A7IV \u2022 35mm f/1.4 \u2022 ISO 1250 \u2022 1/100s",
    "img": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "DJ Console Strobe",
    "cat": "Campus Fests",
    "creator": "Elian Shetty",
    "exif": "Sony FX3 \u2022 24mm f/1.4 \u2022 ISO 2500 \u2022 1/200s",
    "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
  }
];
    const galleryStills = getStoredData('vtu_media_gallery', defaultGalleryStills);
    const galleryCategories = [
  {
    "title": "Campus Fests",
    "count": "420+ Stills",
    "desc": "High-voltage concert nights, cultural showcases, pro-shows, and electric crowd energy from VTU Fest.",
    "thumbs": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=400&q=80"
    ],
    "wide": "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Cinematography",
    "count": "86 Reels",
    "desc": "Anamorphic campus short films, narrative experiments, gimbal tracking shots, and graded 4K cinema stills.",
    "thumbs": [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80"
    ],
    "wide": "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Portraits",
    "count": "310+ Frames",
    "desc": "Editorial lighting studies, student artist profiles, dramatic gel portraits, and natural golden-hour frames.",
    "thumbs": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    ],
    "wide": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    "title": "Motion & VFX",
    "count": "64 Comps",
    "desc": "3D stage visuals, After Effects title sequences, HUD motion overlays, and club teaser packs.",
    "thumbs": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
    ],
    "wide": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  }
];

    /* -----------------------------------------------------------------------
     * 2. PROCEDURAL WEB AUDIO SYNTHESIZER (ZERO EXTERNAL DEPENDENCY)
     * --------------------------------------------------------------------- */
    let audioCtx = null;
    let soundEnabled = false;

    function getAudioContext() {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      return audioCtx;
    }

    function toggleSound() {
      soundEnabled = !soundEnabled;
      document.getElementById('soundOnIcon').classList.toggle('hidden', !soundEnabled);
      document.getElementById('soundOffIcon').classList.toggle('hidden', soundEnabled);
      const btn = document.getElementById('soundToggleBtn');
      if (soundEnabled) {
        getAudioContext();
        btn.classList.add('border-indigo-400', 'text-indigo-300', 'bg-indigo-500/15');
        showToast('Cinema Sound FX: Enabled');
        playShutterSound();
      } else {
        btn.classList.remove('border-indigo-400', 'text-indigo-300', 'bg-indigo-500/15');
        showToast('Cinema Sound FX: Muted');
      }
    }

    function playShutterSound() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        // Mechanical Camera Click
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.04);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } catch (e) {}
    }

    function playWhooshSound() {
      if (!soundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.14);
      } catch (e) {}
    }

    /* -----------------------------------------------------------------------
     * 3. INTERACTIVE BACKGROUND PARTICLES & BOKEH CANVAS
     * --------------------------------------------------------------------- */
    function initCanvasParticles() {
      const canvas = document.getElementById('cinemaFxCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let w = canvas.width = window.innerWidth;
      let h = canvas.height = window.innerHeight;

      window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
      });

      const particles = [];
      const count = Math.min(55, Math.floor(w / 30));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2.2 + 0.8,
          dx: (Math.random() - 0.5) * 0.45,
          dy: (Math.random() - 0.5) * 0.45,
          alpha: Math.random() * 0.35 + 0.1,
          hue: Math.random() > 0.5 ? 240 : 270
        });
      }

      let mouseX = w / 2, mouseY = h / 2;
      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }, { passive: true });

      function animate() {
        ctx.clearRect(0, 0, w, h);
        for (let p of particles) {
          p.x += p.dx;
          p.y += p.dy;
          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;

          // Gentle mouse repulsion
          const dist = Math.hypot(mouseX - p.x, mouseY - p.y);
          if (dist < 140) {
            p.x += (p.x - mouseX) * 0.015;
            p.y += (p.y - mouseY) * 0.015;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.alpha})`;
          ctx.fill();
        }
        requestAnimationFrame(animate);
      }
      animate();
    }

    /* -----------------------------------------------------------------------
     * 4. CINEMA VIEWFINDER HUD MODE ENGINE
     * --------------------------------------------------------------------- */
    let hudActive = false;
    let hudTimer = null;

    function toggleViewfinderHud() {
      hudActive = !hudActive;
      const hud = document.getElementById('viewfinderHud');
      const btn = document.getElementById('hudToggleBtn');
      if (!hud) return;

      if (hudActive) {
        hud.classList.remove('hud-hidden');
        btn.classList.add('border-indigo-400', 'text-white', 'bg-indigo-500/25', 'shadow-glow-indigo');
        showToast('Cinema Viewfinder HUD: Active');
        playWhooshSound();
        startHudTimer();
      } else {
        hud.classList.add('hud-hidden');
        btn.classList.remove('border-indigo-400', 'text-white', 'bg-indigo-500/25', 'shadow-glow-indigo');
        showToast('Cinema Viewfinder HUD: Closed');
        clearInterval(hudTimer);
      }
    }

    function startHudTimer() {
      clearInterval(hudTimer);
      let frames = 18, secs = 32, mins = 14;
      hudTimer = setInterval(() => {
        frames++;
        if (frames >= 24) {
          frames = 0;
          secs++;
          if (secs >= 60) { secs = 0; mins++; }
        }
        const el = document.getElementById('hudTimecode');
        if (el) {
          el.textContent = `00:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}:${String(frames).padStart(2, '0')}`;
        }
      }, 1000 / 24);
    }

    /* -----------------------------------------------------------------------
     * 5. WORK SHOWCASE WITH 3D COVERFLOW & VISUAL EFFECTS SWITCHER
     * --------------------------------------------------------------------- */
    let currentWorkEffect = 'standard';
    let activeProductionIdx = 0;
    let activeWorkFilter = 'All';

    function setWorkEffect(effect) {
      currentWorkEffect = effect;
      playWhooshSound();

      // Update button styling
      const buttons = [
        { id: 'btnFxStandard', val: 'standard' },
        { id: 'btnFxAnamorphic', val: 'anamorphic' },
        { id: 'btnFxKodak', val: 'kodak' },
        { id: 'btnFxGlitch', val: 'glitch' },
        { id: 'btnFxNight', val: 'night' },
        { id: 'btnFxSlog', val: 'slog' }
      ];

      buttons.forEach(b => {
        const el = document.getElementById(b.id);
        if (!el) return;
        if (b.val === effect) {
          el.className = 'fx-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500 text-white shadow-glow-indigo transition-all';
        } else {
          el.className = 'fx-btn px-3.5 py-1.5 rounded-xl text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-all';
        }
      });

      // Apply effect class to stage & grid
      const stage = document.getElementById('showcaseStageWrapper');
      const grid = document.getElementById('workShowcaseGrid');
      const allFxClasses = ['effect-mode-anamorphic', 'effect-mode-kodak', 'effect-mode-glitch', 'effect-mode-night', 'effect-mode-slog'];

      allFxClasses.forEach(c => {
        if (stage) stage.classList.remove(c);
        if (grid) grid.classList.remove(c);
      });

      if (effect !== 'standard') {
        const targetClass = `effect-mode-${effect}`;
        if (stage) stage.classList.add(targetClass);
        if (grid) grid.classList.add(targetClass);
      }

      showToast(`Visual Preset: ${effect.toUpperCase()} loaded across production vault`);
    }

    function renderCoverflow() {
      const activeProdList = getStoredData('vtu_media_productions', productions);
      const stage = document.getElementById('coverflowStage');
      const dots = document.getElementById('coverflowDots');
      if (!stage || !dots) return;

      const list = activeProdList.slice(0, 5);
      const total = list.length;
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

      stage.innerHTML = '';
      dots.innerHTML = '';

      list.forEach((p, idx) => {
        let offset = idx - activeProductionIdx;
        while (offset > total / 2) offset -= total;
        while (offset < -total / 2) offset += total;

        const absOffset = Math.abs(offset);
        const isCenter = offset === 0;
        const stepX = isMobile ? 140 : isTablet ? 215 : 260;
        const translateX = offset * stepX;
        const scale = isCenter ? 1.06 : absOffset === 1 ? 0.88 : 0.74;
        const zIndex = 30 - absOffset * 10;
        const opacity = isCenter ? 1 : absOffset === 1 ? 0.78 : isMobile ? 0 : 0.42;
        const blur = isCenter ? 'blur(0px)' : absOffset === 1 ? 'blur(0.5px)' : 'blur(1.6px)';

        const card = document.createElement('div');
        card.className = `coverflow-card absolute w-[290px] sm:w-[350px] md:w-[390px] rounded-3xl overflow-hidden bg-surface cursor-pointer shadow-2xl ${
          isCenter
            ? 'border-2 border-indigo-400/80 shadow-glow-violet ring-1 ring-white/20'
            : 'border border-white/10 hover:border-white/25'
        }`;
        card.style.transform = `translateX(${translateX}px) scale(${scale})`;
        card.style.zIndex = zIndex;
        card.style.opacity = opacity;
        card.style.filter = blur;

        card.innerHTML = `
          <div class="relative aspect-[16/10] overflow-hidden bg-obsidian">
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="imgFallback(this)" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-surface via-black/25 to-transparent"></div>
            <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono text-indigo-200">${p.tag}</span>
              <span class="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200">${p.duration}</span>
            </div>
            ${
              isCenter
                ? `<div class="absolute inset-0 flex items-center justify-center">
                    <span class="w-14 h-14 rounded-full bg-indigo-500/85 backdrop-blur-md text-white flex items-center justify-center shadow-glow-indigo">
                      <svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </span>
                   </div>`
                : ''
            }
          </div>
          <div class="p-5 space-y-1.5 relative z-10">
            <div class="flex items-center justify-between text-xs">
              <span class="text-indigo-300 font-medium">${p.category}</span>
              <span class="font-mono text-zinc-400">${p.views} views</span>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-white leading-snug truncate">${p.title}</h3>
            <p class="text-xs text-zinc-400 line-clamp-1">${p.summary}</p>
            <div class="flex items-center justify-between pt-2 border-t border-white/[0.08] text-[10px] text-zinc-400 font-mono">
              <span>Cam: ${p.camera.split('•')[0]}</span>
              <span class="text-indigo-300 font-sans font-medium">Dir. ${p.director.split(' ')[0]}</span>
            </div>
          </div>
        `;

        card.addEventListener('click', () => {
          if (isCenter) {
            openShowreelModal(idx);
          } else {
            shiftCoverflow(offset > 0 ? 1 : -1);
          }
        });

        stage.appendChild(card);

        // Dot indicator
        const dot = document.createElement('button');
        dot.className = `w-2 h-2 rounded-full transition-all ${
          isCenter ? 'w-8 bg-indigo-400' : 'bg-white/20 hover:bg-white/40'
        }`;
        dot.onclick = () => {
          activeProductionIdx = idx;
          playWhooshSound();
          renderCoverflow();
        };
        dots.appendChild(dot);
      });
    }

    function shiftCoverflow(delta) {
      const total = productions.slice(0, 5).length;
      activeProductionIdx = (activeProductionIdx + delta + total) % total;
      playWhooshSound();
      renderCoverflow();
    }

    function renderWorkShowcase() {
      const filters = ['All', 'Aftermovies', 'Short Films', 'Motion & VFX', 'Live Broadcast', 'Drone Cinema'];
      const bar = document.getElementById('workFilterBar');
      const grid = document.getElementById('workShowcaseGrid');
      if (!bar || !grid) return;

      bar.innerHTML = filters.map(f => `
        <button onclick="activeWorkFilter='${f}'; playWhooshSound(); renderWorkShowcase()" class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
          activeWorkFilter === f
            ? 'bg-indigo-500/25 text-white border border-indigo-400/60 shadow-glow-indigo'
            : 'bg-white/[0.03] text-zinc-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
        }">${f}</button>
      `).join('');

      const filtered = activeWorkFilter === 'All'
        ? productions
        : productions.filter(p => p.category === activeWorkFilter);

      grid.innerHTML = filtered.map((p) => {
        const realIdx = productions.indexOf(p);
        return `
          <article onclick="openShowreelModal(${realIdx})" class="work-card spotlight-card tilt-card group cursor-pointer rounded-[1.6rem] overflow-hidden bg-surface/90 border border-white/[0.09] hover:border-indigo-400/50 shadow-xl transition-all" data-tilt="5">
            <div class="relative aspect-[16/10] overflow-hidden bg-obsidian">
              <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="imgFallback(this)" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-surface via-black/25 to-transparent"></div>
              <!-- Animated Cinema Scan Bar Effect on Hover -->
              <div class="scan-bar pointer-events-none opacity-0 absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-indigo-400/25 to-transparent"></div>
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono text-indigo-200">${p.tag}</span>
                <span class="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[10px] font-mono text-zinc-200">${p.duration}</span>
              </div>
              <!-- Center Hover Play Pill -->
              <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="px-4 py-2 rounded-full bg-indigo-500/85 backdrop-blur-md text-xs font-semibold text-white shadow-glow-indigo">▶ Preview Reel</span>
              </div>
            </div>
            <div class="p-5 space-y-2.5 relative z-10">
              <div class="flex items-center justify-between text-[11px]">
                <span class="text-indigo-300 font-medium">${p.category}</span>
                <span class="font-mono text-zinc-400">${p.views} views</span>
              </div>
              <h4 class="text-lg font-semibold text-white group-hover:text-indigo-200 transition-colors">${p.title}</h4>
              <p class="text-xs text-zinc-400 leading-relaxed line-clamp-2">${p.summary}</p>
              <div class="pt-3 border-t border-white/[0.07] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Gear: ${p.camera.split('•')[0]}</span>
                <span class="text-indigo-300 group-hover:translate-x-1 transition-transform">Watch →</span>
              </div>
            </div>
          </article>
        `;
      }).join('');

      bindInteractiveEffects();
    }

    /* -----------------------------------------------------------------------
     * 6. SOCIAL MEDIA INFOGRAPHICS & CALCULATOR ENGINE
     * --------------------------------------------------------------------- */
    let currentAnalyticsYear = '2026';

    function setAnalyticsYear(year) {
      currentAnalyticsYear = year;
      playWhooshSound();
      ['2024', '2025', '2026', 'allTime'].forEach(y => {
        const btn = document.getElementById('btnYear' + y);
        if (!btn) return;
        if (y === year) {
          btn.className = 'year-btn px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 shadow-glow-indigo transition-all';
        } else {
          btn.className = 'year-btn px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white transition-all';
        }
      });
      renderSocialInfographics();
    }

    function renderSocialInfographics() {
      const data = socialAnalyticsByYear[currentAnalyticsYear];
      const kpiGrid = document.getElementById('socialKpiGrid');
      const barChart = document.getElementById('monthlyBarChart');
      if (!data || !kpiGrid || !barChart) return;

      document.getElementById('chartTotalLabel').textContent = data.total;
      document.getElementById('chartGrowthLabel').textContent = data.growth;
      document.getElementById('donutCenterStat').textContent = data.eng;

      // Render 4 KPI Cards with Animated SVG Ring Gauges
      const circumference = 2 * Math.PI * 26;
      kpiGrid.innerHTML = data.kpis.map((item) => {
        const offset = circumference - (item.pct / 100) * circumference;
        return `
          <div class="spotlight-card rounded-[1.5rem] bg-surface/90 border border-white/[0.09] hover:border-white/20 p-5 flex items-center justify-between gap-4 transition-all">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-semibold text-white">${item.platform}</span>
                <span class="px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 text-[10px] font-mono">${item.delta}</span>
              </div>
              <p class="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono">${item.metric}</p>
              <p class="text-[11px] text-zinc-400">${item.sub} • <span class="text-indigo-300 font-mono">${item.reach}</span></p>
            </div>
            <div class="relative w-16 h-16 shrink-0">
              <svg viewBox="0 0 64 64" class="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="5.5" />
                <circle class="ring-arc" cx="32" cy="32" r="26" fill="none" stroke="${item.color}" stroke-width="5.5" stroke-linecap="round"
                  stroke-dasharray="${circumference.toFixed(1)}" stroke-dashoffset="${offset.toFixed(1)}" />
              </svg>
              <span class="absolute inset-0 flex items-center justify-center text-[11px] font-mono font-semibold text-zinc-200">${item.pct}%</span>
            </div>
          </div>
        `;
      }).join('');

      // Render Animated Monthly Reach Bars
      barChart.innerHTML = data.months.map((item) => {
        const viewsFactor = currentAnalyticsYear === '2026' ? 0.65 : currentAnalyticsYear === '2025' ? 0.45 : currentAnalyticsYear === '2024' ? 0.28 : 1.1;
        const viewsText = Math.round(item.v * viewsFactor) + 'K';
        return `
          <div class="group flex-1 h-full flex flex-col items-center justify-end gap-2">
            <div class="relative w-full h-full flex items-end justify-center">
              <div class="pointer-events-none opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:-translate-y-2 transition-all absolute -top-10 px-2.5 py-1 rounded-md bg-obsidian border border-white/20 text-center text-[10px] font-mono text-white whitespace-nowrap z-20 shadow-xl">
                <p class="font-bold text-indigo-300">${viewsText} Reach</p>
                <p class="text-[9px] text-zinc-400">${item.top}</p>
              </div>
              <div class="bar-fill w-full max-w-[36px] rounded-t-xl ${
                item.peak
                  ? 'bg-gradient-to-t from-emerald-600/80 via-emerald-400/90 to-teal-300 shadow-glow-emerald'
                  : 'bg-gradient-to-t from-indigo-600/75 via-indigo-500/85 to-violet-400/90 group-hover:brightness-125'
              }" style="height: ${item.v}%"></div>
            </div>
            <span class="text-[10px] sm:text-[11px] font-mono text-zinc-400 group-hover:text-white">${item.m}</span>
          </div>
        `;
      }).join('');

      bindInteractiveEffects();
    }

    function updateReachEstimator(val) {}


    /* -----------------------------------------------------------------------
     * 7. SISTER CLUBS COLLABORATION MATRIX ENGINE
     * --------------------------------------------------------------------- */
    let activeClubId = 'ieee';

    function renderClubImpactMatrix() {
      const tabContainer = document.getElementById('clubTabButtons');
      const cardContainer = document.getElementById('activeClubCard');
      if (!tabContainer || !cardContainer) return;

      tabContainer.innerHTML = partnerClubsData.map(c => `
        <button onclick="selectClubImpact('${c.id}')" class="px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
          c.id === activeClubId
            ? 'bg-indigo-500/25 border-indigo-400 text-white shadow-glow-indigo'
            : 'bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08]'
        }">
          <span class="mr-1">${c.icon}</span>${c.name}
        </button>
      `).join('');

      const activeClub = partnerClubsData.find(c => c.id === activeClubId) || partnerClubsData[0];
      cardContainer.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div class="lg:col-span-7 space-y-4">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">${activeClub.tag}</span>
              <span class="text-xs font-mono text-zinc-400">• ${activeClub.badge}</span>
            </div>
            <h4 class="text-2xl font-semibold text-white leading-tight">${activeClub.name}</h4>
            <p class="text-sm text-zinc-300 leading-relaxed">${activeClub.summary}</p>
            <div class="space-y-2 pt-2">
              <p class="text-xs font-mono uppercase tracking-wider text-indigo-300">Deliverables Provided at ₹0 Cost:</p>
              <div class="flex flex-wrap gap-2">
                ${activeClub.deliverables.map(d => `<span class="px-3 py-1 rounded-full text-xs bg-white/[0.05] border border-white/10 text-zinc-200">${d}</span>`).join('')}
              </div>
            </div>
          </div>
          <div class="lg:col-span-5 p-5 rounded-2xl bg-surface border border-white/[0.08] space-y-3">
            <div class="p-3 rounded-xl bg-indigo-500/10 border border-indigo-400/20">
              <p class="text-[10px] uppercase font-mono tracking-wider text-indigo-300">Audience Impact</p>
              <p class="text-base font-bold text-white font-mono mt-0.5">${activeClub.reachImpact}</p>
            </div>
            <blockquote class="text-xs text-zinc-300 italic border-l-2 border-indigo-400 pl-3 leading-relaxed">
              "${activeClub.quote}"
            </blockquote>
            <p class="text-[11px] text-zinc-500 text-right font-medium">${activeClub.coordinator}</p>
          </div>
        </div>
      `;
    }

    function selectClubImpact(clubId) {
      activeClubId = clubId;
      playWhooshSound();
      renderClubImpactMatrix();
    }

    /* -----------------------------------------------------------------------
     * 8. FEATURED CREATORS CAROUSEL + ALL MEMBERS PORTRAIT WALL
     * --------------------------------------------------------------------- */
    let creatorCenterIdx = 1;
    let activeMemberDept = 'All';
    let memberSearchQuery = '';

    function renderCreators() {
      const creatorsList = getStoredData('vtu_media_creators', featuredCreators);
      const container = document.getElementById('creatorsCarousel');
      if (!container) return;

      container.innerHTML = creatorsList.map((c) => `
        <div class="w-full relative rounded-3xl overflow-hidden transition-all duration-300 p-7 sm:p-8 bg-[#120406]/90 border border-white/[0.12] hover:border-[#B21F29]/70 hover:shadow-[0_20px_50px_rgba(178,31,41,0.25)] hover:-translate-y-2 flex flex-col justify-between group select-none min-h-[300px]">
          <div class="space-y-4">
            <div class="flex items-center gap-4 sm:gap-5">
              <div class="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-white/20 shrink-0">
                <img src="${c.avatar}" alt="${c.name}" onerror="imgFallback(this)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-tr from-[#B21F29]/20 to-transparent"></div>
              </div>
              <div>
                <h4 class="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">${c.name}</h4>
                <p class="text-xs sm:text-sm text-[#fda4af] font-mono mt-1 font-medium">${c.role}</p>
                <p class="text-xs text-zinc-400 font-mono mt-0.5">${c.handle}</p>
              </div>
            </div>
            <p class="text-sm text-zinc-300 leading-relaxed pt-1">${c.bio}</p>
          </div>
          <div class="flex flex-wrap items-center gap-2 pt-5 mt-5 border-t border-white/[0.08] text-xs font-mono text-zinc-400">
            ${(Array.isArray(c.stats) ? c.stats : [c.role || "VTU Media", "Creative"]).map(s => `<span class="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-zinc-200">${s}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    function scrollCreators(delta) {
      const container = document.getElementById('creatorsCarousel');
      if (!container) return;
      if (typeof playWhooshSound === 'function') playWhooshSound();
      container.scrollBy({ left: delta * 360, behavior: 'smooth' });
    }
    window.scrollCreators = scrollCreators;

    function shiftCreators(delta) {
      scrollCreators(delta);
    }
    window.shiftCreators = shiftCreators;

    const CORE_KEYWORDS = ['president', 'vice president', 'head of pr', 'web ui/ux lead', 'lead videographer', 'treasurer', 'social media lead'];
    const CORE_NAMES = ['vikram', 'harshada', 'nihal', 'adarsh', 'prajwal v gowda', 'agam', 'araman'];

    function getMemberCategory(m) {
      if (!m) return 'Members';
      if (m.category === 'Core Team' || m.category === 'Members') return m.category;
      const nameLower = (m.name || '').toLowerCase().trim();
      const roleLower = (m.role || '').toLowerCase();
      const isCore = CORE_NAMES.includes(nameLower) || CORE_KEYWORDS.some(kw => roleLower.includes(kw));
      return isCore ? 'Core Team' : 'Members';
    }
    window.getMemberCategory = getMemberCategory;

    function healMembersList(list) {
      if (!Array.isArray(list) || list.length === 0) return list;
      const currentMembersCount = list.filter(m => m.category === 'Members').length;
      // If 0 in Members but multiple members exist, auto-rebalance based on actual role & name
      if (currentMembersCount === 0 && list.length > 2) {
        list.forEach(m => {
          const nameLower = (m.name || '').toLowerCase().trim();
          const roleLower = (m.role || '').toLowerCase();
          const isCore = CORE_NAMES.includes(nameLower) || CORE_KEYWORDS.some(kw => roleLower.includes(kw));
          m.category = isCore ? 'Core Team' : 'Members';
        });
        try {
          localStorage.setItem('vtu_media_members', JSON.stringify(list));
        } catch(e) {}
      } else {
        list.forEach(m => {
          if (m.category !== 'Core Team' && m.category !== 'Members') {
            const nameLower = (m.name || '').toLowerCase().trim();
            const roleLower = (m.role || '').toLowerCase();
            const isCore = CORE_NAMES.includes(nameLower) || CORE_KEYWORDS.some(kw => roleLower.includes(kw));
            m.category = isCore ? 'Core Team' : 'Members';
          }
        });
      }
      return list;
    }
    window.healMembersList = healMembersList;

    if (typeof window.activeMemberCategory === 'undefined') {
      window.activeMemberCategory = 'Core Team';
    }

    window.switchMemberCategory = function(cat) {
      window.activeMemberCategory = cat;
      if (typeof playWhooshSound === 'function') playWhooshSound();
      renderAllMembers();
    };

    function renderAllMembers() {
      let activeMembersList = getStoredData('vtu_media_members', allMembers);
      activeMembersList = healMembersList(activeMembersList);
      const bar = document.getElementById('memberFilterBar');
      const grid = document.getElementById('allMembersGrid');
      if (!bar || !grid) return;

      const coreCount = activeMembersList.filter(m => getMemberCategory(m) === 'Core Team').length;
      const membersCount = activeMembersList.filter(m => getMemberCategory(m) === 'Members').length;

      // Ensure active category is valid
      if (window.activeMemberCategory !== 'Core Team' && window.activeMemberCategory !== 'Members') {
        window.activeMemberCategory = coreCount > 0 ? 'Core Team' : 'Members';
      }

      const tabs = [
        { id: 'Core Team', label: 'Core Team', count: coreCount },
        { id: 'Members', label: 'Members', count: membersCount }
      ];

      bar.innerHTML = tabs.map(t => {
        const isActive = (window.activeMemberCategory === t.id);
        return `
          <button type="button" onclick="window.switchMemberCategory('${t.id}')" class="cursor-pointer px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 ${
            isActive
              ? 'bg-[#B21F29] text-white border border-[#B21F29] shadow-lg shadow-[#B21F29]/40 scale-105'
              : 'bg-white/[0.04] text-zinc-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
          }">
            <span>${t.label}</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-mono ${isActive ? 'bg-black/35 text-white' : 'bg-white/10 text-zinc-300'}">${t.count}</span>
          </button>
        `;
      }).join('');

      let filtered = activeMembersList.filter(m => getMemberCategory(m) === window.activeMemberCategory);

      if (memberSearchQuery && memberSearchQuery.trim()) {
        const q = memberSearchQuery.toLowerCase();
        filtered = filtered.filter(m =>
          (m.name || '').toLowerCase().includes(q) ||
          (m.role || '').toLowerCase().includes(q) ||
          (m.gear || '').toLowerCase().includes(q) ||
          (m.bio || '').toLowerCase().includes(q)
        );
      }

      if (filtered.length === 0) {
        const otherCat = window.activeMemberCategory === 'Core Team' ? 'Members' : 'Core Team';
        grid.innerHTML = `
          <div class="col-span-full py-16 text-center text-zinc-500 space-y-3">
            <p class="text-sm">No creators found in ${window.activeMemberCategory}${memberSearchQuery ? ' matching "' + memberSearchQuery + '"' : ''}.</p>
            <div>
              <button onclick="window.switchMemberCategory('${otherCat}')" class="px-4 py-2 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.14] border border-white/10 text-white transition-all">
                View ${otherCat} (${otherCat === 'Core Team' ? coreCount : membersCount}) →
              </button>
            </div>
          </div>
        `;
        return;
      }

      grid.innerHTML = filtered.map((m) => {
        const realIdx = activeMembersList.indexOf(m);
        const cat = getMemberCategory(m);
        return `
          <div onclick="openMemberModal(${realIdx})" class="member-card tilt-card group relative cursor-pointer rounded-[1.5rem] overflow-hidden bg-surface border border-white/[0.09] hover:border-[#B21F29]/60 shadow-xl transition-all" data-tilt="6">
            <div class="relative aspect-[3/4] overflow-hidden bg-obsidian">
              <img src="${m.img}" alt="${m.name}" loading="lazy" onerror="imgFallback(this)" class="member-photo w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent"></div>

              <!-- Camera Viewfinder Corner Brackets on Hover -->
              <div class="pointer-events-none absolute inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B21F29] rounded-tl-sm"></span>
                <span class="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B21F29] rounded-tr-sm"></span>
                <span class="absolute bottom-16 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B21F29] rounded-bl-sm"></span>
                <span class="absolute bottom-16 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B21F29] rounded-br-sm"></span>
              </div>

              <!-- Top Segregation Tier Pill & Rec Dot -->
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span class="px-2.5 py-0.5 rounded-full ${cat === 'Core Team' ? 'bg-[#B21F29]/80 text-white border border-[#B21F29]' : 'bg-blue-600/80 text-white border border-blue-500'} backdrop-blur-md text-[10px] font-semibold">${cat === 'Core Team' ? 'Core Team' : 'Member'}</span>
                <span class="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[9px] font-mono text-[#fda4af] opacity-0 group-hover:opacity-100 transition-opacity">${(m.exif || '').split('•')[0]}</span>
              </div>

              <!-- Bottom Identity Overlay -->
              <div class="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/65 backdrop-blur-md border border-white/[0.1] group-hover:border-[#B21F29]/50 transition-colors">
                <h4 class="text-sm font-semibold text-white truncate">${m.name}</h4>
                <p class="text-[11px] text-[#fda4af] truncate">${m.role}</p>
                <div class="flex items-center justify-between mt-1.5 pt-1.5 border-t border-white/[0.08] text-[10px] text-zinc-400 font-mono">
                  <span class="truncate">${m.handle}</span>
                  <span class="text-white opacity-70 group-hover:opacity-100 font-sans">Kit →</span>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');

      bindInteractiveEffects();
    }

    function handleMemberSearch(query) {
      memberSearchQuery = query;
      renderAllMembers();
    }

    function openMemberModal(idx) {
      const membersList = getStoredData('vtu_media_members', allMembers);
      const m = membersList[idx];
      if (!m) return;
      playShutterSound();
      document.getElementById('memberModalImg').src = m.img;
      document.getElementById('memberModalDept').textContent = m.dept;
      document.getElementById('memberModalName').textContent = m.name;
      document.getElementById('memberModalRole').textContent = m.role;
      document.getElementById('memberModalBio').textContent = m.bio;
      document.getElementById('memberModalGear').textContent = m.gear;
      document.getElementById('memberModalCredits').textContent = m.credits;
      document.getElementById('memberModalHandle').textContent = m.handle + ' • VTU Media Club';
      document.getElementById('memberModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeMemberModal() {
      document.getElementById('memberModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    /* -----------------------------------------------------------------------
     * 9. 3-ROW MARQUEE + FILTERABLE PHOTO GALLERY + BEFORE/AFTER SLIDER
     * --------------------------------------------------------------------- */
    let activeGalleryFilter = 'All';

    function renderGalleryMarquee() {
      const activeGalleryList = getStoredData('vtu_media_gallery', galleryStills);
      const rows = [
        { el: document.getElementById('marqueeRow1'), items: activeGalleryList.slice(0, 6) },
        { el: document.getElementById('marqueeRow2'), items: activeGalleryList.slice(6, 12) },
        { el: document.getElementById('marqueeRow3'), items: activeGalleryList.slice(12, 18) }
      ];

      rows.forEach((row, rIdx) => {
        if (!row.el) return;
        const cardsHtml = row.items.map((still, localIdx) => {
          const globalIdx = rIdx * 6 + localIdx;
          return `
            <button onclick="openLightbox(${globalIdx})" class="group relative w-48 sm:w-60 md:w-68 h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/[0.09] bg-surface shrink-0 focus:outline-none hover:border-indigo-400/50 transition-all">
              <img src="${still.img}" alt="${still.title}" loading="lazy" onerror="imgFallback(this)" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                <span class="text-xs font-semibold text-white truncate">${still.title}</span>
                <span class="text-[10px] text-zinc-300 truncate">${still.creator} • ${still.cat}</span>
              </div>
            </button>
          `;
        }).join('');
        row.el.innerHTML = cardsHtml + cardsHtml;
      });
    }

    function renderFilterableGallery() {
      const activeGalleryList = getStoredData('vtu_media_gallery', galleryStills);
      const cats = ['All', 'Campus Fests', 'Cinematography', 'Portraits', 'Behind the Scenes', 'Sports & Action'];
      const bar = document.getElementById('galleryFilterBar');
      const grid = document.getElementById('filterableGalleryGrid');
      if (!bar || !grid) return;

      bar.innerHTML = cats.map(c => `
        <button onclick="activeGalleryFilter='${c}'; playWhooshSound(); renderFilterableGallery()" class="px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
          activeGalleryFilter === c
            ? 'bg-indigo-500/25 text-white border border-indigo-400/60 shadow-glow-indigo'
            : 'bg-white/[0.03] text-zinc-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
        }">${c}</button>
      `).join('');

      const list = activeGalleryFilter === 'All'
        ? activeGalleryList
        : activeGalleryList.filter(s => s.cat === activeGalleryFilter);

      grid.innerHTML = list.map((s) => {
        const realIdx = galleryStills.indexOf(s);
        return `
          <button onclick="openLightbox(${realIdx})" class="group relative aspect-[4/3] rounded-[1.4rem] overflow-hidden bg-surface border border-white/[0.09] hover:border-indigo-400/50 text-left focus:outline-none shadow-lg transition-all hover:-translate-y-1">
            <img src="${s.img}" alt="${s.title}" loading="lazy" onerror="imgFallback(this)" class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
            <div class="absolute top-3 left-3">
              <span class="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-[10px] font-medium text-indigo-200">${s.cat}</span>
            </div>
            <div class="absolute bottom-3.5 left-4 right-4 space-y-1">
              <h4 class="text-sm sm:text-base font-semibold text-white truncate">${s.title}</h4>
              <div class="flex items-center justify-between text-[11px] text-zinc-300">
                <span>by ${s.creator}</span>
                <span class="font-mono text-[10px] text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity">EXIF ↗</span>
              </div>
            </div>
          </button>
        `;
      }).join('');
    }

    function renderCategoryCards() {
      const grid = document.getElementById('categoryCardsGrid');
      if (!grid) return;
      grid.innerHTML = galleryCategories.map((cat, idx) => `
        <div onclick="openCategoryModal(${idx})" class="spotlight-card group cursor-pointer rounded-[1.6rem] p-3.5 bg-surface/90 border border-white/[0.09] hover:border-indigo-400/45 hover:-translate-y-1 transition-all duration-300 shadow-lg">
          <div class="space-y-2">
            <div class="grid grid-cols-3 gap-2">
              ${cat.thumbs.map(t => `
                <div class="aspect-square rounded-xl overflow-hidden bg-obsidian border border-white/[0.06]">
                  <img src="${t}" alt="${cat.title}" loading="lazy" onerror="imgFallback(this)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              `).join('')}
            </div>
            <div class="aspect-[16/9] rounded-xl overflow-hidden bg-obsidian border border-white/[0.06]">
              <img src="${cat.wide}" alt="${cat.title} Showcase" loading="lazy" onerror="imgFallback(this)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div class="flex items-center justify-between pt-3.5 px-1">
            <h3 class="text-base font-semibold text-white group-hover:text-indigo-200 transition-colors">${cat.title}</h3>
            <span class="px-2.5 py-1 rounded-full text-[11px] font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-400/25">${cat.count}</span>
          </div>
        </div>
      `).join('');
    }

    /* Before/After Color Grading Drag Slider Controller */
    function initBeforeAfterSlider() {
      const container = document.getElementById('colorGradeSlider');
      const beforeBox = document.getElementById('sliderBeforeBox');
      const handle = document.getElementById('sliderDividerHandle');
      if (!container || !beforeBox || !handle) return;

      let isDragging = false;

      function updateSliderPosition(clientX) {
        const rect = container.getBoundingClientRect();
        const offsetX = Math.max(0, Math.min(rect.width, clientX - rect.left));
        const pct = (offsetX / rect.width) * 100;
        beforeBox.style.width = `${pct}%`;
        handle.style.left = `${pct}%`;
      }

      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
      });

      window.addEventListener('mouseup', () => { isDragging = false; });

      container.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchend', () => { isDragging = false; });
    }

    /* -----------------------------------------------------------------------
     * 10. COMPREHENSIVE LIGHTBOX WITH FILM PRESET FILTERS
     * --------------------------------------------------------------------- */
    let currentLightboxIdx = 0;
    let currentLightboxFilter = 'none';

    function openLightbox(idx) {
      currentLightboxIdx = idx;
      currentLightboxFilter = 'none';
      playShutterSound();
      updateLightboxView();
      document.getElementById('lightboxModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function updateLightboxView() {
      const still = galleryStills[currentLightboxIdx] || galleryStills[0];
      const img = document.getElementById('lightboxImg');
      img.src = still.img;
      document.getElementById('lightboxTitle').textContent = still.title;
      document.getElementById('lightboxCreator').textContent = `Shot by ${still.creator} • ${still.cat}`;
      document.getElementById('lightboxExif').textContent = still.exif;
      document.getElementById('lightboxIndexPill').textContent = `${currentLightboxIdx + 1} / ${galleryStills.length}`;

      applyLightboxFilterUI();
    }

    function setLightboxFilter(filterName) {
      currentLightboxFilter = filterName;
      playWhooshSound();
      applyLightboxFilterUI();
    }

    function applyLightboxFilterUI() {
      const img = document.getElementById('lightboxImg');
      const btns = [
        { id: 'lbFltNone', name: 'none' },
        { id: 'lbFltKodak', name: 'kodak' },
        { id: 'lbFltBw', name: 'bw' }
      ];

      btns.forEach(b => {
        const el = document.getElementById(b.id);
        if (!el) return;
        if (b.name === currentLightboxFilter) {
          el.className = 'px-2.5 py-1 rounded-md text-[10px] font-mono bg-indigo-500 text-white';
        } else {
          el.className = 'px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/10 text-zinc-300 hover:bg-white/20';
        }
      });

      if (currentLightboxFilter === 'kodak') {
        img.style.filter = 'sepia(0.25) contrast(1.15) saturate(1.2)';
      } else if (currentLightboxFilter === 'bw') {
        img.style.filter = 'grayscale(100%) contrast(1.25)';
      } else {
        img.style.filter = 'none';
      }
    }

    function stepLightbox(delta) {
      currentLightboxIdx = (currentLightboxIdx + delta + galleryStills.length) % galleryStills.length;
      playWhooshSound();
      updateLightboxView();
    }

    function closeLightbox() {
      document.getElementById('lightboxModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    function openCategoryModal(idx) {
      const cat = galleryCategories[idx];
      if (!cat) return;
      playWhooshSound();
      document.getElementById('catModalBadge').textContent = `Department Archive • ${cat.count}`;
      document.getElementById('catModalTitle').textContent = cat.title;
      document.getElementById('catModalDesc').textContent = cat.desc;
      const allImages = [cat.wide, ...cat.thumbs];
      document.getElementById('catModalGrid').innerHTML = allImages.map((url, i) => `
        <div class="rounded-2xl overflow-hidden border border-white/[0.1] bg-obsidian aspect-[16/10] group relative">
          <img src="${url}" alt="${cat.title} ${i + 1}" onerror="imgFallback(this)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono text-zinc-200 border border-white/10">FRAME #0${i + 1} • ${cat.title.toUpperCase()}</div>
        </div>
      `).join('');
      document.getElementById('categoryModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeCategoryModal() {
      document.getElementById('categoryModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    /* -----------------------------------------------------------------------
     * 11. SIMULATED SHOWREEL CINEMA PLAYER MODAL
     * --------------------------------------------------------------------- */
    let reelPlaying = true;
    let reelProgressVal = 24;
    let reelTimer = null;

    function openShowreelModal(prodIdx) {
      if (typeof playShutterSound === 'function') playShutterSound();
      const modal = document.getElementById('showreelModal');
      if (modal) modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const v = document.getElementById('modalReelVideo');
      if (v && heroVideoConfig.videoUrl && !v.src.endsWith(heroVideoConfig.videoUrl)) { v.src = heroVideoConfig.videoUrl; }
      if (v) {
        v.currentTime = 0;
        v.play().catch(function () {});
      }
    }
    window.openShowreelModal = openShowreelModal;

    function closeShowreelModal() {
      const v = document.getElementById('modalReelVideo');
      if (v) { v.pause(); }
      const modal = document.getElementById('showreelModal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
    window.closeShowreelModal = closeShowreelModal;

    // Real-Time Cross-Tab / Cross-Window Synchronization Engine
    function refreshAllDynamicSections() {
      try {
        if (typeof applyHeroVideoConfig === 'function') applyHeroVideoConfig();
        if (typeof renderCreators === 'function') renderCreators();
        if (typeof renderAllMembers === 'function') renderAllMembers();
        if (typeof renderFilterableGallery === 'function') renderFilterableGallery();
        if (typeof renderGalleryMarquee === 'function') renderGalleryMarquee();
        if (typeof renderCoverflow === 'function') renderCoverflow();
      } catch (e) {
        console.warn('Sync refresh error:', e);
      }
    }
    window.refreshAllDynamicSections = refreshAllDynamicSections;

    // Listen to BroadcastChannel
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        const syncChannel = new BroadcastChannel('vtu_media_sync');
        syncChannel.onmessage = function (ev) {
          if (ev.data && ev.data.type === 'SYNC_UPDATE') {
            refreshAllDynamicSections();
          }
        };
      }
    } catch (e) {}

    // Listen to Storage events (fires when another tab modifies localStorage)
    window.addEventListener('storage', function (e) {
      if (e.key && e.key.startsWith('vtu_media_')) {
        refreshAllDynamicSections();
      }
    });

    // Also auto-refresh whenever user switches back to this tab
    window.addEventListener('focus', function () {
      refreshAllDynamicSections();
    });


    // Admin Shortcut Ctrl + Shift + A
    window.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        window.location.href = 'admin.html';
      }
    });


    function openJoinModal() {
      playShutterSound();
      document.getElementById('joinModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeJoinModal() {
      document.getElementById('joinModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    function selectTrack(btn, trackName) {
      document.querySelectorAll('.track-pill').forEach(el => {
        el.className = 'track-pill px-3.5 py-1.5 rounded-full text-xs font-medium border border-white/[0.12] bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08] transition-all';
      });
      btn.className = 'track-pill px-3.5 py-1.5 rounded-full text-xs font-medium border border-indigo-400 bg-indigo-500/20 text-white transition-all';
      document.getElementById('selectedTrackInput').value = trackName;
    }

    function submitJoinForm(e) {
      e.preventDefault();
      const track = document.getElementById('selectedTrackInput').value;
      closeJoinModal();
      e.target.reset();
      showToast(`Application received for ${track} track! Audition dates emailed shortly.`);
    }

    function openBookingModal() {
      playShutterSound();
      document.getElementById('bookingModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeBookingModal() {
      document.getElementById('bookingModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    function submitBookingForm(e) {
      e.preventDefault();
      closeBookingModal();
      e.target.reset();
      showToast('Event coverage request logged! Production lead will assign crew within 24h.');
    }

    function handleFooterSubscribe(e) {
      e.preventDefault();
      const input = document.getElementById('footerEmail');
      const email = input.value.trim();
      if (!email) return;
      input.value = '';
      showToast(`Subscribed ${email} to VTU Media premiere alerts & workshops.`);
    }

    function toggleMobileMenu() {
      document.getElementById('mobileMenu').classList.toggle('hidden');
      document.getElementById('hamburgerIcon').classList.toggle('hidden');
      document.getElementById('closeMenuIcon').classList.toggle('hidden');
    }

    function showToast(message) {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto modal-animate flex items-center gap-3 px-4 py-3 rounded-2xl bg-surfaceLight/95 backdrop-blur-xl border border-indigo-400/35 shadow-2xl text-xs sm:text-sm text-white max-w-sm';
      toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span><span>${message}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(6px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 320);
      }, 4000);
    }

    /* -----------------------------------------------------------------------
     * 13. CINEMA INTERACTIVE EFFECTS (3D TILT, SPOTLIGHT, SCROLL REVEAL, COUNT-UP)
     * --------------------------------------------------------------------- */
    function bindInteractiveEffects() {
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (isTouch) return;

      // Spotlight Radial Hover Tracking
      document.querySelectorAll('.spotlight-card').forEach(card => {
        if (card.dataset.spotBound) return;
        card.dataset.spotBound = 'true';
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
      });

      // 3D Perspective Tilt
      document.querySelectorAll('.tilt-card').forEach(card => {
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
    }

    function initScrollRevealAndCounters() {
      const reveals = document.querySelectorAll('.reveal-up');
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });
        reveals.forEach(el => io.observe(el));
      } else {
        reveals.forEach(el => el.classList.add('is-visible'));
      }

      // Animate Hero Count-Up Numbers
      document.querySelectorAll('.count-up').forEach(el => {
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 36));
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, 28);
      });
    }

    /* -----------------------------------------------------------------------
     * 14. BOOTSTRAP, KEYBOARD SHORTCUTS & EVENT LISTENERS
     * --------------------------------------------------------------------- */
    document.addEventListener('mousemove', (e) => {
      const spot = document.getElementById('cursorSpotlight');
      if (!spot) return;
      spot.style.opacity = '1';
      spot.style.left = `${e.clientX}px`;
      spot.style.top = `${e.clientY}px`;
    });

    window.addEventListener('scroll', () => {
      const bar = document.getElementById('scrollProgress');
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
      bar.style.width = `${pct}%`;
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeShowreelModal();
        closeLightbox();
        closeCategoryModal();
        closeMemberModal();
        closeJoinModal();
        closeBookingModal();
      }
      const lb = document.getElementById('lightboxModal');
      if (lb && !lb.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') stepLightbox(1);
        if (e.key === 'ArrowLeft') stepLightbox(-1);
      }
    });

    window.addEventListener('resize', () => {
      renderCoverflow();
    });

    window.addEventListener('DOMContentLoaded', () => {
      try {
        // Auto-dismiss preloader smoothly
        const pBar = document.getElementById('preloaderBar');
        if (pBar) setTimeout(() => { pBar.style.width = '100%'; }, 80);
        // 4-second full duration controlled by index.html preloader timer

        // Render all interactive systems
        initCanvasParticles();
        renderCoverflow();
        renderWorkShowcase();
        renderSocialInfographics();
        renderClubImpactMatrix();
        renderCreators();
        renderAllMembers();
        renderGalleryMarquee();
        renderFilterableGallery();
        renderCategoryCards();
        initBeforeAfterSlider();
        bindInteractiveEffects();
        initScrollRevealAndCounters();
        if (typeof applyHeroVideoConfig === 'function') applyHeroVideoConfig();

        // Coverflow touch swipe support
        let cfTouchStartX = 0;
        const cfStage = document.getElementById('coverflowStage');
        if (cfStage) {
          cfStage.addEventListener('touchstart', (e) => { cfTouchStartX = e.touches[0].clientX; }, { passive: true });
          cfStage.addEventListener('touchend', (e) => {
            const diff = e.changedTouches[0].clientX - cfTouchStartX;
            if (Math.abs(diff) > 45) shiftCoverflow(diff < 0 ? 1 : -1);
          }, { passive: true });
        }
      } catch (err) {
        console.error('VTU Media Club init error:', err);
        window.dismissPreloader();
      }
    });
  

  // Mount React Root
  function mountReactApp() {
    var rootEl = document.getElementById('root');
    if (!rootEl) {
      console.warn('#root element not found, retrying...');
      setTimeout(mountReactApp, 50);
      return;
    }

    if (window.ReactDOM && window.ReactDOM.createRoot) {
      var root = ReactDOM.createRoot(rootEl);
      root.render(React.createElement(App));
    } else if (window.ReactDOM && window.ReactDOM.render) {
      ReactDOM.render(React.createElement(App), rootEl);
    } else {
      console.error('ReactDOM not loaded. Rendering raw template fallback.');
      rootEl.innerHTML = APP_TEMPLATE;
      if (window.dismissPreloader) window.dismissPreloader();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountReactApp);
  } else {
    mountReactApp();
  }
})();
