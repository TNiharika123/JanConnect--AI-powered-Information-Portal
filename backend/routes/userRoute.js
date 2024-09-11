import express from 'express';
import User from '../models/User.js';
import { connectToMongo } from '../db.js';

const router = express.Router();

// Connect to MongoDB
connectToMongo(); // Ensure connection is established

// User registration route
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, city, state } = req.body;
        const user = new User({ name, email, password, city, state });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err); // Log error to server console for debugging
        res.status(400).json({ error: err.message }); // Return error message to client
    }
});

// Login Endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json("No record exists");
        }
        if (user.password === password) {
            res.json("Success");
        } else {
            res.json("The password is incorrect");
        }
    } catch (err) {
        console.error(err); // Log error to server console for debugging
        res.status(500).json({ error: err.message }); // Return error message to client
    }
});

// Logout Endpoint (client-side handling)
router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
});

export default router;
