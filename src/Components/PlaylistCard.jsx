import React from 'react';
import '../Styles/PlaylistCard.css';

function PlaylistCard({ title, duration, url }) {
  return (
    <div className="playlist-card">
      <div>
        <h4>{title}</h4>
        <p>Duration: {duration}</p>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="play-btn">Play ▶</button>
      </a>
    </div>
  );
}

export default PlaylistCard;
