import express from 'express';
import Article from '../models/Article.js';

const router = express.Router();

// Create a new article
router.post('/articles', async (req, res) => {
    try {
        const { title, content, category } = req.body;
        const article = new Article({ title, content, category });
        await article.save();
        res.status(201).json({ message: 'Article created successfully', article });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all articles
router.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get articles by category
router.get('/articles/:category', async (req, res) => {
    try {
        const { category } = req.params;
        const articles = await Article.find({ category });
        if (articles.length === 0) {
            return res.status(404).json({ message: 'No articles found for this category' });
        }
        res.json(articles);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update an article by ID
router.put('/articles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const article = await Article.findByIdAndUpdate(id, updates, { new: true });
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json({ message: 'Article updated successfully', article });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete an article by ID
router.delete('/articles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findByIdAndDelete(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }
        res.json({ message: 'Article deleted successfully', article });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
