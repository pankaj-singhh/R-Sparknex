import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const EditViewSection = (props) => {
 
  const [selectedOption, setSelectedOption] = useState(null);
  const [priorityOption, setPriorityOption] = useState(null);
  const { requestid, category, date } = useParams();
  const navigate=useNavigate();

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const handlePriorityOptionChange = (value) => {
    setPriorityOption(value);
  };
  const backTicketSection=()=>{
   navigate("/DashboardLayout/TicketSection");
    // props. SetShowTicketSection(true);
    // props.setDataFromChild(false);
  }
  return (
    <>
      <div className=" mt-2 border-2 border-gray-500 bg-gray-200 ml-2 lg:ml-10 rounded-xl pr-2 pb-1 pt-1 pl-2 w-[95vw] lg:w-[78vw]">
        <div className="flex ">
          <button className="text-4xl text-center font-bold h-[2.5rem] w-[2.5rem] border-1 rounded-full bg-white text-blue-900 mt-2" onClick={backTicketSection}>
            <IoIosArrowRoundBack />
          </button>
          <div className="flex flec-col lg:flex-row mt-2 font-bold text-blue-900 bg-white rounded-xl pb-2 pl-2 pt-2 pr-5 w-[70vw] ml-4">
            <p>{requestid}-</p>
            <p>{category}</p>
            <p className="  ml-auto">{date}</p>
          </div>
        </div>

        <div className="flex mt-5 font-bold text-blue-900 bg-white rounded-xl pb-2 pl-3 pt-3 pr-5 w-[70vw] ml-[3.5rem] ">
          <p>Category:</p>
          <p className="ml-2 font-thin"> Software Installation</p>
        </div>

        <div className=" mt-3  bg-white rounded-xl pb-3 pl-3 pt-3 pr-5 w-[70vw] ml-[3.5rem] ">
          <p className="font-bold text-blue-900">Description:</p>
          <p className="text-gray-600 mt-5">
            The technical support request pertains to a customer encountering
            errors during the installation process of our software product. The
            customer has provided detailed information about the errors
            encountered and the steps taken prior to encountering them. The
            request includes screenshots of error messages for reference.
          </p>
        </div>

        {/**testarea */}
        <div className="pb-1 mt-5 flex flex-col lg:flex-row ml-16">
          <div className="">
            <textarea
              name="Comment"
              id=""
              placeholder="Add Comment"
              className=" w-[16rem] md:w-[40rem] h-[12.5rem] rounded-xl pl-2 pt-2 "
            ></textarea>
          </div>
          <div>
            <div className="flex  lg:ml-10">
              <div className="w-[10rem] h-[8rem] bg-white rounded-2xl pt-3 pl-5">
                <p className="font-bold text-blue-900">Status</p>
                <p>
                  <span>Open</span>
                  <span className=" ml-[15vw] lg:ml-20">
                    <input
                      type="radio"
                      name="status"
                      value="open"
                      checked={selectedOption === "open"}
                      onChange={() => handleOptionChange("open")}
                    />
                  </span>
                </p>
                <p>
                  <span>In Progress</span>
                  <span className="ml-[5vw] lg:ml-10">
                    <input
                      type="radio"
                      name="status"
                      value="inProgress"
                      checked={selectedOption === "inProgress"}
                      onChange={() => handleOptionChange("inProgress")}
                    />
                  </span>
                </p>
                <p>
                  <span>Close</span>
                  <span className="ml-[16vw] lg:ml-20">
                    <input
                      type="radio"
                      name="status"
                      value="close"
                      checked={selectedOption === "close"}
                      onChange={() => handleOptionChange("close")}
                    />
                  </span>
                </p>
              </div>
              <div className="w-[10rem] h-[8rem] bg-white rounded-2xl pt-3 pl-5 ml-1 lg:ml-10">
                <p className="font-bold text-blue-900">Priority</p>
                <p>
                  <span>High</span>
                  <span className="ml-[16vw] md:ml-16">
                    <input
                      type="radio"
                      name="priority"
                      value="high"
                      checked={priorityOption === "high"}
                      onChange={() => handlePriorityOptionChange("high")}
                    />
                  </span>
                </p>
                <p>
                  <span>Meduim</span>
                  <span className=" ml-[10vw] md:ml-10">
                    <input
                      type="radio"
                      name="priority"
                      value="medium"
                      checked={priorityOption === "medium"}
                      onChange={() => handlePriorityOptionChange("medium")}
                    />
                  </span>
                </p>
                <p>
                  <span>Low</span>
                  <span className="ml-[18vw] ml- md:ml-[4.5rem]">
                    <input
                      type="radio"
                      name="priority"
                      value="low"
                      checked={priorityOption === "low"}
                      onChange={() => handlePriorityOptionChange("low")}
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="pt-1 pr-1 pb-1 pl-2 ml-10 bg-white font-bold text-blue-900 rounded-xl mt-2">
              <p className="flex">
                <span className="text-sm">Select Support Technisian</span>
                <span className="mt-2 ml-auto">
                 <button> <FiChevronDown /></button>
                </span>
              </p>
            </div>
            <button className="font-bold text-white bg-blue-900 mt-2 w-[18rem] lg:w-[25rem] lg:ml-12 pt-1 pb-1 rounded-3xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditViewSection;
