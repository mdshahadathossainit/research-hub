import React from 'react';
import { LayoutGrid } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="h-20 flex items-center justify-between px-10 border-b border-white/5 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-600 p-2 rounded-xl">
          <LayoutGrid size={22} className="text-white" />
        </div>
        <h1 className="text-xl font-bold tracking-tight">Paper<span className="text-indigo-500">Flow</span></h1>
      </div>
      <nav className="flex items-center gap-6">
        <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Documentation</a>
        <button className="bg-indigo-600 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all">
          Explore Hub
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
