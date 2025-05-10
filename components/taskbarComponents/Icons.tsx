"use client";

import { addCurrentOpenTools } from "@/lib/features/toolsSlice";
import { cn } from "@/lib/utils";
import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "motion/react";

type Props = {
   Icon: React.ElementType;
   name: string;
};

const Icons = ({ Icon, name }: Props) => {
   const dispatch = useDispatch();

   return (
      <motion.div whileTap={{ scale: 0.65 }}>
         <Icon
            className={cn(
               "text-gray-400 stroke-2 hover:scale-125 transition-all size-6 cursor-pointer ",
               name == "Code Editor" && "stroke-0"
            )}
            onClick={() => dispatch(addCurrentOpenTools(name))}
         />
      </motion.div>
   );
};

export default Icons;
