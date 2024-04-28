import React, { useState } from "react";

const GenralSetting = () => {
  
  const [isChecked, setIsChecked] = useState(false);


  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className=" flex flex-col md:flex-row border-2 border-gray-300 md:w-[58vw] pt-3 pr-3 pl-3 pb-3 rounded-full">
        <p className="font-bold text-gray-500">Language</p>
       
          {/* Select dropdown */}
          <select className="border-2 border-blue-900 bg-white w-[10rem] ml-auto rounded-full pl-2 h-[35px]">
            {/* Default option */}
            <option value="">Select</option>
            {/* Other options */}
            <option value="">Hindi</option>
            <option value="">English</option>
            <option value="">Arabi</option>
            <option value="">Nepali</option>
            <option value="">Bhutani</option>
            {/* Add more options as needed */}
          </select>
       
      </div>
      <div className=" flex flex-col md:flex-row border-2 border-gray-300 md:w-[58vw] pt-3 pr-3 pl-3 pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500">Notification</p>
       
        <div className="flex items-center ml-auto ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id="switch"
        className="hidden"
      />
      <label
        htmlFor="switch"
        className="flex items-center cursor-pointer"
      >
        <div className="w-16 h-7 bg-gray-400 rounded-full shadow-inner"></div>
        <div
          className={`${
            isChecked ? 'bg-blue-800 translate-x-10' : 'bg-white'
          } w-6 h-6 rounded-full shadow-md transform transition-transform z-10 absolute`}
        ></div>
      </label>
    </div>
       
      </div>
    </>
  );
};

export default GenralSetting;
