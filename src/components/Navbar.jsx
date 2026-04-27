// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Experience", "Education", "Contact"];

  return (
    <nav
      // w-[calc(100%-3rem)] və max-w-[1104px] istifadə etdik ki, tam olaraq 
      // Hero bölməsindəki yazıların sol kənarı ilə eyni xətdə (hizalanmış) olsun.
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-3rem)] max-w-[1104px] rounded-full border border-white/10 backdrop-blur-md ${
        scrolled 
          ? "top-4 bg-[#050505]/80 shadow-[0_10px_30px_rgba(0,0,0,0.6)] py-3" 
          : "top-6 bg-white/[0.03] py-4"
      }`}
    >
      <div className="px-6 md:px-8 flex items-center justify-between">
        
        {/* Logo - İkon silindi və ad yeniləndi */}
        <a href="#hero" className="flex items-center group">
          <span className="font-bold text-xl text-white tracking-tight">
            Elmir Rəcəbli<span className="text-purple-500">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all border border-white/5"
          >
            Əlaqə
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden absolute top-full left-0 w-full mt-4 bg-[#050505]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl py-4 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base font-medium text-slate-300 py-2 border-b border-white/5"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-purple-600 text-white px-5 py-3 rounded-xl font-semibold mt-2"
          >
            Əlaqə Yarat
          </button>
        </div>
      )}
    </nav>
  );
}