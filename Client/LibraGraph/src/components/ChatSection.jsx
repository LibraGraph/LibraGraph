import React from 'react';

const ChatSection = () => {
  return (
    <section className="fixed bottom-5 right-5 bg-slate-950 text-slate-100 rounded-xl p-6 max-w-sm w-full shadow-lg">
      <h2 className="text-2xl font-extrabold mb-4">Libr-AI-nian</h2>
      <div className="bg-neutral-700 rounded-lg p-4 mb-4 text-lg">
        Hello, how can I help you today?
      </div>
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Enter your message..."
          className="flex-grow px-3 py-2 rounded-lg bg-neutral-700 text-base"
        />
        <button type="submit" className="px-4 py-2 bg-neutral-700 rounded-lg text-base hover:bg-neutral-600">
          Send
        </button>
      </form>
    </section>
  );
};

export default ChatSection;
