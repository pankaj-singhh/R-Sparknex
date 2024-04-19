import React from 'react'
import { useNavigate } from 'react-router-dom'
const userData=[
{
  id:1,
  userId:"001",
  username:"Jhon",
  email:"jhon123@GiMailShirt.com",
  role:"user",
  status:"Active"
},
{
  id:2,
  userId:"002",
  username:"Jack",
  email:"jack123@GiMailShirt.com",
  role:"admin",
  status:"Active"
},
{
  id:2,
  userId:"003",
  username:"Brain",
  email:"Brain123@GiMailShirt.com",
  role:"user",
  status:"Active"
}
]

const UserManagement = () => {

  const navigate=useNavigate();

  const EditViewHandler=(username,email)=>{
    const url = `/dashboardlayout/editviewuser/${encodeURIComponent(username)}/${encodeURIComponent(email)}`;
    navigate(url);
  }


  return (
    <div className="overflow-x-scroll overflow-y-scroll h-[32rem] pb-5 border pr-2 pt-2 pl-2 lg:ml-10 rounded-xl bg-gray-100 ml-2">
    <div className="flex font-bold text-blue-900 pb-1 pt-1 rounded-xl bg-white w-[1200px]">
      <div className="mx-2">
        <input className="w-4 h-4" type="checkbox" />
      </div>
      <div className="mx-2 ml-10 ">
        <p>User ID</p>
      </div>
      <div className="mx-2 ml-10">
        <p>UserName</p>
      </div>
      <div className="mx-2 ml-40">
        <p>Email</p>
      </div>
      <div className="mx-2 ml-52">
        <p>Role</p>
      </div>
      <div className="mx-2 ml-20">
        <p>Status</p>
      </div>
      <div className="mx-2 ml-32">
        <p>Action</p>
      </div>
    </div>

    <div className="">

      {/*maping*/ }
      {userData.map((items) => {
        
        return (
          <>
            <div key={items.id} className="flex  flex-row mt-3  pb-1 pt-1 rounded-xl bg-white w-[1200px] bottom-2">
              <div className="mx-2 text-gray-300">
                <input className="w-4 h-4" type="checkbox" />
              </div>
              <div className="mx-2 ml-10 w-20 font-bold text-gray-500">
                <p>{items.userId}</p>
              </div>
              <div className="mx-2 ml-5 w-52 font-bold text-gray-500">
                <p>{items.username}</p>
              </div>
              <div className="mx-2  w-32 text-md  text-gray-500">
                <p>{items.email}</p>
              </div>
              <div className="ml-32  w-20 text-gray-500">
                
                <span>{items.role}</span>
              </div>
              <div className="mx-2 ml-12 bg-gray-200 rounded-xl w-20 text-center pr-2 pl-2">
                <p>{items.status}</p>
              </div>

              <div className="mx-2 ml-24">
                <button
                  className="w-20 rounded-xl bg-blue-900 text-white"
                  onClick={()=>EditViewHandler(items.username,items.email)}
                >
                  Edit/View
                </button>
                <button className='w-20 border-2 border-blue-900 rounded-xl ml-2' onClick={()=>alert("Sorry ,This is not working currently")}>Delete</button>
              </div>
            </div>
          </>
        );
      })}

     
    </div>
  </div>
  )
}

export default UserManagement