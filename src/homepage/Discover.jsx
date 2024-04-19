import React from "react";

const Discover = () => {
  return (
    <div className="mt-10 pb-10">
      <div className="flex justify-center ">
        <div class="flex items-center justify-center">
          <div class="w-[250px] h-[65px] bg-blue-900 rounded-2xl absolute -z-10"></div>
          <button class="text-blue-900 text-lg w-[320px] border font-bold shadow bg-white rounded-3xl py-2 px-5">
            Discover SparkNex
          </button>
              
        </div>
      </div>
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
        <div className="lg:absolute">
          <img src="./images/discoverimg1.svg" alt="" />
        </div>
        <div className="bg-blue-900 w-[80vw] rounded-2xl pt-5 lg:pt-10 lg:static  lg:ml-20 lg:h-[30vh]">
          <p className="text-2xl font-bold w-[75vw] ml-5 lg:ml-32">
            Connect with Sparkers worldwide
          </p>
          <p className="w-[75vw] lg:w-[60vw] ml-5 pt-5 pb-5 lg:ml-32">
            Join a vibrant community of Sparkers from around the globe. Share
            your interests, stories, and ideas in a welcoming and inclusive
            environment.
          </p>
        </div>
      </div>
      {/* next Component2*/}
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
        <div className="lg:absolute">
          <img src="./images/discoverimg2.svg" alt="" />
        </div>
        <div className="bg-blue-900 w-[80vw] rounded-2xl pt-5 lg:pt-10 lg:static lg:ml-20 lg:h-[30vh]">
          <p className="text-2xl font-bold w-[75vw] ml-5 lg:ml-32">
            Chat in real-time with AI-powered SparkBot
          </p>
          <p className="w-[75vw] lg:w-[60vw] ml-5 pt-5 pb-5 lg:ml-32">
            Engage in conversations with our AI-powered SparkBot. Ask questions,
            seek advice, or simply chat for fun. Our bot is here to spark
            interesting discussions and provide helpful responses.
          </p>
        </div>
      </div>
      {/*next component */}
      <div className=" text-white flex flex-col lg:flex-row justify-center items-center  lg:justify-start lg:ml-20 mt-10">
        <div className="lg:absolute">
          <img src="./images/discoverimg3.svg" alt="" />
        </div>
        <div className="bg-blue-900 w-[80vw] rounded-2xl pt-5 lg:pt-10 lg:static lg:ml-20 lg:h-[30vh]">
          <p className="text-2xl font-bold w-[75vw] ml-5 lg:ml-32">
            Join chat rooms and communities based on your interests
          </p>
          <p className="w-[75vw] lg:w-[60vw] ml-5 pt-5 pb-5 lg:ml-32">
            Discover chat rooms and communities tailored to your interests.
            Whether you're into photography, anime, tech, or fitness, there's a
            community waiting for you to join the conversation.
          </p>
        </div>
      </div>
      <div className="border w-[full] h-[2px] bg-gray-300 hover:bg-blue-500 mt-10"></div>
    </div>
  );
};

export default Discover;
