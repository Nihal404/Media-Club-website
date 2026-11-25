import React from 'react';

export default function GearStrip() {
  const items = [
    { label: "VTU FEST '26", color: "bg-[#B21F29]" },
    { label: "Convocation Live 4K", serif: true },
    { label: "HACKATHON DOCS", color: "bg-[#930510]" },
    { label: "SONY FX3 & FX6", wide: true },
    { label: "DAVINCI RESOLVE", color: "bg-[#72090F]" },
    { label: "Premiere Pro", serif: true },
    { label: "DJI RS4 PRO", wide: true },
    { label: "AFTER EFFECTS", color: "bg-[#B21F29]" },
    { label: "APUTURE 600D", wide: true },
    { label: "ATEM Mini Extreme ISO", serif: true },
    { label: "6S FPV RIG", wide: true }
  ];

  const renderContent = () => (
    <div className="flex items-center gap-12 pr-12 text-sm sm:text-base font-semibold tracking-wide text-zinc-300/85">
      {items.map((item, i) => (
        <span key={i} className={item.serif ? "font-editorial text-xl text-zinc-300 font-normal" : "flex items-center gap-2.5"}>
          {item.color && <span className={`w-1.5 h-1.5 rounded-full ${item.color}`}></span>}
          {item.label}
        </span>
      ))}
    </div>
  );

  return (
    <section aria-label="Production Properties and Gear Stack" className="relative py-5 border-y border-white/[0.08] bg-gradient-to-r from-[#3D0B0D]/35 via-white/[0.02] to-[#53080E]/35 backdrop-blur-sm overflow-hidden marquee-pause">
      <div className="edge-fade-mask overflow-hidden">
        <div className="animate-marquee-left items-center gap-12 whitespace-nowrap">
          {renderContent()}
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
