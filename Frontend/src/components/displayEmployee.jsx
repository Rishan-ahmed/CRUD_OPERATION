import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditEmployee from './EditEmployee';
function DisplayEmployee() {
    const [Data, setData] = useState([]);
   
    const fatchData = async () => {
            
        const response = await axios.get('http://localhost:9090/employee');
        setData(response.data);
       
        
    }
    useEffect(()=>{
        
        fatchData();
    },[])
    
    const deleteEmployee = async (id) =>{
        console.log(id)
        const Url = 
        `http://localhost:9090/employee/${id}`
        await axios.delete(Url);
        await fatchData();
    }

    
  return (
    <div >
        
        <h1 className='text-center font-bold text-3xl m-10 '>ALL EMPLOYEES</h1>
       <div className='flex flex-col justify-start border m-auto' style={{width:'80%'}}>
        <Link to={'/add'} type="submit" className=" mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Employee</Link>
 



        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
       
    <table style={{width:"100%"}} className="m-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Department
                </th>
               
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
            
        </thead>
        <tbody>
        {Data.map((items) =>(
            <tr key={items.id}className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {items.id}
                </th>
                <td className="px-6 py-4">
                    {items.name}
                </td>
                <td className="px-6 py-4">
                    {items.department}
                </td>
               
                <td className="px-6 py-4">
            <Link to={"/editEmployee"} state={{id: items.id, name: items.name, department: items.department}} className="mr-5 font-medium text-blue-600 dark:text-blue-500 hover:underline">  Edit</Link>
                    <button type='submit' className="font-medium text-blue-600 dark:text-blue-500 hover:underline" value={items.id} onClick={(e)=>deleteEmployee(e.target.value)}>delete</button>
                </td>
            </tr>
             ))}
           
        </tbody>
    </table>
</div>



    </div>
    </div>
  )
}

export default DisplayEmployee