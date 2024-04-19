import React from "react";
import { useState, useEffect } from "react";
import { FiChevronRight, FiUser } from "react-icons/fi";
import { TbUserOff } from "react-icons/tb";
import { LuTicket, LuArrowDownRight, LuUserPlus } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

import { CiCircleAlert } from "react-icons/ci";

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showNotification, setShowNotification] = useState(false);
  {
    /**for notification */
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    // Clean up setInterval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect will only run once on mount

  // Array of weekday names
  const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const slicesData = [
    { percentage: 10, color: "red" },
    { percentage: 20, color: "blue" },
    { percentage: 9, color: "green" },
    { percentage: 25, color: "yellow" },
    { percentage: 6, color: "orange" },
    { percentage: 30, color: "purple" },
  ];

  // Calculate total percentage
  const totalPercentage = slicesData.reduce(
    (total, slice) => total + slice.percentage,
    0
  );

  // Function to calculate angle for each slice
  const calculateAngle = (percentage) => (percentage / totalPercentage) * 360;

  // Function to generate path for each slice
  const generatePath = (startAngle, endAngle, radius) => {
    const startRadians = ((startAngle - 90) * Math.PI) / 180;
    const endRadians = ((endAngle - 90) * Math.PI) / 180;
    const x1 = 50 + radius * Math.cos(startRadians); // Adjusted to fit within circle
    const y1 = 50 + radius * Math.sin(startRadians); // Adjusted to fit within circle
    const x2 = 50 + radius * Math.cos(endRadians); // Adjusted to fit within circle
    const y2 = 50 + radius * Math.sin(endRadians); // Adjusted to fit within circle
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return `M 50,50 L ${x1},${y1} A ${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
  };

  // Generate slices
  let startAngle = 0;
  const slices = slicesData.map((slice, index) => {
    const angle = calculateAngle(slice.percentage);
    const radius = 40 + 10 * (slice.percentage / 25); // Adjusted radius dynamically
    const endAngle = startAngle + angle;
    const path = generatePath(startAngle, endAngle, radius);
    startAngle = endAngle;
    return <path key={index} d={path} fill={slice.color} />;
  });

  return (
    <div className="w-[98vw] ml-1 lg:ml-4 ">
      {/**Upper section of dashboard */}
      <div className="bg-gray-100 lg:pl-10 lg:pt-10 rounded-xl mt-2">
        <div className="flex flex-col lg:flex-row">
          {/**left section div */}
          <div className="flex flex-row lg:flex-col">
            <div className="flex ">
              <div>
                <img src="./images/admndshbrdimg1.svg" alt="" />
              </div>
              <div>
                <div className="flex mt-8">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className=" h-10 w-auto"
                      src="./images/Logo.svg"
                      alt="Logo"
                    />
                    <span className="text-blue-500 ml-2 lg:text-lg font-semibold">
                      SparkNex
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/**Current Date section */}
            <div className="flex ml-5 text-gray-600 lg:mt-5">
              <div className="border-gray-600 border-2 w-[50px] h-[50px] text-center pt-1.5 rounded-full text-2xl">
                <p className="lg:font-bold">{currentDate.getDate()}</p>
              </div>
              <div className=" flex flex-col ml-5">
                <p className="pl-2">{weekdays[currentDate.getDay()]}</p>
                <p className="font-bold lg:text-lg">
                  {months[currentDate.getMonth()]}
                </p>
              </div>
              <div className="mb-5">
                <p className="text-3xl lg:text-6xl md:text-5xl font-bold ml-5 ">
                  {currentDate.getFullYear()}
                </p>
              </div>
              {/* <p5>{currentDate.toLocaleTimeString()}</p5> */}
            </div>
          </div>

          {/**right side section */}
          <div>
            {/**admin container */}
            <div className="mt-10 lg:mt-0 lg:ml-96 lg:pl-20">
              <div className="flex ">
                <div>
                  <img src="./images/adminimg.svg" alt="" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">Mukesh Pal</p>
                  <p>CEO Assistant</p>
                </div>
                <div className="w-[60px] h-[60px] lg:ml-2">
                  <button
                    className=""
                    onMouseEnter={() => setShowNotification(true)}
                    onMouseLeave={() => setShowNotification(false)}
                  >
                    <img
                      className=""
                      src="./images/adminNotfctnimg.svg"
                      alt=""
                    />
                  </button>
                  {showNotification && (
                    <div className="absolute bg-gray-200 border border-gray-300 p-2 rounded  ">
                      No Notification here
                    </div>
                  )}
                </div>
                <div className="border-2 w-[50px] h-[50px] rounded-full ">
                  <button>
                    <img src="./images/admnSearch.svg" alt="" />
                  </button>
                </div>
                <div className="mt-2">
                  <input
                    className=" w-[20vw]"
                    type="text"
                    placeholder="Start Searching here...."
                  />
                </div>
              </div>
              <div className="flex mt-5">
                <div>
                  <img src="./images/adminwlcmscreenimg.svg" alt="" />
                </div>
                <div>
                  <p className="font-bold lg:text-xl">Welcome to the</p>
                  <p className="text-gray-700 lg:text-xl">Admin Dashboard </p>
                </div>
              </div>
              {/**admin container end */}
            </div>
          </div>
        </div>

        {/**Upper section of dashboard end*/}
      </div>

      {/**user details section */}
      <div className=" flex flex-col lg:flex-row">
        <div className="border-2 pl-5 w-[300px] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-10">
          <div className="flex ">
            <div>
              <img src="./images/dashboardimg.svg" alt="" />
            </div>
            <div>
              <p className="text-blue-900 font-bold ml-4">Dashboard</p>
            </div>
            <div className="mt-1 ml-12 lg:ml-4">
              <button className="text-xl">
                <FiChevronRight />
              </button>
            </div>
          </div>
          <div className="flex text-red-400 mt-2">
            <div className="font-bold text-3xl">
              <LuTicket />
            </div>
            <div>
              <p className=" font-bold ml-5">Tickets</p>
            </div>
            <div className="mt-1 ml-20 lg:ml-12">
              <button className="text-xl">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 pl-5 w-[300px] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-20">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              {" "}
              <LuUsers />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4 lg:ml-2">
                Registered Users
              </p>
            </div>
            <div className="mt-1 ml-16 lg:ml-4 ">
              <button className="text-2xl lg:text-3xl text-red-500">
                <CiCircleAlert />
              </button>
            </div>
          </div>
          <div className="flex  mt-2">
            <div className="font-bold text-3xl text-blue-800">
              <p>10,000</p>
            </div>

            <div className="mt-1 ml-28 lg:ml-12 lg:mr-5 bg-gray-300 text-gray-400 flex rounded-xl">
              <p>15.6%</p>
              <button className="text-xl">
                <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>

        <div className="border-2 pl-5 w-[300px] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-20">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              {" "}
              <FiUser />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4">Active User</p>
            </div>
            <div className="mt-1 ml-28 lg:ml-4  ">
              <button className="text-2xl lg:text-3xl  text-red-500">
                <CiCircleAlert />
              </button>
            </div>
          </div>
          <div className="flex  mt-2">
            <div className="font-bold text-3xl text-blue-800">
              <p>2,500</p>
            </div>

            <div className="mt-1 ml-32 lg:ml-12 lg:mr-5 bg-red-400 text-red-800 flex rounded-xl pl-1">
              <p>05.6%</p>
              <button className="text-xl">
                <LuArrowDownRight />
              </button>
            </div>
          </div>
        </div>
        <div className="border-2 pl-5 w-[300px] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-20 ">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              {" "}
              <LuUserPlus />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4">New User</p>
            </div>
            <div className="mt-1 ml-32 lg:ml-4 ">
              <button className="text-2xl lg:text-3xl text-red-500">
                <CiCircleAlert />
              </button>
            </div>
          </div>
          <div className="flex  mt-2">
            <div className="font-bold text-3xl text-blue-800">
              <p>500</p>
            </div>
          </div>
        </div>
        <div className="border-2 pl-5 w-[300px] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-20">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              {" "}
              <TbUserOff />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4">Banned User</p>
            </div>
            <div className="mt-1 ml-28 lg:ml-4">
              <button className="text-2xl lg:text-3xl text-red-500">
                <CiCircleAlert />
              </button>
            </div>
          </div>
          <div className="flex  mt-2">
            <div className="font-bold text-3xl text-blue-800">
              <p>064</p>
            </div>
          </div>
        </div>

        {/**user details section end */}
      </div>
        {/**3-div section */}
      <div className="mt-5">
        <div className="border-2 border-red-400 bg-white">
          <div>
            <p className="text-blue-900">Navigate the SparkNex Universe: </p>
            <p className="text-gray-500">Insightful, Intuitive, and Infinite.</p>
          </div>
          <div>
            <img src="./images/adminsideimg.svg" alt="" />
          </div>
        </div>
        <div>chart</div>
        <div>
          <svg width="200" height="200" viewBox="0 0 100 100">
            {slices}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
