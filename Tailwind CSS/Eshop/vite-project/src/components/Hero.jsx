import React from 'react';
import headset from '../image/headset.png';

const Hero = () => {
  return (
    <div className='h-screen bg-[#C0C0C2] ml-10 mr-10 rounded-lg'>
      <div className='flex flex-row h-[100vh] w-full relative'>
        <div className='mt-40 ml-20 relative z-10'>
          <p className='text-2xl font-bold ml-2 mb-2'>Beats Solo</p>
          <p className='text-5xl font-bold ml-2'>Wireless</p>
          <p className='text-[140px] font-bold text-white'>HEADPHONES</p>
          <button className='p-2 bg-red-500 rounded-lg pl-4 pr-4 ml-2 text-slate-50 hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out'>
              Shop by Category
          </button>

        </div>
        <div className='absolute top-20 right-[-5px] z-50'>
          {/* Increased the size and position to overlay it on the text */}
          <img src={headset} alt="headset" loading='lazy' className='h-[500px] w-[500px]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
