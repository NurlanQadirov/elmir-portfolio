// src/components/Contact.jsx
import { Shield, ExternalLink } from "lucide-react";
import { DATA } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#030712] relative overflow-hidden border-t border-white/5">
      {/* Premium Minimalist Arxa Fon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl backdrop-blur-md">
          <Shield size={32} className="text-slate-300" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Əməkdaşlığa Hazıram
        </h2>
        
        <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Təşkilatınızın kiber müdafiə xəttini necə gücləndirə biləcəyimizi müzakirə edək. Təhlükəsizlik auditləri və strateji həllər üçün müraciət edə bilərsiniz.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
         <a
  href="mailto:elmrrcbl.2005@gmail.com?subject=CV Request&body=Hi Elmir, I would like to request your CV."
  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
>
  REQUEST CV
</a>
          <a
            href={DATA.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all"
          >
            LinkedIn <ExternalLink size={16} className="text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}