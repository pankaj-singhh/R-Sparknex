import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });
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
    if (!emailError && formData.email) {
      navigate("/AdminLogin");
      console.log("Moving to Login page...");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="mt-5 ">
      <div className="w-[80vw] h-[auto] border bg-gray-300 ml-10 lg:ml-32 rounded-xl mb-2 pb-3 pl-2">
        <div className="flex justify-between items-center mt-5">
          <div className="flex ml-3 ">
            <div>
              <img
                className="h-10 w-auto"
                src="./images/Logo.svg"
                alt="Logo"
              />
            </div>
            <div className="">
              <span className="text-blue-500 ml-2 text-lg font-semibold">
                SparkNex
              </span>
            </div>
          </div>
          <div className="w-[100px] h-[30px] text-center text-blue-900 border-2 border-blue-900 rounded-2xl mr-5 hover:bg-blue-300">
            <button onClick={clickHandler} className="mr-3">
              Login
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div>
            <img src="./images/loginimg.svg" alt="" />
          </div>
          <div className="text-blue-900">
            <div className="text-4xl mt-5">
              <h1 className="font-bold ">Welcome</h1>
            </div>
            <div className="text-lg mt-5">
              <p>Create an account to access the admin panel</p>
            </div>

            {/* Email section */}
            <div className="mt-5">
              <label className="w-full">
                <p className="text-richblack-5 text-[0.875rem] mb-1 leading-[1.375rem]">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                  required
                  type="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Enter email address"
                  name="email"
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1">{emailError}</p>
                )}
              </label>
            </div>

            <div className="w-[200px] lg:w-[450px] h-[30px] bg-blue-900 rounded-2xl text-center mt-5 ml-5">
              <button className="text-white font-bold" onClick={clickHandler}>
                Submit
              </button>
            </div>
            <div className="bg-blue-900 text-white w-[60vw] pb-2 ml-5 lg:w-[30vw] rounded-lg mt-8">
              <p className="pl-5">
                Upon successful signup, a generated password will be sent to
                your email address. Use this password to log in to the admin
                panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
