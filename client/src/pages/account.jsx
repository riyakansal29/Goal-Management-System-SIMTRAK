import React, { useState } from 'react';
import './account.css';

const Account = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    email: '',
    idNo: '',
    department: '',
    joiningDate: '',
    remarks: '',
    reportingOfficer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic, e.g., send data to a server or store in a state
  };

  return (
    <div>
      <nav>
       
        <div className="nav-left">
          <a href="/dashboard" className="nav-item">Dashboard</a>
        </div>
        <div className="nav-right">
          <button>Logout</button>
        </div>
      </nav>

      <form onSubmit={handleSubmit} className='box'>
        <h3>Set Up Your Account</h3>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Mobile No.:
          <input
            type="number"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
            
          />
        </label>
        <br />
        <label>
          Email ID:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          ID No.:
          <input
            type="text"
            name="idNo"
            value={formData.idNo}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Joining Date:
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Reporting Officer:
          <input
            type="text"
            name="reportingOfficer"
            value={formData.reportingOfficer}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Remarks:
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Account;
