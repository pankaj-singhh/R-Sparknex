import React from 'react'
import { useNavigate } from 'react-router-dom'


const PublishedBlog = () => {
  const navigate =useNavigate();
  const viewPublishedBlogHandler=()=>{
     navigate("/DashboardLayout/BlogPublishedView");
  }
  return (
    <div className=" h-[20rem] lg:h-[32rem] mt-3 overflow-y-scroll">
      <div className=" pb-5 border pr-2 pt-2 pl-2 lg:ml-10 rounded-xl bg-gray-200 ml-2">
        <div className="flex flex-col md:flex-row mt-3  pb-1 pt-1 pl-1 rounded-xl bg-white lg:w-[1200px] bottom-2">
          <div>
            <p className="font-bold text-lg text-blue-900">
              The Impact of AI on Modern Healthcare
            </p>
            <p className="font-bold">
              <span className="text-gray-500">Status:</span>{" "}
              <span className="text-gray-700">Published</span>
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-gray-500 pr-5">January 25, 2024</p>
            <div>
              <button className="text-lg text-white bg-blue-900 rounded-full w-[100px] pt-1 pb-1 text-center mr-2"  onClick={viewPublishedBlogHandler}>
              View
              </button>
              
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-3  pb-1 pt-1 pl-1 rounded-xl bg-white lg:w-[1200px] bottom-2">
          <div>
            <p className="font-bold text-lg text-blue-900">
              10 Tips for Effective Social Media Marketing
            </p>
            <p className="font-bold">
              <span className="text-gray-500">Status:</span>{" "}
              <span className="text-gray-700">Published</span>
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-gray-500 pr-5">January 01, 2024</p>
            <div>
              <button className="text-lg text-white bg-blue-900 rounded-full w-[100px] pt-1 pb-1 text-center mr-2"  onClick={viewPublishedBlogHandler}>
                View
              </button>
             
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-3  pb-1 pt-1 pl-1 rounded-xl bg-white lg:w-[1200px] bottom-2">
          <div>
            <p className="font-bold text-lg text-blue-900">
              The Impact of AI on Modern Healthcare
            </p>
            <p className="font-bold">
              <span className="text-gray-500">Status:</span>{" "}
              <span className="text-gray-700">Published</span>
            </p>
          </div>
          <div className="ml-auto ">
            <p className="text-gray-500 pr-5">January 10, 2024</p>
            <div>
              <button className="text-lg text-white bg-blue-900 rounded-full w-[100px] pt-1 pb-1 text-center "  onClick={viewPublishedBlogHandler}>
                View
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishedBlog