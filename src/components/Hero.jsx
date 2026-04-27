// src/components/Hero.jsx
import { ShieldCheck, ArrowRight } from "lucide-react";
import { DATA } from "../data/portfolioData";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center pt-24 pb-12"
    >
      {/* --- ARXA FON ELEMENTLƏRİ --- */}

      {/* 1. Ümumi Şəbəkə (Əvvəlki kimi, v4 formatında bg-[size:64px]) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px]"></div>
      
      {/* 2. Sağ tərəfdəki böyük bənövşəyi parıltı (Əvvəlki kimi) */}
      <div className="absolute right-0 top-1/4 w-150 h-150 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      {/* 3. YENİ: Sol tərəfdəki boşluğu doldurmaq üçün üzən kiber nöqtələr */}
      <div className="absolute left-0 top-0 w-1/2 h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute inset-0 animate-float-nodes">
          {/* Nöqtələr (SVG grid pattern) */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                {/* Bənövşəyi nöqtələr */}
                <circle cx="2" cy="2" r="1.5" fill="#a855f7" fillOpacity="0.3" />
                {/* Mavi nöqtələr */}
                <circle cx="22" cy="22" r="1" fill="#3b82f6" fillOpacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>

      {/* --- ƏSAS MƏZMUN KONTEYNERİ --- */}
      <div className="relative max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        
        {/* SOL TƏRƏF (Canlandırılmış Yazılar) */}
        <div className="flex-1 text-left">
          
          {/* 1. Status Göstəricisi - Düzəldilmiş Pulsasiya ilə */}
          <div className="opacity-0 animate-fade-in inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            
            {/* Pulsasiya edən dairə konteyneri */}
            <span className="relative flex h-3 w-3 items-center justify-center">
              {/* YENİLƏNMİŞ: Ətrafına mükəmməl mərkəzlənmiş, dairəvi işıq saçan parıltı */}
              <span className="animate-perfect-pulse absolute inline-flex h-full w-full rounded-full bg-purple-500/60 shadow-[0_0_15px_5px_rgba(168,85,247,0.4)]"></span>
              
              {/* Mərkəzdəki sabit dairə */}
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_10px_#a855f7]"></span>
            </span>
            
            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              Sistem_Aktiv
            </span>
          </div>

          {/* 2. Böyük Başlıq (v4 formatında bg-linear-to-r) */}
          <h1 className="opacity-0 animate-fade-in-up delay-300 text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6">
            Rəqəmsal <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">
              Müdafiə Xətti
            </span>
          </h1>

          {/* 3. Alt Mətn */}
          <p className="opacity-0 animate-fade-in-up delay-500 text-lg text-slate-400 leading-relaxed mb-10 max-w-xl font-light">
            Sistemlərinizi müasir rəqəmsal təhdidlərdən qoruyan, zəifliklərin aşkarlanması və şəbəkə təhlükəsizliyi üzrə ixtisaslaşmış strateji yanaşmalar.
          </p>

          {/* 4. Düymələr */}
          <div className="opacity-0 animate-fade-in-up delay-700 flex flex-wrap items-center gap-5">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              Təhlükəsizlik Auditi
              <ArrowRight size={18} />
            </button>
            <a 
              href={DATA.linkedinHref} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-slate-300 hover:text-white px-4 py-3.5 font-medium transition-colors"
            >
              LinkedIn <ArrowRight size={16} className="-rotate-45" />
            </a>
          </div>
        </div>

        {/* SAĞ TƏRƏF (Canlandırılmış Komponent, Əvvəlki kimi) */}
        <div className="hidden md:flex flex-1 justify-end relative">
          <div className="relative w-80 h-80 flex items-center justify-center group">
            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[80px] group-hover:bg-purple-500/30 transition-all duration-700 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_12s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-6 rounded-full border border-blue-500/30 border-dashed animate-[spin_8s_linear_infinite_reverse]">
               <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6] -translate-x-1/2 translate-y-1/2"></div>
               <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-14 rounded-full border border-purple-500/40 animate-[spin_15s_linear_infinite]"></div>
            <div className="relative flex items-center justify-center z-10 w-24 h-24 bg-[#050505] border border-purple-500/50 rounded-full shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-105 transition-transform cursor-crosshair">
              <div className="absolute inset-0 rounded-full border border-purple-500 animate-ping opacity-20"></div>
              <ShieldCheck size={40} className="text-purple-400" strokeWidth={1.5} />
            </div>
            <div 
              className="absolute top-10 -right-4 bg-slate-900/80 backdrop-blur-sm border border-purple-500/30 px-3 py-1.5 rounded-md text-[10px] font-mono text-purple-300 shadow-lg animate-bounce" 
              style={{ animationDuration: '3s' }}
            >
              AES-256_ACTIVE
            </div>
            <div 
              className="absolute bottom-12 -left-8 bg-slate-900/80 backdrop-blur-sm border border-blue-500/30 px-3 py-1.5 rounded-md text-[10px] font-mono text-blue-300 shadow-lg animate-bounce" 
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            >
              PACKETS_SECURED
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}