"use client";

import { taskBarIcons } from "@/constants/constant";
import IconsAndTooltip from "./IconsAndTooltip";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const IconsAndTooltipWrapper = () => {
   const currOpenTools = useSelector(
      (state: RootState) => state.openTools.openTools
   );
   console.log(currOpenTools);

   return (
      <>
         {taskBarIcons.map((taskBarIcon) => (
            <IconsAndTooltip taskBarIcon={taskBarIcon} key={taskBarIcon.name} />
         ))}
      </>
   );
};

export default IconsAndTooltipWrapper;
