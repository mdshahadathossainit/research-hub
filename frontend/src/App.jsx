import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import './assets/main.css';

const App = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar />
      <Dashboard />
      
      {/* Footer / Credits */}
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5 bg-black/20 backdrop-blur-md">
        <p>© 2026 Research Hub | Built with Passion for Researchers</p>
      </footer>
    </div>
  );
};

// Rendering the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
