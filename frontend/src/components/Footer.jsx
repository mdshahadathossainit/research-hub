import React from 'react';
import { Github, Globe, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20 backdrop-blur-xl w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              Paper<span className="text-indigo-500">Flow</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              An open-source hub for researchers to publish and explore academic works globally.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Connect with Developer</span>
            <div className="flex gap-6">
              <a href="https://github.com/mdshahadathossainit" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://mdshahadathossainit.github.io/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:shahadat@example.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-slate-300 font-medium">Md Shahadat Hossain</p>
            <p className="text-xs text-slate-500">Port City International University</p>
            <p className="text-xs text-indigo-500/80 mt-4">© 2026 All Rights Reserved</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
