import React from 'react';
import { UserButton, SignInButton, useUser, SignedOut } from '@clerk/clerk-react';
import "../Styles/Header.css"

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-slate-950 text-slate-100">
      <div className="text-3xl font-bold flex items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a11ab41bac00c6a11f65915cf18aafcea81b2454728a7aaa26e245014614074"
          alt="LibraBot logo"
          className="w-10 h-10 mr-3"
        />
        LibraBot
      </div>
      <nav className="flex gap-10 text-lg">
        <a href="#contact" className="hover:text-slate-400">Contact Us</a>
        <a href="#help" className="hover:text-slate-400">Help and Support</a>
        <a href="#about" className="hover:text-slate-400">About</a>
      </nav>
      <div className="flex items-center gap-4">
        <form className="flex items-center bg-zinc-300 bg-opacity-60 rounded-full px-4 py-2">
          <label htmlFor="search" className="sr-only">Type to Search</label>
          <input
            type="search"
            id="search"
            placeholder="Type to search"
            className="bg-transparent text-slate-900 focus:outline-none"
          />
        </form>


        {isSignedIn ? (
          <UserButton />
        ) : (
          <SignedOut>
            <SignInButton mode="modal">
              <button className="sign-in">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        )}

       

      </div>
    </header>
  );
};

export default Header;
