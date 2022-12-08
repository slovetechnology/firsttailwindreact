import React from 'react'
import tree from "../assets/trees.jpg"

const Login3 = () => {
  return (
    <div className='w-full h-screen flex bg-zinc-100'>
    <div className='grid grid-cols-1 md:grid-cols-2 h-[550px] bg-white rounded-xl shadow-gray-400 shadow-lg m-auto sm:max-w-[900px]'>
        <div className='hidden md:block h-[550px] w-full'>
             <img src={tree} alt="" className='w-full h-full rounded-tl-xl rounded-bl-xl' /> 
        </div>
        <div className='p-4 flex flex-col justify-around'>
            <form className=''>
                <h2 className="text-center text-4xl font-bold mb-4">TAILWIND.</h2>
                <div className='flex py-3'>
                    <input type="text" placeholder='Username' className='border p-2 mr-2' />
                    <input type="text" placeholder='Password' className='border p-2' />
                </div>
                <button className='p-2 bg-orange-500 w-full border-orange-500 transition-all my-4 rounded-sm text-white font-semibold text-xl border hover:bg-transparent hover:text-orange-500 border-solid'>Sign in</button>
                <p className='text-center'>Forgot Username or Password</p>
            </form>
            <p className='text-center'>Sign up</p>
        </div>
    </div>
    </div>
  )
}

export default Login3
