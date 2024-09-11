const mongoose = require('mongoose');
const User = require('./models/User.js');

const mongoURI = 'mongodb://localhost:27017/JanConnect';

mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 // Increase the timeout here
})
.then(() => console.log('Connected to JanConnectDB database'))
.catch(err => console.error('Failed to connect to the database', err));

// Sample data to insert
const users = [
    { name: 'John Doe', email: 'john@example.com', password: 'password123', city: 'New York', state: 'NY', preferences: ['technology', 'sports'] },
    { name: 'Jane Smith', email: 'jane@example.com', password: 'password123', city: 'Los Angeles', state: 'CA', preferences: ['health', 'business'] },
    // Add more user objects here
];

// Insert users into the database
User.insertMany(users)
    .then(() => {
        console.log('Users inserted successfully');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error inserting users:', err);
        mongoose.connection.close();
    });
