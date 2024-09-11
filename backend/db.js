import mongoose from 'mongoose';

const mongoURI = "mongodb://127.0.0.1:27017/JanConnect";

// mongoose returns promises - async function waits for promise to be resolved
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        });;
        console.log('MongoDB connected');
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export  {connectToMongo};
