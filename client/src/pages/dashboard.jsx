
import React, {useState} from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Goals from './GoalParameters'
import Account from './account.jsx'
const Dashboard = ({handleLogout}) => {
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">

        <Link to="/" className="navbar-item">Account</Link>
          <Link to="/goals" className="navbar-item">Goals</Link>
        </div>
        
        <div className="navbar-right">
          
          <button className="logout-button" onClick={handleLogoutClick} >Logout</button>
        </div>
      </nav>
<BrowserRouter>
      <Routes>
                     <Route path="/" element={<Account/>}/>
                    
                    <Route path="/goals" element={<Goals/>}/>
                    </Routes>
                    </BrowserRouter>
                
    </div>
  );
};

export default Dashboard;
