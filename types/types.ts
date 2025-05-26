export type EditorLanguagesTypes =
    | "javascript"
    | "python"
    | "typescript"
    | "java";

export type EditorKeyTypes =
    | "font-size"
    | "font-type"
    | "language-type"
    | "javascript-code"
    | "python-code"
    | "typescript-code"
    | "java-code";

export type EditorFontTypes =
    | "Fira Code"
    | "JetBrains Mono"
    | "Monaco"
    | "Consolas"
    | "Hack";


export type ResponseData = {
    success: boolean,
    message: string;
    result: string | null;
    status: number;
}

export type ExecuteResponse = {
    data: ResponseData
}