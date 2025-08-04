import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
const connectDb = async () => {
    const url = process.env.MONGO_URL;
    console.log("Connecting to MongoDB with URL:", url);
    if (!url) {
        console.log("MongoDB connection string is not defined");
        process.exit(1); // Exit the process with failure
    }
    try {
        await mongoose.connect(url, {
            dbName: "LetsTalk",
        });
        console.log("Database connected successfully");
    }
    catch (error) {
        console.log("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
};
export default connectDb;
