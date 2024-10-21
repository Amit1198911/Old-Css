import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='h-16 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 drop-shadow-lg'>
      <div className='flex flex-row justify-between items-center px-10 py-3'>
        {/* Logo Section */}
        <p className='text-white text-xl font-bold'>BrandLogo</p>

        {/* Links Section */}
        <ul className='hidden sm:flex space-x-8 text-white text-lg font-medium'>
          <li className='hover:text-amber-300 hover:cursor-pointer'>Home</li>
          <li className='hover:text-amber-300 hover:cursor-pointer'>About Us</li>
          <li className='hover:text-amber-300 hover:cursor-pointer'>Contact Us</li>
        </ul>

        {/* Cart Button */}
        <button className='bg-amber-400 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 hover:bg-amber-500 transform hover:scale-105 transition-transform duration-200'>
          <span>Order</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
