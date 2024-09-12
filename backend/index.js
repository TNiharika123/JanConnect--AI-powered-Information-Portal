import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import userRoute from './routes/userRoute.js';
import articleRoute from './routes/articleRoute.js';
import preferenceRoute from './routes/preferenceRoute.js';
import newsRoute from './routes/newsRoute.js';

import User from './models/User.js'; // Correct path and extension

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000, })
    .then(() => console.log('Connected to JanConnectDB database'))
    .catch(err => console.error('Failed to connect to the database', err));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("JanConnect Backend is Working");
});
app.use('/api', userRoute); 
