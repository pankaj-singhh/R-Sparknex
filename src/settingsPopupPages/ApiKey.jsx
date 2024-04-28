import React from "react";
import { GrClose } from "react-icons/gr";
import { IoIosAlert } from "react-icons/io";

const ApiKey = ({setApiKey}) => {
    const token = "f9d8a7b0-3d12-4c88-bcf5-87e8c51dbef2";

    const clipboardCopyHandler = () => {
        navigator.clipboard.writeText(token)
          .then(() => {
            alert('API token copied to clipboard!');
            setApiKey(false);
          })
          .catch((err) => {
            console.error('Error copying API token: ', err);
          });
      };
  const toggleModal = () => {
    setApiKey(false);
  };

  const cancleApikey=()=>{
    setApiKey(false);
  }
  return (
    <div className=" fixed inset-0 flex items-center justify-center ">
      <div className=" bg-white rounded-xl   border-2 pl-5 pr-5 pb-2 pt-3 shadow-lg">
        <div className="flex">
          <div className="">
            <p className="text-lg md:text-xl lg:text-3xl  font-bold text-gray-500 ">
              Review API Token
            </p>
          </div>
          <button
            className=" hover:bg-red-300  font-bold text-lg  text-gray-500 rounded-full ml-auto mr-3 w-[30px] h-[30px] pl-1"
            onClick={toggleModal}
          >
            <GrClose />
          </button>
        </div>

        {/**text section */}
        <div className="flex  bg-gray-100 pl-2 pr-2 pb-2 pt-2 rounded-xl mt-2">
           <p className="text-3xl text-gray-700"> < IoIosAlert/></p>
          <p className="w-[72vw] md:w-[36vw]  text-gray-600 ml-1 ">
            Here is your API token. This is only time the token will ever be
            displayed, so be sure not to lose it! You may revoke the token at
            any time from you Advanced Settings.
          </p>
        </div>
        <div>
            <p className="text-lg md:text-xl lg:text-3xl  font-bold text-gray-500 ">API Token</p>
           <div className="  md:text-3xl font-bold border-2 border-gray-500 md:pt-3 md:pr-2 md:pb-3 md:pl-5 rounded-xl mt-3 ">{token }</div>
        </div>

        <div className=" w-[88vw]md:w-[44vw] h-[1px]  bg-gray-500 mt-5"></div>

        <div className="flex flex-col md:flex-row md:justify-between pl-10 pr-10 mt-5 pb-5">
            <button 
            onClick={cancleApikey}
            className="text-lg text-blue-900 w-[200px] border rounded-full pt-1 pb-1 ">Cancle</button>
            <button 
            onClick={clipboardCopyHandler}
            className="w-[200px] text-white mt-5 md:mt-0 bg-blue-900 text-lg rounded-full pt-1 pb-1">Copy to Clipboard</button>
        </div>
      </div>
    </div>
  );
};

export default ApiKey;
