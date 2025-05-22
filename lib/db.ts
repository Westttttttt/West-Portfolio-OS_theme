import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    if (!MONGODB_URI) {
        throw new Error("Please provide a mongodb_uri");
    }
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected Successfully", conn.connection.host);
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
};
