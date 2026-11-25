import React, { useState, useEffect } from 'react';
import { productions } from '../data/productions';
import { allMembers } from '../data/members';
import { galleryStills, galleryCategories } from '../data/gallery';
import { playWhooshSound } from '../utils/audio';

export default function Modals({
  showreelIdx,
  onCloseShowreel,
  memberIdx,
  onCloseMember,
  lightboxIdx,
  onCloseLightbox,
  onStepLightbox,
  categoryIdx,
  onCloseCategory,
  joinOpen,
  onCloseJoin,
  bookingOpen,
  onCloseBooking,
  onOpenBooking,
  toasts,
  showToast
}) {
  // Showreel modal state
  const [reelPlaying, setReelPlaying] = useState(true);
  const [reelProgress, setReelProgress] = useState(14);
  const [reelTimecode, setReelTimecode] = useState('00:00:14:08');
  const [currentReelChapter, setCurrentReelChapter] = useState(showreelIdx ?? 0);

  useEffect(() => {
    if (showreelIdx !== null) {
      setCurrentReelChapter(showreelIdx);
      setReelPlaying(true);
      setReelProgress(12);
    }
  }, [showreelIdx]);

  useEffect(() => {
    if (showreelIdx === null || !reelPlaying) return;
    const timer = setInterval(() => {
      setReelProgress((p) => {
        const next = p >= 100 ? 0 : p + 0.6;
        const totalSeconds = Math.floor((next / 100) * 222);
        const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
        const secs = String(totalSeconds % 60).padStart(2, '0');
        const frames = String(Math.floor((next * 10) % 24)).padStart(2, '0');
        setReelTimecode(`00:${mins}:${secs}:${frames}`);
        return next;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [showreelIdx, reelPlaying]);

  // Lightbox filter state
  const [lightboxFilter, setLightboxFilter] = useState('none');

  // Join form state
  const [joinTrack, setJoinTrack] = useState('Cinematography');

  // Member & Category
  const activeProd = productions[currentReelChapter] || productions[0];
  const activeMember = memberIdx !== null ? allMembers[memberIdx] : null;
  const activeCat = categoryIdx !== null ? galleryCategories[categoryIdx] : null;
  const activeStill = lightboxIdx !== null ? galleryStills[lightboxIdx] : null;

  return (
    <>
      {/* 1. SIMULATED SHOWREEL CINEMA PLAYER MODAL */}
      {showreelIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          onClick={(e) => { if (e.target === e.currentTarget) onCloseShowreel(); }}
        >
          <div className="modal-animate relative w-full max-w-4xl rounded-3xl overflow-hidden bg-surface border border-white/[0.14] shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08] bg-obsidian/70">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 rec-dot"></span>
                <span className="text-sm font-semibold text-white">{activeProd.title}</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-[10px] font-mono text-indigo-200">4K DCI • 24FPS</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://drive.google.com/file/d/16KJ910LFb41wSqM4JIhKxU3kTfws1dIA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-white/[0.06] border border-white/10 hover:border-[#B21F29]/60 hover:text-white transition-all"
                >
                  <span>Drive Source</span>
                  <span className="text-[#B21F29]">↗</span>
                </a>
                <button onClick={onCloseShowreel} aria-label="Close Player" className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] flex items-center justify-center text-zinc-300 transition-colors">✕</button>
              </div>
            </div>

            <div className="relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <video
                src="assets/vtu_aftermovie.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/35"></div>

              <div className="pointer-events-none absolute inset-4 border border-white/10 rounded-xl flex flex-col justify-between p-4">
                <div className="flex justify-between text-[10px] font-mono text-white/60">
                  <span>{activeProd.camera}</span>
                  <span>{reelTimecode}</span>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-white/60">
                  <span>LUT: {activeProd.lut}</span>
                  <span>RAW 12-BIT</span>
                </div>
              </div>

              <button onClick={() => setReelPlaying(!reelPlaying)} aria-label="Play or Pause" className="absolute inset-0 flex items-center justify-center group focus:outline-none">
                <div className="w-16 h-16 rounded-full bg-black/55 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {reelPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>
                  ) : (
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  )}
                </div>
              </button>

              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 space-y-3">
                <div
                  className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                    setReelProgress(ratio * 100);
                  }}
                >
                  <div className="h-full bg-gradient-to-r from-[#B21F29] to-[#72090F] transition-all duration-200" style={{ width: `${reelProgress}%` }}></div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setReelPlaying(!reelPlaying)} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors">
                      {reelPlaying ? 'Pause' : 'Play'}
                    </button>
                    <span className="text-xs text-zinc-300">Directed by {activeProd.director} • VTU Media Club</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {productions.slice(0, 4).map((item, i) => (
                      <button
                        key={i}
                        onClick={() => { setCurrentReelChapter(i); playWhooshSound(); }}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                          i === currentReelChapter ? 'bg-[#B21F29] text-white shadow-glow-terracotta' : 'bg-white/10 text-zinc-300 hover:bg-white/20'
                        }`}
                      >
                        {item.title.split(' ')[0]} {item.title.split(' ')[1] || ''}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. MEMBER PROFILE INSPECTOR MODAL */}
      {activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          onClick={(e) => { if (e.target === e.currentTarget) onCloseMember(); }}
        >
          <div className="modal-animate relative w-full max-w-lg rounded-3xl overflow-hidden bg-surface border border-white/[0.14] shadow-2xl">
            <button onClick={onCloseMember} aria-label="Close Member Profile" className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-white/20 text-white flex items-center justify-center">✕</button>
            <div className="relative h-64 bg-obsidian overflow-hidden">
              <img src={activeMember.img} alt={activeMember.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#72090F]/30 border border-[#B21F29]/40 text-[#f5e6e8]">{activeMember.dept}</span>
                <h3 className="text-2xl font-semibold text-white mt-2">{activeMember.name}</h3>
                <p className="text-xs text-zinc-300">{activeMember.role}</p>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-sm text-zinc-300 leading-relaxed">{activeMember.bio}</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-obsidian/80 border border-white/[0.08]">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Primary Gear Kit</p>
                  <p className="text-white font-medium mt-1">{activeMember.gear}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-obsidian/80 border border-white/[0.08]">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Campus Credits</p>
                  <p className="text-[#B21F29] font-medium mt-1">{activeMember.credits}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-zinc-400">{activeMember.handle} • VTU Media Club</span>
                <button
                  onClick={() => { onCloseMember(); onOpenBooking(); }}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#B21F29] to-[#72090F] hover:brightness-110 shadow-glow-terracotta"
                >
                  Request for Shoot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. COMPREHENSIVE PHOTO LIGHTBOX MODAL */}
      {activeStill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-2xl"
          onClick={(e) => { if (e.target === e.currentTarget) onCloseLightbox(); }}
        >
          <div className="modal-animate relative w-full max-w-4xl rounded-3xl overflow-hidden bg-surface border border-white/[0.12] shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08] bg-obsidian/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-300">Cinema Frame Inspector</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-zinc-400">{lightboxIdx + 1} / {galleryStills.length}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={() => setLightboxFilter('none')} className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${lightboxFilter === 'none' ? 'bg-indigo-500 text-white' : 'bg-white/10 text-zinc-300 hover:bg-white/20'}`}>Original</button>
                <button onClick={() => setLightboxFilter('kodak')} className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${lightboxFilter === 'kodak' ? 'bg-indigo-500 text-white' : 'bg-white/10 text-zinc-300 hover:bg-white/20'}`}>Kodak</button>
                <button onClick={() => setLightboxFilter('bw')} className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${lightboxFilter === 'bw' ? 'bg-indigo-500 text-white' : 'bg-white/10 text-zinc-300 hover:bg-white/20'}`}>Noir B&W</button>
                <button onClick={onCloseLightbox} aria-label="Close Lightbox" className="ml-2 w-7 h-7 rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-white flex items-center justify-center transition-colors">✕</button>
              </div>
            </div>

            <div className="relative bg-black max-h-[70vh] flex items-center justify-center overflow-hidden">
              <img
                src={activeStill.img}
                alt={activeStill.title}
                className="w-full max-h-[70vh] object-contain transition-all duration-300"
                style={{
                  filter: lightboxFilter === 'kodak' ? 'sepia(0.25) contrast(1.15) saturate(1.2)' : lightboxFilter === 'bw' ? 'grayscale(100%) contrast(1.25)' : 'none'
                }}
              />
              <button onClick={() => onStepLightbox(-1)} aria-label="Previous Image" className="absolute left-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-white/15 text-white flex items-center justify-center transition-colors">←</button>
              <button onClick={() => onStepLightbox(1)} aria-label="Next Image" className="absolute right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:bg-white/15 text-white flex items-center justify-center transition-colors">→</button>
            </div>

            <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-obsidian/90 border-t border-white/[0.08]">
              <div>
                <h4 className="text-base font-semibold text-white">{activeStill.title}</h4>
                <p className="text-xs text-zinc-400 mt-0.5">Shot by {activeStill.creator} • {activeStill.cat}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.09] text-[11px] font-mono text-indigo-200">{activeStill.exif}</div>
                <button onClick={() => showToast('High-res frame link copied for press kits & portfolios!')} className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 hover:bg-indigo-500/35 border border-indigo-400/30 text-[11px] font-medium text-white transition-colors">Share</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. CATEGORY ALBUM MODAL */}
      {activeCat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          onClick={(e) => { if (e.target === e.currentTarget) onCloseCategory(); }}
        >
          <div className="modal-animate relative w-full max-w-4xl max-h-[88vh] flex flex-col rounded-3xl overflow-hidden bg-surface border border-white/[0.12] shadow-2xl">
            <div className="p-5 sm:p-6 border-b border-white/[0.08] flex items-center justify-between bg-obsidian/70">
              <div>
                <span className="text-[11px] font-medium text-indigo-300 uppercase tracking-wider">Department Archive • {activeCat.count}</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">{activeCat.title}</h3>
              </div>
              <button onClick={onCloseCategory} aria-label="Close Gallery" className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-zinc-200 flex items-center justify-center">✕</button>
            </div>
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
              <p className="text-sm text-zinc-400">{activeCat.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[activeCat.wide, ...activeCat.thumbs].map((url, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden border border-white/[0.1] bg-obsidian aspect-[16/10] group relative">
                    <img src={url} alt={`${activeCat.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-mono text-zinc-200 border border-white/10">FRAME #0{i + 1} • {activeCat.title.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. JOIN CREW APPLICATION MODAL */}
      {joinOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          onClick={(e) => { if (e.target === e.currentTarget) onCloseJoin(); }}
        >
          <div className="modal-animate relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-surface border border-white/[0.13] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#72090F]/20 border border-[#B21F29]/30 text-[11px] font-medium text-[#f5e6e8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B21F29]"></span> Recruitment Open
                </span>
                <h3 className="text-2xl font-semibold text-white mt-2">
                  Apply for <span className="font-editorial text-[#B21F29] font-normal text-3xl">VTU Media</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">No prior camera gear required — bring curiosity, taste, and dedication.</p>
              </div>
              <button onClick={onCloseJoin} aria-label="Close Application" className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-zinc-300 flex items-center justify-center shrink-0">✕</button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onCloseJoin();
                showToast(`Application received for ${joinTrack} track! Audition dates emailed shortly.`);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Full Name *</label>
                  <input type="text" required placeholder="e.g. Rohan Deshpande" className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#B21F29]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Department &amp; Semester *</label>
                  <input type="text" required placeholder="e.g. CSE • 5th Sem" className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#B21F29]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-2">Select Creative Track *</label>
                <div className="flex flex-wrap gap-2">
                  {['Cinematography', 'Photography', 'Video Editing', 'Motion & VFX'].map((track) => (
                    <button
                      key={track}
                      type="button"
                      onClick={() => setJoinTrack(track)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        joinTrack === track
                          ? 'border-[#B21F29] bg-[#72090F]/30 text-white'
                          : 'border-white/[0.12] bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08]'
                      }`}
                    >
                      {track}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Portfolio / Instagram / Drive Link</label>
                <input type="url" placeholder="https://instagram.com/yourhandle" className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#B21F29]" />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">What stories or visuals do you want to create?</label>
                <textarea rows="2" placeholder="Aftermovies, portraits, live streaming, graphic reels..." className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#B21F29] resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#B21F29] via-[#930510] to-[#72090F] hover:brightness-110 shadow-glow-terracotta transition-all">
                Submit Crew Application
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 6. BOOK EVENT COVERAGE MODAL */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
          onClick={(e) => { if (e.target === e.currentTarget) onCloseBooking(); }}
        >
          <div className="modal-animate relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-surface border border-white/[0.13] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#72090F]/20 border border-[#B21F29]/30 text-[11px] font-medium text-[#f5e6e8]">Campus Production Desk</span>
                <h3 className="text-2xl font-semibold text-white mt-2">
                  Book <span className="font-editorial text-[#B21F29] font-normal text-3xl">Event Coverage</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1">Free studio support for VTU departments, clubs, fests, and official seminars.</p>
              </div>
              <button onClick={onCloseBooking} aria-label="Close Booking Form" className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-zinc-300 flex items-center justify-center shrink-0">✕</button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onCloseBooking();
                showToast('Event coverage request logged! Production lead will assign crew within 24h.');
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Event Title *</label>
                <input type="text" required placeholder="e.g. National Robotics Symposium 2026" className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#B21F29]" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Organizing Club / Dept *</label>
                  <input type="text" required placeholder="e.g. IEEE VTU Branch" className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#B21F29]" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Event Date *</label>
                  <input type="date" required className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-zinc-200 focus:outline-none focus:border-[#B21F29]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Deliverables Needed</label>
                <select className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-zinc-200 focus:outline-none focus:border-[#B21F29]">
                  <option>Full Suite (Photography + Aftermovie + Same-Day Reels)</option>
                  <option>Editorial Event Photography Only</option>
                  <option>4K Cinematic Aftermovie + Promo Teaser</option>
                  <option>Multi-Cam Auditorium Live Broadcast</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Coordinator Email *</label>
                <input type="email" required placeholder="coordinator@vtu.ac.in" className="w-full px-4 py-2.5 rounded-xl bg-obsidian border border-white/[0.1] text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#B21F29]" />
              </div>
              <button type="submit" className="w-full py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#B21F29] via-[#930510] to-[#72090F] hover:brightness-110 shadow-glow-terracotta transition-all">
                Send Coverage Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION CONTAINER */}
      <div id="toastContainer" className="fixed bottom-5 right-5 z-[75] flex flex-col gap-2.5 pointer-events-none">
        {toasts.map((t) => (
          <div key={t.id} className="pointer-events-auto modal-animate flex items-center gap-3 px-4 py-3 rounded-2xl bg-surfaceLight/95 backdrop-blur-xl border border-[#B21F29]/35 shadow-2xl text-xs sm:text-sm text-white max-w-sm">
            <span className="w-2 h-2 rounded-full bg-[#B21F29] shrink-0"></span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}
