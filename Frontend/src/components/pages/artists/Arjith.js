import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Arjith.css";

const songs = {
  arjith: [
    { id: 1, title: "Tera Chehra", albums: "Sanam Teri Kasam", duration: "5:21", image: "/photos/songs/5.jpeg",audio:"/music/Tera Chehra.mp3" },
    { id: 2, title: "Tuje Kitne Chahane Lage", albums: "Kabir Singh", duration: "5:14", image: "/photos/albums/9.jpeg",audio:"/music/Tujhe Kitna Chahne Lage.mp3" },
    { id: 3, title: "Apna Bana Le", albums: "Bediya", duration: "3:53", image: "/photos/songs/21.jpg" ,audio:"/music/Apna Bana Le Piya.mp3"},
    { id: 4, title: "Satranga", albums: "Animal", duration: "4:09", image: "/photos/songs/22.jpg" ,audio:"/music/Satranga.mp3"},
    { id: 5, title: "Tum Hi Ho", albums: "Aashiqi 2", duration: "4:28", image: "/photos/albums/11.jpeg" ,audio:"/music/Tum Hi Ho.mp3"},
    { id: 6, title: "Agar Tun Sath Ho", albums: "Tamasha", duration: "4:07", image: "/photos/songs/24.jpg",audio:"/music/Agar Tum Saath Ho.mp3" },
    { id: 7, title: "Humdard", albums: "Ek Villan", duration: "4:37", image: "/photos/songs/23.jpg",audio:"/music/Humdard.mp3"}
  ],
};

const Arjith = () => {
  const artistName = "Arjith Singh";
  const artistSongs = songs["arjith"] || [];
  const audioRef = useRef(null);
    const [currentSong, setCurrentSong] = useState(null);
  
    const playSong = (song) => {
      setCurrentSong(song);
      setTimeout(() => {
        audioRef.current.play();
      }, 100); 
    };

  return (
    <div className="arjith-page">
     
           <div className="arjith-header">
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

export default Arjith;
