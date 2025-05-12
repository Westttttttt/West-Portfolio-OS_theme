import {
   addMinimizeTools,
   removeCurrentOpenTools,
   Tool,
} from "@/lib/features/toolsSlice";
import { AppDispatch } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Maximize2, Minimize2, Minus, X } from "lucide-react";
import React, { SetStateAction } from "react";

interface Props {
   tools: string;
   fullScreen: boolean;
   setFullScreen: React.Dispatch<SetStateAction<boolean>>;
   AppComponent: React.ElementType;
   dispatch: AppDispatch;
   focusTool: string | Tool;
}

const ToolsRenderer = ({
   tools,
   fullScreen,
   setFullScreen,
   AppComponent,
   dispatch,
   focusTool,
}: Props) => {
   return (
      <>
         {" "}
         <div
            className={cn(
               "flex gap-4 text-right justify-between w-full rounded-t-xl pr-3 py-1 bg-[#1e1e1e] pl-4 items-center z-auto",
               focusTool === tools && "z-50"
            )}
         >
            <p className="text-xs">{tools}</p>
            <div className="flex gap-4">
               <Minus
                  className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                  onClick={() => dispatch(addMinimizeTools(tools))}
               />
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
                  onClick={() => {
                     dispatch(removeCurrentOpenTools(tools));
                     setFullScreen(false);
                  }}
               />
            </div>
         </div>
         <div className="w-full h-full flex justify-center items-center z-auto">
            <AppComponent />
         </div>
      </>
   );
};

export default ToolsRenderer;
