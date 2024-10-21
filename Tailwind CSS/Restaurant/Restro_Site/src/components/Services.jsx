import React from "react";
import d3 from "../assets/d3.png"
import d6 from '../assets/d6.png'
import d7 from '../assets/d7.png'


const Services = () => {
  return (
    <div className="sm:h-full w-full flex flex-col mb-20"> {/* Add margin-bottom here */}
      <div className="text-center max-w-full pt-8">
        <p className="text-amber-400 text-md font-semibold">Our Services</p>
        <p className="text-4xl font-semibold">Services</p>
        <p className="text-sm pl-10 pr-10 pt-2 pb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          ducimus facilis nihil id fuga.
        </p>
      </div>
      <div className="flex flex-col mt-5 sm:flex-row gap-10 justify-center items-center mb-0">
        <div className="h-50 w-80 flex flex-col items-center shadow-2xl hover:bg-yellow-400 justify-center pt-0 text-center rounded-lg">
          <img
            src={d3}
            alt="React Logo"
            loading="lazy"
            className="h-40 w-40 -translate-y-14"
          />
          <div className="mt-[-3.5rem]">
            <p className="text-2xl font-semibold">Biryani</p>
            <p className="text-sm px-1 pt-2 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ducimus facilis.
            </p>
          </div>
        </div>

        <div className="h-50 w-80 flex flex-col items-center shadow-2xl hover:bg-yellow-400 justify-center pt-0 text-center rounded-lg">
          <img
            src={d7}
            alt="React Logo"
            loading="lazy"
            className="h-40 w-40 -translate-y-14"
          />
          <div className="mt-[-3.5rem]">
            <p className="text-2xl font-semibold">Butter Paneer</p>
            <p className="text-sm px-1 pt-2 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ducimus facilis.
            </p>
          </div>
        </div>

        <div className="h-50 w-80 flex flex-col items-center shadow-2xl hover:bg-yellow-400 justify-center pt-0 text-center rounded-lg">
          <img
            src={d6}
            alt="React Logo"
            loading="lazy"
            className="h-40 w-40 -translate-y-14"
          />
          <div className="mt-[-3.5rem]">
            <p className="text-2xl font-semibold">Rajma Chaval</p>
            <p className="text-sm px-1 pt-2 pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              ducimus facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
