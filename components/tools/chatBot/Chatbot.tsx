import { useState } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Loader2 } from "lucide-react";
import { renderReply } from "./renderReply";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";

const Chatbot = () => {
    const [userText, setUserText] = useState("");
    const [aiReply, setAiReply] = useState("");
    const [loading, setLoading] = useState(false);

    const currFullScreenTools = useSelector(
        (state: RootState) => state.toolState.fullScreenTools,
    );

    const askQuestion = async () => {
        if (!userText.trim()) return;

        setLoading(true);
        const res = await fetch("/api/chatbot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userText }),
        });
        const data = await res.json();
        setAiReply(data.reply);
        setUserText("");
        setLoading(false);
    };

    return (
        <div
            className={cn(
                "w-[28rem] h-[32rem] p-6 rounded-3xl shadow-2xl backdrop-blur-3xl overflow-y-auto transition-all duration-300 element",
                currFullScreenTools.includes("Chatbot") && "w-full h-full",
            )}
        >
            {/* Header */}
            <h2 className="text-3xl font-extrabold text-center bg-clip-text text-white mb-6">
                🤖 AI Chatbot
            </h2>

            {/* Input Section */}
            <div className="space-y-4">
                <Input
                    type="text"
                    placeholder="Ask something dope..."
                    className="text-base bg-white/80 border border-zinc-300 dark:border-zinc-600 rounded-xl py-3 px-4 text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                />
                <Button
                    onClick={askQuestion}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin h-5 w-5" />
                            Processing...
                        </>
                    ) : (
                        "Fire Away"
                    )}
                </Button>
            </div>

            {/* AI Reply Section */}
            {aiReply && (
                <div className="mt-6 p-5 bg-white/30 dark:bg-zinc-800/30 rounded-2xl border border-zinc-200/30 dark:border-zinc-700/30 backdrop-blur-md text-zinc-700 dark:text-zinc-200 text-sm whitespace-pre-wrap transition-all duration-300 hover:shadow-lg">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                        AI:
                    </span>
                    <div className="mt-2">{renderReply(aiReply)}</div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
