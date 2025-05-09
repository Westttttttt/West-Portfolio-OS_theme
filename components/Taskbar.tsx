"use client";

import { taskBarIcons } from "@/constants/constant";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const TaskBar = () => {
   return (
      <div className="backdrop-blur-sm max-w-[80%] px-6 absolute mx-auto h-fit bottom-3 rounded-full border border-[#ffffff46] flex gap-6 items-center justify-center flex-wrap py-2">
         <AnimatedTooltip items={taskBarIcons} />
      </div>
   );
};

export default TaskBar;
