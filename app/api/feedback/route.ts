import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

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
            );
        }

        const newFeedback = await prisma.userFeedbacks.create({
            data: {
                goodName,
                rating,
                feedback,
            },
        });

        if (newFeedback) {
            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Feedback send successfully",
                    feedback: newFeedback,
                }),
            );
        }
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Error giving feedback",
                feedback: null,
            }),
        );
    }
}

export async function GET() {
    try {
        const feedbacks = await prisma.userFeedbacks.findMany();

        if (feedbacks) {
            return new Response(
                JSON.stringify({
                    success: true,
                    feedbacks,
                }),
            );
        }
    } catch (error) {
        console.log(error);
        return new Response(
            JSON.stringify({
                success: false,
                feebacks: null,
            }),
        );
    }
}
