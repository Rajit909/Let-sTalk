import express from 'express';
import cors from 'cors'

import cookieParser from 'cookie-parser'
import connectToDb from './lib/db.js';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}

connectToDb()


app.get('/', (_, res) => {   
    res.send('Hello World!');
});

export default app;