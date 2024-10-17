import React from 'react'
import t1 from '../images/t1.jpg'
import t2 from '../images/t2.jpg'
import t3 from '../images/t3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Trending = () => {
  return (
    <div className=' flex flex-col h-screen'>
            {/* Header */}
            <div className='flex align-top flex-col text-center mt-10'>
                <div className='text-yellow-500 font-semibold text-sm'>
                <p>Trending Products</p>
                </div>
                <div className='font-semibold text-4xl'>
                <p>Top Rated Products</p>
                </div>
                <div className='text-sm font-normal mt-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam nulla veniam vero quasi repudiandae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, option.</p>
                </div>
            </div>

             {/* Cards */}
            <div className='flex flex-row justify-evenly mr-5 ml-5 mt-10'>
                {/* card 1 */}
                <div className='bg-white flex justify-between flex-row ml-2 rounded-lg shadow-lg hover:-translate-y-2'>
                    <div>
                        <img src={t1} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg' />
                        <div className='flex flex-row justify-center mt-2'>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                        </div>
                        <div className='font-semibold text-center mt-1'>
                            <p>Women Ethnic</p>
                        </div>
                        <div className='text-sm text-center font-medium text-zinc-400'>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                        {/* button */}
                        <div className='flex justify-center mt-2 mb-3'>
                            <button className='p-2 bg-amber-500 rounded-3xl text-cyan-50 font-semibold hover:bg-amber-600 transition duration-300'>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className=' bg-white flex justify-between flex-row ml-2 rounded-lg shadow-lg hover:-translate-y-2'>
                    <div>
                        <img src={t2} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg' />
                        <div className='flex flex-row justify-center mt-2'>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                        </div>
                        <div className='font-semibold text-center mt-1'>
                            <p>Printed shirt</p>
                        </div>
                        <div className='text-sm text-center font-medium text-zinc-400'>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                        {/* button */}
                        <div className='flex justify-center mt-2 mb-3'>
                            <button className='p-2 bg-amber-500 rounded-3xl text-cyan-50 font-semibold hover:bg-amber-600 transition duration-300'>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* card 1 */}
                <div className='bg-white flex justify-between flex-row ml-2 rounded-lg shadow-lg hover:-translate-y-2'>
                    <div>
                        <img src={t3} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg' />
                        <div className='flex flex-row justify-center mt-2'>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
                        </div>
                        <div className='font-semibold text-center mt-1'>
                            <p>Women shirt</p>
                        </div>
                        <div className='text-sm text-center font-medium text-zinc-400'>
                            <p>Lorem ipsum dolor sit amet</p>
                            <p>Lorem ipsum dolor sit</p>
                        </div>
                        {/* button */}
                        <div className='flex justify-center mt-2 mb-3'>
                            <button className='p-2 bg-amber-500 rounded-3xl text-cyan-50 font-semibold hover:bg-amber-600 transition duration-300'>
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Trending