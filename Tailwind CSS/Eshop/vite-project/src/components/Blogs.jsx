import React from 'react'
import headset from '../image/headset.png'
import athlete from '../image/athlete.jpeg'
import gadget from '../image/gadget.jpeg'
import virtual from '../image/virtual.jpg'

const Blogs = () => {
  return (
    <div className='h-screen ml-10 mr-10 mt-20 top-10'>
        <div className='text-center pt-20'>
            <p className='text-4xl font-bold'>Recent News</p>
            <p className='pt-2  text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='flex flex-row justify-between mt-10'>
            <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                                <img src={athlete} alt="no img" loading='lazy' className='h-60 w-96 rounded-lg'/>
                </div>
                <p className='font-bold mt-5'>How to choose perfect Smartwatch</p>
                <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                                <img src={gadget} alt="no img" loading='lazy' className='h-60 w-96 rounded-lg'/>
                </div>
                <p className='font-bold mt-5'>How to choose perfect Smartwatch</p>
                <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                                <img src={virtual} alt="no img" loading='lazy' className='h-60 w-96 rounded-lg'/>
                </div>
                <p className='font-bold mt-5'>How to choose perfect Smartwatch</p>
                <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className=' text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
    </div>
  )
}

export default Blogs