import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
const connectDb = async () => {
    const url = process.env.MONGO_URL;
    if (!url) {
        console.error("MongoDB connection string is not defined in environment variables.");
        process.exit(1); // Exit the process with failure
    }
    try {
        await mongoose.connect(url, {
            dbName: "lets_talk",
        });
        console.log("Database connected successfully");
    }
    catch (error) {
        process.exit(1); // Exit the process with failure
    }
};
export default connectDb;
