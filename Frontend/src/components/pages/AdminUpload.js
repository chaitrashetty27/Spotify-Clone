import React, { useEffect, useState } from "react";
import axios from "axios";
import './AdminUpload.css';
import { FaPlay, FaTrash, FaEdit, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminUpload = () => {
    const [songs, setSongs] = useState([]);
    const [newSong, setNewSong] = useState({
        title: "",
        artist: "",
        duration: "",
        image: null,
        audio: null
    });

    const [editingSongId, setEditingSongId] = useState(null);
    const [editedSong, setEditedSong] = useState({
        title: "",
        artist: "",
        duration: "",
        image: null,
        audio: null
    });

    useEffect(() => {
        fetchSongs();
    }, []);

    const fetchSongs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/songs");
            setSongs(response.data);
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    const handleNewSongChange = (e) => {
        const { name, value, files } = e.target;
        setNewSong({
            ...newSong,
            [name]: files ? files[0] : value
        });
    };

    const handleAddSong = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", newSong.title);
        formData.append("artist", newSong.artist);
        formData.append("duration", newSong.duration);
        formData.append("image", newSong.image);
        formData.append("audio", newSong.audio);
        try {
            await axios.post("http://localhost:5000/api/songs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setNewSong({ title: "", artist: "", duration: "", image: null, audio: null });
            fetchSongs();
        } catch (error) {
            console.error("Error adding song:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/songs/${id}`);
            setSongs(songs.filter(song => song._id !== id));
        } catch (error) {
            console.error("Error deleting song:", error);
        }
    };

    const handleEditClick = (song) => {
        setEditingSongId(song._id);
        setEditedSong({
            title: song.title,
            artist: song.artist,
            duration: song.duration,
            image: null,
            audio: null
        });
    };

    const handleEditChange = (e) => {
        const { name, value, files } = e.target;
        setEditedSong({
            ...editedSong,
            [name]: files ? files[0] : value
        });
    };

    const handleSave = async (id) => {
        const formData = new FormData();
        formData.append("title", editedSong.title);
        formData.append("artist", editedSong.artist);
        formData.append("duration", editedSong.duration);
        if (editedSong.image) formData.append("image", editedSong.image);
        if (editedSong.audio) formData.append("audio", editedSong.audio);
        try {
            await axios.put(`http://localhost:5000/api/songs/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setEditingSongId(null);
            fetchSongs();
        } catch (error) {
            console.error("Error updating song:", error);
        }
    };

    return (
        <div className="playlist-container">
            <h2>Admin Upload</h2>


            <form onSubmit={handleAddSong} className="add-song-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Song Title"
                    value={newSong.title}
                    onChange={handleNewSongChange}
                    required
                />
                <input
                    type="text"
                    name="artist"
                    placeholder="Artist Name"
                    value={newSong.artist}
                    onChange={handleNewSongChange}
                    required
                />
                <input
                    type="number"
                    name="duration"
                    placeholder="Duration in seconds"
                    value={newSong.duration}
                    onChange={handleNewSongChange}
                    required
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleNewSongChange}
                    required
                />
                <input
                    type="file"
                    name="audio"
                    accept="audio/*"
                    onChange={handleNewSongChange}
                    required
                />
                <button type="submit">Upload Song</button>
            </form>

            
            <div className="song-grid">
                {songs.map((song) => (
                    <div key={song._id} className="song-card">
                        <div className="image-container">
                            <img
                                src={
                                    editingSongId === song._id && editedSong.image
                                        ? URL.createObjectURL(editedSong.image)
                                        : song.imageUrl || "default.jpg"
                                }
                                alt={song.title}
                                className="song-artwork"
                            />
                            <div className="play-overlay">
                                <FaPlay className="play-icon" />
                            </div>
                        </div>

                        <div className="song-info">
                            {editingSongId === song._id ? (
                                <>
                                    <input
                                        type="text"
                                        name="title"
                                        value={editedSong.title}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        type="text"
                                        name="artist"
                                        value={editedSong.artist}
                                        onChange={handleEditChange}
                                    />
                                    <input
                                        type="number"
                                        name="duration"
                                        value={editedSong.duration}
                                        onChange={handleEditChange}
                                    />
                                    <label htmlFor="image">Upload Image:</label>
                                    <input
                                        type="file"
                                        name="image"
                                        accept="image/*"
                                        onChange={handleEditChange}
                                    />
                                    <label htmlFor="audio">Upload Audio:</label>
                                    <input
                                        type="file"
                                        name="audio"
                                        accept="audio/*"
                                        onChange={handleEditChange}
                                    />
                                    {editedSong.audio && (
                                        <p>Selected: {editedSong.audio.name}</p>
                                    )}
                                </>
                            ) : (
                                <>
                                    <h3>{song.title}</h3>
                                    <p>{song.artist}</p>
                                    <p>{formatDuration(song.duration)}</p>
                                </>
                            )}
                        </div>

                        <div className="song-actions">
                            {editingSongId === song._id ? (
                                <button onClick={() => handleSave(song._id)} className="save-button">
                                    <FaSave /> Save
                                </button>
                            ) : (
                                <button onClick={() => handleEditClick(song)} className="edit-button">
                                    <FaEdit /> Edit
                                </button>
                            )}
                            <button onClick={() => handleDelete(song._id)} className="delete-button">
                                <FaTrash /> Delete
                            </button>
                            <Link to={`/playlist/${song._id}`}>
                                <button>View</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminUpload;
