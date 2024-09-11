
// file to connect to mongodb server

const mongoose = require('mongoose')
const mongoURI = "mongodb://127.0.0.1:27017/JanConnect";

// mongoose returns promises- async fnc waits for promise to be resolved
const connectToMongo = async () => {
    {
        // 1st arg. in mongoose.connect is the URI string
        // it also gives the 2nd arrg as a callback fnc(we can use either async wait or a callback fnc) CALLBACK FNC returns something

        try {
            await mongoose.connect(mongoURI, {});
            console.log("Connected to MongoDB successfully!");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }
}


module.exports = connectToMongo;