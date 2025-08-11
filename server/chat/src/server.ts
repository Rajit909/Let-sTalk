import dotenv from 'dotenv';
dotenv.config();
import app from './index.js'


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});