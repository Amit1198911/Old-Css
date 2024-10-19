import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-row items-center justify-between p-5">
        {/* Logo Section */}
        <div className="flex flex-row items-center">
          <div className="text-2xl font-bold text-blue-600">
            {/* Add an image or a logo icon here */}
            MyBrand
          </div>
          <ul className="hidden md:flex flex-row ml-10 space-x-8 text-lg">
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer text-[16px] font-semibold">Home</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer text-[16px] font-semibold">Shop</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer text-[16px] font-semibold">About</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer text-[16px] font-semibold">Blogs</li>
            <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer text-[16px] font-semibold">Quick Links</li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex flex-row items-center space-x-6">
          <div className="relative group">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer" />
            <span className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1 -bottom-8 right-0">
              Search
            </span>
          </div>
          <div className="relative group">
            <FontAwesomeIcon icon={faCartShopping} className="text-gray-700 hover:text-blue-500 transition duration-300 cursor-pointer" />
            <span className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1 -bottom-8 right-0">
              Cart
            </span>
          </div>
        </div>

        {/* Responsive Menu Button */}
        <button className="block md:hidden text-gray-700 hover:text-blue-500 focus:outline-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-gray-100 p-4">
        <ul className="flex flex-col space-y-4 text-lg">
          <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Shop</li>
          <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">About</li>
          <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Blogs</li>
          <li className="hover:text-blue-500 transition-colors duration-300 cursor-pointer">Quick Links</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
