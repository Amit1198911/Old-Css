import React from 'react'
import react from '../assets/react.svg'
import d3 from '../assets/d3.png'

const Hero = () => {
  return (
    <div className='h-screen bg-gray-600 flex justify-center items-center px-4'>
      <div className='flex flex-col sm:flex-row items-center w-full max-w-7xl'>
        
        {/* Text Section */}
        <div className='w-full sm:w-3/4 p-6 sm:p-12 flex flex-col justify-center items-center sm:items-start'>
          <p className='text-center sm:text-left text-4xl md:text-5xl lg:text-7xl font-bold text-white'>
            Welcome to the Foodie Zone
          </p>
          <p className='text-center sm:text-left text-sm pt-5'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed deleniti enim, rem ab vel minus soluta debitis molestias neque repellendus.
          </p>
          <button className='bg-amber-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-amber-500 transform hover:scale-105 transition-transform duration-200 mt-5'>
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className='w-full flex flex-col justify-items-start sm:w-1/2 sm:flex sm:justify-center items-center sm:pt-0 sm:mr-20 sm:flex-row pb-7'>
          <div>
             <img src={d3} alt="React Logo" loading='lazy' className='h-60 w-60 mt-0 sm:h-96 sm:w-96 sm:mb-14 object-contain'/>
          </div>
          <div className='bg-slate-300 opacity-75 rounded-full pl-2 pr-2 flex flex-row sm:left-5 sm:flex-col'> 
            <img src={d3} alt="React Logo" loading='lazy' className='h-20 w-20 sm:h-20 sm:w-20 sm:mb-0'/>
            <img src={d3} alt="React Logo" loading='lazy' className='h-20 w-20 sm:h-20 sm:w-20 sm:mb-0'/>
            <img src={d3} alt="React Logo" loading='lazy' className='h-20 w-20 sm:h-20 sm:w-20  sm:mb-0'/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
