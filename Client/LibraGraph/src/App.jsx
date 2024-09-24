import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ChatSection from './components/ChatSection';
import LibraBot from './components/LibraBot';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-100">
      <Header />
      <div className="flex-grow">
        <MainContent />
        <ChatSection />
      </div>
      <LibraBot />
    </div>
  );
}

export default App;
