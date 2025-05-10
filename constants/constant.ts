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
