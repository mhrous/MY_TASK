import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    }

}, {
    timestamps: true
});

export const University = mongoose.model('university', universitySchema);
