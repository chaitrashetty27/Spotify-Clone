import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Pritham.css";


const songs = {
  pritam: [
    { id: 1, title: "Tum Se Hi", albums: "Jab Me Met", duration: "5:21", image: "/photos/songs/7.jpeg",audio:"/music/Tum Se Hi.mp3" },
    { id: 2, title: "Ye Tune Kya Kiya", albums: "once upon a time in bombay ", duration: "5:14", image: "/photos/songs/15.jpeg",audio:"/music/Ye Tune Kya Kiya.mp3" },
    { id: 3, title: "O Maahi", albums: "Dunki", duration: "3:53", image: "/photos/songs/16.jpeg" ,audio:"/music/O Maahi.mp3"},
    { id: 4, title: "Subhanallah", albums: "Ye Jawani Hai Deewani", duration: "4:09", image: "/photos/songs/17.jpeg",audio:"/music/Subhanallah.mp3" },
    { id: 5, title: "Kesariya", albums: "Bramastra", duration: "4:28", image: "/photos/songs/18.jpeg" ,audio:"/music/Kesariya.mp3"},
    { id: 6, title: "Shayad", albums: "Love Aaj Kal", duration: "4:07", image: "/photos/songs/19.jpeg",audio:"/music/Shayad.mp3" },
    { id: 7, title: "Tum Kya Mile", albums: "Roky or Rani Ki Prem Kahani", duration: "4:37", image: "/photos/songs/20.jpeg",audio:"/music/Tum Kya Mile.mp3" },
  ],
};

const Pritham = () => {
  const artistName = "Pritham";
  const artistSongs = songs["pritam"] || [];
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    setCurrentSong(song);
    setTimeout(() => {
      audioRef.current.play();
    }, 100); 
  };

  return (
    <div className="artist-page">
      <div className="artist-header">
        <FontAwesomeIcon icon={faPlay} className="play-icon" />
        <h2>{artistName}</h2>
      </div>

      <ul className="song-list">
        {artistSongs.map((song, index) => (
          <li
            key={song.id}
            className="song-item"
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

export default Pritham;