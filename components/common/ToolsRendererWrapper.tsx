"use client";

import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import React, { RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { appRegistry } from "@/constants/constant";
import { cn } from "@/lib/utils";
import ToolsRenderer from "./ToolsRenderer";
import { setFocusTool } from "@/lib/features/toolsSlice";

const ToolsRender = ({
   containerRef,
}: {
   containerRef: RefObject<HTMLDivElement | null>;
}) => {
   const currOpenTools = useSelector(
      (state: RootState) => state.toolState.openTools
   );
   const minimizeTools = useSelector(
      (state: RootState) => state.toolState.minimizeTools
   );
   const fullScreenTools = useSelector(
      (state: RootState) => state.toolState.fullScreenTools
   );
   const foucusTool = useSelector(
      (state: RootState) => state.toolState.focusTool
   );

   const dispatch = useDispatch();
   // const [foucusTool, setFocusTool] = useState<Tool | string>("");
   // console.log(foucusTool);

   return (
      <AnimatePresence>
         {currOpenTools.map((tools) => {
            const AppComponent = appRegistry[tools];
            if (!AppComponent) return null;

            return (
               //I HAVE TO USE THIS motion.div here do that i can avoid the props drill
               <motion.div
                  key={tools}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  drag
                  dragConstraints={containerRef} // limit where i can drag
                  whileDrag={{ scale: 0.9, cursor: "grab" }}
                  dragElastic={0}
                  dragMomentum={false}
                  className={cn(
                     "flex flex-col bg-[#1c1c1c] border border-[#fafafa6a rounded-xl overflow-hidden bg-linear-to-bl from bg-[#1c1c1c] tobg-white flex items-center absolute",
                     fullScreenTools.includes(tools) && "w-full h-full",
                     minimizeTools.includes(tools) && "hidden",
                     foucusTool === tools && "z-3"
                  )}
                  onPointerDown={() => {
                     dispatch(setFocusTool(tools));
                  }}
               >
                  <ToolsRenderer
                     tools={tools}
                     AppComponent={AppComponent}
                     dispatch={dispatch}
                     key={tools}
                     fullScreenTools={fullScreenTools}
                  />
               </motion.div>
            );
         })}
      </AnimatePresence>
   );
};

export default ToolsRender;
