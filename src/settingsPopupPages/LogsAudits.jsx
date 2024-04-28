import React, { useState } from "react";
import { GrClose, GrSearch } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import logsAuditimg from "../assets/logsauditsimg.svg";
import LogsAuditsDatatable from "./LogsAuditsDatatable";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";

const LogsAudits = ({ setShowLogsAudits }) => {
  const [currentpage, setCurrentPage] = useState(1);

  const decreasePageHandler = () => {
    if (currentpage > 1) {
      setCurrentPage(currentpage - 1);
    }
  };
  
  const increasePageHandler = () => {
    if (currentpage < 10) {
      setCurrentPage(currentpage + 1);
    }
  };

 
  const crossModl = () => {
    setShowLogsAudits(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-100 rounded-xl border-2 pl-10 pr-10 pb-2 pt-3 shadow-lg">
        <div className="flex">
          <div className="">
            <p className="text-lg md:text-xl lg:text-3xl  font-bold text-blue-900  w-[10rem]">
              Logs and Audits
            </p>
          </div>
          <div className="flex">
            <p className="w-[40px] h-[40px] rounded-full bg-white pt-3 pl-3 shadow-xl">
              <GrSearch />
            </p>
            <input className="h-10  rounded-xl ml-2" type="text" placeholder="Search Logs" />
          </div>
          <button
            className="hover:bg-red-300  font-bold text-lg  text-gray-500 rounded-full ml-auto mr-3 w-[30px] h-[30px] pl-1"
            onClick={crossModl}
          >
            <GrClose />
          </button>
        </div>

        {/** Filter and pagination */}

        <div className=" flex pr-5 mt-5 ml-80">
          <button className="flex px-6 py-1 bg-blue-900 text-white rounded-xl">
            <span className="mt-1 text-xl">
              <IoFilterSharp />
            </span>
            <span className="ml-2">Filter Logs</span>
          </button>
          <p className="ml-auto flex ">
            <button
            className="border border-gray-600 w-[20px] h-[20px] rounded-md px-1 mt-1 "
             onClick={decreasePageHandler} >< IoIosArrowBack/></button>
            <p className="px-1 w-[40px] text-center">{currentpage}</p>
            <button
             className="border border-gray-600 w-[20px] h-[20px] rounded-md px-1 mt-1 "
             onClick={increasePageHandler}><IoIosArrowForward /></button>
          </p>
        </div>




        {/**            Side section     */}

        <div className="flex mt-5">
          <div className="border-2 border-gray-300 inline-block pt-3 pr-3 pb-3 pl-3 rounded-2xl">
            <p className="text-3xl text-blue-900 font-bold w-[10rem]">
              Track, Monitor, and Stay Informed :
            </p>
            <p className="text-3xl text-gray-400 font-bold w-[10rem]">
              Your Platform's Activity Logs
            </p>
            <img className="mt-5" src={logsAuditimg} alt="logsAuditimg" />
          </div>

          {/** Data Table */}
          <div className="ml-10 border-2 rounded-xl">
            <LogsAuditsDatatable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogsAudits;
