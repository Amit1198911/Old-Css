import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between bg-gray-900 px-6 py-6 space-y-4 lg:space-y-0">
      {/* Left Section: Newsletter Message */}
      <div className="text-white text-center lg:text-start lg:w-1/2">
        <h3 className="text-lg font-semibold">
          Join our newsletter to keep up to date with us!
        </h3>
      </div>

      {/* Right Section: Input and Button */}
      <div className="w-full lg:w-1/2 flex flex-col lg:flex-row gap-3 items-center">
        <input
          type="text"
          placeholder="Name"
          className="w-full lg:w-1/4 py-2 px-4 rounded-md bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full lg:w-2/4 py-2 px-4 rounded-md bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full lg:w-1/4 py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
