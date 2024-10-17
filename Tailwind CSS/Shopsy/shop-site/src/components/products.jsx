import React from 'react'
import cd1 from '../images/cd1.jpg'
import cd2 from '../images/cd2.jpg'
import cd3 from '../images/cd3.jpg'
import cd4 from '../images/cd4.jpg'
import cd5 from '../images/cd5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
  return (
    <div className='h-screen w-full flex align-top flex-col'>
      {/* heading part */}
      <div className='flex align-top flex-col text-center mt-10'>
        <div className='text-yellow-300 font-semibold text-sm'>
          <p>Top Selling Products for you</p>
        </div>
        <div className='font-semibold text-4xl'>
          <p>Top Selling Products</p>
        </div>
        <div className='text-sm font-normal mt-2'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, option.</p>
        </div>
      </div>

      {/* cards */}
      <div className='flex flex-row justify-between mr-5 ml-5 mt-10'>
        {/* card 1 */}
        <div className='flex justify-between flex-row ml-2'>
          <div>
            <img src={cd1} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg opacity-55 hover:opacity-100 hover:duration-500' />
            <div className='font-semibold'>
              <p>Women Ethnic</p>
            </div>
            <div className='text-sm'>
              <p>White</p>
            </div>
            <div className='flex flex-row align-middle'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
              <p className='text-md font-medium'>6</p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className='flex justify-between flex-row ml-2'>
          <div>
            <img src={cd2} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg opacity-55 hover:opacity-100 hover:duration-500' />
            <div className='font-semibold'>
              <p>Women Western</p>
            </div>
            <div className='text-sm'>
              <p>Red</p>
            </div>
            <div className='flex flex-row align-middle'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
              <p className='text-md font-medium'>4.5</p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className='flex justify-between flex-row ml-2'>
          <div>
            <img src={cd3} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg opacity-55 hover:opacity-100 hover:duration-500' />
            <div className='font-semibold'>
              <p>Googles</p>
            </div>
            <div className='text-sm'>
              <p>Brown</p>
            </div>
            <div className='flex flex-row align-middle'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
              <p className='text-md font-medium'>4.7</p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className='flex justify-between flex-row ml-2'>
          <div>
            <img src={cd4} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg opacity-55 hover:opacity-100 hover:duration-500' />
            <div className='font-semibold'>
              <p>Printed T-Shirt</p>
            </div>
            <div className='text-sm'>
              <p>Yellow</p>
            </div>
            <div className='flex flex-row align-middle'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
              <p className='text-md font-medium'>4.4</p>
            </div>
          </div>
        </div>

        {/* card 5 */}
        <div className='flex justify-between flex-row ml-2'>
          <div>
            <img src={cd5} alt="no image" loading='lazy' className='w-50 h-60 rounded-lg opacity-55 hover:opacity-100 hover:duration-500' />
            <div className='font-semibold'>
              <p>Fashion T-Shirt</p>
            </div>
            <div className='text-sm'>
              <p>Pink</p>
            </div>
            <div className='flex flex-row align-middle'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-500 pt-1 pr-1' />
              <p className='text-md font-medium'>4.5</p>
            </div>
          </div>
        </div>
      </div>

      {/* button */}
      <div className='flex justify-center mt-20 mb-10'>
        <button className='p-3 bg-amber-500 rounded-lg text-cyan-50 font-semibold hover:bg-amber-600 transition duration-300'>
          View All Products
        </button>
      </div>
    </div>
  )
}

export default Product
