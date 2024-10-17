import React from 'react'
import shop from '../images/shop.jpg';

const Hero = () => {
  return (
    <div className=' h-screen w-full flex flex-row justify-between items-center p-8'>

      <div className=' flex flex-col justify-center align-middle pl-20 p-8'>
        <div className='text-black text-7xl font-semibold'>
          <p>Upto 50% off on</p>
          <p>all Men's Wear</p>
        </div>
        <div className='text-black text-sm mt-4 font-semibold'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nostrum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nostrum.</p>
        </div>
        <div className='mt-6'>
          <button className='rounded-xl px-4 py-2 bg-amber-400 hover:bg-amber-500 transition duration-300'>
            Order Now
          </button>
        </div>
      </div>

      <div className='flex justify-center items-center p-15 mr-20 '>
        <img src={shop} alt="image" className='object-cover rounded-full h-96 w-96' loading='lazy'/>
      </div>

    </div>
  )
}

export default Hero
