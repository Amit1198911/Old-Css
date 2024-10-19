import React from 'react'
import headset from '../image/headset.png';
import earphone from '../image/earphone.png'
import smartwatch from '../image/smartwatch.png'
import laptop from '../image/laptop.png'
import ps from '../image/ps.png'
import Vr from '../image/Vr.png'
import Speaker from '../image/Speaker.png'

const Gadget = () => {
  return (
    <div className='h-screen ml-10 mr-10 pt-5'>
        <div className='h-1/2  flex flex-row justify-between'>
            <div className='h-[320px] w-[300px] bg-slate-900 rounded-lg pt-[100px] relative text-white'>
                <p className='text-xl font-bold ml-2 mb-2 opacity-70 pl-2'>Enjoy</p>
                <p className='text-2xl font-bold ml-2 pl-2'>With</p>
                <p className='text-6xl font-bold text-white pl-2 z-20 opacity-30'>Earphone</p>
                <button className='p-2 bg-red-500 rounded-full pl-4 pr-4 ml-3 hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out mt-4 '>
                    Browse
                </button>
                <div className='absolute bottom-10 left-20 z-10'>
                    <img src={earphone} alt="no img" loading='lazy' className='h-60 w-60'/>
                </div>
            </div>
            <div className='h-[320px] w-[300px] bg-amber-400 rounded-lg pt-[100px] relative text-white'>
                <p className='text-xl font-bold ml-2 mb-2 opacity-70 pl-2'>Enjoy</p>
                <p className='text-2xl font-bold ml-2 pl-2'>With</p>
                <p className='text-6xl font-bold text-white pl-2 z-20 opacity-70'>Gadget</p>
                <button className='p-2 bg-white  text-amber-400 rounded-full pl-4 pr-4 ml-3 hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out mt-4 '>
                    Browse
                </button>
                <div className='absolute bottom-10 left-20 z-10'>
                    <img src={smartwatch} alt="no img" loading='lazy' className='h-60 w-60'/>
                </div>
            </div>

            <div className='h-[320px] w-[622px] bg-red-600 rounded-lg pt-[100px] relative text-white'>
                <p className='text-xl font-bold ml-2 mb-2 pl-2 opacity-70'>Enjoy</p>
                <p className='text-2xl font-bold ml-2 pl-2'>With</p>
                <p className='text-6xl font-bold text-white pl-4 z-20 opacity-30'>Laptop</p>
                <button className='p-2 bg-white text-red-600 rounded-full pl-4 pr-4 ml-4  hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out mt-4'>
                    Browse
                </button>
                <div className='absolute bottom-8 left-[350px] z-10'>
                    <img src={laptop} alt="no img" loading='lazy' className='h-64 w-64'/>
                </div>
            </div>
            
        </div>
        <div className='h-1/2  flex flex-row justify-between mt-5'>

            <div className='h-[320px] w-[622px] bg-slate-500 rounded-lg pt-[100px] relative text-white'>
                <p className='text-xl font-bold ml-2 mb-2 pl-2 opacity-70'>Enjoy</p>
                <p className='text-2xl font-bold ml-2 pl-2'>With</p>
                <p className='text-6xl font-bold text-white pl-4 z-20 opacity-30'>Earphone</p>
                <button className='p-2 bg-red-500 rounded-full pl-4 pr-4 ml-4 text-slate-50 hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out mt-4'>
                    Browse
                </button>
                <div className='absolute bottom-8 left-[350px] z-10'>
                    <img src={ps} alt="no img" loading='lazy' className='h-64 w-64'/>
                </div>
            </div>

            <div className='h-[320px] w-[300px] bg-green-500 rounded-lg pt-[100px] relative text-white'>
                <p className='text-xl font-bold ml-2 mb-2 opacity-70 pl-2'>Enjoy</p>
                <p className='text-2xl font-bold ml-2 pl-2'>With</p>
                <p className='text-6xl font-bold text-white pl-2 z-20 opacity-30'>Oculus</p>
                <button className='p-2 text-green-500 bg-white rounded-full pl-4 pr-4 ml-3 hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out mt-4 '>
                    Browse
                </button>
                <div className='absolute bottom-6 left-20 z-10'>
                    <img src={Vr} alt="no img" loading='lazy' className='h-60 w-60'/>
                </div>
            </div>
            <div className='h-[320px] w-[300px] bg-blue-500 rounded-lg pt-[100px] relative text-white'>
                <p className='text-xl font-bold ml-2 mb-2 opacity-70 pl-2'>Enjoy</p>
                <p className='text-2xl font-bold ml-2 pl-2'>With</p>
                <p className='text-6xl font-bold text-white pl-2 z-20 opacity-70'>Speaker</p>
                <button className='p-2 text-blue-500 bg-white rounded-full pl-4 pr-4 ml-3 hover:bg-red-600 hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out mt-4 '>
                    Browse
                </button>
                <div className='absolute bottom-10 left-20 z-10'>
                    <img src={Speaker} alt="no img" loading='lazy' className='h-60 w-60'/>
                </div>
            </div>

           
            
        </div>
    </div>
  )
}

export default Gadget