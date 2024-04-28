import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {IoIosArrowForward  } from "react-icons/io";
import LogsAudits from '../settingsPopupPages/LogsAudits';


const SystemSetting = () => {
  const navigate=useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [blogStatus, setBlogStatus] = useState(null);
  const[showLogsAudits,setShowLogsAudits]=useState(false);

  const logsAuditsHandler=()=>{
    if (window.innerWidth < 700) { // Check for small screen
      alert("Please open it,In desktop mode.");
    } else {
      setShowLogsAudits(true);
    }
  }

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const backDraftBlogSection = () => {
  navigate("/DashboardLayout/UploadBlogs")
  };
  // const handleBlogStatusChange = (value) => {
  //   setBlogStatus(value);
  // };
  return (
    <div>
     {showLogsAudits&& 
      (<LogsAudits setShowLogsAudits={setShowLogsAudits}/>)
      }
     


      <div className="flex flec-col lg:flex-row mt-2   bg-white rounded-xl pb-2 pl-2 pt-2  md:w-[58vw]  border-2">
          <div className=" bg-white rounded-2xl pt-1 pl-5 ">
            <p className="font-bold text-gray-600">Backup Schedule</p>
            <div className="flex md:flex-row
            flex-col gap-[1rem]  md:gap-[10rem] justify-around text-gray-800 mt-2 text-lg ">
              <div>
                <span className=" ">
                  <input
                    type="radio"
                    name="Category"
                    value="Buzzworthy Zone"
                    checked={selectedOption === "Buzzworthy Zone"}
                    onChange={() => handleOptionChange("Buzzworthy Zone")}
                  />
                </span>
                <span className="ml-2">Daily </span>
              </div>
              <div>
                <span className=" ">
                  <input
                    type="radio"
                    name="Category"
                    value="Talk of the Town"
                    checked={selectedOption === "Talk of the Town"}
                    onChange={() => handleOptionChange("Talk of the Town")}
                  />
                </span>
                <span className="ml-2">Weekly</span>
              </div>
              <div>
                <span className="">
                  <input
                    type="radio"
                    name="Category"
                    value="Sparky's Wisdom"
                    checked={selectedOption === "Sparky's Wisdom"}
                    onChange={() => handleOptionChange("Sparky's Wisdom")}
                  />
                </span>
                <span className="ml-2">Monthly</span>
              </div>
            </div>
          </div>

        </div>
        <div className=" flex flex-col md:flex-row border-2 border-gray-300 md:w-[58vw] pt-3 pr-3 pl-3 pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500">Restore Backup</p>
       
       <button className='ml-auto w-[150px] bg-blue-900 pt-1 pb-1 text-white rounded-full'>Restore</button>
       
      </div>
        <div className=" flex flex-col md:flex-row border-2 border-gray-300 md:w-[58vw] pt-3 pr-3 pl-3 pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500">System Updates</p>
       
       <button className='ml-auto w-[150px] bg-blue-900 pt-1 pb-1 text-white rounded-full'>Check for Updates</button>
       
      </div>

      <button 
      onClick={logsAuditsHandler}
      className=" flex flex-col md:flex-row border-2 border-gray-300 w-[95vw] md:w-[58vw] pt-3 pr-3 pl-3 pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500 mr-52 md:mr-0">Logs and Audits</p>
       
       <p className='ml-auto text-xl'><IoIosArrowForward /></p>
       
      </button>
    </div>
  )
}

export default SystemSetting