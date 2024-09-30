import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import ChatSection from './components/ChatSection';
import LibraBot from './components/LibraBot';
import ChatBot from './components/ChatBot';
import BookSearch from './components/BookSearch';
import UserProfiles from './components/UserProfiles'; // Import the UserProfiles component

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      amazonLink: "https://www.amazon.in/Great-Gatsby-F-Scott-Fitzgerald/dp/8172344562",
      image: "https://th.bing.com/th/id/OIP.gv0h6k9HASgRqPKstjh3_AHaEo?w=280&h=180",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      amazonLink: "https://www.amazon.com/dp/0451524934",
      image: "https://th.bing.com/th/id/OIP.kbMxdBWJd1dEmqtbRqHa5wHaLX?w=801&h=1230",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      amazonLink: "https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0099549484",
      image: "https://th.bing.com/th/id/R.d8633102a0a922dc5a8b52d86cf96627?rik=eT%2fzYY8zCWVH4A",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      amazonLink: "https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/8172344503",
      image: "https://flxt.tmsimg.com/assets/p16161151_b_v10_aa.jpg",
    },
    // More book objects...
  ];

  const users = [
    {
      id: 1,
      name: "Alice Smith",
      email: "alice@example.com",
      role: "Reader",
      phone: "123-456-7890",
      address: "123 Main St, Springfield, IL",
      favoriteBooks: [1, 3],
    },
    {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
      phone: "987-654-3210",
      address: "456 Elm St, Springfield, IL",
      favoriteBooks: [2, 5, 8],
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Author",
      phone: "555-555-5555",
      address: "789 Oak St, Springfield, IL",
      favoriteBooks: [4, 9, 10],
    },
    // More user objects...
  ];

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-slate-100">
      <Header />
      <div className="flex-grow">
        <MainContent />
        <BookSearch books={books} onBookSelect={handleBookSelect} />
        <UserProfiles users={users} /> {/* Render UserProfiles and pass user data */}
      </div>
      <ChatBot selectedBook={selectedBook} users={users} /> {/* Pass users data to ChatBot */}
      <ChatSection />
      <LibraBot />
    </div>
  );
};

export default App;
