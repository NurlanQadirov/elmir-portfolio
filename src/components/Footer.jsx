// src/components/Footer.jsx
import { ShieldCheck } from "lucide-react";
import { DATA } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = ["About", "Skills", "Experience", "Education", "Contact"];

  return (
    <footer className="bg-black py-12 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Üst hissə: Logo, Menyu və Sosial Şəbəkələr */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <ShieldCheck size={18} className="text-purple-400" />
            </div>
            <span className="text-white text-lg font-bold tracking-wide">
              Elmir<span className="text-purple-500">.</span>
            </span>
          </div>

          {/* Footer Naviqasiya Linkləri */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Sosial Şəbəkələr */}
          <div className="flex items-center gap-6">
            <a href={DATA.linkedinHref} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors font-medium">
              LinkedIn
            </a>
            <a href={DATA.githubHref} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-sm transition-colors font-medium">
              GitHub
            </a>
          </div>
        </div>

        {/* Alt hissə: Müəllif hüquqları və WebNest İmzası */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
          
          <div className="text-slate-500 text-sm">
            © {year} Elmir Recebli. Bütün hüquqlar qorunur.
          </div>

          {/* WebNest İmzası ən sağda */}
          <div className="text-slate-400 text-sm font-light">
            Designed & Developed by <a href="#" className="text-white font-semibold hover:text-purple-400 transition-colors">WebNest</a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}