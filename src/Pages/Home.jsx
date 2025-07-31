
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import MoodCard from '../Components/Mood';
import Footer from '../Components/footer'
import WeeklyTask from '../Components/Task';


function Home(){

  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedAppointments = appointments.filter((_, index) => index !== indexToDelete);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const handleSubscribeClick = () => {
    navigate('/login');
  }

  return (
    <>
    <Navbar />
    <div className="home-container">
    <h2> Hello,</h2>
    <h3> How are you feeling today 🌞 </h3>
    <MoodCard />
    
    <WeeklyTask />
      
      <h3>Upcoming Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments booked yet.</p>
        ) : (
          <div className="appointments-container">
            {appointments.map((app, index) => (
              <div
                key={index}
                className="appointment-card"
              >
                <img
                  src={app.image}
                  alt={app.name}
                />
                <h4>{app.name}</h4>
                <p>{app.specialization}</p>
                <p>{app.available}</p>
                <button onClick={() => handleDelete(index)} className="delete-btn">
                  Cancel
                </button>

              </div>
            ))}
          </div>
          
        )}
       
        
        <div className="premium-box">
          <h3>Unlock Premium Features</h3>
          <p>
            Access exclusive meditation sessions, 1-on-1 therapist chat, and personalized insights.
          </p>
          <button className="subscribe-btn" onClick={handleSubscribeClick}>
            Subscribe Now
          </button>
        </div>
        </div>
        <Footer />

      </>

    
  );
}

export default Home;
