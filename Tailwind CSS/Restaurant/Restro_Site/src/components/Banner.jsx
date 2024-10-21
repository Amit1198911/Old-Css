import React from "react";
import d9 from "../assets/d9.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faCreditCard,faUtensils  } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className="flex justify-evenly items-center px-4 sm:mt-auto">
      {" "}
      {/* Add margin-top here */}
      <div className="flex flex-col sm:flex-row items-center w-full max-w-7xl">
        {/* Image Section */}
        <div className="w-full flex flex-col justify-items-start sm:w-1/2 sm:flex sm:justify-center items-center sm:pt-0 sm:mr-0 sm:flex-row pb-7">
          <div>
            <img
              src={d9}
              alt="React Logo"
              loading="lazy"
              className="h-60 w-60 mt-0 sm:h-96 sm:w-96 sm:mb-14 object-contain"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-3/4 p-6 sm:p-12 flex flex-col justify-center items-center sm:items-start">
          <p className="text-center sm:text-left text-4xl md:text-5xl lg:text-3xl font-bold text-black">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-center sm:text-left text-sm pt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            deleniti enim, rem ab vel minus soluta debitis molestias neque
            repellendus.
          </p>
          <p className="text-center sm:text-left text-sm pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, quam. Debitis autem suscipit atque exercitationem. Labore blanditiis doloremque amet laborum pariatur. Et sunt laboriosam consectetur est consequatur voluptates possimus repudiandae.
          </p>
          <div className="flex flex-row gap-10 pt-5">     
          <FontAwesomeIcon icon={faLock} className="text-6xl text-" />
          <FontAwesomeIcon icon={faCreditCard}  className="text-6xl text-green-500"/>
          <FontAwesomeIcon icon={faUtensils} className="text-6xl text-cyan-500" />

          </div>
          <button className="mt-10 bg-amber-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-amber-500 transform hover:scale-105 transition-transform duration-200">
            Order Now
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default Banner;
