import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    let isConnected = false;
    if (!MONGODB_URI) {
        throw new Error("Please provide a mongodb_uri");
    }
    try {
        if (isConnected) return;
        const conn = await mongoose.connect(MONGODB_URI);
        isConnected = true;
        console.log("MongoDB connected Successfully", conn.connection.host);
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
};
