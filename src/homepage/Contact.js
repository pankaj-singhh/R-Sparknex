import React from "react";

const Contact = () => {
  return (
    <div className="pb-10">
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
        <div className="lg:absolute border w-[180px] h-[35px] bg-white rounded-xl text-center">
          <p className="text-blue-900 font-bold">Get in Touch!</p>
        </div>
        <div className="bg-blue-900 w-[80vw] rounded-2xl pt-5 lg:pt-10 lg:static lg:ml-20 lg:h-[50vh] mt-5 lg:mt-0 pl-5 lg:pl-32">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col">
              <span className="font-bold">Name</span>
              <input
                className="w-[70vw] lg:w-[30vw] rounded mt-3 text-black"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col mt-5 lg:mt-0 lg:ml-20">
              <span className="font-bold">Email Address</span>
              <input
                className="w-[70vw] lg:w-[30vw] rounded mt-3 text-black"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-col pb-5 mt-5 mb-1 ">
            <span className="font-bold">Message</span>
            <textarea
              className="h-[20vh] w-[70vw] lg:h-[20vh] lg:w-[65vw] rounded text-black mt-3"
              placeholder="Write here message"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
          <div className="lg:absolute">
            <img src="./images/contactimg1.svg" alt="" />
          </div>
          <div className="bg-blue-900 w-[70vw] lg:w-[30vw] rounded-2xl pt-5 lg:pt-10 lg:static lg:ml-20 lg:h-[20vh]">
            <p className="text-2xl font-bold w-[60vw]lg:w-[20vw] ml-5 lg:ml-32">
              123 SparkNex Street, City, Country
            </p>
          </div>
        </div>
        <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-60 mt-10">
          <div className="lg:absolute">
            <img src="./images/contactimg2.svg" alt="" />
          </div>
          <div className="bg-blue-900 w-[70vw] lg:w-[30vw] rounded-2xl pt-5 lg:pt-10 lg:static lg:ml-20 lg:h-[20vh]">
            <p className="text-2xl font-bold w-[20vw] ml-5 lg:ml-32">
              info@sparknex.com
            </p>
            <p className="text-2xl font-bold w-[75vw] ml-5 lg:ml-32">
              +1 (123) 456-7890
            </p>
          </div>
        </div>
      </div>

      <div className="border w-[full] h-[2px] bg-blue-700 hover:bg-blue-500 mt-10"></div>
    </div>
  );
};

export default Contact;
