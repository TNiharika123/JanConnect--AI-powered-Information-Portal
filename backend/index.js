// Filename - backend/index.js

import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';

// Replace with your actual MongoDB URL and database name
const mongoURI = 'mongodb://localhost:27017/JanConnect';

mongoose.connect(mongoURI)
.then(() => console.log('Connected to JanConnectDB database'))
.catch(err => console.error('Failed to connect to the database', err));

// User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required:true,
    },
    state:
    {
        type: String,
        required: true,
    },

});
const User = mongoose.model('users', UserSchema);

// Article Schema (For storing news articles)
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    publishedAt: {
        type: Date,
        default: Date.now,
    },
    urlToImage: {
        type: String,
    },
    NewsLink: {
        type: String,
    },
});
const Article = mongoose.model('articles', ArticleSchema);

// Express setup
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Basic route to check the backend
app.get("/", (req, res) => {
    res.send("JanConnect Backend is Working");
});

// User registration route
app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            res.send(req.body);
            console.log(result);
        } else {
            console.log("User already registered");
        }
    } catch (e) {
        console.error(e);
        res.status(500).send("Something Went Wrong");
    }
});

// Fetch all articles route
app.get("/articles", async (req, res) => {
    try {
        const articles = await Article.find();
        res.send(articles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching articles");
    }
});



// Search articles by category route
app.get("/articles/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const articles = await Article.find({ category: category });
        res.send(articles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching articles");
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
