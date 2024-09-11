import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the schema for the Article
const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    urlToImage: {
        type: String
    },
    publishedAt: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    },
    category: {
        type: String
    }
});

// Create the model from the schema
const Article = mongoose.model('Article', articleSchema);

export default Article;
