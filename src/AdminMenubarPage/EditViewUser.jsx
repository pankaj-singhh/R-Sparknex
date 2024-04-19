import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams,useNavigate } from "react-router-dom";

const EditViewUser = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [priorityOption, setPriorityOption] = useState(null);
  const { username, email } = useParams();
  const navigate=useNavigate();

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const handleStatusOptionChange = (value) => {
    setPriorityOption(value);
  };
  const backUserMAnagementPage = () => {
    navigate("/DashboardLayout/UserManagement");
    alert("Are you sure, back  to the UserManagement page");
  };
  const SaveChangeSendManagementUserPage=()=>{
    navigate("/DashboardLayout/UserManagement");
    alert("User Details is Changed");
  };

  return (
    <>
      <div className=" mt-2 border-2 border-gray-500 bg-gray-200 ml-2 lg:ml-10 rounded-xl pr-2 pb-1 pt-1 pl-2 w-[95vw] lg:w-[78vw]">
        <div className="flex flex-col lg:flex-row">
          <div className="">
          <div className="flex">
            <button
              className="text-4xl text-center font-bold h-[2.5rem] w-[2.5rem] border-1 rounded-full bg-white text-blue-900 mt-2"
              onClick={backUserMAnagementPage}
            >
              <IoIosArrowRoundBack />
            </button>
            <div className=" mt-2 font-bold text-blue-900 bg-white rounded-xl pb-2 pl-2 pt-2 pr-5 w-[60vw] lg:w-[40vw] ml-4">
              <p>{username}</p>
            </div>
          </div>
          <div className="flex mt-5 font-bold text-blue-900 bg-white rounded-xl pb-2 pl-3 pt-3 pr-5 w-[60vw] lg:w-[40vw] ml-[3.5rem] ">
            <p>{email}</p>
          </div>
          </div>
          <div className="mt-4">
            <div className="flex  lg:ml-10">
              <div className="w-[10rem] h-[8rem] bg-white rounded-2xl pt-3 pl-5">
                <p className="font-bold text-blue-900">Role</p>
                <p>
                  <span>User</span>
                  <span className=" ml-16 lg:ml-20">
                    <input
                    className="ml-6 lg:ml-1"
                      type="radio"
                      name="role"
                      value="user"
                      checked={selectedOption === "user"}
                      onChange={() => handleOptionChange("user")}
                    />
                  </span>
                </p>
                <p>
                  <span>Admin</span>
                  <span className="ml-[4.5rem] lg:ml-[4.3rem]">
                    <input
                   
                      type="radio"
                      name="role"
                      value="admin"
                      checked={selectedOption === "admin"}
                      onChange={() => handleOptionChange("admin")}
                    />
                  </span>
                </p>
              </div>
              <div className="w-[10rem] h-[8rem] bg-white rounded-2xl pt-3 pl-5 ml-1 lg:ml-10">
                <p className="font-bold text-blue-900">Status</p>
                <p>
                  <span>Active</span>
                  <span className="ml-16">
                    <input
                    className="ml-3"
                      type="radio"
                      name="status"
                      value="active"
                      checked={priorityOption === "active"}
                      onChange={() => handleStatusOptionChange("active")}
                    />
                  </span>
                </p>
                <p>
                  <span>Inactive</span>
                  <span className="ml-10">
                    <input
                    className="ml-6"
                      type="radio"
                      name="status"
                      value="inactive"
                      checked={priorityOption === "inactive"}
                      onChange={() => handleStatusOptionChange("inactive")}
                    />
                  </span>
                </p>
              </div>
            </div>
            <button className="font-bold text-white bg-blue-900 mt-3 w-[18rem] mb-3 lg:w-[25rem] lg:ml-12 pt-1 pb-1 rounded-3xl" onClick={SaveChangeSendManagementUserPage}>
              Save & Change
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditViewUser;
