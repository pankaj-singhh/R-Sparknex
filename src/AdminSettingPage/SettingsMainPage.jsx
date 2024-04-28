import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowForward } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { LuSettings2, LuServer } from "react-icons/lu";
import { GoShieldLock } from "react-icons/go";
import { MdDisplaySettings } from "react-icons/md";
import adminimg from "../assets/adminimg.svg";
import logo from "../assets/Logo.svg";
import settingwlcmimg from "../assets/settingswlcmimg.svg";
import settingsmenuimg from "../assets/settingsmenuimg.svg";
import settinglastimg from "../assets/settinglastimg.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SettingsMainPage = () => {
  const navigate = useNavigate();
  const [genralSetting, setGenralSetting] = useState(true);
  const [securitySetting, setSecuritySetting] = useState(false);
  const [systeSetting, setSystemSetting] = useState(false);
  const [advancedSetting, setAdvancedSetting] = useState(false);

  const genralSettingsHandler = () => {
    navigate("/settingsmainpage/genralsetting");

    setGenralSetting(true);
    setSecuritySetting(false);
    setSystemSetting(false);
    setAdvancedSetting(false);
  };

  const securitySettingsHandler = () => {
    navigate("/settingsmainpage/securitysetting");
    setSecuritySetting(true)
    setSystemSetting(false);
    setAdvancedSetting(false);
    setGenralSetting(false);
  };
  const systemSettingsHandler = () => {
    navigate("/settingsmainpage/systemsetting");
    setSystemSetting(true);
    setAdvancedSetting(false);
    setGenralSetting(false);
    setSecuritySetting(false);
  };
  const advancedSettingsHandler = () => {
    navigate("/settingsmainpage/advancedsetting");
    setAdvancedSetting(true);
    setGenralSetting(false);
    setSecuritySetting(false);
    setSystemSetting(false);
  };
  const reverseAdminDashboardPage = () => {
    navigate("/DashboardLayout");
  };

  return (
    <div className="">
      
      <div className="flex flex-col md:flex-row mt-4  md:ml-3  md:h-[9rem] ">
        <div className="flex flex-col md:flex-row md:w-[75vw] md:h-[20vh]  mt-2">
          <div className=" mt-3 flex  ">
            <button
              className="w-12 h-12 border text-3xl font-bold text-center rounded-full pl-1 text-blue-900 "
              onClick={reverseAdminDashboardPage}
            >
              <IoIosArrowRoundBack />
            </button>
            <img
              src={logo}
              alt="Logo"
              className="w-6 ml-12 md:ml-12 mt-2 absolute"
            />
            <p className="text-2xl text-blue-900 mt-1 ml-8">Spakrnex</p>
          </div>
          <div className=" mt-1 flex flex-row ml-[25vw] md:ml-5 ">
            <img
              src={adminimg}
              alt="Admin Image"
              className="w-1.5rem md:w-1rem mx-2  md:absolute"
            />
            <div className="md:ml-20">
              <p className="text-3xl font-bold mt-3 mx-4 w-[200px] ">
                Mukesh Pal
              </p>
              <p className="text-lg text-gray-500 mx-4">CEO Assistant</p>
            </div>
          </div>
          <div className="md:ml-auto mt-3">
            <button className="w-9 h-9 pl-1 rounded-full border-2 text-xl ">
              <AiOutlineSearch />
            </button>
            <input
              type="text"
              placeholder="start the searching here....."
              className="rounded-lg ml-2 border pl-2 pr-1"
            />
          </div>
        </div>
        <div className="md:border-2 md:border-gray-200 pl-[12vw] md:pl-5 pr-5 pt-2 w-[75vw]  md:w-[20rem]  md:h-[17rem] ml-8 mt-1 rounded-xl shadow-lg  md:mr-0">
          <p className="text-3xl font-bold ">Welcome to the</p>
          <p className="text-3xl font-bold  text-gray-500">Settings</p>
          <img
            src={settingwlcmimg}
            className="mt-3 md:w-52"
            alt="Wlecome image"
          />
        </div>
      </div>

      {/**Settings Menubar section */}
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-row md:flex-col mt-5  ">
          <div className="border-2 bg-gray-50 md:w-79 pb-3 rounded-xl">
            {genralSetting ? (
              <button
                className="flex ml-2 text-blue-900 font-bold mt-1 "
                onClick={genralSettingsHandler}
              >
                <p className="text-xl mt-1">
                  <LuSettings2 />
                </p>
                <p className=" ml-2 w-[130px]">General Settings</p>
                <p className="text-lg mt-1 ml-10">
                  <IoIosArrowForward />
                </p>
              </button>
            ) : (
              <button
                className="flex ml-2 font-bold text-gray-500 mt-1 "
                onClick={genralSettingsHandler}
              >
                <p className="text-xl mt-1">
                  <LuSettings2 />
                </p>
                <p className=" ml-2 w-[130px]">General Settings</p>
                <p className="text-lg mt-1 ml-10">
                  <IoIosArrowForward />
                </p>
              </button>
            )}

            {securitySetting ? (
              <button
                className="flex ml-2 text-blue-900 font-bold mt-1 md:mt-4"
                onClick={securitySettingsHandler}
              >
                <p className="text-xl mt-1">
                  <GoShieldLock />
                </p>
                <p className=" ml-2 ">Security Settings</p>
                <p className="text-lg mt-1 ml-9">
                  <IoIosArrowForward />
                </p>
              </button>
            ) : (
              <button
                className="flex ml-2 font-bold text-gray-500 mt-1 md:mt-4"
                onClick={securitySettingsHandler}
              >
                <p className="text-xl mt-1 ">
                  <GoShieldLock />
                </p>
                <p className=" ml-2 ">Security Settings</p>
                <p className="text-lg mt-1 ml-9">
                  <IoIosArrowForward />
                </p>
              </button>
            )}

            {systeSetting ? (
              <button
                className="flex ml-2 text-blue-900 font-bold mt-1 md:mt-4"
                onClick={systemSettingsHandler}
              >
                <p className="text-xl mt-1">
                  <LuServer />
                </p>
                <p className=" ml-2 ">System Maintenance</p>
                <p className="text-lg mt-1 ml-2">
                  <IoIosArrowForward />
                </p>
              </button>
            ) : (
              <button
                className="flex ml-2 font-bold text-gray-500 mt-1 md:mt-4"
                onClick={systemSettingsHandler}
              >
                <p className="text-xl mt-1">
                  <LuServer />
                </p>
                <p className=" ml-2 ">System Maintenance</p>
                <p className="text-lg mt-1 ml-2">
                  <IoIosArrowForward />
                </p>
              </button>
            )}
            {advancedSetting ? (
              <button
                className="flex ml-2 text-blue-900 font-bold mt-1 md:mt-4"
                onClick={advancedSettingsHandler}
              >
                <p className="text-xl mt-1">
                  <MdDisplaySettings />
                </p>
                <p className=" ml-2 ">Advanced Settings</p>
                <p className="text-lg mt-1 ml-6">
                  <IoIosArrowForward />
                </p>
              </button>
            ) : (
              <button
                className="flex ml-2 font-bold text-gray-500 mt-1 md:mt-4"
                onClick={advancedSettingsHandler}
              >
                <p className="text-xl mt-1">
                  <MdDisplaySettings />
                </p>
                <p className=" ml-2 ">Advanced Settings</p>
                <p className="text-lg mt-1 ml-6">
                  <IoIosArrowForward />
                </p>
              </button>
            )}
          </div>
          <div className="ml-2  md:mt-36">
            <img
              className="w-40 md:w-56  rounded-lg pr-1"
              src={settingsmenuimg}
              alt=""
            />
          </div>
        </div>

        {/**for seting type content */}
        <div className="mt-6 ml-5 ">
          
            <Outlet />
         
        </div>

        <div className="pl-20 pr-20 md:pl-10 pt-1 md:pr-10 border-2 md:w-[20rem] md:ml-auto mt-36 md:mr-4 rounded-xl">
          <p className="text-2xl font-bold text-blue-900">
            Empower Your Platform with Personalized Settings :
          </p>
          <p className="text-2xl font-bold text-gray-500">
            Customize. Optimize.
          </p>
          <p className="text-2xl font-bold text-gray-500">Elevate.</p>

          <img src={settinglastimg} alt="Setting Lastimg" />
        </div>
      </div>
    </div>
  );
};

export default SettingsMainPage;
