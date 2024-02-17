import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate()
  return (
    <div className='w-full h-[calc(100vh-10rem)]  overflow-y-hidden flex justify-center items-center'>
      <div className='flex flex-col gap-y-8'>
        <button className='button px-5 py-5 rounded-md text-2xl text-white font-bold uppercase' onClick={()=>navigate("/signup")}>
          Sign Up
        </button>

        <button className='button px-5 py-5 rounded-md text-2xl text-white font-bold uppercase' onClick={()=>navigate("/login")}>
          Log in
        </button>
      </div>



    </div>
  )
}

export default Home