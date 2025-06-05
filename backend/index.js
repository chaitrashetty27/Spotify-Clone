import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import songsRoutes from "./routes/music.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(" MongoDB Connection Error:", error);
        process.exit(1); 
    }
};


app.use(cors({ origin: "*" })); 
app.use(express.json());


app.use("/api/songs", songsRoutes);
app.use("/api/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/uploads", express.static("uploads"));




app.get("/", (req, res) => {
    res.send("WELCOME TO MY SERVER ");
});


app.listen(PORT, async () => {
    await connectDB(); 
    console.log(`Server is running on http://localhost:${PORT}`);
});
