import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Send, FileText, User, Sparkles, Search } from 'lucide-react';

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [entry, setEntry] = useState({ title: '', author: '', abstract: '' });
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://research-hub-d9pz.onrender.com/api/papers/';

  useEffect(() => {
    fetchPapers();
  }, []);

  const fetchPapers = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  const handlePublish = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_URL, entry);
      alert("🎉 Published Successfully!");
      setEntry({ title: '', author: '', abstract: '' });
      fetchPapers();
    } catch (error) {
      alert("❌ Submission Failed!");
    } finally {
      setLoading(false);
    }
  };

  const activeResults = list.filter(item => 
    item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-12 gap-10">
      <section className="col-span-12 lg:col-span-4">
        <div className="custom-glass p-8 rounded-3xl sticky top-28">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Sparkles size={20} className="text-indigo-400" /> AI Submission
          </h2>
          <form onSubmit={handlePublish} className="flex flex-col gap-5">
            <input 
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Research Title"
              value={entry.title}
              onChange={(e) => setEntry({...entry, title: e.target.value})}
              required
            />
            <input 
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm text-white focus:border-indigo-500 outline-none transition-all"
              placeholder="Author Name"
              value={entry.author}
              onChange={(e) => setEntry({...entry, author: e.target.value})}
              required
            />
            <textarea 
              className="w-full bg-slate-900/50 border border-white/10 rounded-xl p-4 text-sm text-white h-40 focus:border-indigo-500 outline-none transition-all resize-none"
              placeholder="Abstract Summary"
              value={entry.abstract}
              onChange={(e) => setEntry({...entry, abstract: e.target.value})}
              required
            />
            <button 
              disabled={loading}
              className="bg-indigo-600 py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all active:scale-95"
            >
              <Send size={18} /> {loading ? 'Processing...' : 'Publish Paper'}
            </button>
          </form>
        </div>
      </section>

      <section className="col-span-12 lg:col-span-8">
        <div id="publications-list" className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Latest Publications</h2>
            <p className="text-slate-400 text-sm italic">Browse and explore research works</p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text"
              placeholder="Search by title or author..."
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white focus:border-indigo-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-6">
          {activeResults.length === 0 ? (
            <div className="custom-glass p-20 rounded-2xl text-center border-dashed border-2 border-white/5">
              <p className="text-slate-500 font-medium tracking-wide">
                {searchTerm ? `No matches found for "${searchTerm}"` : "Waiting for first publication..."}
              </p>
            </div>
          ) : (
            activeResults.map((paper) => (
              <div key={paper.id} className="custom-glass p-8 rounded-2xl hover:bg-white/5 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-md border border-indigo-500/20">
                    {paper.category || "General Research"}
                  </span>
                  <button 
                    onClick={() => {
                      if (window.confirm(`Title: ${paper.title}\n\nShow full abstract?`)) {
                        alert(paper.abstract);
                      }
                    }}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors group"
                  >
                    <FileText size={22} className="text-slate-500 group-hover:text-indigo-400" />
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug">
                  {paper.title}
                </h3>
                
                <div className="flex items-center gap-2 text-slate-300 mb-5 bg-white/5 w-fit px-3 py-1.5 rounded-lg">
                  <User size={14} className="text-indigo-400" />
                  <span className="text-sm font-medium">{paper.author}</span>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-indigo-500/30 pl-4 italic line-clamp-3">
                  "{paper.abstract}"
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
