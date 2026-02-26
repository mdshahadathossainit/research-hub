import React from 'react';
import ReactDOM from 'react-dom/client'; ে
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import './assets/main.css'; ে

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Dashboard />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
