import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import DashboardLayout from "../adminpage/DashboardLayout";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      validateEmail(value);
    }
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  }

  const clickHandler = () => {
    navigate("/AdminSignUp");
    console.log("Moving to Sign Up page...");
  };

  const clickNavigateAdminDashboard = () => {
    if (!emailError && formData.email && formData.password) {
      navigate("/DashboardLayout");
      console.log("DashboardLayout");
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <div className="mt-5">
      <div className="w-[80vw] h-[auto] border bg-gray-300 ml-10 lg:ml-32 rounded-xl mb-2 pb-5 pl-2">
        <div className="flex justify-between items-center mt-5">
          <div className="flex ml-3 ">
            <div>
              <img className="h-10 w-auto" src="./images/Logo.svg" alt="Logo" />
            </div>
            <div className="">
              <span className="text-blue-500 ml-2 text-lg font-semibold">
                SparkNex
              </span>
            </div>
          </div>
          <div className="w-[100px] h-[30px] text-center text-blue-900 border-2 border-blue-900 rounded-2xl mr-5 hover:bg-blue-300">
            <button onClick={clickHandler} className="mr-3">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div>
            <img src="./images/loginimg.svg" alt="" />
          </div>
          <div className="text-blue-900">
            <div className="text-4xl mt-5">
              <h1 className="font-bold">Hello</h1>
            </div>
            <div className="text-lg mt-5">
              <p>Welcome to SparkNex</p>
            </div>

            {/* Email/password section */}
            <div className="mt-5">
              {/* Email section */}
              <label className="w-full">
                <p className="text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
                <input
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                  required
                  type="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Enter email address"
                  name="email"
                  autoComplete="off" // Add autoComplete attribute
                />
                
              </label>
                               
              {/* Password section */}
              <label htmlFor="/" className="w-full relative mt-3">
                <p className="text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">
                  Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                  required
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder="Enter password"
                  name="password"
                />
                <span
                  className="absolute right-3 top-[38px] cursor-pointer mt-10"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
                <Link to="#">
                  <p className="text-xs mt-1 text-blue-900 max-w-max ml-auto lg:ml-96">
                    Forget Password?
                  </p>
                </Link>
              </label>
            </div>

            <div className="w-[200px] lg:w-[450px] h-[30px] bg-blue-900 rounded-2xl text-center mt-5 ml-5">
              <button className="text-white font-bold" onClick={clickNavigateAdminDashboard}>
                Login
              </button>
            </div>
            <div className="bg-blue-900 text-white w-[60vw] pb-2 ml-5 lg:w-[30vw] rounded-lg mt-8">
              <p className="pl-5">
                If you are having any trouble, immediately contact the concerned authorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
