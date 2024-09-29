import React, { useState } from 'react';

const InventoryManagement = ({ books = [], onAddBook, onEditBook, onDeleteBook }) => {
  const [newBook, setNewBook] = useState({ title: '', author: '', genre: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    onAddBook(newBook);
    setNewBook({ title: '', author: '', genre: '' });
  };

  return (
    <div className="inventory-management text-white">
      <h2 className="text-2xl mb-4">Manage Inventory</h2>
      <div className="add-book flex">
        <input
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="p-2 rounded-md"
        />
        <input
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
          placeholder="Author"
          className="p-2 rounded-md ml-2"
        />
        <input
          name="genre"
          value={newBook.genre}
          onChange={handleInputChange}
          placeholder="Genre"
          className="p-2 rounded-md ml-2"
        />
        <button
          onClick={handleAddBook}
          className="bg-neutral-900 text-white p-3 rounded-md ml-2"
        >
          Add Book
        </button>
      </div>
      {books.length === 0 ? (
        <p className="mt-6">No books available.</p>
      ) : (
        <ul className="mt-6">
          {books.map((book) => (
            <li key={book.id} className="p-3 rounded-lg mb-2 bg-gray-600 flex justify-between">
              {book.title} - {book.author} ({book.genre})
              <div>
                <button
                  onClick={() => onEditBook(book)}
                  className="bg-yellow-500 text-black p-2 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteBook(book.id)}
                  className="bg-red-500 text-white p-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InventoryManagement;
