import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Navbar = () => {

  const scrollToPublications = () => {
    const section = document.getElementById('publications-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="h-20 flex items-center justify-between px-10 border-b border-white/5 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-xl">
          <LayoutGrid size={22} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">
          Paper<span className="text-indigo-500">Flow</span>
        </h1>
      </div>

      <nav className="flex items-center gap-6">
        {/* Link to your GitHub documentation */}
        <a 
          href="https://github.com/mdshahadathossainit/research-hub" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
        >
          Documentation
        </a>

        {/* Explore Hub button with scroll logic */}
        <button 
          onClick={scrollToPublications}
          className="bg-indigo-600 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
        >
          Explore Hub
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
