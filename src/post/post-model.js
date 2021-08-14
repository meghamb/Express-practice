import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        minLength: 10
    },
    status: {
        type: String,
        enum: ['draft', 'under Review', 'published'],
        default: 'draft'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});
export const Post = mongoose.model('post', postSchema);