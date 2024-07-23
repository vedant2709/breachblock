import React from 'react'
import Navbar from '../components/Navbar'
import ButtonComponent from '../components/Button'

function Home() {
  return (
    <div className='w-full px-6 py-2 sm:px-10 sm:py-5 min-h-screen bg-[#113d3d] text-white'>
      <Navbar/>
      <div className='w-full h-[90vh] pt-24 mt-10'>
        <h1 className='text-8xl tracking-tight font-bold'>We find issues for you.</h1>
        <h1 className='text-7xl mt-4 tracking-tight font-semibold'>Are we problematic?</h1>
        <h1 className='text-5xl mt-8 tracking-tight font-regular'>I GUESS NOT...</h1>
        <ButtonComponent variant="contained" color="#09BE8B" btntext={'Book An Appointment'}/>
      </div>
    </div>
  )
}

export default Home