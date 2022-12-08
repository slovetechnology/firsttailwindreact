import React from 'react'
import logo from '../assets/login.jpg'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

const Login2 = () => {
  return (
    <div className='w-full h-screen relative bg-zinc-900/90'>
      <img src={logo} alt="" className="absolute w-full h-full object-cover mix-blend-overlay" />

      <div className='flex flex-col justify-center h-full items-center w-full relative'>
        <form className='bg-white/50 backdrop-blur-md max-w-[400px] w-full mx-auto p-8 rounded-lg'>
            <h2 className='font-bold text-center text-4xl py-4'>TAILWIND.</h2>
            <div className='flex justify-between'>
                <p className='shadow-sm py-2 px-6 hover:shadow-xl border relative rounded-lg flex items-center'> <AiFillFacebook className='mr-2 text-blue-800' /> Facebook</p>
                <p className='shadow-sm py-2 px-6 hover:shadow-xl border relative rounded-lg flex items-center'> <FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='py-2 flex flex-col'>
                <label>Username</label>
                <input type="text" className='border p-2 bg-transparent rounded-full placeholder:text-white' placeholder='Enter Username' />
            </div>
            <div className='py-2 flex flex-col'>
                <label>Password</label>
                <input type="text" className='border p-2 bg-transparent rounded-full placeholder:text-white' placeholder='Enter Password' />
            </div>
            <button className='my-3 py-2 bg-orange-600 w-full text-center text-xl text-white font-semibold rounded-full'>Sign In</button>
            <p>
                <label className='flex items-center'> <input type="checkbox" className='mr-2' /> Remember Me </label>
            </p>
            <p className='mt-8 text-center'>Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  )
}

export default Login2
