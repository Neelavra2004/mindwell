import React, { useState }  from 'react';
import '../Styles/Appoint.css';

const doctors = [
  {
    name: "Dr. Aisha Khan",
    specialization: "Psychiatrist",
    available: "Mon - Fri, 10AM - 5PM",
    image: "src/assets/doctor3.jpeg",
  },
  {
    name: "Dr. Rajesh Mehta",
    specialization: "Clinical Psychologist",
    available: "Tue - Sat, 12PM - 6PM",
    image: "src/assets/doctor 1.jpeg",
  },
  {
    name: "Dr. Nidhi Sharma",
    specialization: "Therapist",
    available: "Mon, Wed, Fri, 9AM - 1PM",
    image: "src/assets/doctor4.jpeg",
  },
  {
    name: "Dr. Arjun Das",
    specialization: "Counselor",
    available: "Daily, 4PM - 9PM",
    image: "src/assets/doctor2.jpeg",
  },
];

function Appointment() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleBookSession = (doctor) => {
    const existingAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const updatedAppointments = [...existingAppointments, doctor];
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    alert(`Session booked with ${doctor.name}`);
  };

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="appointment-page">
      <h2>Book an Appointment</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Search by name or specialization..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="doctor-grid">
      {filteredDoctors.length > 0 ? (
        filteredDoctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <img src={doc.image} alt={doc.name} />
            <h3>{doc.name}</h3>
            <p><strong>{doc.specialization}</strong></p>
            <p>{doc.available}</p>
            <button onClick={() => handleBookSession(doc)}>Book Session</button>
          </div>
        ))
        ) : (
          <p className="no-results">No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default Appointment;
