import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Send, FileText, User, Sparkles } from 'lucide-react';

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [entry, setEntry] = useState({ title: '', author: '', abstract: '' });
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://research-hub-d9pz.onrender.com/api/papers/';

  useEffect(() => {
    loadPapers();
  }, []);

  const loadPapers = async () => {
    try {
      const response = await axios.get(API_URL);
      setList(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error("Error loading papers:", err);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_URL, entry);
      alert("🎉 Paper Published Successfully!");
      setEntry({ title: '', author: '', abstract: '' });
      await loadPapers();
    } catch (err) {
      console.error("Error publishing paper:", err);
      alert("❌ Submission Failed! Check if the backend is awake.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-12 gap-10">
      {/* Submission Sidebar */}
      <section className="col-span-12 lg:col-span-4">
        <div className="custom-glass p-8 rounded-3xl sticky top-28">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Sparkles size={20} className="text-indigo-400" /> AI Submission
          </h2>
          <form onSubmit={handlePublish} className="flex flex-col gap-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Title</label>
              <input 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                placeholder="Enter research title..."
                value={entry.title}
                onChange={(e) => setEntry({...entry, title: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Author</label>
              <input 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-indigo-500 outline-none transition-all placeholder:text-slate-600"
                placeholder="Author name..."
                value={entry.author}
                onChange={(e) => setEntry({...entry, author: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Abstract</label>
              <textarea 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm text-white h-40 focus:border-indigo-500 outline-none transition-all resize-none placeholder:text-slate-600"
                placeholder="Brief summary of your research..."
                value={entry.abstract}
                onChange={(e) => setEntry({...entry, abstract: e.target.value})}
                required
              />
            </div>
            <button 
              disabled={loading}
              className={`bg-indigo-600 mt-2 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-95 transition-all shadow-lg shadow-indigo-500/20 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Send size={18} /> {loading ? 'Publishing...' : 'Publish Paper'}
            </button>
          </form>
        </div>
      </section>

      {/* Publications List Section */}
      <section className="col-span-12 lg:col-span-8">
        <div id="publications-list" className="flex items-center justify-between mb-8 scroll-mt-28">
          <div>
            <h2 className="text-3xl font-bold text-white">Latest Publications</h2>
            <p className="text-slate-400 text-sm mt-1 italic">Discover recently indexed research papers</p>
          </div>
          <div className="bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
             <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{list.length} Papers</span>
          </div>
        </div>

        <div className="space-y-6">
          {list.length === 0 ? (
            <div className="custom-glass p-20 rounded-2xl text-center">
              <p className="text-slate-500 animate-pulse font-medium">No publications found. Be the first to publish!</p>
            </div>
          ) : (
            list.map((item) => (
              <div key={item.id} className="custom-glass p-8 rounded-2xl hover:bg-white/[0.05] transition-all group border-transparent hover:border-white/10 cursor-default">
                <div className="flex justify-between items-start mb-5">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-[0.2em] rounded-md border border-indigo-500/30">
                    {item.category || "Research"}
                  </span>
                  
                  {/* File Icon with functionality */}
                  <button 
                    onClick={() => alert(`Reviewing details for: ${item.title}`)}
                    className="p-2 hover:bg-white/10 rounded-full transition-all group/icon"
                    title="View Paper Details"
                  >
                    <FileText size={22} className="text-slate-500 group-hover/icon:text-indigo-400 transition-colors" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-indigo-100 transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-300 mb-5 bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/5">
                  <User size={14} className="text-indigo-400" />
                  <span className="text-sm font-semibold tracking-wide">{item.author}</span>
                </div>
                
                <div className="relative">
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 italic pl-4 border-l-2 border-indigo-500/30 group-hover:border-indigo-500/60 transition-colors">
                    "{item.abstract}"
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
