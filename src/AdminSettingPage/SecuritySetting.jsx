import React, { useState } from 'react'
import {IoIosArrowForward  } from "react-icons/io";
import TowFactorAuth from '../settingsPopupPages/TowFactorAuth';

const SecuritySetting = () => {
  const[showTwoFactor,setShowTwoFactor]=useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const twoFactorAuthHandler=()=>{
   setShowTwoFactor(true);
  }
  return (
    <div className=' '>
      {showTwoFactor&& 
      (<TowFactorAuth setShowTwoFactor={setShowTwoFactor}/>)
      }
      <button 
      onClick={twoFactorAuthHandler}
      className=" flex flex-col md:flex-row border-2 border-gray-300 md:w-[58vw] w-[95vw] pt-3 pr-3 pl-3 pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500 mr-24 md:mr-0">Two-Factor Authentication</p>
       
       <p className='ml-auto text-xl'><IoIosArrowForward /></p>
       
      </button>

       <div className=" flex flex-col md:flex-row border-2 border-gray-300 md:w-[58vw] pt-3 pr-3 pl-3 pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500">IP Whitelisting</p>
       
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
      {
        isChecked?(  <div className="w-16 h-7 bg-blue-800 rounded-full shadow-inner"></div>):(  <div className="w-16 h-7 bg-gray-400 rounded-full shadow-inner"></div>)
      }
        <div
          className={`${
            isChecked ? 'bg-white translate-x-10' : 'bg-white'
          } w-6 h-6 rounded-full shadow-md transform transition-transform  absolute`}
        ></div>
      </label>
    </div>
       
      </div>
       
    </div>
  )
}

export default SecuritySetting