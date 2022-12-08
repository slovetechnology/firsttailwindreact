import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Trusted by developers all over the world</h2>
            <p className="text-xl md:text-2xl py-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet beatae quisquam obcaecati nihil explicabo, adipisci consectetur nostrum necessitatibus! Non hic illum quasi odio nulla molestiae fugit nobis, ullam alias.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-3 px-2 text-center">
            <div className=" rounded-xl border py-6 shadow-xl">
                <p className='text-5xl font-bold text-orange-500'>100%</p>
                <p className="text-gray-400 capitalize mt-2">completion</p>
            </div>
            <div className=" rounded-xl border py-6 shadow-xl">
                <p className='text-5xl font-bold text-orange-500'>24/7</p>
                <p className="text-gray-400 capitalize mt-2">delivery</p>
            </div>
            <div className=" rounded-xl border py-6 shadow-xl">
                <p className='text-5xl font-bold text-orange-500'>100k</p>
                <p className="text-gray-400 capitalize mt-2">transactions</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
