const express = require("express")

const app = express();

const connectDB = require('./database/connect')

const port = process.env.PORT || 5000;

const start = async() => {
    
    try {
        await connectDB(process.env.MONGO_URL);
        console.log(`Server started. Listening on port ${port}... `);

    }
    catch (error){
        console.log(error);
    }
};
start();