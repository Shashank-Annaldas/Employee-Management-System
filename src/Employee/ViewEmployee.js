import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewEmployee() {
  const [Employee, setEmloyee] = useState({
      name: "",
      email: "",
      phone: "",
      designation: "",
      department: "",
      joining_date: ""
    });
    const {id}=useParams();

    useEffect(()=>{
      View();
    },[])
    const View=async()=>{
     const result= await axios.get(`http://localhost:8080/employees/${id}`);
      setEmloyee(result.data);
    }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Employee details</h2>

            <div className='card'>
              <div className='card-header'>
                Details of Employee  id :{Employee.id}
                <ul className='list-group list-group-flush '>
                  <li className='list-group-item'>
                    <b>Name</b>
                    {Employee.name}
                  </li>
                  <li className='list-group-item'>
                    <b>email</b>
                    {Employee.email}
                  </li>
                  <li className='list-group-item'>
                    <b>phone</b>
                    {Employee.phone}
                  </li>
                  <li className='list-group-item'>
                    <b>designation</b>
                    {Employee.designation}
                  </li>
                  <li className='list-group-item'>
                    <b>department</b>
                    {Employee.department}
                  </li>
                  <li className='list-group-item'>
                    <b>joining_date</b>
                    {Employee.joining_date}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
        </div>
      </div>     
    </div>
  )
}

export default ViewEmployee
