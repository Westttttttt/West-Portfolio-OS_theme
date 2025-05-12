"use client";

import {
   addCurrentOpenTools,
   setFocusTool,
   Tool,
} from "@/lib/features/toolsSlice";
import { cn } from "@/lib/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import { RootState } from "@/lib/store";

type Props = {
   Icon: React.ElementType;
   name: string;
};

const Icons = ({ Icon, name }: Props) => {
   const dispatch = useDispatch();
   const minimizeTools = useSelector(
      (state: RootState) => state.toolState.minimizeTools
   );
   const currOpenTools = useSelector(
      (state: RootState) => state.toolState.openTools
   );

   return (
      <motion.div whileTap={{ scale: 0.65 }}>
         <Icon
            className={cn(
               "text-gray-400 stroke-2 hover:scale-125 transition-all size-6 cursor-pointer ",
               name == "Code Editor" && "stroke-0"
            )}
            onClick={() => {
               dispatch(addCurrentOpenTools(name));
               dispatch(setFocusTool(name));
            }}
         />
         {(minimizeTools.includes(name as Tool) ||
            currOpenTools.includes(name as Tool)) && (
            <span className="absolute top-[14px] left-[10px] font-black text-blue-500">
               .
            </span>
         )}
      </motion.div>
   );
};

export default Icons;
