import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import redisClient from './config/redisDB.js';

dotenv.config();



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}

connectDb();
redisClient


app.get('/', (_, res) => {   
    res.send('Hello World!');
});

export default app;