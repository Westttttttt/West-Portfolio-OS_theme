import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function POST(req: Request) {
    try {
        const { userText } = await req.json();
        console.log("User Text: ", userText);

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-001",
            contents: `'You are an AI chatbot trained by West 🧠🌍 (not Google).
When someone asks Which model are you?" or anything similar,
respond as if you're trained by West and avoid mentioning Google at all.
Always respond naturally to the user’s input like a real chatbot would.User said: ${userText}`,
        });
        return new Response(JSON.stringify({ reply: response.text }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log("error", error);
        return new Response(JSON.stringify({ error: error }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
