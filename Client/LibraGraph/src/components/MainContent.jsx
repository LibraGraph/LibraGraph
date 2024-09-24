import React from 'react';

const MainContent = () => {
  return (
    <main className="flex flex-col items-center text-center py-16 px-6 bg-no-repeat bg-cover bg-center relative">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-5xl font-bold text-white max-md:text-4xl mb-10 leading-snug">
          Meet our AI librarian for instant help...
        </h1>
        <div className="flex justify-center gap-8 mt-12 max-md:flex-col">
          <button className="bg-neutral-900 text-2xl px-10 py-4 rounded-lg hover:bg-neutral-800">
            Borrowed Books
          </button>
          <button className="bg-neutral-900 text-2xl px-10 py-4 rounded-lg hover:bg-neutral-800">
            Issue Books
          </button>
          <button className="bg-neutral-900 text-2xl px-10 py-4 rounded-lg hover:bg-neutral-800">
            My Profile
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
