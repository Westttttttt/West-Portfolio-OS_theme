import mongoose, { Document, Model, Schema } from "mongoose";

export interface IFeedback extends Document {
    goodName: string;
    rating: number;
    feedback: string;
    createdAt: Date;
}

const feedbackSchema = new Schema<IFeedback>({
    goodName: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    feedback: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Feedback: Model<IFeedback> =
    mongoose.models.Feedback ||
    mongoose.model<IFeedback>("Feedback", feedbackSchema);

export default Feedback;
