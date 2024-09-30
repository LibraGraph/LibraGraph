import React, { useState } from 'react';

const BookSearch = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-8 max-w-4xl mx-auto p-6 bg-neutral-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-4">Search for Books</h2>
      <input
        type="text"
        placeholder="Enter book title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-4"
      />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="flex flex-col p-4 bg-neutral-900 rounded-lg shadow-md">
              <img
                src={book.image} // Book cover image URL
                alt={book.title}
                className="w-full h-36 rounded-lg object-cover mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-slate-100">{book.title}</h3>
                <p className="text-gray-400">{book.author}</p>
                <a
                  href={book.amazonLink} // Amazon link for purchasing the book
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No books found.</p>
        )}
      </div>
    </div>
  );
};


export default BookSearch;



