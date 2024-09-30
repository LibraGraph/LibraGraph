import React, { useState } from 'react';

// Sample borrowed books data
const initialBooks = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", dueDate: "2024-09-30" },
  { id: 2, title: "1984", author: "George Orwell", dueDate: "2024-10-05" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", dueDate: "2024-10-12" },
];

const BorrowedBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({ title: '', author: '', dueDate: '' });

  const handleReturnBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.dueDate) {
      setBooks([
        ...books,
        { id: books.length + 1, ...newBook }
      ]);
      setNewBook({ title: '', author: '', dueDate: '' }); // Reset input fields
    }
  };

  return (
    <div className="mt-6 bg-gray-900 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
      <h2 className="text-2xl font-semibold mb-2 text-white">Borrowed Books</h2>
      <ul className="mb-2">
        {books.map((book) => (
          <li key={book.id} className="flex flex-col bg-gray-800 p-3 mb-2 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-300">{book.title}</span>
              <button 
                className="bg-red-600 text-xs px-2 py-1 rounded hover:bg-red-700 transition duration-200"
                onClick={() => handleReturnBook(book.id)}
              >
                Return
              </button>
            </div>
            <span className="text-xs text-gray-400">by {book.author}</span>
            <span className="text-xs text-gray-400">Due: {book.dueDate}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4 text-white">Add New Book</h3>
      <form onSubmit={handleAddBook} className="mt-2 flex flex-col gap-2">
        <input 
          type="text" 
          placeholder="Title" 
          value={newBook.title} 
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} 
          required 
          className="border border-gray-700 bg-gray-800 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input 
          type="text" 
          placeholder="Author" 
          value={newBook.author} 
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} 
          required 
          className="border border-gray-700 bg-gray-800 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <input 
          type="date" 
          value={newBook.dueDate} 
          onChange={(e) => setNewBook({ ...newBook, dueDate: e.target.value })} 
          required 
          className="border border-gray-700 bg-gray-800 text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
        <button type="submit" className="bg-blue-600 text-sm text-white px-3 py-1 rounded hover:bg-blue-700 transition duration-200">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BorrowedBooks;
