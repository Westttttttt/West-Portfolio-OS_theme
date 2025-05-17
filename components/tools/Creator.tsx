import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";

const Creator = () => {
    const fullScreenTools = useSelector(
        (state: RootState) => state.toolState.fullScreenTools,
    );

    return (
        <div
            className={cn(
                "w-96 h-96 flex items-center flex-col text-center p-4 overflow-y-scroll element",
                fullScreenTools.includes("Creator") && "justify-center h-full",
            )}
        >
            <h1 className="mt-4 text-xl font-bold">
                🧙‍♂️ Whoa... you actually made it here?
            </h1>

            <h2 className="text-md mt-2 text-yellow-300">
                Welcome, curious wanderer. You&apos;ve discovered the secret
                lair of the creator 🕵️‍♂️
            </h2>

            <h3 className="text-md mt-4 font-semibold">
                👋 Hi, I&apos;m West — the sleep-deprived human behind this
                chaos.
            </h3>

            <p className="mt-4 text-sm text-gray-300">
                This app was built with 2% coffee ☕, 98% Stack Overflow &
                ChatGPT, and 100% ✨ chaotic energy ✨.
            </p>

            <p className="mt-3 text-sm text-gray-400">
                If you see a bug... no you didn&apos;t. It&apos;s a surprise
                mechanic, like in AAA games 😌🎮
            </p>

            <p className="mt-3 text-sm text-gray-400">
                Feel free to explore, click suspicious buttons, and act like
                you&apos;re doing something important 💼
            </p>

            <p className="mt-3 text-xs text-gray-500 italic">
                P.S. If you find a bug, name it and raise it like it&apos;s your
                own now 🐛💖
            </p>

            <p className="mt-3 text-xs text-gray-500 italic">
                And if it evolves... congrats, it&apos;s a feature now.
                You&apos;re a dev 😎🛠️
            </p>
        </div>
    );
};

export default Creator;
