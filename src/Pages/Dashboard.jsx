import React from 'react'
import SideNav from '../Components/SideNav'

const Dashboard = () => {
  return (

   <div>

  <SideNav/>
    <div className='ml-[21%] flex gap-6 pt-5'>

<div className='bg-[#427D9D] w-[300px] h-[200px] text-center border-b-8 border-red-500 ml-20'>
<h1 className='text-white pt-20 font-bold'>Total complaints</h1>
    <p className='text-white mt-4'>10+</p>
</div>

<div className='bg-[#427D9D] w-[300px] h-[200px] text-center border-b-8 border-red-500'>
<h1 className='text-white pt-20 font-bold'>Total complaints</h1>
<p className='text-white mt-4'>20+</p>
</div>

<div className='bg-[#427D9D]  w-[300px] h-[200px] text-center border-b-8 border-red-500'>
<h1 className='text-white pt-20 font-bold'>Total complaints</h1>
    <p className='text-white mt-4'>30+</p>
</div>

    </div>

    </div>
  )
}

export default Dashboard
