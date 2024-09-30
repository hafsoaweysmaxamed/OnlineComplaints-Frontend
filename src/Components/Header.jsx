import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-[#164863] text-white py-5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold" > Application Online Complaint</h1>
          <nav className="space-x-10">
            <Link to="/" className="hover:text-gray-300 text-2xl">Home</Link>
            <Link to="/about" className="hover:text-gray-300 text-2xl">About</Link>
            <Link to="/login" className=" text-2xl shadow-lg  py-1 px-6 rounded bg-white text-black ">Admin</Link>
          </nav> 
        </div>
      </header>
  );
};

export default Header;
