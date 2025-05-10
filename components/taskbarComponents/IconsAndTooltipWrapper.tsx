"use client";

import { taskBarIcons } from "@/constants/constant";
import IconsAndTooltip from "./IconsAndTooltip";

const IconsAndTooltipWrapper = () => {
   return (
      <>
         {taskBarIcons.map((taskBarIcon) => (
            <IconsAndTooltip taskBarIcon={taskBarIcon} key={taskBarIcon.name} />
         ))}
      </>
   );
};

export default IconsAndTooltipWrapper;
