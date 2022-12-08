import React from 'react'
import { FaArrowRight, FaGlobe, FaMicrochip, FaPhoneAlt } from 'react-icons/fa'
import img from '../assets/img18.jpg'

const Support = () => {
  return (
    <div className='w-full mt-24'>
        <div className="absolute w-full h-[700px] bg-gray-900/60">
            <img src={img} alt="" className="mix-blend-overlay w-full h-full object-cover" />
        </div>
        <div className="mx-w-[1240px] text-white relative mx-auto">
            <div className="px-4 py-12">
                <h2 className='pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className="font-bold text-3xl py-6 text-center">Finding the right team</h3>
                <p className='py-4 text-slate-300 text-2xl text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis explicabo hic ullam quaerat, sequi laboriosam, praesentium fugiat a aliquam officia deserunt at harum in ipsum ipsa maiores nisi id natus!</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <div className="p-5 bg-orange-500 rounded-lg mt-[-4rem] w-fit text-white"> <FaPhoneAlt className='text-2xl' /> </div>
                        <h3 className="font-bold text-2xl my-6">Sales</h3>
                        <p className="text-gray-600 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus quia tempore eligendi dignissimos? Sint repellendus beatae quis! Deserunt incidunt, nesciunt accusantium fuga nostrum magnam natus error labore! Adipisci, eos.</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600">Contact Us <FaArrowRight className='w-5 ml-2' /> </p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <div className="p-5 bg-orange-500 rounded-lg mt-[-4rem] w-fit text-white"> <FaMicrochip className='text-2xl' /> </div>
                        <h3 className="font-bold text-2xl my-6">Technical Support</h3>
                        <p className="text-gray-600 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus quia tempore eligendi dignissimos? Sint repellendus beatae quis! Deserunt incidunt, nesciunt accusantium fuga nostrum magnam natus error labore! Adipisci, eos.</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600">Contact Us <FaArrowRight className='w-5 ml-2' /> </p>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-8">
                        <div className="p-5 bg-orange-500 rounded-lg mt-[-4rem] w-fit text-white"> <FaGlobe className='text-2xl' /> </div>
                        <h3 className="font-bold text-2xl my-6">Media Inquires</h3>
                        <p className="text-gray-600 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus quia tempore eligendi dignissimos? Sint repellendus beatae quis! Deserunt incidunt, nesciunt accusantium fuga nostrum magnam natus error labore! Adipisci, eos.</p>
                    </div>
                    <div className="bg-slate-100 pl-8 py-4">
                        <p className="flex items-center text-indigo-600">Contact Us <FaArrowRight className='w-5 ml-2' /> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support
