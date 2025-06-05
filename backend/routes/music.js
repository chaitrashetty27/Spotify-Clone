import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Song from "../models/Song.js";

const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['.jpg', '.jpeg', '.png', '.mp3'];
    const ext = path.extname(file.originalname).toLowerCase();

    if (allowedTypes.includes(ext)) {
        cb(null, true);
    } else {
        cb(new Error("Only image and mp3 files are allowed"), false);
    }
};

const upload = multer({ storage, fileFilter });


router.get("/search", async (req, res) => {
    try {
        const query = req.query.query; 
        const songs = await Song.find({
            title: { $regex: query, $options: "i" }
        });
        res.json(songs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error searching songs", error });
    }
});



router.get("/:id", async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (!song) {
            return res.status(404).json({ message: "Song not found" });
        }
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: "Error fetching song", error });
    }
});

router.post("/",upload.fields([{ name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },]),
    async (req, res) => {
        console.log("req.files:", req.files);
      try {
        const { title, artist, duration } = req.body;
   const newSong = new Song({
          title,
          artist,
          duration,
          imageUrl: req.files?.image
            ? `http://localhost:5000/uploads/${req.files.image[0].filename}`
            : "",
          audioUrl: req.files?.audio
            ? `http://localhost:5000/uploads/${req.files.audio[0].filename}`
            : "",
        });
        await newSong.save();
        res.status(201).json(newSong);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error uploading song", error });
      }
    }
  );
  


router.put("/:id", upload.fields([{ name: "image" }, { name: "audio" }]),
 async (req, res) => {
    const { title, artist, duration } = req.body;
    try {
         const updatedFields = {
            title,
            artist,
            duration,
        };
if (req.files && req.files.image) {
updatedFields.imageUrl = `http://localhost:5000/uploads/${req.files.image[0].filename}`;
        }

if (req.files && req.files.audio) {
  updatedFields.audioUrl = `http://localhost:5000/uploads/${req.files.audio[0].filename}`;
        }
const updatedSong = await Song.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
if (!updatedSong) {
            return res.status(404).json({ message: "Song not found" });
        }
 res.json(updatedSong);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating song", error });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);

        if (!song) {
            return res.status(404).json({ message: "Song not found" });
        }

        
        if (song.imageUrl) {
            const imagePath = path.join("uploads", path.basename(song.imageUrl));
            fs.unlink(imagePath, (err) => {
                if (err) console.error("Error deleting image:", err);
            });
        }

        
        if (song.audioUrl) {
            const audioPath = path.join("uploads", path.basename(song.audioUrl));
            fs.unlink(audioPath, (err) => {
                if (err) console.error("Error deleting audio:", err);
            });
        }

        res.json({ message: "Song and associated files deleted successfully" });
    } catch (error) {
        console.error("Error deleting song:", error);
        res.status(500).json({ message: "Error deleting song", error });
    }
});
export default router;
