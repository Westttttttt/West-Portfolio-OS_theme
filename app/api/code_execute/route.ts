import axios from "axios";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { language, content, extension } = body;
        const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
            language,
            version: "*",
            files: [{ name: `main.${extension}`, content }],
        });
        const { run } = res.data;

        if (run.stderr) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: run.stderr,
                    result: null,
                }),
                { status: 200 },
            );
        } else if (run.stdout) {
            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Code executed Successfully ✨",
                    result: run.stdout,
                }),
                { status: 200 },
            );
        } else {
            return new Response(
                JSON.stringify({
                    success: true,
                    message: "Code executed Successfully ✨",
                    result: null,
                }),
                { status: 200 },
            );
        }
    } catch (error) {
        console.log("Error", error);
        return new Response(
            JSON.stringify({
                success: false,
                message: "Error running code" + error,
                result: null,
            }),
            { status: 500 },
        );
    }
}
