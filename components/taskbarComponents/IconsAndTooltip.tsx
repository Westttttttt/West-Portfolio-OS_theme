"use client";
import { useState } from "react";
import Icons from "./Icons";
import Tooltips from "./Tooltips";

const IconsAndTooltip = ({
   taskBarIcon,
}: {
   taskBarIcon: {
      name: string;
      icon: React.ElementType;
   };
}) => {
   const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
   return (
      <div
         className="group relative"
         key={taskBarIcon.name}
         onMouseEnter={() => setHoveredIndex(taskBarIcon.name)}
         onMouseLeave={() => setHoveredIndex(null)}
      >
         <Tooltips hoveredIndex={hoveredIndex} name={taskBarIcon.name} />
         <Icons Icon={taskBarIcon.icon} name={taskBarIcon.name} />
      </div>
   );
};

export default IconsAndTooltip;
