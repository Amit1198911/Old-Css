import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-300 w-full flex flex-row justify-between p-4 text-black font-bold'>
        <div className='pl-4  hover:text-green-500 hover:duration-3s hover:-translate-y-0.3 cursor-pointer'>Logo</div>
        <ul className='flex flex-row justify-evenly'>
            <li className='pl-10 hover:text-green-500 hover:duration-3s hover:-translate-y-0.5 cursor-pointer'>Home</li>
            <li className='pl-10 hover:text-green-500 hover:duration-3s hover:-translate-y-0.5 cursor-pointer'>Top Rated</li>
            <li className='pl-10 hover:text-green-500 hover:duration-3s hover:-translate-y-0.5 cursor-pointer'>Kids Wear</li>
            <li className='pl-10 hover:text-green-500 hover:duration-3s hover:-translate-y-0.5 cursor-pointer'>Mens Wear</li>
            <li className='pl-10 hover:text-green-500 hover:duration-3s hover:-translate-y-0.5 cursor-pointer'>Electornics</li>
            <li className='pl-10 hover:text-green-500 hover:duration-3s hover:-translate-y-0.5 cursor-pointer'>Trending Items</li>
        </ul>
        <div className='pr-4  hover:text-green-500 hover:duration-3s hover:-translate-y-0.5 cursor-pointer'>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar