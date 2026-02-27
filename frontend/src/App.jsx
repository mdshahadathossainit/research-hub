import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer'; 
import './assets/main.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500/30">
      <Navbar />
      
      <div className="flex-grow">
        <Dashboard />
      </div>
      
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
