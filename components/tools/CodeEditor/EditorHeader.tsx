import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { fontStyles, languages } from "@/constants/constant";
import { setToLocalStorage } from "@/lib/localStorageHelper";
import { EditorFontTypes, EditorLanguagesTypes } from "@/types/types";
import { CodeXml, Play } from "lucide-react";
import React, { SetStateAction } from "react";

interface Props {
    fontSize: string;
    setFontSize: React.Dispatch<SetStateAction<string>>;
    setSelectedLanguage: React.Dispatch<SetStateAction<EditorLanguagesTypes>>;
    setSelectedFont: React.Dispatch<SetStateAction<EditorFontTypes>>;
    selectedLanguage: EditorLanguagesTypes;
    selectedFont: string;
    handleCodeExecute: () => void;
}

const EditorHeader = ({
    setFontSize,
    fontSize,
    setSelectedLanguage,
    setSelectedFont,
    selectedLanguage,
    selectedFont,
    handleCodeExecute,
}: Props) => {
    return (
        <header className="py-2 bg-[#121212] flex justify-between px-6 items-center">
            <h1 className="flex items-center gap-2 ">
                {" "}
                Code <CodeXml className="size-5 stroke-3 text-blue-500" />
            </h1>
            <div className="flex gap-6 items-center">
                <Select
                    onValueChange={(value: EditorLanguagesTypes) => {
                        setSelectedLanguage(value);
                        setToLocalStorage({ key: "language-type", value });
                    }}
                    value={selectedLanguage || "javascript"}
                >
                    <SelectTrigger className="w-[140px] rounded-[10px]">
                        <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent className="rounded-[10px] overflow-hidden ">
                        <SelectGroup>
                            {languages.map((l) => (
                                <SelectItem
                                    value={l.name.toLowerCase()}
                                    key={l.name}
                                >
                                    <l.icon style={{ color: l.color }} />
                                    {l.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select
                    onValueChange={(value) => {
                        setSelectedFont(value as EditorFontTypes);
                        setToLocalStorage({ key: "font-type", value });
                    }}
                    value={selectedFont || "Monaco"}
                >
                    <SelectTrigger className="w-[120px] rounded-[10px]">
                        <SelectValue placeholder="Select Font" />
                    </SelectTrigger>
                    <SelectContent className="rounded-[10px] overflow-hidden w-[30px]">
                        <SelectGroup>
                            {fontStyles.map((fs) => (
                                <SelectItem
                                    value={fs}
                                    key={fs}
                                    className="truncate"
                                >
                                    {fs}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <input
                    type="number"
                    min={10}
                    max={20}
                    value={fontSize || ""}
                    onChange={(e) => {
                        const value = e.target.value;
                        setFontSize(value);
                        setToLocalStorage({ key: "font-size", value });
                    }}
                    className="border rounded-[10px] cursor-pointer focus:outline-none py-1 flex items-center justify-center overflow-hidden pl-3"
                />
                <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-[10px] cursor-pointer text-xs"
                    onClick={handleCodeExecute}
                >
                    Run <Play />
                </Button>
            </div>
        </header>
    );
};

export default EditorHeader;
