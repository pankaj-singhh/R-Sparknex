import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaTwitter,FaInstagram } from "react-icons/fa6";

const SubscribeSection = () => {
  return (
    <div>
      <div className="lg:flex">
        <div className="flex text-blue-900 ml-5">
          <img className="font-bold" src="./images/Logo.svg" alt="" />
          <p className="font-bold">SparkNex</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:ml-96 border lg:pl-72 ">
          <span className="text-blue-900 text-lg">
            Subscribe To Our Newsletter
          </span>
          <div className="flex lg:ml-10">
            <input
              className="border w-[70vw] lg:w-[25vw] mt-2 lg:mt-0 rounded "
              type="email"
              name=""
              placeholder="Enter email address"
            />
            <div className="mt-3 text-blue-900   text-4xl">
              <button className="font-bold ">
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-blue-900 text-3xl lg:text-5xl w-[70vw] ml-10 mt-16">
          <p>Experience the future of social networking with SparkNex</p>
        </div>
        <div className="border w-[90vw] h-[2px] bg-blue-700 hover:bg-blue-500 mt-10 ml-10"></div>
        
        <div className="flex flex-col lg:flex-row  justify-center items-center mt-3">
          <div className="text-blue-900 text-lg lg:mr-80">
            <p>
            Connect, Chat, Spark Conversations!
            </p>
          </div>
          <div className="flex space-x-4 text-3xl mt-5 lg:ml-96 lg:pl-44 border">
  
            <div> <button><FaFacebook/></button> </div>
            <div> <button><FaTwitter/></button> </div>
            <div> <button><FaInstagram/></button> </div>
            <div> <button><FaLinkedin/></button></div>

          </div>
        </div>
        <div className="mt-10 text-sm text-blue-900 flex items-center justify-center mb-3">
          <p>© 2024 SparkNex  |  All rights reserved</p>
        </div>
    </div>
  );
};

export default SubscribeSection;
