import React from 'react'
import { NavLink } from 'react-router-dom'


const SideNav = () => {
  return (
    <div className='bg-[#4B527E] h-screen w-[20%] text-white fixed flex flex-col'>
      <h1 className='font-bold text-4xl  pt-5 text-center'>Complaints</h1>
      <ul className='flex flex-col gap-8 mt-10 mx-5'>


      <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `flex items-center text-xl ${isActive ? 'bg-blue-600 rounded-lg' : ''} hover:bg-blue-700 p-3 transition-all duration-300 ease-in-out`}
        >
        <i class="fa-brands fa-windows mr-3"></i> Dashboard
        </NavLink>
        <NavLink 
          to="/admin" 
          className={({ isActive }) => 
            `flex items-center text-xl ${isActive ? 'bg-blue-600 rounded-lg' : ''} hover:bg-blue-700 p-3 transition-all duration-300 ease-in-out`}
        >
         <i class="fa-solid fa-book m-3"></i> Complaints
        </NavLink>

       


        <NavLink 
          to="/user" 
          className={({ isActive }) => 
            `flex items-center text-xl ${isActive ? 'bg-blue-600 rounded-lg' : ''} hover:bg-blue-700 p-3 transition-all duration-300 ease-in-out`}
        >
      <i class="fa-solid fa-gear m-3"></i> Logout
        </NavLink>
      </ul>
    </div>
  )
}

export default SideNav