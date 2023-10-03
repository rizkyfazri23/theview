import mongoose from "mongoose";

const HouseSchema = mongoose.Schema({
    status: {
        type: Number,
        required: true
    },
    progress: {
        type: Number,
        required: true
    },
    type: {
        type: Number,
        required: true
    },
    phase: {
        type: Number,
        required: true
    },
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    images: {
        type: [
            {
                type: String,
                required: false
            }
        ],
        default: []
    }
});

const House = mongoose.model('House', HouseSchema);

export default House;
