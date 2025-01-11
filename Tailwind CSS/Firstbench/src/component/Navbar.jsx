import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGitter } from "@fortawesome/free-brands-svg-icons";
import { faChessRook } from "@fortawesome/free-solid-svg-icons";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="ml-4 w-full bg-[#334155] px-0">
      <div className="flex justify-between items-center px-4 py-3 text-white">
        <h1 className="font-bold text-2xl">Firstbench</h1>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row gap-6 bg-[#334155] sm:bg-transparent p-4 sm:p-0 absolute sm:static top-16 sm:top-auto left-8 ml-4 mt-5 mb-5 sm:left-auto w-screen sm:w-auto z-50`}
        >
          <li className="flex items-center gap-2 hover:cursor-pointer">
            <FontAwesomeIcon icon={faHouse} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center gap-2  hover:cursor-pointer">
            <FontAwesomeIcon icon={faGitter} />
            <span>FirstGuru</span>
          </li>
          <li className="flex items-center gap-2  hover:cursor-pointer">
            <FontAwesomeIcon icon={faChessRook} />
            <span>TownHill</span>
          </li>
          <li className="flex items-center gap-2  hover:cursor-pointer">
            <FontAwesomeIcon icon={faBoltLightning} />
            <span>AI Evaluation</span>
          </li>
          <li className="flex items-center gap-2  hover:cursor-pointer">
            <FontAwesomeIcon icon={faChartLine} />
            <span>Performance</span>
          </li>
          <li className="flex items-center gap-2 text-sky-400  hover:cursor-pointer">
            <FontAwesomeIcon icon={faClipboard} />
            <span>Mock Test</span>
          </li>
        </ul>

        {/* Notifications and Profile */}
        <div className="hidden sm:flex items-center gap-6">
          <FontAwesomeIcon icon={faBell} className="text-white" />
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-sm">
            <div className="bg-red-300 px-2 py-1 rounded-sm">
              <p className="text-slate-950 font-semibold">P</p>
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile and Notifications for Mobile */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 items-center bg-[#334155] p-4">
          <FontAwesomeIcon icon={faBell} className="text-white" />
          <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-sm">
            <div className="bg-red-300 px-2 py-1 rounded-sm">
              <p className="text-slate-950 font-semibold">P</p>
            </div>
            <div>
              <p>Profile</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
