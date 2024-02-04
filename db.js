import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    try {
        mongoose.connect(process.env.URL)
        console.log('Database connected successfully')
    }
    catch (error) {
        console.log('Error:' + error)
    }
}

Connection()