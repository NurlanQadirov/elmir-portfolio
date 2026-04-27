// src/components/About.jsx
import { ShieldAlert, Cpu, Fingerprint } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <ShieldAlert size={24} className="text-purple-400" />,
      bg: "bg-purple-500/10 border-purple-500/20",
      title: "Təhlükəsizlik Təfəkkürü",
      body: "Sistemlərə həm hücumçu, həm də müdafiəçi gözü ilə baxaraq boşluqları kəşf etmək üzrə ixtisaslaşmışam.",
    },
    {
      icon: <Fingerprint size={24} className="text-blue-400" />,
      bg: "bg-blue-500/10 border-blue-500/20",
      title: "Praktiki Təcrübə",
      body: "Upgrade Solutions LLC-də zəifliklərin taranması və red team simulyasiyaları üzrə real təcrübə.",
    },
    {
      icon: <Cpu size={24} className="text-emerald-400" />,
      bg: "bg-emerald-500/10 border-emerald-500/20",
      title: "Akademik Baza",
      body: "İnformasiya Texnologiyaları üzrə təhsil, üstəgəl Google, IBM və Microsoft tərəfindən sertifikatlaşdırılmış biliklər.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-purple-500 font-mono tracking-widest text-sm uppercase flex items-center gap-4 mb-4 before:content-[''] before:w-12 before:h-[1px] before:bg-purple-500/50">
            / Haqqımda /
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-snug">
            Sistemləri qoruyuruq, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 italic font-normal">hər dəfə bir zəifliyi bağlayaraq.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <div key={i} className={`bg-slate-900/50 border p-8 rounded-2xl hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm ${item.bg}`}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-slate-950/50 border border-inherit">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}