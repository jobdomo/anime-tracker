import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function testConnection() {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);

        console.log("Successfully connected to MongoDB");
        await mongoose.connection.close();
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

testConnection();