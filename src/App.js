import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

import { NavLink, Route, Routes } from "react-router-dom";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AdminLogin from "./login-signuppage/AdminLogin";
import AdminSignUp from "./login-signuppage/AdminSignUp";
import DashboardLayout from "./adminpage/DashboardLayout";
import UserManagement from "./AdminMenubarPage/UserManagement";
import DashboardSection from "./adminpage/DashboardSection";
import TicketSection from "./adminpage/TicketSection";
import EditViewSection from "./adminpage/EditViewSection";
import EditViewUser from "./AdminMenubarPage/EditViewUser";
import UploadBlogs from "./AdminMenubarPage/UploadBlogs";
import UserFeedbackRecieved from "./AdminMenubarPage/UserFeedbackRecieved";
import DraftBlog from "./uploadBlogComponent/DraftBlog";
import PublishedBlog from "./uploadBlogComponent/PublishedBlog";
import CreateNewPostBlog from "./uploadBlogComponent/CreateNewPostBlog";
import EditDraftBlog from "./uploadBlogComponent/EditDraftBlog";
import BlogPublishedView from "./uploadBlogComponent/BlogPublishedView";
import SettingsMainPage from "./AdminSettingPage/SettingsMainPage";
import GenralSetting from "./AdminSettingPage/GenralSetting";
import SecuritySetting from "./AdminSettingPage/SecuritySetting";
import AdvancedSetting from "./AdminSettingPage/AdvancedSetting";
import SystemSetting from "./AdminSettingPage/SystemSetting";




function App() {
  return (
    <div className="overflow-x-hidden">
      {/**Routing */}
      <Routes>
        <Route path="/" element={<Home />} />


        {/* <Route path="/features" element={<Features />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} /> */}

        
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/adminSignup" element={<AdminSignUp />}></Route>
        <Route path="/dashboardlayout" element={<DashboardLayout />}>
         {/* <Route path="usermanagement" element={<UserManagement/>}></Route> */}
         <Route index element={<DashboardSection />} />
         <Route path="dashboardsection" element={<DashboardSection/>}></Route>
         <Route path="ticketsection" element={<TicketSection/>}></Route>
         <Route path="editviewsection/:requestid/:category/:date" element={<EditViewSection/>}></Route>
         {/**nasted routing for admin menubar/page */}
         <Route path="usermanagement" element={<UserManagement/>}></Route> 
         <Route path="editviewuser/:username/:email" element={<EditViewUser/>}></Route>   
         <Route path="uploadblogs" element={<UploadBlogs/>}></Route>  
         <Route path="userfeedbackrecieved" element={<UserFeedbackRecieved/>}></Route>  


         {/**routing for blog draft and publish and edit draft part */}
         <Route path="draftblog" element={<DraftBlog/>}></Route>
         <Route path="publishedblog" element={<PublishedBlog/>}></Route>
         <Route path="createnewpostblog" element={<CreateNewPostBlog/>} ></Route>
         <Route path="editdraftblog" element={<EditDraftBlog/>}></Route>
         <Route path="blogpublishedview" element={<BlogPublishedView/>}></Route>
        </Route>

        {/* routing for the movings settings page/section */}
        <Route path="settingsmainpage" element={<SettingsMainPage/>}>

          {/* nasted routing */}
          <Route index element={<GenralSetting/>}></Route>
          <Route path="genralsetting" element={<GenralSetting/>}></Route>
          <Route path="securitysetting" element={<SecuritySetting/>}></Route>
          <Route path="systemsetting" element={<SystemSetting/>}/>
          <Route path="advancedsetting" element={<AdvancedSetting/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
