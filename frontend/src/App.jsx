import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
