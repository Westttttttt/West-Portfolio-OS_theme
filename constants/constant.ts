import {
    Bot,
    Calculator,
    CircleUser,
    Cog,
    Gamepad2,
    Laptop,
    ListTodo,
    MessageCircleWarning,
    NotepadText,
    Paintbrush,
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
import VisitorFeedback from "../components/tools/VisitorFeedback";
import TodoApp from "../components/tools/TodoApp/TodoWrapper";
import Chatbot from "../components/tools/chatBot/Chatbot";

export const taskBarIcons = [
    {
        name: "My Pc",
        icon: Laptop,
    },
    { name: "Settings", icon: Cog },
    { name: "Visitor Feedback", icon: MessageCircleWarning },
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
    "Visitor Feedback": VisitorFeedback,
    "Todo App": TodoApp,
};

export const songs = [
    {
        songName: "All I Want",
        songSrc: "/assets/songs/AllIWant.mp3",
        songCover:
            "https://i.pinimg.com/736x/e1/7f/29/e17f29e618cc27cfa719740b8af5de1b.jpg",
    },
    {
        songName: "Battle Symphony",
        songSrc: "/assets/songs/BattleSymphony.mp3",
        songCover:
            "https://i.pinimg.com/736x/f8/66/63/f866632efea50786c874e74ed7c08b81.jpg",
    },
    {
        songName: "Dream Aria",
        songSrc: "/assets/songs/DreamAria.mp3",
        songCover:
            "https://i.pinimg.com/736x/34/37/50/343750523fdfaaf69e40222e0808191d.jpg",
    },
    {
        songName: "Hurry Up Tomorror",
        songSrc: "/assets/songs/HurryUpTomorrow.mp3",
        songCover:
            "https://i.pinimg.com/736x/84/ce/dc/84cedc993db1e2a6a26e4b54a8fe8418.jpg",
    },
    {
        songName: "The Man Who Can't be Moved",
        songSrc: "/assets/songs/TheManWhoCantBeMoved.mp3",
        songCover:
            "https://imgs.search.brave.com/HzZ9awHjsP-SeQMDeOPG2wg8vPtd-zONPgilkqcdG1c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk5qZzRabVUy/WWpNdE5UQmxaUzAw/TURJd0xXRm1OV1V0/TlRrMU1tVTRZbVpq/WW1WalhrRXlYa0Zx/Y0djQC5qcGc",
    },
    {
        songName: "To The Bone",
        songSrc: "/assets/songs/ToTheBone.mp3",
        songCover:
            "https://i.pinimg.com/736x/df/ce/4b/dfce4ba04a3fb91c7c8394051b264487.jpg",
    },
    {
        songName: "Waiting For The End",
        songSrc: "/assets/songs/WaitingForTheEnd.mp3",
        songCover:
            "https://i.pinimg.com/736x/90/2f/1a/902f1a5aca89db7627936018b4004a53.jpg",
    },
];
