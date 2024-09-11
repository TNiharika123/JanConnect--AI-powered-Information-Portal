import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const UserSchema = new mongoose.Schema({
    userId: {
        type: String,
        default: uuidv4, // Automatically generate a unique UUID for each user
        unique: true, // Ensure the userId is unique
    },
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
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    preferences: {
        type: [String], // Array of strings to store preferences
        default: [], // Default to an empty array
    }
});

const User = mongoose.model('User', UserSchema);

export default User;
