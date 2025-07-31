import React from 'react';
import '../Styles/MoodCard.css';
import { FaSmile, FaFrown, FaAngry, FaSpa, FaGrinBeamSweat } from 'react-icons/fa';

function MoodCard() {
  const moods = [
    { label: 'Happy', icon: <FaSmile />, color: '#facc15' },
    { label: 'Sad', icon: <FaFrown />, color: '#60a5fa' },
    { label: 'Angry', icon: <FaAngry />, color: '#f87171' },
    { label: 'Calm', icon: <FaSpa />, color: '#6ee7b7' },
    { label: 'Anxious', icon: <FaGrinBeamSweat />, color: '#a78bfa' },
  ];

  return (
    <div className="mood-card">
      <h3>Select Your Mood</h3>
      <div className="mood-buttons">
        {moods.map((mood, index) => (
          <button
            key={index}
            className="mood-button"
            style={{ backgroundColor: mood.color }}
            onClick={() => alert(`You selected: ${mood.label}`)}
          >
            {mood.icon}
            <span>{mood.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodCard;
