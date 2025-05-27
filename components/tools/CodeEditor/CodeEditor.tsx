import MonacoEditor, { BeforeMount } from "@monaco-editor/react";
import EditorHeader from "./EditorHeader";
import { useEffect, useState } from "react";
import {
    getFromLocalStorage,
    setToLocalStorage,
} from "@/lib/localStorageHelper";
import {
    EditorFontTypes,
    EditorKeyTypes,
    EditorLanguagesTypes,
    ExecuteResponse,
} from "@/types/types";
import { defaultSnippets } from "@/constants/constant";
import { SquareChevronRight } from "lucide-react";
import axios from "axios";

const CodeEditor = () => {
    const [fontSize, setFontSize] = useState<string>("14");
    const [selectedLanguage, setSelectedLanguage] =
        useState<EditorLanguagesTypes>("javascript");
    const [selectedFont, setSelectedFont] = useState<EditorFontTypes>("Monaco");
    const [code, setCode] = useState("");
    const [defaultSnippetsValue, setDefaultSnippetsValue] = useState("");
    const [extension, setExtension] = useState("");
    const [codeOutput, setCodeOutput] = useState<string | null>("");
    const [codeMessage, setCodeMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleEditorWillMount: BeforeMount = (monaco) => {
        monaco.editor.defineTheme("transparent", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#00000000",
            },
        });
    };

    const handleCodeExecute = async () => {
        setIsLoading(true);
        const res: ExecuteResponse = await axios.post("/api/code_execute", {
            language: selectedLanguage,
            content: code,
            extension,
        });

        const rawMessage = res.data.message;

        // Extract last line of the error
        const lastLine = rawMessage?.trim().split("\n").pop() || "";

        setCodeOutput(res.data.result);
        setCodeMessage(lastLine);
        setIsLoading(false);
    };

    useEffect(() => {
        ["font-size", "font-type", "language-type", "code"].forEach((val) => {
            const fetchedVal = getFromLocalStorage(val as EditorKeyTypes);
            switch (val) {
                case "font-size":
                    setFontSize(fetchedVal);
                    break;
                case "font-type":
                    setSelectedFont(fetchedVal);
                    break;
                case "language-type":
                    setSelectedLanguage(fetchedVal);
                    break;
                case "code":
                    setCode(fetchedVal);
                    break;
            }
        });
    }, []);

    useEffect(() => {
        const snippet = defaultSnippets.find(
            (snippet) => snippet.name === selectedLanguage,
        );

        if (snippet) {
            setDefaultSnippetsValue(snippet.defaultCode);
            const savedCode = getFromLocalStorage(
                `${snippet.name}-code` as EditorKeyTypes,
            );

            if (savedCode && snippet.name === selectedLanguage) {
                setCode(savedCode);
            } else {
                setCode(snippet.defaultCode);
            }
        }

        if (selectedLanguage === "typescript") {
            setExtension("ts");
        } else if (selectedLanguage === "javascript") {
            setExtension("js");
        } else if (selectedLanguage === "java") {
            setExtension("java");
        } else {
            setExtension("py");
        }
    }, [selectedLanguage]);

    return (
        <div className="min-w-[900px] w-full min-h-full flex">
            <div className="w-[65%]">
                <EditorHeader
                    setFontSize={setFontSize}
                    fontSize={fontSize!}
                    setSelectedLanguage={setSelectedLanguage}
                    selectedLanguage={selectedLanguage}
                    setSelectedFont={setSelectedFont}
                    selectedFont={selectedFont}
                    handleCodeExecute={handleCodeExecute}
                    isLoading={isLoading}
                />
                <MonacoEditor
                    beforeMount={handleEditorWillMount}
                    height={"90vh"}
                    theme="transparent"
                    defaultLanguage={selectedLanguage}
                    defaultValue={defaultSnippetsValue}
                    language={selectedLanguage}
                    value={code}
                    options={{
                        fontLigatures: true,
                        fontFamily: selectedFont,
                        minimap: {
                            enabled: false,
                        },
                        scrollbar: {
                            verticalScrollbarSize: 10,
                            horizontalScrollbarSize: 10,
                        },
                        fontSize: fontSize,
                        tabSize: 4,
                    }}
                    onChange={(value) => {
                        const writtenCode = value || "";
                        setCode(writtenCode);
                        setToLocalStorage({
                            key: `${selectedLanguage}-code`,
                            value: writtenCode,
                        });
                    }}
                />
            </div>
            <div className="w-[35%]">
                <h2 className="p-4 border-b flex gap-2 items-center">
                    Output <SquareChevronRight />
                </h2>
                <div className="p-5">
                    <p className="whitespace-pre-wrap">{codeOutput}</p>
                    <p>{codeMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;
