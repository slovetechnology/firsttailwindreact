import React from 'react'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='bg-zinc-100 h-[60px] w-screen z-10 drop-shadow-lg fixed'>
        <div className="flex h-full justify-between px-2 items-center w-full">
            <div className='flex items-center'>
                <h1 className='font-bold text-3xl mr-4'>TAILWIND.</h1>
                <ul className="hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="hidden md:flex mr-5">
                <button className='mr-4'>Sign In</button>
                <button className='bg-orange-500 font-semibold drop-shadow-lg px-5 py-2 rounded-lg text-white hover:bg-transparent hover:text-orange-500'>Sign Up</button>
            </div>
            <div className="md:hidden cursor-pointer mr-5" onClick={() => setNav(!nav)}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute w-full bg-zinc-100 px-4 md:hidden'}>
            <li className='border-b-2 border-zinc-200 w-full hover:bg-zinc-300'>Home</li>
            <li className='border-b-2 border-zinc-200 w-full hover:bg-zinc-300'>About</li>
            <li className='border-b-2 border-zinc-200 w-full hover:bg-zinc-300'>Support</li>
            <li className='border-b-2 border-zinc-200 w-full hover:bg-zinc-300'>Platform</li>
            <li className='border-b-2 border-zinc-200 w-full hover:bg-zinc-300'>Pricing</li>
            <div className="flex flex-col">
                <button className='border-2 border-solid border-orange-500 text-orange-500 mb-4 font-semibold drop-shadow-lg px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white'>Sign Up</button>
                <button className='bg-orange-500 font-semibold drop-shadow-lg px-5 py-2 rounded-lg text-white hover:bg-transparent hover:text-orange-500 border-2 border-solid border-orange-500 mb-3'>Sign Up</button>
            </div>
        </ul>
      
    </div>
  )
}

export default Navbar
