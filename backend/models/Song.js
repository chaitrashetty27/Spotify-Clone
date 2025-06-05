import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    album: String,
    duration: Number, 
    imageUrl: String, 
    audioUrl: String
    
    // createdAt: { type: Date, default: Date.now }
});

const Song = mongoose.model("Song", songSchema);

export default Song;
