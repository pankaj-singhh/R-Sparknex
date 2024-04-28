import React from 'react'

const logsAuditsData=[
    {
        id:"1",
        date:"2024-02-25",
        time:"09:30:15",
        action:"Login",
        user:"admin@example",
        Details:"---"

    },
    {
        id:"2",
        date:"2024-02-24",
        time:"15:45:22",
        action:"Post Created",
        user:"user123",
        Details:"New blog Post "

    },
    {
        id:"3",
        date:"2024-02-24",
        time:"14:20:10",
        action:"User Deleted",
        user:"mod456",
        Details:"Deleted user: user789"

    },
    {
        id:"1",
        date:"2024-02-25",
        time:"09:30:15",
        action:"Login",
        user:"admin@example",
        Details:"---"

    },
    {
        id:"2",
        date:"2024-02-24",
        time:"15:45:22",
        action:"Post Created",
        user:"user123",
        Details:"New blog Post "

    },
    {
        id:"3",
        date:"2024-02-24",
        time:"14:20:10",
        action:"User Deleted",
        user:"mod456",
        Details:"Deleted user: user789"

    },

]

const LogsAuditsDatatable = () => {
  return (
      
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right ">
        <thead className="text-md  uppercase  border-b border-gray-400 text-blue-900">
            <tr>
                <th  class="px-6 py-3 border border-gray-400">
                Date
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-400">
                Time
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-400">
                Action
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-400">
                User
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-400">
                Details
                </th>
            </tr>
        </thead>
        <tbody className='text-gray-600 font-semibold'>
            {logsAuditsData.map((items)=>{
                return(
                    < >
                     <tr className=" border-b border-gray-400">
                <th scope="row" class="px-2 py-2   border border-gray-400">
                  {items.date}
                </th>
                <td class="px-5 py-4 border border-gray-400">
                    {items.time}
                </td>
                <td class="px-5 py-4 border border-gray-400">
                  {items.action}
                </td>
                <td class="px-5 py-4 border border-gray-400">
                   {items.user}
                </td>
                <td class="px-5 py-4 border border-gray-400">
                    <a href="#" class="  hover:underline">{items.Details}</a>
                </td>
            </tr>
            
                    </>
                )
            })

            }
           
        </tbody>
    </table>
</div>

    
  )
}

export default LogsAuditsDatatable