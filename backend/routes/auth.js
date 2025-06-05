import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js"; // Make sure this path is correct

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ message: "User not found" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
  
      res.status(200).json({ message: "User login successful", userId: user._id });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

  
export default router;
