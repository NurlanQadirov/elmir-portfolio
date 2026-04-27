// src/components/Education.jsx
import { ShieldCheck, Database } from "lucide-react";
import { DATA } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-purple-500 font-mono tracking-widest text-sm uppercase flex items-center gap-4 mb-4 before:content-[''] before:w-12 before:h-[1px] before:bg-purple-500/50">
            / Baza_və_Sertifikatlar /
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Akademik Arxa Plan</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Təhsil */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <Database size={20} className="text-purple-500" />
              <h3 className="text-xl font-bold text-white font-mono">Təhsil</h3>
            </div>
            <div className="space-y-6">
              {DATA.education.map((ed, i) => (
                <div key={i} className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 shadow-sm flex flex-col items-start relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-purple-600/50 group-hover:bg-purple-400 transition-colors"></div>
                  <h4 className="text-lg font-bold text-white mb-2">{ed.degree}</h4>
                  <p className="text-slate-400 mb-4 font-light">{ed.institution}</p>
                  <span className="bg-slate-900 border border-white/10 text-slate-400 text-xs font-mono px-3 py-1 rounded-md">
                    {ed.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sertifikatlar */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
              <ShieldCheck size={20} className="text-purple-500" />
              <h3 className="text-xl font-bold text-white font-mono">Lisenziyalar & Sertifikatlar</h3>
            </div>
            <div className="space-y-4">
              {DATA.certifications.map((cert, i) => (
                <div key={i} className="bg-slate-950/50 p-5 rounded-2xl border border-white/5 shadow-sm flex items-center gap-5 hover:border-purple-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-purple-500/50 transition-colors">
                    <ShieldCheck size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm md:text-base leading-snug mb-1 group-hover:text-purple-300 transition-colors">{cert.name}</h4>
                    <p className="text-xs md:text-sm text-slate-500 font-mono">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}