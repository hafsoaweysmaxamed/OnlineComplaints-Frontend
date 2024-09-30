import React from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#427D9D] flex items-center justify-center">
      <div className="bg-[#FFFADD] text-white p-3 h-[400px] w-[350px] rounded-lg shadow-2xl  max-w-sm relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2  text-white hover:text-white transition duration-300"
        >
       
        </button>
        <h2 className="text-4xl font-bold  text-[#427D9D]   mb-7"> Addming Login </h2>
        
        <input 
          type="text" 
          placeholder="Username" 
          className="bg-gray-700 p-3 mb-4 w-full rounded-lg  mt-3focus:outline-none focus:ring-2  placeholder-gray-400 transition duration-300"
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          className="bg-gray-700 p-3 mb-6 w-full rounded-lg mt-3 focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-400 transition duration-300"
        />
        <Link to='/dashboard'>
        <button 
          className="bg-[#427D9D] text-white font-bold py-3  mt-3 px-6 rounded-lg w-full transition duration-300 shadow-lg"
        >
          Login
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
