import React from "react";
import { FiChevronRight, FiUser } from "react-icons/fi";
import { TbUserOff } from "react-icons/tb";
import { LuArrowDownRight, LuUserPlus } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { BiBarChart } from "react-icons/bi";
import { CiCircleAlert } from "react-icons/ci";
import userchart from "../assets/userchart.svg"

const DashboardSection = () => {
  {/**for circle chart */}
  const slicesData = [
    { percentage: 10, color: "#D62728" },//cooking
    { percentage: 15, color: "#9467BD" },//fittness
    { percentage: 20, color: "#2CA02C" },//travel
    { percentage: 40, color: "#1F77B4" },//technology
    { percentage: 10, color: "#FFBB78" },//others
    { percentage: 5, color: "#FF7F0E" },//fashion
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
    const radius = 40 + 6 * (slice.percentage / 25); // Adjusted radius dynamically
    const endAngle = startAngle + angle;
    const path = generatePath(startAngle, endAngle, radius);
    startAngle = endAngle;
    return <path key={index} d={path} fill={slice.color} />;
  });
  return (
    <div>
      {/**user details */}
      <div className="flex flex-col lg:flex-row">
        <div className="border-2 pl-5 w-[300px] lg:w-[16rem] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-10">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              <LuUsers />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4 lg:ml-2">
                Registered Users
              </p>
            </div>
            <div className="mt-1 ml-16 lg:ml-8 ">
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

        <div className="border-2 pl-5 w-[300px] lg:w-[16rem] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-7">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              {" "}
              <FiUser />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4">Active User</p>
            </div>
            <div className="mt-1 ml-28 lg:ml-16  ">
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
        <div className="border-2 pl-5 w-[300px] lg:w-[16rem] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-7 ">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              {" "}
              <LuUserPlus />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4">New User</p>
            </div>
            <div className="mt-1 ml-32 lg:ml-16 ">
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
        <div className="border-2 pl-5 w-[300px] lg:w-[16rem] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-7">
          <div className="flex ">
            <div className="text-lg text-red-400 mt-2">
              {" "}
              <TbUserOff />
            </div>
            <div>
              <p className="text-red-400 font-bold ml-4">Banned User</p>
            </div>
            <div className="mt-1 ml-28 lg:ml-12">
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



      {/**chart/graph section */}
     <div className="flex flex-col lg:flex-row mt-2 lg:ml-12">
       {/**bargraph */}
       <div >
        <img className="lg:h-[24.5rem]" src={userchart} alt="userchart" />
      </div>
      {/**circle Chart */}
      <div className="border-2 border-gray-200 w-[95vw] lg:w-[43vw]  rounded-xl ml-2 lg:ml-4">
        <div className="flex text-gray-600  font-bold lg:ml-2">
          <div className=" text-5xl">
            <BiBarChart />
          </div>
          <div className="mt-2 lg:text-2xl lg:ml-4">
            <p>Top Interests</p>
          </div>
          <div className="absolute ml-80 lg:mr-96 lg:pl-52 mt-1 text-3xl">
           <button> <CiCircleAlert /></button>
          </div>
        </div>
        { /**for circle chart */}
        <div className="flex lg:mt-12 ml-8 pb-2">
        <div className="mt-5  ">
          <svg width="210" height="210" viewBox="0 0 100 100">
            {slices}
          </svg>
        </div>
        {/**circle slice detail */}
        <div className="lg:ml-24 lg:mt-20 text-sm">
        <div className="flex text-gray-600">
          <div className="w-[1.5rem] h-[1.5rem] bg-blue-500 rounded-full"></div>
          <div className="ml-2"><p>Technology: 40%</p></div> 
        </div>
        <div className="flex mt-2">
          <div className="w-[1.5rem] h-[1.5rem] bg-green-500 rounded-full"></div>
          <div className="ml-2"><p>Travel: 20%</p></div> 
        </div>
        <div className="flex mt-2">
          <div className="w-[1.5rem] h-[1.5rem] bg-purple-500 rounded-full"></div>
          <div className="ml-2"><p>Fittness: 15%</p></div> 
        </div>
        <div className="flex mt-2">
          <div className="w-[1.5rem] h-[1.5rem] bg-red-600 rounded-full"></div>
          <div className="ml-2"><p>Cooking: 10%</p></div> 
        </div>
        <div className="flex mt-2">
          <div className="w-[1.5rem] h-[1.5rem] bg-orange-500 rounded-full"></div>
          <div className="ml-2"><p>Fashion: 5%</p></div> 
        </div>
        <div className="flex mt-2">
          <div className="w-[1.5rem] h-[1.5rem] bg-yellow-300  rounded-full"></div>
          <div className="ml-2"><p>Others: 10%</p></div> 
        </div>
        </div>
       
        </div>
       
      </div>
     </div>
    </div>
  );
};

export default DashboardSection;
