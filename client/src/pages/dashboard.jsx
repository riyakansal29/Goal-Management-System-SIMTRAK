
import React, {useState} from 'react';
import './dashboard.css';


const Dashboard = () => {
    const [loggedIn, setLoggedIn] = useState(true);
  
    const handleLogout = () => {
      // Perform logout logic here
      setLoggedIn(false);
    };
  
    if (!loggedIn) {
      // Redirect to login page or show a login form
      return <h1>Please log in</h1>;
    }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
        <a href="/account " className="navbar-item">Account</a>
          <a href="/goals" className="navbar-item">Goals</a>
        </div>
        <div className="navbar-right">
          
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <h1>Welocome to Dashboard</h1>
      {/* Rest of the dashboard content */}
    </div>
  );
};

export default Dashboard;
