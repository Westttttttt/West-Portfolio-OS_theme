import React, { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";

const Notepad = () => {
    const [notePadText, setNotePadText] = useState("");

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const value = e.target.value;
        setNotePadText(value);
        localStorage.setItem("notePadText", JSON.stringify(value));
    }

    useEffect(() => {
        const saved = localStorage.getItem("notePadText");
        if (saved) {
            setNotePadText(JSON.parse(saved));
        }
    }, []);

    const currFullTools = useSelector(
        (state: RootState) => state.toolState.fullScreenTools,
    );
    return (
        <div
            className={cn(
                "w-[22rem] h-96",
                currFullTools.includes("Notepad") && "w-[90%] h-[90%]",
            )}
        >
            <Textarea
                className="w-full h-full resize-none overflow-y-auto"
                value={notePadText}
                onChange={handleChange}
            />
        </div>
    );
};

export default Notepad;
