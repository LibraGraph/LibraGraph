import React from 'react';

const LibrarySection = ({ title }) => {
  return (
    <div className="flex-grow flex justify-center items-center bg-neutral-900 rounded-lg text-3xl text-slate-100 py-8">
      {title}
    </div>
  );
};

export default LibrarySection;
