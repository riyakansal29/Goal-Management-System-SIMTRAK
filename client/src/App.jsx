import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard.jsx';
import './pages/dashboard.css';
import './pages/loginpage.css';
import Accountpage from './pages/accountpage.jsx';
import Goalspage from './pages/goalspage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import { Link } from 'react-router-dom';
const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (storedLoggedIn === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
  };
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            isLoggedIn ? (<div>
              <nav className="navbar">
        <div className="navbar-left">

        <Link to="/" className="navbar-item">Account</Link>
          <Link to="/goals" className="navbar-item">Goals</Link>
        </div>
        
        <div className="navbar-right">
          
          <button className="logout-button" onClick={handleLogoutClick} >Logout</button>
        </div>
      </nav>
                    <Routes>
                    <Route path = "/" element = {<Accountpage/>} />
                    <Route path = "/goals" element = {<Goalspage/>} />
                    </Routes>
                    </div>
            ) : (
              <LoginPage handleLogin={handleLogin} />
            )
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;