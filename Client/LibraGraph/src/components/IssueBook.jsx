import React from 'react';

const IssueBook = ({ books, onIssue }) => {
  // Check if books is defined and is an array
  if (!books || !Array.isArray(books)) {
    return <p>No books available to issue.</p>; // Render a message if books are not available
  }

  const handleIssue = (book) => {
    // Call the onIssue function passed as a prop
    onIssue(book);
  };

  return (
    <div className="issue-book-container">
      <h2 className="text-2xl font-bold text-white">Issue a Book</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="mb-4">
            <span>{book.title} by {book.author}</span>
            <button onClick={() => handleIssue(book)} className="bg-blue-500 text-white px-3 py-1 rounded ml-4">
              Issue
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueBook;
