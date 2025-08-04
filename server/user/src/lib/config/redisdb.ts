import { createClient } from "redis";
import dotenv from 'dotenv';
dotenv.config();

export const redisClient = createClient({
    url: process.env.REDIS_UR
})

redisClient
    .connect()
    .then(() => console.log("Redis client Connected Successfully."))
    .catch(console.error)

export default redisClient