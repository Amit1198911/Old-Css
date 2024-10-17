import React from 'react'
import cd1 from '../images/cd1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faMoneyCheckDollar, faTruck } from '@fortawesome/free-solid-svg-icons'

const Sales = () => {
  return (
    <div className=' h-screen w-full flex flex-row justify-between p-8'>
        
        <div className=' flex justify-center items-center p-15 mr-20 ml-40'>
            <img src={cd1} alt="image" className='object-cover shadow-2xl h-96 w-96' loading='lazy'/>
        </div>

        <div className=' flex flex-col justify-center align-middle p-8 mr-40 mb-100 ml-10'>
            <div className='text-black text-3xl font-extrabold'>
                 <p>Winter Sale upto 50% Off</p>
            </div>
            <div className='text-slate-700 text-sm mt-4 font-semibold'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nostrum.</p>
            </div>

            {/* icons */}
            <div className='flex flex-row align-middle mt-5'>
                <FontAwesomeIcon icon={faLock}  className='pt-1 pr-1 text-blue-800'/>
                <p className='text-md font-medium pl-3'>Quality Products</p>
            </div>

            <div className='flex flex-row align-middle mt-5'>
                <FontAwesomeIcon icon={faTruck}  className='pt-1 pr-1 text-red-700'/>
                <p className='text-md font-medium pl-3'>Fast Delivery</p>  
            </div>

            <div className='flex flex-row align-middle mt-5'>
                <FontAwesomeIcon icon={faMoneyCheckDollar}  className='pt-1 pr-1 text-green-500'/>
                <p className='text-md font-medium pl-3'>Easy Payment Method</p>
            </div>
            
        </div>

    </div>
  )
}

export default Sales