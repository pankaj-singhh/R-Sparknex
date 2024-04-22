import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import PublishedBlog from "../assets/publishedblogimg.svg";

const BlogPublishedView = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Buzzworthy Zone");
  const [blogStatus, setBlogStatus] = useState("Published");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  const handleBlogStatusChange = (value) => {
    setBlogStatus(value);
  };
  const backPublishedSection = () => {
    navigate("/DashboardLayout/PublishedBlog")
  };
 
  return (
    <div className=" mt-2 border-2 border-gray-500 bg-gray-200 ml-2 lg:ml-10 rounded-xl pr-2 pb-1 pt-1 pl-2 w-[95vw] lg:w-[78vw]">
      <div className="flex ">
        <button
          className="text-4xl text-center font-bold h-[2.5rem] w-[2.5rem] border-1 rounded-full bg-white text-blue-900 mt-2"
          onClick={backPublishedSection}
        >
          <IoIosArrowRoundBack />
        </button>
        <div className="flex flec-col lg:flex-row mt-2   bg-white rounded-xl pb-2 pl-2 pt-2 pr-5 w-[70vw] ml-4">
          <div className=" bg-white rounded-2xl pt-1 pl-5">
            <p className="font-bold text-blue-900">Category</p>
            <div
              className="flex md:flex-row
          flex-col gap-[1rem]  md:gap-[10rem] justify-around text-gray-800 mt-2 text-lg "
            >
              <div>
                <span className=" ">
                  <input
                    type="radio"
                    name="Category"
                    value="Buzzworthy Zone"
                    checked={selectedOption === "Buzzworthy Zone"}
                    onChange={() => handleOptionChange("Buzzworthy Zone")}
                  />
                </span>
                <span className="ml-2">Buzzworthy Zone</span>
              </div>
              <div>
                <span className=" ">
                  <input
                    type="radio"
                    name="Category"
                    value="Talk of the Town"
                    checked={selectedOption === "Talk of the Town"}
                    onChange={() => handleOptionChange("Talk of the Town")}
                  />
                </span>
                <span className="ml-2">Talk of the Town</span>
              </div>
              <div>
                <span className="">
                  <input
                    type="radio"
                    name="Category"
                    value="Sparky's Wisdom"
                    checked={selectedOption === "Sparky's Wisdom"}
                    onChange={() => handleOptionChange("Sparky's Wisdom")}
                  />
                </span>
                <span className="ml-2">Sparky's Wisdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-2xl pt-3 pb-3 pl-5 mt-3 w-[70vw] ml-[3.5rem]">
        <p className="text-blue-900 text-lg">
          The Impact of AI on Modern Healthcare
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div>
          <p className="w-[18rem] md:w-[28rem] lg:w-[40rem] h-[15.5rem] ml-[3.5rem] rounded-2xl pl-3 pt-2 pb-2 pr-2 mt-5 border-2 bg-white text-sm overflow-y-scroll">
            In recent years, the integration of artificial intelligence (AI) in
            the healthcare industry has revolutionized the way medical
            professionals diagnose and treat various conditions. AI-powered
            technologies such as machine learning algorithms and natural
            language processing have enabled healthcare providers to analyze
            vast amounts of medical data, streamline administrative tasks, and
            improve patient outcomes. One of the most significant impacts of AI
            in healthcare is its ability to enhance diagnostic accuracy. Machine
            learning algorithms can analyze medical imaging scans, such as
            X-rays and MRIs, to detect abnormalities and assist radiologists in
            making more accurate diagnoses. Additionally, AI-driven diagnostic
            tools can analyze patient symptoms and medical history to recommend
            personalized treatment plans, leading to more effective and
            efficient healthcare delivery. Furthermore, AI has proven to be
            invaluable in predictive analytics, allowing healthcare
            organizations to anticipate disease outbreaks, identify high-risk
            patients, and allocate resources more effectively. By analyzing data
            from electronic health records, wearable devices, and other sources,
            AI algorithms can identify patterns and trends that human analysts
            may overlook, enabling proactive interventions and preventive care
            strategies. Despite its transformative potential, the widespread
            adoption of AI in healthcare also raises ethical and regulatory
            concerns. Issues such as patient privacy, algorithm bias, and data
            security must be carefully addressed to ensure that AI technologies
            are deployed responsibly and ethically. In conclusion, the
            integration of AI in modern healthcare holds immense promise for
            improving patient care, enhancing diagnostic accuracy, and driving
            innovation in medical research. However, it is essential for
            healthcare stakeholders to navigate the complex ethical and
            regulatory landscape to realize the full potential of AI while
            safeguarding patient privacy and safety.
          </p>

          <p className="text-lg text-gray-600  ml-[3.5rem] rounded-2xl pl-3 pt-2 pb-2 pr-3 mt-3 bg-white ">
            #Artificial Intelligence, #Machine Learning, #Predictive Analytics
          </p>
        </div>
        <div>
          <div className=" flex text-lg text-gray-600 w-[75vw] md:w-[25rem] ml-[3.5rem] md:ml-[2.8rem] rounded-2xl pl-3 pt-2 pb-2 pr-3 mt-5 bg-white">
            <p>February 23, 2024</p>
            <p className="ml-auto font-bold text-blue-900 text-2xl">
              <LuCalendarClock />
            </p>
          </div>
          <div className="w-[18rem] md:w-[25rem] h-[8rem] bg-white rounded-2xl pt-3 pl-5 ml-12 lg:ml-10 mt-5">
            <p className="font-bold text-blue-900">Status</p>
            <p>
              <span>Draft</span>
              <span className="">
                <input
                  className="ml-24 lg:ml-24"
                  type="radio"
                  name="Status"
                  value="Draft"
                  checked={blogStatus === "Draft"}
                  onChange={() => handleBlogStatusChange("Draft")}
                />
              </span>
            </p>
            <p>
              <span>Published</span>
              <span className="">
                <input
                  className="ml-[3.9rem]"
                  type="radio"
                  name="Status"
                  value="Published"
                  checked={blogStatus === "Published"}
                  onChange={() => handleBlogStatusChange("Published")}
                />
              </span>
            </p>
          </div>
          <div className="flex flex-row ml-10 md:ml-0">
            <p className="font-bold text-gray-600 mt-4 w-[18rem] lg:w-[14rem] lg:ml-12 pt-1 pb-1 rounded-3xl text-xl ">
              Exploring Insights, Igniting Conversations
            </p>
           <img src={PublishedBlog} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPublishedView;
