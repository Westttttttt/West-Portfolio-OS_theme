"use client";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import React from "react";
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

//this is just like a Object, but more typeSafety
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

   return (
      <motion.div>
         {currOpenTools.map((tools) => {
            const AppComponent = appRegistry[tools];
            if (!AppComponent) {
               return null;
            }
            return <AppComponent key={tools} />;
         })}
      </motion.div>
   );
};

export default ToolsRender;
