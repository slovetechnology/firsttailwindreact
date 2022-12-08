import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-900 text-gray-300 w-full py-4 px-2'>
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-4">
            <div className="">
                <h6 className="font-bold uppercase pt-2">solutions</h6>
                <ul className="">
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div className="">
                <h6 className="font-bold uppercase pt-2">Support</h6>
                <ul className="">
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div className="">
                <h6 className="font-bold uppercase pt-2">Company</h6>
                <ul className="">
                    <li className='py-1'>About</li>
                    <li className='py-1'>Blogs</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>partners</li>
                </ul>
            </div>
            <div className="">
                <h6 className="font-bold uppercase pt-2">Legal</h6>
                <ul className="">
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className="col-span-2 pt-8 md:pt-2">
                <p className="uppercase font-semibold">Subscribe to our NewsLetter</p>
                <p className="">The latest news, articles and resources, sent to your inbox weekly.</p>
                <form className="mt-4">
                    <input type="email" className="py-2 rounded-tl-lg rounded-bl-lg pl-3" placeholder='Email Address' />
                    <button className="bg-orange-500 py-2 px-3 text-white rounded-tr-lg rounded-br-lg">Subscribe</button>
                </form>
            </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Footer
