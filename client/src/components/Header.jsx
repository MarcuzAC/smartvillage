import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector(state => state.user);
  const green = { color: "green" };
  const black = { color: "black" };
  const white = { color: "white" };

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span style={black}>Smart</span>
            <span style={green}>Villages</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch style={green} />
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to='/profile'>
              {currentUser ? (
                <img className ='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="Profile" />
              ) : (
                <li className="text-slate-700 hover:underline">Sign In</li>
                
              )}
              </Link>
              </li>
            
        </ul>
      </div>
    </header>
  );
}
