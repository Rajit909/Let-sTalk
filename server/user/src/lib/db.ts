import mongoose from "mongoose";

import doten from "dotenv";
doten.config();

const connectToDb = async () => {
    const url = process.env.MONGO_URL;

    if(!url){
        throw new Error("MONGO_URL is not defined in the environment variables");
    }

    try {                   
        await mongoose.connect(url, {
            dbName: "LetsTalk",
        })
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};


export default connectToDb;