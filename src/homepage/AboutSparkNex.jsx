import React from "react";

const AboutSparkNex = () => {
  return (
    <div className="mt-10 pb-10">
      <div className="flex justify-center">
        <div class="flex items-center justify-center">
          <div class="w-[250px] h-[65px] bg-blue-900 rounded-2xl absolute -z-10"></div>
          <button class="text-blue-900 text-lg w-[320px] border font-bold shadow bg-white rounded-3xl py-2 px-5">
            About Sparknex
          </button>
        </div>
      </div>
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
        <div className="lg:absolute border w-[150px] h-[35px] text-center bg-white rounded-lg">
          <p className="text-blue-900 font-bold">About SparkNex</p>
        </div>
        <div className="bg-blue-900 w-[80vw] rounded-2xl pt-5 lg:pt-10 lg:static  lg:ml-20 lg:h-[20vh] mt-5 lg:mt-0 text-lg ">
          <p className="w-[75vw] lg:w-[60vw] ml-5 pt-2 pb-5 lg:ml-32">
            About SparkNex SparkNex is a social platform designed to spark
            meaningful conversations and connections. Our mission is to bring
            people together and foster a positive online community.
          </p>
        </div>
      </div>
      {/* next Component2*/}
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
        <div className="lg:absolute border w-[150px] h-[35px] text-center bg-white rounded-lg">
          <p className="text-blue-900 font-bold">Our Mission</p>
        </div>
        <div className="bg-blue-900 w-[80vw] rounded-2xl pt-5 lg:pt-10 lg:static lg:ml-20 lg:h-[20vh] mt-5 lg:mt-0 text-lg">
          <p className="w-[75vw] lg:w-[60vw] ml-5 pt-2 pb-5 lg:ml-32">
            Our mission is to create a safe and inclusive space where
            individuals can connect, chat, and share their interests with
            like-minded individuals from around the world. We believe in the
            power of conversation to build bridges and break down barriers.
          </p>
        </div>
      </div>
      {/*next component */}
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
        <div className="lg:absolute border w-[180px] h-[35px] bg-white rounded-lg text-center">
          <p className="text-blue-900 font-bold">Our Vision</p>
        </div>
        <div className="bg-blue-900 w-[80vw] rounded-2xl pt-5 lg:pt-10 lg:static lg:ml-20 lg:h-[20vh] mt-5 lg:mt-0 text-lg">
          <p className="w-[75vw] lg:w-[60vw] ml-5 pt-2 pb-5 lg:ml-32">
            Our vision is to become the leading platform for fostering genuine
            connections and conversations online. We envision a world where
            people feel empowered to express themselves authentically and
            connect with others in meaningful ways.
          </p>
        </div>
      </div>
      <div className="border w-[full] h-[2px] bg-gray-300 hover:bg-blue-500 mt-10"></div>
    </div>
  );
};

export default AboutSparkNex;
