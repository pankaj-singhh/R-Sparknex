import React from 'react'
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const UploadBlogs = () => {
  const navigate=useNavigate()
  const droftBlogHandler=()=>{
  
    navigate("/DashboardLayout/DraftBlog")
  }
  const publishedBlogHandler=()=>{
  
    navigate("/DashboardLayout/PublishedBlog")
  }

  const CreateNewBlogHandler=()=>{
 navigate("/DashboardLayout/CreateNewPostBlog")
  }

  
  return (
    <div className='h-[32rem] border '>
       <div className="overflow-x-scroll overflow-y-scroll  pb-5 border pr-2 pt-2 pl-2 lg:ml-10 rounded-xl bg-gray-100 ml-2">
        <button className='flex font-bold text-blue-900 pb-1 pt-1 pl-3 pr-3 rounded-xl bg-white w-[1200px]' onClick={droftBlogHandler}>
          <p className='text-lg'>Save Draft</p>
          <p className='ml-auto text-2xl'><FiChevronRight /></p>
        </button>


        <button className='flex font-bold text-blue-900 pb-1 pt-1 pl-3 pr-3 rounded-xl bg-white mt-5 w-[1200px]' onClick={publishedBlogHandler}>
          <p className='text-lg'>Published</p>
          <p className='ml-auto text-2xl'><FiChevronRight /></p>
        </button>
       </div>
       <button className='pl-6 pr-6 pt-1 pb-1 bg-blue-900 text-3xl text-white rounded-full w-[350px] hover:bg-blue-800 mt-[20rem] lg:ml-[55rem]'onClick={CreateNewBlogHandler}>Creat New Post +</button>
    </div>
  )
}

export default UploadBlogs