import React from 'react'
import smartwatch from '../image/smartwatch.png'

const Banner2 = () => {
  return (
    <div className='flex flex-row justify-between bg-green-500 h-72 ml-10 mr-10 translate-y-20 rounded-lg text-white relative top-5'>
        <div className=' p-10 pt-14'>
                <p>30% OFF</p>
                <p className='text-6xl font-bold mt-2'>HAPPY</p>
                <p className='text-6xl font-bold'>HOURS</p>
                <p className='mt-2'>10 Jan to 28 Jan</p>
        </div>
        <div className='absolute top-30 left-[300px] z-50 -translate-y-20 translate-x-20 '>
          {/* Increased the size and position to overlay it on the text */}
          <img src={smartwatch} alt="headset" loading='lazy' className='h-[450px] w-[450px]' />
        </div>
        <div className=' p-10 pt-14'>
                <p className='font-bold'>Smart Solo</p>
                <p className='text-5xl font-bold mt-2'>Winter Sale</p>
                <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit, amet consectetur</p>
                <button className='p-2 bg-white  text-green-500 rounded-full pl-4 pr-4 hover:text-white hover:scale-105 hover:bg-red-500 hover:shadow-lg transition duration-300 ease-in-out mt-4 '>
                    Shop
                </button>
        </div>
    </div>
  )
}

export default Banner2