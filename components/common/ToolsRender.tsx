"use client";

import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import Calculator from "../tools/Calculator";
import CodeEditor from "../tools/CodeEditor";
import Creator from "../tools/Creator";
import Games from "../tools/Games";
import MiniSpotify from "../tools/MiniSpotify";
import MyPc from "../tools/MyPc";
import Notepad from "../tools/Notepad";
import Paint from "../tools/Paint";
import Settings from "../tools/Settings";
import StopWatch from "../tools/StopWatch";
import Terminal from "../tools/Terminal";
import TodoApp from "../tools/TodoApp";
import Chatbot from "../tools/Chatbot";
import { Maximize2, Minus, X } from "lucide-react";
import { removeCurrentOpenTools } from "@/lib/features/toolsSlice";

// Tool registry
const appRegistry: Record<string, React.ElementType> = {
   Calculator,
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

const ToolsRender = () => {
   const currOpenTools = useSelector(
      (state: RootState) => state.openTools.openTools
   );
   const dispatch = useDispatch();

   return (
      <AnimatePresence>
         {currOpenTools.map((tools) => {
            const AppComponent = appRegistry[tools];
            if (!AppComponent) return null;

            return (
               <motion.div
                  key={tools}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex flex-col backdrop-blur-md"
               >
                  <div className="flex gap-4 text-right justify-end w-full rounded-t-xl pr-3 py-1 bg-none">
                     <Minus className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1" />
                     <Maximize2 className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1" />
                     <X
                        className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                        onClick={() => dispatch(removeCurrentOpenTools(tools))}
                     />
                  </div>
                  <AppComponent />
               </motion.div>
            );
         })}
      </AnimatePresence>
   );
};

export default ToolsRender;
