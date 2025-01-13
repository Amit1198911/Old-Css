import React from "react";

const DashBoardCard = () => {
  return (
    <div className="h-fit w-full flex justify-center items-center px-4">
      <div className="flex flex-col justify-center w-full sm:w-3/4">
        <div className="w-full bg-[#192144] rounded-xl p-6 sm:text-start flex flex-col sm:flex-row border-slate-500 border">
          <div className="w-full sm:w-1/2 px-4">
            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-400 text-center sm:text-start">
              Trust Points
            </h3>

            {/* Trust Points Count */}
            <p className="text-4xl font-bold mt-2 text-white text-center sm:text-start">
              4,287
            </p>

            {/* Tier Message */}
            <p className="text-sm text-gray-400 mt-1 text-center sm:text-end">
              250 Points More To Next Tier 🌟
            </p>

            {/* Progress Bar */}
            <div className="bg-gray-700 h-4 rounded-full mt-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>

            {/* Button */}
            <div className="flex justify-center sm:justify-start mt-6">
              <button className="bg-gray-600 hover:bg-blue-600 text-[12px] font-medium py-3 px-10 rounded-lg text-white">
                Claim 5k Account
              </button>
            </div>
          </div>

          <div className="w-full sm:w-1/2 bg-slate-900 rounded-xl p-6 mt-6 sm:mt-0 sm:ml-5">
            <h3 className="text-md font-semibold text-slate-400 text-center sm:text-start">
              Redeem Points Level
            </h3>
            <div className="flex flex-wrap gap-6 justify-center sm:justify-start text-white mt-4">
              {/* Column 1 */}
              <ul className="text-sm space-y-2 w-1/2 sm:w-auto text-center sm:text-start">
                <li>
                  <p className="font-semibold text-xl">5k</p>
                  <p className="text-[12px] text-slate-300">Account</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">10k</p>
                  <p className="text-[12px] text-slate-300">Account</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">25k</p>
                  <p className="text-[12px] text-slate-300">Account</p>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="text-sm space-y-2 w-1/2 sm:w-auto text-center sm:text-end sm:ml-10">
                <li>
                  <p className="font-semibold text-xl">5000</p>
                  <p className="text-[12px] text-slate-300">Points</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">10,000</p>
                  <p className="text-[12px] text-slate-300">Points</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">20,000</p>
                  <p className="text-[12px] text-slate-300">Points</p>
                </li>
              </ul>

              {/* Column 3 */}
              <ul className="text-sm space-y-2 w-1/2 sm:w-auto text-center sm:text-start">
                <li>
                  <p className="font-semibold text-xl">5k</p>
                  <p className="text-[12px] text-slate-300">Account</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">10k</p>
                  <p className="text-[12px] text-slate-300">Account</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">25k</p>
                  <p className="text-[12px] text-slate-300">Account</p>
                </li>
              </ul>

              {/* Column 4 */}
              <ul className="text-sm space-y-2 w-1/2 sm:w-auto text-center sm:text-end sm:ml-10">
                <li>
                  <p className="font-semibold text-xl">5000</p>
                  <p className="text-[12px] text-slate-300">Points</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">10,000</p>
                  <p className="text-[12px] text-slate-300">Points</p>
                </li>
                <li>
                  <p className="font-semibold text-xl">20,000</p>
                  <p className="text-[12px] text-slate-300">Points</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="w-full flex flex-col sm:flex-row gap-3 mt-6">
          {/* Wallet */}
          <div className="w-full sm:w-1/3 bg-[#192144] rounded-xl p-6 text-start border-slate-500 border">
            <h3 className="text-sm text-slate-400">Wallet Balance</h3>
            <p className="text-4xl font-bold mt-2 text-white">$484</p>
            <button className="bg-gray-600 hover:bg-blue-600 text-[12px] font-medium py-3 px-14 mt-6 rounded-lg text-white">
              Withdraw Balance
            </button>
          </div>

          {/* Favourite Firm */}
          <div className="w-full sm:w-1/3 bg-[#192144] rounded-xl p-6 text-start border-slate-500 border">
            <h3 className="text-sm text-slate-400">Your Favourite Firm</h3>
            <p className="text-xl font-medium mt-2 text-white">Funding Pips</p>
            <button className="bg-gray-600 hover:bg-blue-600 text-[12px] font-medium py-3 px-14 mt-9 rounded-lg text-white">
              Change Firm
            </button>
          </div>

          {/* Reviews */}
          <div className="w-full sm:w-1/3 bg-[#192144] rounded-xl p-6 text-start border-slate-500 border">
            <h3 className="text-sm text-slate-400">Your Reviews</h3>
            <p className="text-4xl font-bold mt-2 text-white">29</p>
            <button className="bg-gray-600 hover:bg-blue-600 text-[12px] font-medium py-3 px-14 mt-6 rounded-lg text-white">
              Add a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;
