import { connectDB } from "@/lib/db";
import Feedback from "@/models/feedback.model";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { goodName, rating, feedback } = body;

        if (!goodName || !feedback) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: "Fill in all fields fker",
                    feedback: null,
                }),
                { status: 400 },
            );
        }

        await connectDB();
        const newFeedback = new Feedback({
            goodName,
            rating,
            feedback,
        });

        const savedFeedback = await newFeedback.save();

        if (newFeedback) {
            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Feedback send successfully",
                    feedback: savedFeedback,
                }),
                { status: 201 },
            );
        }
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Error giving feedback",
                error,
                feedback: null,
            }),
            { status: 500 },
        );
    }
}

export async function GET() {
    try {
        await connectDB();
        const feedbacks = await Feedback.find();

        if (feedbacks) {
            return new Response(
                JSON.stringify({
                    success: true,
                    feedbacks,
                }),
                { status: 200 },
            );
        }
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({
                success: false,
                feebacks: [],
            }),
            { status: 500 },
        );
    }
}
