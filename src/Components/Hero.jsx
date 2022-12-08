import React from 'react'
import img from "../assets/img5.png"
import { FaCloudUploadAlt, FaDatabase, FaPaperPlane, FaServer } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex flex-col justify-between'>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className='text-2xl'>Unique Sequencing & Production</p>
            <h1 className='py-3 text-5xl md:text-6xl font-bold'>Cloud Management</h1>
            <p className='text-2xl'>This is our Tech brand</p>
            <button className='bg-orange-500 py-2 text-white rounded-lg px-6 capitalize font-semibold sm:w-[60%] my-4'>get started</button>
          </div>
          <img src={img} alt="" className=" w-5/6 mx-auto" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[600px] bottom-[3%] bg-zinc-100 border border-slate-300 rounded-lg text-center shadow-xl md:left-1/2'>
          <p className='font-semibold'>Data Services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-2 py-2 text-slate-500'> <FaCloudUploadAlt className='h-6 text-orange-500' /> App Security </p>
            <p className='flex px-2 py-2 text-slate-500'> <FaDatabase className='h-6 text-orange-500' /> Dashboard  Design</p>
            <p className='flex px-2 py-2 text-slate-500'> <FaServer className='h-6 text-orange-500' /> Cloud Data </p>
            <p className='flex px-2 py-2 text-slate-500'> <FaPaperPlane className='h-6 text-orange-500' /> API </p>
          </div>
        </div>
    </div>
  )
}

export default Header

