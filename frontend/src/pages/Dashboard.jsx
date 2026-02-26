import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Send, FileText, User, Sparkles } from 'lucide-react'; 

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [entry, setEntry] = useState({ title: '', author: '', abstract: '' });

  const API_URL = 'https://research-hub-d9pz.onrender.com/api/papers/';

  useEffect(() => {
    loadPapers();
  }, []);

  const loadPapers = async () => {
    try {
      const response = await axios.get(API_URL);
      setList(response.data);
    } catch (err) {
      console.error("Error loading papers:", err);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, entry);
      setEntry({ title: '', author: '', abstract: '' });
      loadPapers();
    } catch (err) {
      console.error("Error publishing paper:", err);
    }
  };

  return (
    <main className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-12 gap-10">
      <section className="col-span-12 lg:col-span-4">
        <div className="custom-glass p-8 rounded-3xl">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Sparkles size={18} className="text-indigo-400" /> AI Submission
          </h2>
          <form onSubmit={handlePublish} className="flex flex-col gap-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Title</label>
              <input 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm focus:border-indigo-500 outline-none transition-all"
                value={entry.title}
                onChange={(e) => setEntry({...entry, title: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Author</label>
              <input 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm focus:border-indigo-500 outline-none transition-all"
                value={entry.author}
                onChange={(e) => setEntry({...entry, author: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase ml-1">Abstract</label>
              <textarea 
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm h-40 focus:border-indigo-500 outline-none transition-all resize-none"
                value={entry.abstract}
                onChange={(e) => setEntry({...entry, abstract: e.target.value})}
                required
              />
            </div>
            <button className="bg-indigo-600 mt-2 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-95 transition-all">
              <Send size={18} /> Publish Paper
            </button>
          </form>
        </div>
      </section>

      <section className="col-span-12 lg:col-span-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Publications</h2>
          <span className="text-sm text-slate-500">{list.length} Papers indexed</span>
        </div>
        <div className="space-y-6">
          {list.map((item) => (
            <div key={item.id} className="custom-glass p-6 rounded-2xl hover:bg-slate-900/40 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-md">
                  {item.category}
                </span>
                <FileText size={20} className="text-slate-600 group-hover:text-indigo-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-snug">{item.title}</h3>
              <div className="flex items-center gap-2 text-slate-400 mb-4">
                <User size={14} />
                <span className="text-sm font-medium">{item.author}</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 italic">
                "{item.abstract}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
