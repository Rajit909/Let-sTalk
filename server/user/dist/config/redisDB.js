import { createClient } from "redis";
import dotenv from 'dotenv';
dotenv.config();
export const redisClient = createClient({
    url: process.env.REDIS_URL
});
redisClient.connect().then(() => console.log("Redis client connected successfully"))
    .catch(console.error);
export default redisClient;
