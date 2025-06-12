import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  
  const[Employee, setEmpolyee]=useState([])
  
  useEffect(()=>{
    loadEmployee();
  },[])

  const loadEmployee=async()=>{
    const res=await axios.get("http://localhost:8080/employees")
    setEmpolyee(res.data);
  }

  const deleteEmployee=async(id)=>{
    await axios.delete(`http://localhost:8080/employee/${id}`);
    loadEmployee();
  }
  return (
    <div className='container'>
      <div className='py-4'>
        <table className="table table-bordered text-center shadow">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope='col'>Database Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">phone</th>
              <th scope="col">designation</th>
              <th scope="col">department</th>
              <th scope="col">joining_date</th>
              <th scope="col">   Actions</th>
            </tr>
          </thead>
          <tbody>
            { Employee.map((emp, index)=>(
              <tr key={emp.id}>
                <th scope="row"  >{index+1}</th>
                <th>{emp.id}</th>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.designation}</td>
                <td>{emp.department}</td>
                <td>{emp.joining_date}</td>
                <td>
                  <Link className='btn btn-primary mx-2' to={`/view/${emp.id}`}>View</Link>
                  <Link className='btn btn-outline-primary mx-2' to={`/employees/${emp.id}`}>Edit</Link>
                  <button className='btn btn-danger mx-2' onClick={()=>{deleteEmployee(emp.id)}}>Delete</button>
                </td>
              </tr>
             ))
            }
            
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default Home
