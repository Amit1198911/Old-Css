import React from 'react';
import globe from '../assets/globe.png';

const Globe = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-gray-800 items-center justify-between px-6 lg:px-20">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-start flex flex-col justify-center items-center lg:items-start mb-6 lg:mb-0">
        <h1 className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
          Trusted by over
          <span className="text-sky-700"> 10,000+ </span>
          Traders Across the globe
        </h1>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={globe}
          alt="Globe"
          className="w-60 h-auto lg:w-96"
        />
      </div>
    </div>
  );
};

export default Globe;
