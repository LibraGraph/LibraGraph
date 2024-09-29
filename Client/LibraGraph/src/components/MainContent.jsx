import React, { useState } from 'react';
import BorrowedBooks from './BorrowedBooks';
import IssueBook from './IssueBook';
import UserProfiles from './UserProfiles';
import InventoryManagement from './InventoryManagement';

const MainContent = ({ books, users, onAddBook, onEditBook, onDeleteBook }) => {
  const [showBorrowedBooks, setShowBorrowedBooks] = useState(false);
  const [showIssueBook, setShowIssueBook] = useState(false);
  const [showUserProfiles, setShowUserProfiles] = useState(false);
  const [showInventoryManagement, setShowInventoryManagement] = useState(false);

  const handleIssue = (book) => {
    console.log(`Issued book: ${book.title}`);
  };

  return (
    <main className="flex flex-col items-center text-center py-16 px-6 bg-gray-800 relative">
      <div className="max-w-[1400px] w-full mx-auto">
        <h1 className="text-5xl font-bold text-white mb-10 leading-snug">
          Meet our AI librarian for instant help...
        </h1>
        <div className="flex justify-center gap-8 mt-12">
          <button
            className="bg-neutral-900 text-2xl px-10 py-4 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={() => setShowBorrowedBooks(!showBorrowedBooks)}
          >
            Borrowed Books
          </button>
          <button
            className="bg-neutral-900 text-2xl px-10 py-4 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={() => setShowIssueBook(!showIssueBook)}
          >
            Issue Books
          </button>
          <button
            className="bg-neutral-900 text-2xl px-10 py-4 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={() => setShowUserProfiles(!showUserProfiles)}
          >
            User Profiles
          </button>
          <button
            className="bg-neutral-900 text-2xl px-10 py-4 rounded-lg hover:bg-neutral-800 transition-colors"
            onClick={() => setShowInventoryManagement(!showInventoryManagement)}
          >
            Manage Inventory
          </button>
        </div>

        {/* Display components based on state */}
        {showBorrowedBooks && <BorrowedBooks />}
        {showIssueBook && <IssueBook books={books} onIssue={handleIssue} />}
        {showUserProfiles && <UserProfiles users={users} />}
        {showInventoryManagement && (
          <InventoryManagement
            books={books}
            onAddBook={onAddBook}
            onEditBook={onEditBook}
            onDeleteBook={onDeleteBook}
          />
        )}
      </div>
    </main>
  );
};

export default MainContent;
