import React from "react";
import { GrClose } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import notificationicon from "../assets/notificationuser.svg"
import content from "../assets/notificationcontent.svg"
import systemUpdate from "../assets/notificationsystemupdate.svg"
import accountVerification from "../assets/ntfctnaccountverficationicon.svg"
import feedbackRecievedicon from "../assets/ntfctnfeedbackicon.svg"


const Notification = ({setShowNotification}) => {
    const toggleModal=()=>{
        setShowNotification(false);
    }



  return (

    <div className=" fixed inset-0 flex items-center justify-center ">
      <div className=" bg-white rounded-xl   border-2 pl-5 pr-5 pb-2 pt-3 shadow-lg">
      <div className=" mb-1 flex">
          <h1 className="text-xl lg:text-2xl  font-md text-blue-900 ">
          Notification Inbox
          </h1>
          <button
            className=" hover:bg-red-300  font-bold text-lg  text-gray-500 rounded-full ml-auto mr-3 w-[30px] h-[30px] pl-1"
            onClick={toggleModal}
          >
            <GrClose />
          </button>
        </div>
        <div className="text-gray-500 font-semibold text-sm">
            <p>You have new notifications. Stay up to date with the latest updates and alerts.</p>
        </div>
        <div className="mt-2 flex bg-gray-100 rounded-xl py-2 px-2">
            <img 
            className="bg-white rounded-xl"
            src={notificationicon} alt="" />
            <div className="md:px-5">
                <p className="font-bold md:text-lg text-gray-500">New user registration</p>
                <p className="text-gray-500 text-sm md:text-lg">A new user has registered on the platform. Review their account details.</p>
            </div>
            <div className="ml-auto text-xl font-bold"><IoIosArrowForward/></div>
        </div>


        <div className="mt-2 flex bg-gray-100 rounded-xl py-2 px-2">
            <img 
            className="bg-white rounded-xl"
            src={content} alt="" />
            <div className="md:px-5">
                <p className="font-bold md:text-lg text-gray-500">Content reported</p>
                <p className="text-gray-500 text-sm md:text-lg">A post has been reported by a user. Review the reported content.</p>
            </div>
            <div className="ml-auto text-xl font-bold"><IoIosArrowForward/></div>
        </div>

        <div className="mt-2 flex bg-gray-100 rounded-xl py-2 px-2">
            <img 
            className="bg-white rounded-xl"
            src={systemUpdate} alt="" />
            <div className="md:px-5">
                <p className="font-bold md:text-lg text-gray-500">System Update</p>
                <p className="text-gray-500 text-sm md:text-lg">A post has been reported by a user. Review the reported content.</p>
            </div>
            <div className="ml-auto text-xl font-bold"><IoIosArrowForward/></div>
        </div>
        
        <div className="mt-2 flex bg-gray-100 rounded-xl py-2 px-2">
            <img 
            className="bg-white rounded-xl"
            src={accountVerification} alt="" />
            <div className="md:px-5">
                <p className="font-bold md:text-lg text-gray-500">Account verification</p>
                <p className="text-gray-500 text-sm md:text-lg">An account requires verification. Verify the user's account to grant access.</p>
            </div>
            <div className="ml-auto text-xl font-bold"><IoIosArrowForward/></div>
        </div>

        <div className="mt-2 flex bg-gray-100 rounded-xl py-2 px-2">
            <img 
            className="bg-white rounded-xl"
            src={feedbackRecievedicon} alt="" />
            <div className="md:px-5">
                <p className="font-bold md:text-lg text-gray-500">Feedback received</p>
                <p className="text-gray-500 text-sm md:text-lg">A user has submitted feedback. Review the feedback and take necessary action.</p>
            </div>
            <div className="ml-auto text-xl font-bold"><IoIosArrowForward/></div>
        </div>

      </div>
    </div>
  );
};

export default Notification;
