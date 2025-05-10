"use client";
import { cn } from "@/lib/utils";
import {
   motion,
   useTransform,
   AnimatePresence,
   useMotionValue,
   useSpring,
} from "motion/react";
import { useState } from "react";

const IconsAndTooltip = ({
   taskBarIcon,
}: {
   taskBarIcon: {
      name: string;
      icon: React.ElementType;
   };
}) => {
   const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
   const springConfig = { stiffness: 100, damping: 5 };
   const x = useMotionValue(0);
   const rotate = useSpring(
      useTransform(x, [-110, 100], [-45, 45]),
      springConfig
   );

   const translateX = useSpring(
      useTransform(x, [-100, 100], [-50, 50]),
      springConfig
   );

   return (
      <div
         className="group relative"
         key={taskBarIcon.name}
         onMouseEnter={() => setHoveredIndex(taskBarIcon.name)}
         onMouseLeave={() => setHoveredIndex(null)}
      >
         <AnimatePresence mode="popLayout">
            {hoveredIndex === taskBarIcon.name && (
               <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                     opacity: 1,
                     y: 0,
                     scale: 1,
                     transition: {
                        type: "spring",
                        stiffness: 260,
                        damping: 10,
                     },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                     translateX: translateX,
                     rotate: rotate,
                     whiteSpace: "nowrap",
                  }}
                  className="absolute -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col taskBarIcons-center justify-center rounded-xl px-3 py-1 text-xs shadow-xl bg-black"
               >
                  <div className="relative z-30 text-xs font-bold text-gray-100">
                     {taskBarIcon.name}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         <taskBarIcon.icon
            className={cn(
               "text-gray-400 stroke-2 hover:scale-125 transition-all size-6 cursor-pointer ",
               taskBarIcon.name == "Code Editor" && "stroke-0"
            )}
         />
      </div>
   );
};

export default IconsAndTooltip;
