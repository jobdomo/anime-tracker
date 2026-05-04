import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = Express();

//middleware
app.use(cors());
app.use(Express.json());

// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI!).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch((error) => {
     console.error("Error connecting to MongoDB:", error);
});

// route
app.get('/api/health', (req, res) => {
    res.json({ message: 'Server is running' });
});

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});