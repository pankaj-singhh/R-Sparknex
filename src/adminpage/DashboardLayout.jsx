import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import { FiChevronRight } from "react-icons/fi";
import { LuTicket } from "react-icons/lu";

import admndshbrdimg1 from "../assets/admndshbrdimg1.svg";
import logo from "../assets/Logo.svg";
import sparknexlogo from "../assets/sparknexlogo.svg"
import adminwlcmscreenimg from "../assets/adminwlcmscreenimg.svg";
import adminimg from "../assets/adminimg.svg";
import adminNotfctnimg from "../assets/adminNotfctnimg.svg";
import admnSearch from "../assets/admnSearch.svg";
import dashboardimg from "../assets/dashboardimg.svg";
import adminsideimg from "../assets/adminsideimg.svg";
import Notification from "./Notification";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [showDashbrd, setShowDashbrd] = useState(true);
  const [showTicketSection, SetShowTicketSection] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dataFromChild, setDataFromChild] = useState("");
  {
    /**for notification */
  }
  const [showNotification, setShowNotification] = useState(false);
  
    //**toggled Menue */
  const [isToggled, setIsToggeled] = useState(false);

  //3 useState for recive data from ticketSection
  
  const [dateSubmition, setDateSubmition] = useState("");
  
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const toggleRef = useRef(null);

//usestate for dashboard/ticket section,change remaining   welcome text

const[dashboardtxt,setDashbrdTxt]=useState(true);
const[tickettxt,setTicketTxt]=useState(false);

  //usestate for MenueBar change remaining   welcome text

  const [userManagement, setUserManagement] = useState(false);
  const[uploadBlogs,setuUploadBlogs]=useState(false);
  const[feedbacks,setFeedbacks]=useState(false)
    //**for recive usetatate value from ticket section 
  
  const handledataFromChild = (data) => {
    setDataFromChild(data);
    console.log(dataFromChild);
  };

  {
    /**Notification Handler function */
  }

  const displayNotificationHandler = () => {
    setShowNotification(true);
  };

  const DashboardSectionHandler = () => {
    navigate("/DashboardLayout/DashboardSection");
    setShowDashbrd(true);
    setTicketTxt(false);
    SetShowTicketSection(false);
    setDashbrdTxt(true);
    setUserManagement(false)
    setuUploadBlogs(false)
    setFeedbacks(false)
    
  };

  const TicketSectionHandler = () => {
    navigate("/DashboardLayout/TicketSection");
    setShowDashbrd(false);
    setTicketTxt(true);
    SetShowTicketSection(true);
    setDashbrdTxt(false);
    setUserManagement(false)
    setuUploadBlogs(false)
    setFeedbacks(false)
    
  };

  const handleToggle = () => {
    setIsToggeled(!isToggled);
    setIsMenuBarOpen(!isMenuBarOpen);
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target)) {
        setIsToggeled(!isToggled);
      }

      if (isMenuBarOpen) {
        setIsMenuBarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuBarOpen]);

  return (
    <div>
      {showNotification && (
        <Notification setShowNotification={setShowNotification} />
      )}

      {/**nav layout */}
      <div className="bg-gray-200 lg:pl-10 lg:pt-10 rounded-xl mt-2 pt-5">
        <div className="flex flex-col lg:flex-row">


          {/**left section div */}

          <div className="flex flex-row lg:flex-col">
            <div className="flex ">
              <div>
                <button onClick={handleToggle}>
                  {isToggled ? (
                    <span>
                      <img className="w-16" src={admndshbrdimg1} alt="togle" />
                    </span>
                  ) : (
                    <span className="border-2">
                      <img className="w-16" src={admndshbrdimg1} alt="Togle" />
                    </span>
                  )}
                </button>
                {isToggled && (
                  <div className="absolute z-10">
                    <MenuBar
                      setUserManagement={setUserManagement}
                      setuUploadBlogs={setuUploadBlogs}
                     setFeedbacks={setFeedbacks}
                     setDashbrdTxt={setDashbrdTxt}
                     setTicketTxt={setTicketTxt}
                    />
                  </div>
                )}
              </div>

              {/**sparknex LOgo and name */}
              <div>
                <div className="flex mt-8">
                  <div className="flex-shrink-0 flex items-center">
                    <img className=" h-10 w-auto" src={sparknexlogo} alt="SparknexLogo" />
                    
                  </div>
                </div>
              </div>
            </div>

            {/**            Current Date section        */}

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


          {/**          right side section          */}
          <div>
            {/**admin container */}
            <div className="mt-10 lg:mt-0 lg:ml-96 lg:pl-20">
              <div className="flex ">
                <div>
                  <img src={adminimg} alt="adminimg" />
                </div>
                <div className="ml-3">
                  <p className="font-bold">Mukesh Pal</p>
                  <p>CEO Assistant</p>
                </div>
                <div className="w-[60px] h-[60px] lg:ml-2">
                  <button onClick={displayNotificationHandler}>
                    <img
                      className=""
                      src={adminNotfctnimg}
                      alt="adminNotfctnimg"
                    />
                  </button>
                </div>
                <div className="border-2 w-[50px] h-[50px] rounded-full ">
                  <button>
                    <img src={admnSearch} alt="admnSearch" />
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
                  <img src={adminwlcmscreenimg} alt="" />
                </div>
                <div>
                  <p className="font-bold lg:text-xl">Welcome to the</p>
                  {dashboardtxt ? (
                    <p className="text-gray-700 lg:text-xl">Admin Dashboard </p>
                  ) : (
                    ""
                  )}

                  {tickettxt ? (
                    <p className="text-gray-700 lg:text-xl">Support Center </p>
                  ) : (
                    ""
                  )}
                  {userManagement?( <p className="text-gray-700 lg:text-xl">User Management Hub </p>):("")}
                  {uploadBlogs?( <p className="text-gray-700 lg:text-xl">Upload Center </p>):("")}
                  {feedbacks?( <p className="text-gray-700 lg:text-xl">Feedback Center </p>):("")}
                </div>
              </div>
              {/**admin container end */}
            </div>
          </div>
        </div>

        {/**Upper section of dashboard end*/}
      </div>

      {/**          sideLayout + Dashbord section/TicketSection         */}
      <div className="flex flex-col lg:flex-row pb-5 mt-10">
        {/**sideLayout */}
        <div className="flex flex-col-reverse lg:flex-col">
          <div className="border-2 pl-5 w-[300px] lg:w-[14rem] h-[100px] rounded-xl mt-2 text-center ml-[10vw] lg:ml-10">
            <div className="flex ">
              {showDashbrd ? (
                <div className="flex">
                  <div>
                    <img src={dashboardimg} alt="dashboardimg" />
                  </div>
                  <p className="text-blue-900 font-bold ml-4">Dashboard</p>
                  <button
                    className="text-xl text-blue-900 ml-12 lg:ml-8"
                    onClick={DashboardSectionHandler}
                  >
                    <FiChevronRight />
                  </button>
                </div>
              ) : (
                <div className="flex">
                  <div>
                    <img src={dashboardimg} alt="dashboardimg" />
                  </div>
                  <p className="text-red-400 font-bold ml-4">Dashboard</p>
                  <button
                    className="text-xl text-red-400 ml-12 lg:ml-8"
                    onClick={DashboardSectionHandler}
                  >
                    <FiChevronRight />
                  </button>
                </div>
              )}
            </div>
            {showTicketSection ? (
              <div className="flex text-blue-900 mt-2">
                <div className="font-bold text-3xl">
                  <LuTicket />
                </div>
                <div>
                  <p className=" font-bold ml-5">Tickets</p>
                </div>
                <div className="mt-1 ml-20 lg:ml-16">
                  <button className="text-xl" onClick={TicketSectionHandler}>
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex text-red-400 mt-2">
                <div className="font-bold text-3xl">
                  <LuTicket />
                </div>
                <div>
                  <p className=" font-bold ml-5">Tickets</p>
                </div>
                <div className="mt-1 ml-20 lg:ml-16">
                  <button className="text-xl" onClick={TicketSectionHandler}>
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/**part of sidebar */}
          <div className="border-2 border-red-400 bg-white h-auto w-[250px] lg:w-[15vw] ml-10 rounded-xl mt-5 pb-10">
            <div className="text-xl w-[11rem] ml-5 mt-3">
              <p className="text-blue-900 font-bold">
                Navigate the SparkNex Universe:{" "}
              </p>
              <p className="text-gray-500 font-bold">
                Insightful, Intuitive, and Infinite.
              </p>
            </div>
            <div>
              <img src={adminsideimg} alt="adminsideimg" />
            </div>
          </div>
        </div>

        {/* <div>
          {showDashbrd ? <DashboardSection /> : ""}
          {showTicketSection ? (
            <TicketSection
              setDatatoParent={handledataFromChild}
              SetShowTicketSection={SetShowTicketSection}
              setRequestId={setRequestId}
              setCategory={setCategory}
              setDateSubmition={setDateSubmition}
            />
          ) : (
            ""
          )}
          {dataFromChild ? (
            <EditViewSection
              requestId={requestId}
              category={category}
              dateSubmition={dateSubmition}
              SetShowTicketSection={SetShowTicketSection}
              setDataFromChild={setDataFromChild}
            />
          ) : (
            ""
          )}
          {userManagement ? <UserManagement /> : ""}
          
          {/* {children} 
        </div> */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
