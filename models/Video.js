import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is requires"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    descrition: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.medel("Video", VideoSchema);
export default model;