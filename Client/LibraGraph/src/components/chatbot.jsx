import React, { useState } from 'react';
import { FaRobot, FaUser } from 'react-icons/fa';

const ChatBot = ({ books }) => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isChatVisible, setChatVisible] = useState(false);

  const greetings = [
    "Hello! I'm Libr-AI-nian, your virtual librarian. How can I help you today?",
    "Hi there! Looking for a book? Just ask me!",
    "Welcome! What book are you interested in today?",
  ];

  const noBooksFoundResponses = [
    "Sorry, I couldn't find any books matching your query. Could you try asking something else?",
    "Hmm, no matches found. Want to ask about a different book or author?",
    "I couldn't locate any books related to that. Try asking about another title or author!",
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userMessage = userInput;
    setChatHistory((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setUserInput('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      if (chatHistory.length === 0) {
        // If first message, send a greeting
        const greeting = greetings[Math.floor(Math.random() * greetings.length)];
        setChatHistory((prev) => [...prev, { sender: 'bot', text: greeting }]);
      } else {
        const matchingBooks = books.filter(book =>
          book.title.toLowerCase().includes(userMessage.toLowerCase()) ||
          book.author.toLowerCase().includes(userMessage.toLowerCase())
        );

        if (matchingBooks.length > 0) {
          const response = `Here are the books I found:`;
          setChatHistory((prev) => [...prev, { sender: 'bot', text: response }]);
          matchingBooks.forEach(book => {
            setChatHistory((prev) => [...prev, { sender: 'bot', text: `${book.title} by ${book.author}`, bookLink: book.amazonLink }]);
          });
          // Follow-up question
          setChatHistory((prev) => [...prev, { sender: 'bot', text: "Would you like to know more about another book?" }]);
        } else {
          const response = noBooksFoundResponses[Math.floor(Math.random() * noBooksFoundResponses.length)];
          setChatHistory((prev) => [...prev, { sender: 'bot', text: response }]);
        }
      }

      setIsTyping(false);
    }, 1000); // Simulate a delay for the bot response
  };

  const handleBookClick = (link) => {
    window.open(link, '_blank'); // Open the book link in a new tab
  };

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  return (
    <>
      <button 
        onClick={toggleChat} 
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        {isChatVisible ? <FaUser size={24} /> : <FaRobot size={24} />}
      </button>

      {isChatVisible && (
        <div className="fixed bottom-20 right-5 w-80 bg-white text-black p-4 rounded-lg shadow-lg">
          <div className="h-60 overflow-y-scroll">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`mb-2 ${chat.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={chat.sender === 'user' ? 'text-blue-500' : 'text-green-500'}>
                  {chat.sender === 'user' ? 'You: ' : 'Libr-AI-nian: '}
                </span>
                {chat.text}
                {chat.bookLink && (
                  <div className="mt-1">
                    <button 
                      onClick={() => handleBookClick(chat.bookLink)}
                      className="text-sm text-blue-500 underline"
                    >
                      View on Amazon
                    </button>
                  </div>
                )}
              </div>
            ))}
            {isTyping && <p className="text-gray-500">Libr-AI-nian is typing...</p>}
          </div>

          <form onSubmit={handleSendMessage} className="mt-4">
            <input 
              type="text" 
              value={userInput} 
              onChange={(e) => setUserInput(e.target.value)} 
              placeholder="Ask about a book..." 
              className="w-full p-2 border rounded"
            />
            <button 
              type="submit" 
              className="mt-2 bg-blue-600 text-white p-2 rounded w-full"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
