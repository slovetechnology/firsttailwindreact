import React from 'react'
import login from "../assets/login.jpg"

const Login = () => {
  return (
    <div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 h-screen w-full">
            <div className='hidden md:block bg-black/50'>
                <img src={login} alt="" className='w-full h-full object-cover mix-blend-overlay' />
            </div>
            <div className='bg-gray-100 flex flex-col justify-center'>
                <form className='w-full max-w-[400px] mx-auto bg-white p-4 rounded-lg shadow-lg'>
                    <h2 className='font-bold text-center text-4xl py-4'>TAILWIND.</h2>
                    <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border p-2 rounded-sm' type="text" />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border p-2 rounded-sm' type="password" />
                    </div>
                    <button className='py-2 text-center w-full bg-blue-600 rounded-full text-white font-semibold text-lg my-4 hover:bg-blue-500'>Sign In</button>
                    <div className='flex justify-between'>
                        <p>
                            <label className='cursor-pointer'> <input type="checkbox" className='mr-2' />Remeber Me </label>
                        </p>
                        <p>Create Account</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
