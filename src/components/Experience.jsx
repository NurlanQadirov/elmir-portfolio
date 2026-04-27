// src/components/Experience.jsx
import { Server } from "lucide-react";
import { DATA } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-purple-500 font-mono tracking-widest text-sm uppercase flex items-center gap-4 mb-4 before:content-[''] before:w-12 before:h-[1px] before:bg-purple-500/50">
            / Fəaliyyət_Logu /
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Peşəkar Keçmişim</h2>
        </div>

        <div className="space-y-12 border-l border-purple-500/30 ml-3 pl-8 relative">
          {DATA.experience.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] top-1.5 w-3 h-3 bg-slate-950 border-2 border-purple-500 rounded-full group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_#a855f7] transition-all"></div>

              <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-purple-500/30 hover:bg-slate-900/60 transition-all backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-sm">
                      <Server size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <span className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono px-3 py-1.5 rounded-md shadow-sm">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-slate-400 text-sm md:text-base font-light">
                      <div className="text-purple-500 mt-0.5">▹</div>
                      <p className="leading-relaxed">{b}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}