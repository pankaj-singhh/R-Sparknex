import React from "react";
import EditDraftBlog from "./EditDraftBlog";
import { useNavigate } from "react-router-dom";

const DraftBlog = () => {
  const navigate = useNavigate();
  const editDraftBlogHandler = () => {
    navigate("/DashboardLayout/EditDraftBlog");
  };
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
              <span className="text-gray-700">Draft</span>
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-gray-500">January 25, 2024</p>
            <div>
              <button
                className="text-lg text-white bg-blue-900 rounded-full w-[100px] pt-1 pb-1 text-center mr-2"
                onClick={editDraftBlogHandler}
              >
                Edit
              </button>
              <button className="text-lg text-white bg-red-600 rounded-full w-[100px] pt-1 pb-1 text-center mr-2">
                Delete
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
              <span className="text-gray-700">Draft</span>
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-gray-500">January 01, 2024</p>
            <div>
              <button
                className="text-lg text-white bg-blue-900 rounded-full w-[100px] pt-1 pb-1 text-center mr-2"
                onClick={editDraftBlogHandler}
              >
                Edit
              </button>
              <button className="text-lg text-white bg-red-600 rounded-full w-[100px] pt-1 pb-1 text-center mr-2">
                Delete
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
              <span className="text-gray-700">Draft</span>
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-gray-500">January 10, 2024</p>
            <div>
              <button
                className="text-lg text-white bg-blue-900 rounded-full w-[100px] pt-1 pb-1 text-center mr-2"
                onClick={editDraftBlogHandler}
              >
                Edit
              </button>
              <button
                className="text-lg text-white bg-red-600 rounded-full w-[100px] pt-1 pb-1 text-center mr-2"
                onClick={() => {
                  alert("are you sure for Delete it");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftBlog;
