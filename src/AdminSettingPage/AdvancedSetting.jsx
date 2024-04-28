import React, { useState } from 'react'
import {IoIosArrowForward  } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import DbConfigrationSetting from '../settingsPopupPages/DbConfigrationSetting';
import ApiKey from '../settingsPopupPages/ApiKey';


const AdvancedSetting = () => {
  const[databaseModal,setDatabaseModal]=useState(false);
  const[apiKey,setApiKey]=useState(false);
  //const navigate=useNavigate()

  const apiKeyHandler=()=>{
    setApiKey(true);

  }


  const databaseConfigrationHandler=()=>{
  setDatabaseModal(!databaseModal);
  }
    return (
    <div>
      {databaseModal&&
      (<div className=''><DbConfigrationSetting setDatabaseModal={setDatabaseModal}/></div>)
      }
      {
        apiKey&&(<div><ApiKey setApiKey={setApiKey}/></div>)
      }
       <div className=" flex flex-col md:flex-row border-2 border-gray-300 md:w-[58vw] pt-3 pr-3 pl-3 pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500">API Access</p>
       
       <button 
       onClick={apiKeyHandler}
       className='ml-auto w-[150px] bg-blue-900 pt-1 pb-1 text-white rounded-full'>Generate API Key</button>
       
      </div>

      

      <button
      onClick={databaseConfigrationHandler} 
      className=" flex flex-col md:flex-row border-2 border-gray-300 w-[95vw] md:w-[58vw] md:pt-3 pr-3 pl-3 md:pb-3 rounded-full mt-5">
        <p className="font-bold text-gray-500 mr-52 w-[200px]  md:mr-0">Database Configuration</p>
       
       <p className='ml-auto text-xl'><IoIosArrowForward /></p>
       
      </button>
    </div>
  )
}

export default AdvancedSetting