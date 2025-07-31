
import React, { useState} from 'react';
import { FaAlignJustify, FaPlay, FaUser, FaCalendarCheck, FaInfoCircle, FaQuestionCircle, FaExclamationTriangle } from 'react-icons/fa';
import '../Styles/Navbar.css'


function Navbar() {

  
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => setOpen(!open);

    const handleSOS = () => {
      alert('🚨 SOS Alert Sent! Help is on the way.');
      
    };

  return (
    <nav className='header' role="navigation" aria-label="Main Navigation">
            <div className='logo'>
                <span>MindWell</span>
            </div>

            <div className="navbar-actions">
        <button className="sos-button" onClick={handleSOS} aria-label="SOS Alert">
          <FaExclamationTriangle className="sos-icon" />
          SOS
        </button>
        

            <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-button">
         <FaAlignJustify />
      </button>

      {open && (
        <div className="dropdown-list">
          <a href="#"><FaUser className="icon" /> My Profile</a>
          <a href="/appointments"><FaCalendarCheck className="icon" /> Sessions</a>
          <a href="/meditation"><FaPlay className="icon" /> Playlist</a>
          <a href="#"><FaInfoCircle className="icon" /> About Us</a>
          <a href="#"><FaQuestionCircle className="icon" /> Help & Support</a>
        </div>
      )}
      </div>
    </div>
        </nav>
        
  );
}

export default Navbar;
