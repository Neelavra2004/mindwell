import React from 'react';
import PlaylistCard from '../Components/PlaylistCard';
import '../Styles/Playlist.css';

  const tracks = [
    {
      title: '5-Minute Guided Meditation',
      duration: '5:12',
      url: 'https://www.youtube.com/watch?v=inpok4MKVLM',
    },
    {
      title: 'Deep Breathing Relaxation',
      duration: '7:03',
      url: 'https://www.youtube.com/watch?v=SEfs5TJZ6Nk',
    },
    {
      title: 'Calm Mind Music',
      duration: '10:20',
      url: 'https://www.youtube.com/watch?v=2OEL4P1Rz04',
    },
    {
      title: 'Stress Relief Meditation',
      duration: '8:45',
      url: 'https://www.youtube.com/watch?v=1vx8iUvfyCY',
    },
    {
      title: 'Body Scan Meditation for Sleep',
      duration: '12:30',
      url: 'https://www.youtube.com/watch?v=QS2yDmWk0vs',
    },
    {
      title: 'Morning Mindfulness Meditation',
      duration: '6:40',
      url: 'https://www.youtube.com/watch?v=6p_yaNFSYao',
    },
  ];

function Playlist() {
  return (
    <div className="meditation-page">
      <h2>Meditation Playlist</h2>
      <div className="playlist-grid">
        {tracks.map((track, index) => (
          <PlaylistCard
            key={index}
            title={track.title}
            duration={track.duration}
            url={track.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
