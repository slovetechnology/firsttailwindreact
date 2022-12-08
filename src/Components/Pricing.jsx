import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  return (
    <div className='w-full text-white my-24'>
        <div className="w-full h-[800px] bg-slate-900 mix-blend-overlay absolute"></div>
        <div className="max-w-[1240px] mx-auto py-12">
            <div className="text-center text-slate-300 py-8">
                <h2 className="text-3xl uppercase font-semibold">pricing</h2>
                <h3 className="text-4xl text-white font-bold py-8">The right price for your research.</h3>
                <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quae, voluptatem quas maxime reiciendis iure sed laudantium nam placeat repudiandae illum ipsum eveniet fugiat mollitia iste sapiente voluptates dolore modi!</p>
            </div>
            <div className="grid md:grid-cols-2 relative">
                <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
                    <span className="bg-orange-500 py-1 px-3 text-white uppercase rounded-2xl text-sm">Standard</span>
                    <div className="">
                        <p className="text-6xl font-bold py-4 flex">$49 <span className="text-xl text-slate-400 flex flex-col justify-end">/mon</span> </p>
                    </div>
                    <p className="text-xl text-slate-500 py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae.</p>
                    <div className="text-xl">
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <button className='bg-orange-500 w-full py-4 my-4 text-white capitalize font-semibold shadow-md rounded-lg shadow-slate-400'>get started</button>
                    </div>
                </div>
                <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl">
                    <span className="bg-orange-500 py-1 px-3 text-white uppercase rounded-2xl text-sm">Premium</span>
                    <div className="">
                        <p className="text-6xl font-bold py-4 flex">$99 <span className="text-xl text-slate-400 flex flex-col justify-end">/mon</span> </p>
                    </div>
                    <p className="text-xl text-slate-500 py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae.</p>
                    <div className="text-xl">
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <p className="py-4 flex"> <FaCheck className='text-green-600 mr-5 w-7' /> Lorem ipsum dolor sit amet.</p>
                        <button className='bg-orange-500 w-full py-4 my-4 text-white capitalize font-semibold shadow-md rounded-lg shadow-slate-400'>get started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
