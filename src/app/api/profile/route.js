import mongoose from "mongoose";

export async function PUT() {
    mongoose.connect(process.env.MONGO_URL)
    const data = await req.json()
}