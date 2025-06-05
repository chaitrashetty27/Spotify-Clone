import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Rahman.css";

const songs = {
  rahman: [
    { id: 1, title: "Agar Tum Sath Ho", albums: "Tamasha", duration: "5:21", image: "/photos/songs/24.jpg",audio:"/music/Agar Tum Saath Ho.mp3" },
    { id: 2, title: "Tera Bina", albums: "Guru", duration: "5:14", image: "/photos/songs/25.jpg" ,audio:"/music/Tere Bina.mp3"},
    { id: 3, title: "Tum Tak ", albums: "Raanjaana", duration: "3:53", image: "/photos/songs/26.jpg",audio:"/music/Tum Tak.mp3" },
    { id: 4, title: "Rait Zara Si", albums: "Atrangi Re", duration: "4:09", image: "/photos/albums/7.jpg",audio:"/music/Rait Zara Si.mp3" },
    { id: 5, title: "Maahi Ve", albums: "Highway", duration: "4:28", image: "/photos/songs/27.jpg",audio:"/music/Maahi Ve.mp3"},
    { id: 6, title: "Enna Sona", albums: "Ok Jaanu", duration: "4:07", image: "/photos/songs/28.jpg",audio:"/music/Enna Sona.mp3"},
    { id: 7, title: "Water Packet", albums: "Raayan", duration: "4:37", image: "/photos/songs/29.jpg",audio:"/music/Water Packet.mp3" },
  ],
};

const Rahman = () => {
  const artistName = " A.R Rahman";
  const artistSongs = songs["rahman"] || [];
  const audioRef = useRef(null);
      const [currentSong, setCurrentSong] = useState(null);
    
      const playSong = (song) => {
        setCurrentSong(song);
        setTimeout(() => {
          audioRef.current.play();
        }, 100); 
      };

  return (
    <div className="rahman-page">
     
           <div className="rahman-header">
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

export default Rahman;
