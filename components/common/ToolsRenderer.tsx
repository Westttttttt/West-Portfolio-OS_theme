import {
   addFullScreenTools,
   addMinimizeTools,
   removeCurrentOpenTools,
   removeFullScreenTools,
   Tool,
} from "@/lib/features/toolsSlice";
import { AppDispatch } from "@/lib/store";
import { Maximize2, Minimize2, Minus, X } from "lucide-react";
import React from "react";

interface Props {
   tools: string;
   AppComponent: React.ElementType;
   dispatch: AppDispatch;
   fullScreenTools: Tool[];
}

const ToolsRenderer = ({
   tools,
   AppComponent,
   dispatch,
   fullScreenTools,
}: Props) => {
   return (
      <>
         {" "}
         <div className="flex gap-4 text-right justify-between w-full rounded-t-xl pr-3 py-1 bg-[#1e1e1e] pl-4 items-center">
            <p className="text-xs">{tools}</p>
            <div className="flex gap-4">
               <Minus
                  className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                  onClick={() => dispatch(addMinimizeTools(tools))}
               />
               {!fullScreenTools.includes(tools as Tool) ? (
                  <Maximize2
                     className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                     onClick={() => dispatch(addFullScreenTools(tools))}
                  />
               ) : (
                  <Minimize2
                     className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                     onClick={() => dispatch(removeFullScreenTools(tools))}
                  />
               )}
               <X
                  className="text-gray-400 size-5 hover:opacity-90 hover:bg-[#f2edf21f] rounded-full p-1"
                  onClick={() => {
                     dispatch(removeCurrentOpenTools(tools));
                     dispatch(removeFullScreenTools(tools));
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
