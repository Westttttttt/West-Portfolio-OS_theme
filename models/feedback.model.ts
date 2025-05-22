import mongoose, { Document, Model, Schema } from "mongoose";

export interface IFeedback extends Document {
    goodName: string;
    rating: number;
    feedback: string;
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
});

const Feedback: Model<IFeedback> =
    mongoose.models.Feedback ||
    mongoose.model<IFeedback>("Feedback", feedbackSchema);

export default Feedback;
