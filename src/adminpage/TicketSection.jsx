import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import {useNavigate} from "react-router-dom"
const TicketData = [
  {
    id: 1,
    requestid: "#24158",
    category: "Technical Support Request",
    Date: "2024-02-21",
    Status: "Pending",
    Priority: "Low",
  },
  {
    id: 2,
    requestid: "#24157",
    category: "Account Access Issue",
    Date: "2024-01-21",
    Status: "Close",
    Priority: "High",
  },
  {
    id: 3,
    requestid: "#24156",
    category: "Feature Request",
    Date: "2024-01-20",
    Status: "Open",
    Priority: "Medium",
  },
  {
    id: 4,
    requestid: "#24158",
    category: "Technical Support Request",
    Date: "2024-02-21",
    Status: "Pending",
    Priority: "Low",
  },
  {
    id: 5,
    requestid: "#24157",
    category: "Account Access Issue",
    Date: "2024-01-21",
    Status: "Close",
    Priority: "High",
  },
  {
    id: 6,
    requestid: "#24156",
    category: "Feature Request",
    Date: "2024-01-20",
    Status: "Open",
    Priority: "Medium",
  },
  {
    id: 7,
    requestid: "#24158",
    category: "Technical Support Request",
    Date: "2024-02-21",
    Status: "Pending",
    Priority: "Low",
  },
  {
    id: 8,
    requestid: "#24157",
    category: "Account Access Issue",
    Date: "2024-01-21",
    Status: "Close",
    Priority: "High",
  },
  {
    id: 9,
    requestid: "#24156",
    category: "Feature Request",
    Date: "2024-01-20",
    Status: "Open",
    Priority: "Medium",
  },
  {
    id: 10,
    requestid: "#24158",
    category: "Technical Support Request",
    Date: "2024-02-21",
    Status: "Pending",
    Priority: "Low",
  },
  {
    id: 11,
    requestid: "#24157",
    category: "Account Access Issue",
    Date: "2024-01-21",
    Status: "Close",
    Priority: "High",
  },
  {
    id: 12,
    requestid: "#24156",
    category: "Feature Request",
    Date: "2024-01-20",
    Status: "Open",
    Priority: "Medium",
  },
];

const TicketSection = ({ setDatatoParent,SetShowTicketSection,setRequestId,setCategory,setDateSubmition }) => {
  const navigate=useNavigate();
  const [editView, setEditView] = useState(false);

const EditViewHandler= (requestid,category,date) => {
 console.log(requestid);
 console.log(category);
 console.log(date);
 const url = `/dashboardlayout/editviewsection/${encodeURIComponent(requestid)}/${encodeURIComponent(category)}/${encodeURIComponent(date)}`;
  
 // Navigate to the EditViewSection route with URL parameters
 navigate(url);
//  setRequestId(requestid);
//  setCategory(category);
//  setDateSubmition (date);
//  navigate("/DashboardLayout/EditViewSection");
    // console.log("editstate:->  "+editView);
    //setEditView(true);
    //SetShowTicketSection(false);
    // setDatatoParent(true);
  
};

  return (
    <div className="overflow-x-scroll overflow-y-scroll h-[32rem] pb-5 border pr-2 pt-2 pl-2 lg:ml-10 rounded-xl bg-gray-100 ml-2">
      <div className="flex font-bold text-blue-900 pb-1 pt-1 rounded-xl bg-white w-[1200px]">
        <div className="mx-2">
          <input className="w-4 h-4" type="checkbox" />
        </div>
        <div className="mx-2 ml-10 ">
          <p>Request ID</p>
        </div>
        <div className="mx-2 ml-10">
          <p>Category</p>
        </div>
        <div className="mx-2 ml-60">
          <p>Date Submitted</p>
        </div>
        <div className="mx-2 ml-20">
          <p>Status</p>
        </div>
        <div className="mx-2 ml-32">
          <p>Priority</p>
        </div>
        <div className="mx-2 ml-32">
          <p>Action</p>
        </div>
      </div>

      <div className=" ">

        {/*maping*/ }
        {TicketData.map((items) => {
          const textColorClass = items.Status === "Pending" ? "text-orange-500" : "text-red-600";
          return (
            <>
              <div key={items.id} className="flex  flex-row mt-3  pb-1 pt-1 rounded-xl bg-white w-[1200px] border-2">
                <div className="mx-2">
                  <input className="w-4 h-4" type="checkbox" />
                </div>
                <div className="mx-2 ml-10 w-20 font-bold">
                  <p>{items.requestid}</p>
                </div>
                <div className="mx-2 ml-5 w-72 font-bold">
                  <p>{items.category}</p>
                </div>
                <div className="mx-2 ml-12 w-32 text-lg font-bold">
                  <p>{items.Date}</p>
                </div>
                <div className={`mx-2 ml-16 w-40 font-bold flex ${textColorClass}`}>
                  <span className="mt-1">
                    <CiSettings />
                  </span>
                  <span>{items.Status}</span>
                </div>
                <div className="mx-2 ml-4 bg-gray-200 rounded-xl w-20 text-center pr-2 pl-2">
                  <p>{items.Priority}</p>
                </div>

                <div className="mx-2 ml-24">
                  <button
                    className="w-20 rounded-xl bg-blue-900 text-white"
                    onClick={()=>EditViewHandler(items.requestid,items.category,items.Date)}
                  >
                    Edit/View
                  </button>
                </div>
              </div>
            </>
          );
        })}

       
      </div>
    </div>
  );
};

export default TicketSection;
