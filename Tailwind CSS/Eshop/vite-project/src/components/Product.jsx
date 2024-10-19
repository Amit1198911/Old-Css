import React from 'react'
import headset from '../image/headset.png'
import smartwatch from '../image/smartwatch.png'
import Vr from '../image/Vr.png'
import earphone from '../image/earphone.png'
import Speaker from '../image/Speaker.png'

const Product = () => {
  return (
    <div className='h-screen ml-10 mr-10 mt-10'>
        <div className='text-center pt-10'>
            <p className='text-4xl font-bold'>Best Seller Products</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='flex flex-row justify-between mt-10'>
           <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={headset} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Boat Headphone</p>
                <p className='font-bold'>$120</p>
           </div>
           <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={smartwatch} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Rocky Mountain</p>
                <p className='font-bold'>$120</p>
           </div>
           <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={Vr} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Googgles</p>
                <p className='font-bold'>$120</p>
           </div>
           <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={earphone} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Earphone</p>
                <p className='font-bold'>$120</p>
           </div>
           
        </div>
        <div className='flex flex-row justify-between mt-5 mb-10'>
        <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={headset} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Boat Headphone</p>
                <p className='font-bold'>$120</p>
           </div>
           <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={smartwatch} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Rocky Mountain</p>
                <p className='font-bold'>$120</p>
           </div>
           <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={Vr} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Googgles</p>
                <p className='font-bold'>$120</p>
           </div>
           <div>
                <div className='bottom-10 left-20 z-10 bg-slate-300 rounded-lg opacity-70 hover:opacity-100'>
                        <img src={earphone} alt="no img" loading='lazy' className='h-56 w-60'/>
                </div>
                <p className='font-semibold'>Earphone</p>
                <p className='font-bold'>$120</p>
           </div>
           
        </div>
    </div>
  )
}

export default Product