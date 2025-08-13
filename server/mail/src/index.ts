import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"
import { startSendOtpConsumer } from './consumer.js';
dotenv.config();

const app = express();



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

startSendOtpConsumer();

app.get('/', (_, res) => {   
    res.send('Hello World!');
});

export default app;