import React from "react";
import { GrClose } from "react-icons/gr";
import Dbconfigrationimg from "../assets/dbconfigrtnimg.svg";

const DbConfigrationSetting = ({ setDatabaseModal }) => {
  const toggleModal = () => {
    setDatabaseModal(false);
  };
  const databaseSubmitHandler=()=>{
    setDatabaseModal(false);
    alert("Configration Submitted");
  }
  return (
    <div className=" fixed inset-0 flex items-center justify-center ">
      <div className=" bg-white rounded-xl   border-2 pr-2 pb-2 pt-3 ">
        <div className="flex">
          <div className="md:ml-52">
            <p className="text-lg md:text-xl lg:text-3xl  font-bold text-blue-900 ml-24">
              Database Configuration
            </p>
            <p className="text-gray-600 text-sm md:text-md ml-12 mt-3">
              Configure the database connection settings for your application
              below
            </p>
          </div>
          <button
            className=" hover:bg-red-300  font-bold text-lg  text-gray-500 rounded-full ml-auto mr-3 w-[30px] h-[30px] pl-1"
            onClick={toggleModal}
          >
            <GrClose />
          </button>
        </div>

        <div className="flex  justify-center">
          <img className="md:w-[30rem] w-[17rem]" src={Dbconfigrationimg} alt="" />

          <div className="md:ml-8 mr-10">
            <div className="flex-col md:mt-10">
              <p className="text-gray-500 font-bold text-sm md:text-2xl">
                Database Host*
              </p>
              <input
                className="text-gray-500 text-sm md:text-md w-[40vw] border-2 pl-2 pr-2 md:pt-3 md:pb-3 pt-1 pb-2 rounded-2xl mt-2"
                type="text"
                name=""
                placeholder="Enter the hostname or IP address of your database server."
              />
            </div>
            <div className="flex-col mt-1 md:mt-5">
              <p className="text-gray-500 font-bold text-sm md:text-2xl">Username*</p>
              <input
                className="text-gray-500 text-sm md:text-md w-[40vw] border-2 pl-2 pr-2 md:pt-3 md:pb-3 pt-1 pb-2 rounded-2xl mt-2 "
                type="text"
                name=""
                placeholder="Enter the password associated with the provided username."
              />
            </div>

            <div className="flex-col md:mt-5">
              <p className="text-gray-500 font-bold text-sm md:text-2xl">Password*</p>
              <input
                className="text-gray-500 text-sm md:text-md w-[40vw] border-2 pl-2 pr-2 md:pt-3 md:pb-3 pt-1 pb-2 rounded-2xl mt-2"
                type="text"
                name=""
                placeholder="Enter the password associated with the provided username."
              />
            </div>
            <div className="flex-col md:mt-5">
              <p className="text-gray-500 font-bold md:text-2xl text-sm">
                Database Name*
              </p>
              <input
                className="text-gray-500 text-sm md:text-md w-[40vw] border-2 pl-2 pr-2 md:pt-3 md:pb-3 pt-1 pb-2 rounded-2xl mt-2 "
                type="text"
                name=""
                placeholder="Specify the name of the database you want to connect to.."
              />
            </div>
            <p className="w-[40vw] text-md text-blue-900 mt-5">
              Once you've entered the required information, click the "Save
              Changes" button to apply the configuration.
            </p>
            <button 
            onClick={databaseSubmitHandler}
             className=" w-[40vw] md:w-[20vw] border bg-blue-900 text-white text-lg font-bold rounded-full pt-2 pb-2 mt-5">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbConfigrationSetting;
