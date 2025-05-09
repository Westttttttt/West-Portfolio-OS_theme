import React, { useState } from "react";
import {
   motion,
   useTransform,
   AnimatePresence,
   useMotionValue,
   useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

interface Props {
   name: string;
   icon: React.ElementType;
}

export const AnimatedTooltip = ({ items }: { items: Props[] }) => {
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
      <>
         {items.map((item) => (
            <div
               className="group relative "
               key={item.name}
               onMouseEnter={() => setHoveredIndex(item.name)}
               onMouseLeave={() => setHoveredIndex(null)}
            >
               <AnimatePresence mode="popLayout">
                  {hoveredIndex === item.name && (
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
                        className="absolute -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl px-3 py-1 text-xs shadow-xl bg-black"
                     >
                        <div className="relative z-30 text-xs font-bold text-gray-100">
                           {item.name}
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
               <item.icon
                  className={cn(
                     "text-gray-400 stroke-2 hover:scale-125 transition-all size-6 cursor-pointer ",
                     item.name == "Code Editor" && "stroke-0"
                  )}
               />
            </div>
         ))}
      </>
   );
};
