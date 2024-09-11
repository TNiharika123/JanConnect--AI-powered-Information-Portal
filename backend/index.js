import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import userRoute from './routes/userRoute.js';
import articleRoute from './routes/articleRoute.js';
import newsRoute from './routes/newsRoute.js';

import User from './models/User.js'; // Correct path and extension

// Replace with your actual MongoDB URL and database name
const mongoURI = 'mongodb://localhost:27017/JanConnect';
const NEWS_API_KEY = 'YOUR_NEWSAPI_KEY'; // Add your NewsAPI key here
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000, })
    .then(() => console.log('Connected to JanConnectDB database'))
    .catch(err => console.error('Failed to connect to the database', err));

// Express setup
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Basic route to check the backend
app.get("/", (req, res) => {
    res.send("JanConnect Backend is Working");
});
app.use('/api', userRoute); // Prefix '/api' for all user routes
app.use('/api', newsRoute);
app.use('/api', preferenceRoute);
app.use('/api', articleRoute);

// Available routes
// app.use('/api/userRoute',require('./routes/userRoute.js'))
// app.use('/api/articleRoute',require('./routes/articleRoute.js'))


// // User registration route
// app.post("/register", async (req, res) => {
//     try {
//         const { name, email, password, city, state } = req.body;
//         const user = new User({ name, email, password, city, state });
//         console.log("hi");
//         await user.save();
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// // Login Endpoint
// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json("No record exists");
//         }
//         if (user.password === password) {
//             res.json("Success");
//         } else {
//             res.json("The password is incorrect");
//         }
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// // Logout Endpoint (client-side handling)
// app.post('/logout', (req, res) => {
//     // Client-side handles token deletion
//     res.status(200).json({ message: 'Logged out successfully' });
// });

// // Fetch all articles from MongoDB route
// app.get("/articles", async (req, res) => {
//     try {
//         const articles = await Article.find();
//         res.send(articles);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error fetching articles");
//     }
// });

// // Search articles by category in MongoDB route
// app.get("/articles/:category", async (req, res) => {
//     try {
//         const category = req.params.category;
//         const articles = await Article.find({ category });
//         res.send(articles);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error fetching articles");
//     }
// });

// // Fetch articles from NewsAPI based on user preferences
// app.get("/user-news/:email", async (req, res) => {
//     try {
//         const userEmail = req.params.email;
//         const user = await User.findOne({ email: userEmail });

//         if (!user) {
//             return res.status(404).send("User not found");
//         }

//         const preferences = user.preferences;

//         // Fetch news articles based on preferences from NewsAPI
//         const newsPromises = preferences.map(preference =>
//             axios.get(NEWS_API_URL, {
//                 params: {
//                     q: preference,
//                     apiKey: NEWS_API_KEY
//                 }
//             })
//         );

//         const newsResponses = await Promise.all(newsPromises);
//         const articles = newsResponses.flatMap(response => response.data.articles);
        
//         res.send(articles);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Error fetching news from NewsAPI");
//     }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
