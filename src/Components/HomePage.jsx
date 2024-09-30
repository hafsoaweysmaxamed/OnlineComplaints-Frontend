import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = ({ onRegisterComplaintClick }) => {
  return (

      
    <div className="min-h-screen bg-[#427D9D] text-white flex flex-col items-center">

 <Header />
     
      

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-16">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to Our Complaint System</h2>
        <p className="text-lg mb-8">We value your feedback. Register your complaint easily and get fast responses.</p>
        
        <Link 
          to="/register" 
          className="bg-[#164863]  text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300"
        >
          Register Complaint
        </Link>
      </main>

     

      {/* Footer Section */}
      <footer className="w-full bg-[#164863] py-4 text-center text-gray-200">
        <p>&copy; 2024 Online Complaint System. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
