// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Schedule from './components/Schedule';
import AddSchedule from './components/AddSchedule';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/addschedule">Add Schedule</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/addschedule" element={<AddSchedule />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
