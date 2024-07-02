import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
 
function AddEmployee() {

    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
   
    function Data (e){
       e.preventDefault();
       const employee = {name, department};
       console.log(employee)
       
       if(name !== "" && department !== ''){
        const respons = axios.post("http://localhost:9090/employee",employee);
        alert("Saved Succesfully.....")
        setName('');
        setDepartment('');
       }
       else{
        alert("please fill the items")
       }
       
       
       }
       
    
    
  return (

<div className=''>
    <h1 className='text-center text-bold text-3xl mt-10'>ADD NEW EMPLOYEES</h1>
<form className="max-w-sm mx-auto border border-black mt-16 p-10">

  <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Name</label>
    <input value={name} onChange={(e)=> setName(e.target.value)} type="text" id="name" className="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
  <div className="mb-5">
    <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">Enter Department</label>
    <input value={department} onChange={(e)=> setDepartment(e.target.value)} type="text" id="department" className="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
  </div>
 
  <button onClick={Data} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
  <Link to={"/"}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-5" style={{width:"300%"}}> View All Emplyees</Link>
</form>
</div>
  )
}


export default AddEmployee;
