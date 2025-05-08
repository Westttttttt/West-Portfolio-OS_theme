import {
   Bot,
   Calculator,
   CircleUser,
   Cog,
   Gamepad2,
   Laptop,
   ListTodo,
   NotebookPen,
   SquareTerminal,
   Timer,
} from "lucide-react";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";

const TaskBar = () => {
   return (
      <div className="backdrop-blur-sm max-w-[80%] px-6 absolute mx-auto h-12 bottom-0 rounded-sm border border-[#ffffff46] flex gap-6 items-center justify-center flex-wrap">
         <Laptop className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all " />
         <Cog className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all " />
         <SquareTerminal className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all size-5" />
         <VscVscode className="text-gray-400 hover:scale-125 cursor-pointer transition-all text-2xl" />
         <PiSpotifyLogoBold className="text-gray-400 size-6 hover:scale-125 cursor-pointer transition-all" />
         <NotebookPen className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all size-5" />
         <Bot className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all" />
         <CircleUser className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all " />
         <Gamepad2 className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all " />
         <Timer className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all " />
         <Calculator className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all size-5" />
         <ListTodo className="text-gray-400 stroke-2 hover:scale-125 cursor-pointer transition-all" />
      </div>
   );
};

export default TaskBar;
