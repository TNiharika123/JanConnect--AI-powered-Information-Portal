import express from 'express';
import axios from 'axios';
import User from '../models/User.js';

const router = express.Router();

const NEWS_API_KEY = 'YOUR_NEWSAPI_KEY'; // Add your NewsAPI key here
const NEWS_API_URL = 'https://newsapi.org/v2/everything';

// Fetch articles from NewsAPI based on user preferences
router.get("/user-news/:email", async (req, res) => {
    try {
        const userEmail = req.params.email;
        const user = await User.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const preferences = user.preferences;

        // Fetch news articles based on preferences from NewsAPI
        const newsPromises = preferences.map(preference =>
            axios.get(NEWS_API_URL, {
                params: {
                    q: preference,
                    apiKey: NEWS_API_KEY
                }
            })
        );

        const newsResponses = await Promise.all(newsPromises);
        const articles = newsResponses.flatMap(response => response.data.articles);
        
        res.send(articles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching news from NewsAPI");
    }
});

export default router;
