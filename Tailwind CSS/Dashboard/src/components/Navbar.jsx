import React from "react";

const Navbar = () => {
  return (
    <div className="bg-indigo-950 text-white py-4 px-6 flex justify-between items-center">
      {/* <!-- Logo --> */}
      <div className="flex items-center">
        <div className="font-bold text-xl">The Trusted Prop</div>
      </div>

      {/* <!-- Navigation Links --> */}
      <div className="hidden md:flex space-x-8 text-sm">
        <a href="#propfirms" className="hover:text-blue-400">
          PropFirms
        </a>
        <a href="#partners" className="hover:text-blue-400">
          Partners
        </a>
        <a href="#tools" className="hover:text-blue-400">
          Tools
        </a>
        <a href="#blogs" className="hover:text-blue-400">
          Blogs
        </a>
        <a href="#compare" className="hover:text-blue-400">
          Compare Firms
        </a>
      </div>

      {/* <!-- Login Button --> */}
      <button className="bg-gray-900 hover:bg-blue-600 border-blue-500 border-2 text-white text-sm py-2 px-4 rounded-[30px] pl-5 pr-5 sm:mr-10">
        Login
      </button>
    </div>
  );
};

export default Navbar;
