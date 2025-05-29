import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {errorHandler} from "./middleware/errorHandler";

import productRoutes from "./routes/productRoutes";

const app = express();
dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server is alive");
})

// connect to database

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error("MONGO_URI is not defined in .env");
}

mongoose.connect(mongoUri)
    .then(() => console.log("MongoDB connected"))
    .catch((err: unknown)=> console.error("MongoDB connection error:", err));

// Routes
app.use('/api/products', productRoutes);

// error handler
app.use(errorHandler);


export default app;