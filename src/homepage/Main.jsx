import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Main = () => {

  const navigate=useNavigate();
  const clickHandlar =()=>{
    navigate("/AdminLogin");
    console.log("move to ho raha hai");

  }
  return (
    <div>
      <div className='bg-[url("assets/sparkbgimg.jpg")] bg-contain lg:bg-contain  bg-no-repeat w-[80vw]  ml-10 lg:ml-40  lg:pb-28'>
        <div className="lg:flex ">
          {/*for flex internal div */}
          <div className="text pt-24 lg:pt-40">
            <div className="text-xl lg:text-3xl text-blue-900">
              <h3 className="font-bold">Welcom to</h3>
            </div>
            <div className="text-5xl lg:text-6xl text-blue-900 pl-7 mt-5">
              <h1 className="font-bold">SparkNex</h1>
            </div>
            <div className="text-blue-900 mt-5">
              <h3 className="">Connect, Chat, Spark Conversations!</h3>
            </div>
            <div className="">
              <div className="flex justify-center text-white bg-blue-900 w-[180px] h-[5vh] rounded-full ml-12 mt-12">
           
                 <button onClick={clickHandlar} className="pl-6"> Get Started! </button>
                <div className="mt-2.5 ml-1">
                  <FaArrowRight />
                </div>
              </div>
              <div className="flex justify-center mt-5 lg:mr-16 text-xl">
                <div className="text-blue-900 mr-3">
                  <IoLogoGooglePlaystore />
                </div>
                <div className="text-blue-900 mr-3">
                  <FaApple />
                </div>
              </div>
            </div>{" "}
          </div>
          {/*text div end */}
          <div className=" mt-5  lg:ml-72 lg:pb-0 lg:mt-8">
            <img src="./images/mobileimg.png" alt="" />
          </div>
        </div>
        {/*for flex internal div end */}
      </div>
      <div className="border w-[full] h-[2px] bg-gray-300 hover:bg-blue-500"></div>
    </div>
  );
};

export default Main;
