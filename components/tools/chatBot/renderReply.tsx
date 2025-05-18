import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const renderReply = (text: string) => {
    const parts = text.split(/```(?:\w*\n)?([\s\S]*?)```/g); // Split code blocks
    const codeRegex = /```(\w*)\n([\s\S]*?)```/g;

    const languages = [...text.matchAll(codeRegex)].map(
        (match) => match[1] || "javascript",
    );

    let langIndex = 0;

    return parts.map((part, index) => {
        if (index % 2 === 1) {
            // Code block
            const lang = languages[langIndex++] || "javascript";
            return (
                <SyntaxHighlighter
                    key={index}
                    language={lang}
                    style={oneDark}
                    customStyle={{
                        borderRadius: "12px",
                        backgroundColor: "#282C34",
                        padding: "1rem",
                        margin: "1rem 0",
                    }}
                >
                    {part.trim()}
                </SyntaxHighlighter>
            );
        } else {
            const lines = part.split("\n");

            // Helper for inline **bold**
            const renderBold = (text: string) =>
                text.split(/(\*\*.*?\*\*)/g).map((chunk, j) => {
                    if (/^\*\*.*\*\*$/.test(chunk)) {
                        return <strong key={j}>{chunk.slice(2, -2)}</strong>;
                    }
                    return <span key={j}>{chunk}</span>;
                });

            return (
                <div key={index} className="space-y-2">
                    {lines.map((line, i) => {
                        const trimmed = line.trim();

                        if (trimmed.startsWith("* **")) {
                            // Remove * ** prefix, render bold only
                            return (
                                <p key={i} className="font-semibold">
                                    {renderBold(
                                        trimmed.replace(/^\*\s\*\*/, "").trim(),
                                    )}
                                </p>
                            );
                        } else if (trimmed.startsWith("** *")) {
                            // Remove ** * prefix, render bold only
                            return (
                                <p key={i} className="font-semibold">
                                    {renderBold(
                                        trimmed.replace(/^\*\*\s\*/, "").trim(),
                                    )}
                                </p>
                            );
                        } else {
                            return (
                                <p key={i} className="mb-2 leading-relaxed">
                                    {renderBold(line)}
                                </p>
                            );
                        }
                    })}
                </div>
            );
        }
    });
};
