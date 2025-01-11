import React from "react";
import Result from "../assets/result.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col sm:flex-row">
        {/* Left Card */}
        <div className="w-full sm:w-1/3 h-full bg-slate-100 m-4 rounded-lg flex flex-col shadow-2xl">
          {/* Header */}
          <div className="text-center flex flex-col items-center p-4">
            <img
              src={Result}
              alt="Result Icon"
              className="w-[150px] h-[150px]"
            />
            <p className="text-2xl pt-3 font-semibold text-sky-500">
              Your Result!
            </p>
            <p className="text-sm pt-3 font-thin text-sky-500">
              All your insights & details in one place
            </p>
          </div>

          {/* Profile Details */}
          <div className="h-fit flex flex-col items-center bg-white rounded-lg mt-3 mx-5 p-4">
            {/* First Box */}
            <div className="h-[60px] w-full bg-slate-300 flex items-center justify-between rounded-lg px-4 mb-3">
              <FontAwesomeIcon
                icon={faSquareCheck}
                className="text-zinc-500 text-4xl"
              />
              <div className="text-right">
                <p className="text-[10px] bg-violet-600 text-white font-bold rounded-lg px-2 py-1 inline-block">
                  YOU'VE PASSED
                </p>
                <p className="text-2xl font-bold">
                  136 <span className="text-sm text-slate-600">/ 240</span>
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm bg-blue-500 text-white rounded-md px-2">
                  76%
                </p>
                <p className="text-[10px] text-blue-500 font-medium mt-1">
                  ACCURACY
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div className="w-full bg-slate-300 rounded-lg px-4 py-3 mb-3">
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  className="text-zinc-500 text-4xl mr-4"
                />
                <div>
                  <p className="text-[12px] text-violet-600 font-bold">
                    Top Score
                  </p>
                  <p className="text-2xl font-bold">
                    230 <span className="text-sm text-slate-600">/ 240</span>
                  </p>
                </div>
              </div>
              <hr className="bg-slate-400 h-0.5 mb-2" />
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  <span className="text-slate-600">By</span> Parth Akotkar
                </p>
                <p className="text-[11px] bg-blue-500 text-white rounded-md px-2">
                  92% ACCURACY
                </p>
              </div>
            </div>

            {/* Improve Marks Section */}
            <div className="text-left w-full mb-4">
              <p className="font-bold text-[15px]">Improve your Marks</p>
              <p className="text-[11px] text-slate-600">
                Improve your score by practicing more.
              </p>
            </div>

            {/* Practice Button */}
            <button className="w-full h-10 bg-violet-600 text-white font-bold text-[15px] rounded-lg hover:bg-violet-700 transition duration-200">
              Practice More
            </button>
          </div>

          {/* Revisit Paper */}
          <div className="h-fit bg-white rounded-lg mt-4 mx-5 my-6 p-4 shadow-md">
            <p className="font-bold text-[15px] mb-2">Revisit Paper</p>
            <p className="text-[13px] text-slate-600 mb-3">
              Challenge your friends by simply sharing a link to the test.
            </p>
            <button className="w-full h-10 bg-violet-600 text-white font-bold text-[15px] rounded-lg hover:bg-violet-700 transition duration-200 mb-3">
              Visit
            </button>
            <p className="text-[12px] text-slate-600">
              Instructions for how to upload your handwritten material are given
              below.
            </p>
          </div>
        </div>

        {/* Right side */}

        <div className="sm:w-2/3 h-screen">
          {/*  first section*/}
          <div className="sm:h-[280px] w-full flex flex-col sm:flex-row m-4 rounded-lg gap-5 text-slate-400">
            <div className="sm:w-1/3 h-48 sm:h-64 bg-slate-100 rounded-lg shadow-2xl pt-3">
              <p>Compare Accuracy</p>
            </div>
            <div className="sm:w-1/3 h-48 sm:h-64 bg-slate-100 rounded-lg shadow-2xl pt-3">
              <p>Compare Accuracy</p>
            </div>
            <div className="sm:w-1/3 h-48 sm:h-64  bg-slate-100 rounded-lg shadow-2xl pt-3">
              <p>Compare Accuracy</p>
            </div>
          </div>

          {/* second section */}
          <div className="sm:h-48 w-full flex flex-col sm:flex-row m-4 rounded-lg">
            <div className="sm:h-1/2 w-full flex gap-3 flex-col sm:flex-row">
              <div className="w-full sm:w-1/4 h-48  bg-slate-100 rounded-lg shadow-2xl">
                <div>
                  <p className="text-sm text-slate-400 mt-1">Improvements</p>
                </div>
                <div>
                  <p className="font-semibold text-sm pt-3">
                    Subject Understanding
                  </p>
                </div>
                <div className="flex flex-col gap-2 p-2 mt-3">
                  <div className="flex flex-row gap-1 text-[10px] text-white justify-center sm:justify-start ">
                    <p className="bg-sky-400 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Geography
                    </p>
                    <p className="bg-yellow-400 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Politics
                    </p>
                    <p className="bg-sky-400 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Current Affairs
                    </p>
                  </div>
                  <div className="flex flex-row gap-1  text-[10px] text-white justify-center sm:justify-start ">
                    <p className="bg-red-500 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      General Studies{" "}
                    </p>
                    <p className="bg-sky-400 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Mathematics
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 text-[10px] text-white justify-center sm:justify-start ">
                    <p className="bg-gray-400 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Social Studies
                    </p>
                    <p className="bg-red-500 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Englsih literature
                    </p>
                  </div>
                  <div className="flex flex-row gap-1  text-[10px] text-white justify-center sm:justify-start ">
                    <p className="bg-yellow-400 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Indian History
                    </p>
                    <p className="bg-sky-400 rounded-md pl-0.5 pr-0.5 pt-0.5 pb-0.5">
                      Economics
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="w-full sm:w-1/4 h-48  bg-slate-100 rounded-lg shadow-2xl">
                <div>
                  <p className="text-sm text-slate-400 mt-1">Response Time</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div>
                    <p className="text-xs text-white bg-blue-600 rounded-md mt-7 mr-12 sm:mr-20 ml-12 sm:ml-2 p-1 sm:items-start text-center">
                      Std Time - 2min
                    </p>
                  </div>
                  <div className="flex flex-row justify-center">
                    <p className="text-xs text-slate-900 bg-zinc-300 p-2 border-2 border-gray-500 border-dotted rounded-lg mt-2">
                      <span className="text-xl text-sky-600">60</span>
                      <span className="font-semibold text-gray-500">
                        % Ans took
                      </span>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="ml-1 text-red-500"
                      />
                      <span className="font-semibold text-blue-500 pl-2">
                        2min
                      </span>
                    </p>
                  </div>
                  <div>
                    <hr className="border-slate-300 mt-1 ml-2 mr-2" />
                  </div>
                  <div className="flex flex-row justify-center pt-1 font-semibold">
                    <p>
                      You are
                      <span className="text-red-600"> slow </span>!
                    </p>
                  </div>
                </div>
              </div>

              {/* Approach Data */}
              <div className="w-full sm:w-1/4 h-48 bg-slate-100 rounded-lg shadow-2xl p-2">
                <div>
                  <p className="text-xs text-slate-400 mb-2">Approach Data</p>
                </div>
                <div className="flex flex-col gap-1">
                  {/* Data Block */}
                  {[
                    { value: 25, label: "Facts", color: "blue" },
                    { value: 32, label: "Analysis", color: "blue" },
                    { value: 19, label: "Elimination", color: "blue" },
                    { value: 24, label: "Guess", color: "blue" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border border-blue-400 flex items-center gap-1 p-1 rounded-sm text-xs"
                    >
                      <div className="flex items-center bg-gray-300 px-2 py-0.5 rounded-sm">
                        <p
                          className={`text-${item.color}-400 font-bold text-sm`}
                        >
                          {item.value}
                        </p>
                        <span
                          className={`text-[8px] text-${item.color}-400 ml-1`}
                        >
                          %
                        </span>
                      </div>
                      <p className="font-semibold text-[13px] sm:text-[10px]">
                        Based on
                      </p>
                      <span className={`text-${item.color}-500 font-semibold`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full sm:w-1/4 h-48  bg-slate-100 rounded-lg shadow-2xl">
                <div>
                  <p className="text-sm text-slate-400 mt-1">Suggestions</p>
                </div>
                <div className="flex flex-row gap-2 pl-2 justify-center sm:justify-normal">
                  {[
                    { question: "1-12", time: 40, level: "Easy" },
                    { question: "12-32", time: 1.5, level: "Medium" },
                    { question: "32-40", time: 3, level: "Hard" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <div className="flex flex-col gap-1">
                        {/* Question */}
                        <p className="text-xs text-white bg-blue-600 rounded-md mt-6">
                          Q. {item.question}
                        </p>

                        {/* Time */}
                        <p className="text-xs text-slate-900 bg-zinc-300 p-2 pt-3 pb-3 border-2 border-gray-500 border-dotted rounded-lg mt-2">
                          <span className="font-bold">{item.time}</span>sec
                        </p>

                        {/* Level */}
                        <p
                          className={`text-xs ${
                            item.level === "Easy"
                              ? "text-blue-600"
                              : item.level === "Medium"
                              ? "text-yellow-600"
                              : "text-red-600"
                          } mt-2`}
                        >
                          {item.level}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="h-1/2 w-full flex flex-col sm:flex-row m-4 rounded-lg  gap-3">
            <div className="h-80 w-full sm:w-1/2 flex flex-col bg-slate-300 rounded-lg p-2">
              <div>
                <p className="text-xs text-slate-400 mb-2">Compare Accuracy</p>
              </div>
              <div className="w-full h-full">
                <BarChart />
              </div>
            </div>

            <div className="h-80 w-full sm:w-1/2 flex flex-col bg-slate-300 rounded-lg p-4">
              <p className="text-xs text-slate-400 mb-2">Time Taken</p>
              <div className="w-full h-full">
                <LineChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
