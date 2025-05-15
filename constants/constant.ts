import {
    Bot,
    Calculator,
    CircleUser,
    Cog,
    Gamepad2,
    Laptop,
    ListTodo,
    NotepadText,
    Paintbrush,
    SquareTerminal,
    Timer,
} from "lucide-react";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

import Calculatorr from "../components/tools/Calculator";
import CodeEditor from "../components/tools/CodeEditor";
import Creator from "../components/tools/Creator";
import Games from "../components/tools/Games";
import MiniSpotify from "../components/tools/MiniSpotify";
import MyPc from "../components/tools/MyPc";
import Notepad from "../components/tools/Notepad";
import Paint from "../components/tools/Paint";
import Settings from "../components/tools/Settings";
import StopWatch from "../components/tools/StopWatch";
import Terminal from "../components/tools/Terminal";
import TodoApp from "../components/tools/TodoApp/TodoWrapper";
import Chatbot from "../components/tools/Chatbot";

export const taskBarIcons = [
    {
        name: "My Pc",
        icon: Laptop,
    },
    { name: "Settings", icon: Cog },
    { name: "Terminal", icon: SquareTerminal },
    { name: "Code Editor", icon: VscVscode },
    { name: "Mini Spotify", icon: PiSpotifyLogoBold },
    { name: "Notepad", icon: NotepadText },
    { name: "Chatbot", icon: Bot },
    { name: "Games", icon: Gamepad2 },
    { name: "Stop Watch", icon: Timer },
    { name: "Calculator", icon: Calculator },
    { name: "Todo App", icon: ListTodo },
    { name: "Creator", icon: CircleUser },
    { name: "Paint", icon: Paintbrush },
];

export const appRegistry: Record<string, React.ElementType> = {
    Calculator: Calculatorr,
    Chatbot,
    "Code Editor": CodeEditor,
    Creator,
    Games,
    "Mini Spotify": MiniSpotify,
    "My Pc": MyPc,
    Notepad,
    Paint,
    Settings,
    "Stop Watch": StopWatch,
    Terminal,
    "Todo App": TodoApp,
};
