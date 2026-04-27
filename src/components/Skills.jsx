// src/components/Skills.jsx
import { Network } from "lucide-react";
import { DATA } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative border-y border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <span className="text-purple-500 font-mono tracking-widest text-sm uppercase flex items-center gap-4 mb-4 before:content-[''] before:w-12 before:h-[1px] before:bg-purple-500/50">
            / Texniki_Biliklər /
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Sistem Bacarıqları</h2>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          {DATA.skills.map((s) => (
            <span key={s} className="group flex items-center px-5 py-2.5 bg-slate-950/80 border border-purple-500/20 rounded-lg text-sm font-mono text-slate-300 hover:border-purple-400 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all cursor-crosshair">
              <span className="text-purple-500 mr-2">{">"}</span>
              {s}
            </span>
          ))}
        </div>

        <div className="bg-slate-950/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <Network size={20} className="text-purple-500" />
            <h3 className="text-sm font-mono tracking-widest uppercase text-slate-400">Şəbəkə Dilləri (Xarici Dillər)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {DATA.languages.map((l) => (
              <div key={l.lang} className="border-l border-purple-500/30 pl-4">
                <div className="text-lg font-bold text-white mb-1">{l.lang}</div>
                <div className="text-sm text-purple-400/80 font-mono">{l.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}