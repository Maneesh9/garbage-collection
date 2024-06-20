// src/components/AddSchedule.js
import React, { useState } from 'react';
import './AddSchedule.css';  // Import CSS specific to the AddSchedule page

const AddSchedule = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Schedule:', formData);
    // Handle the form submission logic here
  };

  return (
    <div className="add-schedule-page">
      <h1>Schedule a New Pickup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type of Pickup</label>
          <select id="type" name="type" value={formData.type} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="regular">Regular</option>
            <option value="bulk">Bulk</option>
            <option value="recycling">Recycling</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Add Schedule</button>
      </form>
    </div>
  );
};

export default AddSchedule;
