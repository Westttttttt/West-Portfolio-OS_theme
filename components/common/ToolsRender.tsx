"use client";

import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import React, { RefObject, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Maximize2, Minimize2, Minus, X } from "lucide-react";
import { removeCurrentOpenTools } from "@/lib/features/toolsSlice";
import { appRegistry } from "@/constants/constant";
import { cn } from "@/lib/utils";

const ToolsRender = ({
   containerRef,
}: {
   containerRef: RefObject<HTMLDivElement | null>;
}) => {
   const currOpenTools = useSelector(
      (state: RootState) => state.openTools.openTools
   );
   const dispatch = useDispatch();
   const [fullScreen, setFullScreen] = useState(false);

   return (
      <AnimatePresence>
         {currOpenTools.map((tools) => {
            const AppComponent = appRegistry[tools];
            if (!AppComponent) return null;

            return (
               <motion.div
                  key={tools}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  drag
                  dragConstraints={containerRef} // limit where i can drag
                  whileDrag={{ scale: 0.9, cursor: "grab", zIndex: 100 }}
                  dragElastic={0}
                  dragMomentum={false}
                  className={cn(
                     "flex flex-col bg-[#1c1c1c] border border-[#fafafa6a rounded-xl overflow-hidden bg-linear-to-bl from bg-[#1c1c1c] tobg-white flex items-center",
                     fullScreen && "w-full h-full"
                  )}
               >
                  <div className="flex gap-4 text-right justify-between w-full rounded-t-xl pr-3 py-1 bg-[#1e1e1e] pl-4 items-center">
                     <p className="text-xs">{tools}</p>
                     <div className="flex gap-4">
                        <Minus className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1" />
                        {!fullScreen ? (
                           <Maximize2
                              className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                              onClick={() => setFullScreen(true)}
                           />
                        ) : (
                           <Minimize2
                              className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                              onClick={() => setFullScreen(false)}
                           />
                        )}
                        <X
                           className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                           onClick={() =>
                              dispatch(removeCurrentOpenTools(tools))
                           }
                        />
                     </div>
                  </div>
                  <div className="w-full h-full flex justify-center items-center">
                     <AppComponent />
                  </div>
               </motion.div>
            );
         })}
      </AnimatePresence>
   );
};

export default ToolsRender;
