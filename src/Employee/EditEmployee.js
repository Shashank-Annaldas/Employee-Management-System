import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function EditEmployee() {
  const navigate = useNavigate();
  const {id}=useParams();
  const [Employee, setEmloyee] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
    joining_date: ""
  });

  const { name, email, phone, designation, department, joining_date } = Employee;

  const onInputChange = (e) => {
    setEmloyee({ ...Employee, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    loadEmployee()
  },[]);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employee/${id}`, Employee);
     navigate("/");
  };

  const loadEmployee=async ()=>{
    const result=await axios.get(`http://localhost:8080/employees/${id}`);
    setEmloyee(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Username</label>
              <input type="text" className="form-control" placeholder="Enter name" name="name" value={name} onChange={onInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={onInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" placeholder="Enter phone number" name="phone" value={phone} onChange={onInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="designation" className="form-label">Designation</label>
              <input type="text" className="form-control" placeholder="Enter designation" name="designation" value={designation} onChange={onInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="department" className="form-label">Department</label>
              <input type="text" className="form-control" placeholder="Enter department" name="department" value={department} onChange={onInputChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="joining_date" className="form-label">Joining Date</label>
              <input type="date" className="form-control" name="joining_date" value={joining_date} onChange={onInputChange} />
            </div>

            <button type="submit" className="btn btn-outline-primary" to={"/"}>Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
