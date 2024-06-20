// src/components/Home.js
import React from 'react';
import './Home.css'; // Import specific CSS for Home page

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Garbage-Collection: Your Solution for Waste Management</h1>
          <p>At Garbage-Collection, we specialize in the efficient and timely collection of various types of garbage. Our goal is to provide a convenient and reliable service for citizen, ensuring a clean and sustainable environment for all.</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="/path/to/your/service1.jpg" alt="Regular Pickup" />
            <h3>Regular Pickup</h3>
            <p>Scheduled weekly garbage collection services.</p>
          </div>
          <div className="service-card">
            <img src="/path/to/your/service2.jpg" alt="Bulk Pickup" />
            <h3>Bulk Pickup</h3>
            <p>Special arrangements for large item pickups.</p>
          </div>
          <div className="service-card">
            <img src="/path/to/your/service3.jpg" alt="Recycling" />
            <h3>Recycling</h3>
            <p>Eco-friendly recycling solutions for your waste.</p>
          </div>
        </div>
      </section>
      <section className="schedule">
        <h2>Schedule Your Pickup</h2>
        <p>Easily schedule a pickup or view your existing schedule.</p>
        <div className="schedule-buttons">
          <a href="/schedule" className="schedule-button">View Schedule</a>
          <a href="/addschedule" className="schedule-button">Add Schedule</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
