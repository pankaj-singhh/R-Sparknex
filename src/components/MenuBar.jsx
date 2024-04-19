import React from "react";
import { NavLink,useNavigate } from 'react-router-dom';
import { FiUsers } from "react-icons/fi";
import { FiChevronRight, FiUploadCloud } from "react-icons/fi";
import { MdOutlineMessage, MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

const MenuBar = ({setShowDashbrd,setUserManagement,setDatatoParent}) => {
  const navigate=useNavigate();

  const useManagementHandler=()=>{
   
    navigate("/DashboardLayout/UserManagement");
  }
  const UploadBlogHandler=()=>{
    navigate("/DashboardLayout/UploadBlogs");
   }
 const userFeedbackHandler=()=>{
  navigate("/DashboardLayout/userfeedbackrecieved");
 }
 const userSettingsHandler=()=>{

 }
  return (
    <div className="w-[58vw] border-2 lg:w-[20vw] pt-5 bg-white rounded-xl">
      {/**menu */}
      <div className="border-2 border-gray-400 bg-gray-200 w-[50vw] lg:w-[18vw] ml-2 rounded-xl">
        {/**Usermanagement */}
        <div to="/user-management" className="flex mt-1 text-blue-900">
        <button className="flex" onClick={useManagementHandler} >
        <div className="ml-1 text-lg">
          <FiUsers />
        </div>
        <div className="text-sm ml-1 lg:ml-5">
          <p className="font-bold">User Management</p>
        </div>
        <div className="ml-4 pl-3 text-lg">
          
            <FiChevronRight />
         
        </div>
        </button>
      </div>

      {/* Uploads Blogs */}
      <div to="/user-management" className="flex mt-1 text-blue-900">
        <button className="flex" onClick={UploadBlogHandler} >
        <div className="ml-1 text-lg">
          <FiUploadCloud />
        </div>
        <div className="text-sm ml-1 lg:ml-5">
          <p className="font-bold">Upload Blogs</p>
        </div>
        <div className="ml-3 pl-12 text-lg ">
          
            <FiChevronRight />
         
        </div>
        </button>
      </div>

      {/* Feedbacks Received */}
      <div to="/user-management" className="flex mt-1 text-blue-900">
        <button className="flex" onClick={userFeedbackHandler} >
        <div className="ml-1 text-lg">
          <MdOutlineMessage />
        </div>
        <div className="text-sm ml-1 lg:ml-5">
          <p className="font-bold">Feedbacks Recieved</p>
        </div>
        <div className=" pl-5 text-lg ">
          
            <FiChevronRight />
         
        </div>
        </button>
      </div>

      {/* Settings */}
      <div to="/user-management" className="flex mt-1 text-blue-900">
        <button className="flex" onClick={userSettingsHandler} >
        <div className="ml-1 text-lg">
          <MdOutlineMessage />
        </div>
        <div className="text-sm ml-1 lg:ml-5">
          <p className="font-bold">Settings</p>
        </div>
        <div className=" ml-16 pl-7 text-lg ">
          
            <FiChevronRight />
         
        </div>
        </button>
      </div>

      {/* Logout */}
      <NavLink to="/logout" className="flex mt-10 text-red-500">
        <div className="ml-1 text-lg">
          <MdLogout />
        </div>
        <div className="text-sm ml-1 lg:ml-5">
          <p className="font-bold">Logout</p>
        </div>
        <div className="ml-20 pl-2">
          <button className="font-bold">
            <FiChevronRight />
          </button>
        </div>
      </NavLink>
      </div>
      {/*menuimg */}
      <div className="mt-10 pl-2">
        <div className="font-bold">
          <div><span className="text-blue-900">Empowering</span> 
          <span className=" text-blue-400">Administration, </span></div>
         <div> <span className="text-blue-900">Enhancing </span> 
         <span className="text-blue-400">Efficiency</span></div>
        </div>
        <div className="pb-5"><img src="./images/menueimg.svg" alt="Image" /></div>
      </div>
    </div>
  );
};

export default MenuBar;
