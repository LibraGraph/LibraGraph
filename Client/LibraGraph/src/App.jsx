// src/App.jsx

import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
