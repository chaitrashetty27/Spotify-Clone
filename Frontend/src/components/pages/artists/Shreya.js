import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Shreya.css";

const songs = {
  shreya: [
    { id: 1, title: "Tum Kya Mile", albums: "Raja or Rani Ki Prem Kahani", duration: "4:37", image: "/photos/songs/20.jpeg",audio:"/music/Tum Kya Mile.mp3" },
    { id: 2, title: "Jeene Laga Hoon", albums: " Ramaiya Vastavaiya ", duration: "3:56", image: "/photos/songs/30.jpg",audio:"/music/Jeene Laga Hoon.mp3" },
    { id: 3, title: "Saibo", albums: "Shor in the City", duration: "3:15", image: "/photos/songs/9.jpeg",audio:"/music/Saibo.mp3" },
    { id: 4, title: "O Rangrez", albums: "Bhaag Milka Bhaag", duration: "6:25", image: "/photos/songs/31.jpg" ,audio:"/music/O Rangrez.mp3"},
    { id: 5, title: "Pal", albums: "Jalebi", duration: "4:07", image: "/photos/songs/32.jpg" ,audio:"/music/Pal.mp3"},
    { id: 6, title: "Soseki", albums: "Pushpa 2", duration: "4:20", image: "/photos/songs/33.jpg" ,audio:"/music/SOOSEKI.mp3"},
    { id: 7, title: "Samjawan", albums: "Humpty Sharma Ki Dulhania", duration: "4:29", image: "/photos/songs/34.jpg",audio:"/music/Samjhawan.mp3" },
  ],
};

const Shreya = () => {
  const artistName = " Shreya Ghoshal";
  const artistSongs = songs["shreya"] || [];
  const audioRef = useRef(null);
        const [currentSong, setCurrentSong] = useState(null);
      
        const playSong = (song) => {
          setCurrentSong(song);
          setTimeout(() => {
            audioRef.current.play();
          }, 100); 
        };
  

  return (
    <div className="shreya-page">
     
           <div className="shreya-header">
        <FontAwesomeIcon icon={faPlay} className="play-icon" />
        <h2>{artistName}</h2>
      </div>

      
      <ul className="song-list">
        {artistSongs.map((song, index) => (
          <li key={song.id} className="song-item"
          onClick={() => playSong(song)}
            style={{ cursor: "pointer" }}
          >
            <span className="song-rank">{index + 1}</span>
            <img src={song.image} alt={song.title} className="song-image" />
            <span className="song-tit">{song.title}</span>
            <span className="song-streams">{song.albums}</span>
            <span className="song-duration">{song.duration}</span>
          </li>
        ))}
      </ul>
      {currentSong && (
        <div className="audio-player">
          <p>Now Playing: {currentSong.title}</p>
          <audio ref={audioRef} controls src={currentSong.audio} />
        </div>
      )}
    </div>
  );
};

export default Shreya;
