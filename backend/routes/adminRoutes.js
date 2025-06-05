import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";


const router = express.Router();


router.post("/create-admin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new User({
      email,
      password: hashedPassword,
      role: "admin"
    });

    await admin.save();
    res.status(201).json({ message: "Admin created", admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email, role: "admin" });
    if (!admin) return res.status(401).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Admin login successful", admin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




export default router;
