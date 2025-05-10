"use client";

import { Delete } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const Calculator = () => {
   const [input, setInput] = useState("");
   const [result, setResult] = useState("");

   const handleClick = (value: string) => {
      if (value === "C") {
         setInput("");
         setResult("");
      } else if (value === "=") {
         try {
            const res = eval(input);
            setResult(String(res));
         } catch {
            setResult("Error");
         }
      } else if (value === "x") {
         setInput(input.slice(0, input.length - 1));
      } else {
         setInput((prev) => prev + value);
      }
   };

   const buttons = [
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "0",
      ".",
      "/",
      "=",
      "+",
      "C",
   ];

   return (
      <motion.div className="w-82 h-[30rem] border rounded-b-xl backdrop-blur-md bg-white/10 p-4 flex flex-col">
         <div className="bg-black/50 text-white p-4 rounded text-right min-h-[5rem]">
            <div className="text-lg text-gray-300">{input || "0"}</div>
            <div className="text-xl font-bold">{result || ""}</div>
         </div>
         <div className="flex flex-wrap gap-4 mt-6 w-full justify-center">
            {buttons.map((btn) => (
               <motion.button
                  key={btn}
                  className="bg-[#111111b1] text-gray-400 cursor-pointer overflow-hidden text-lg font-bold hover:bg-[#111111b1] h-14 w-14 flex items-center justify-center rounded-2xl"
                  onClick={() => handleClick(btn)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.2 }}
               >
                  {btn === "x" ? <Delete /> : btn && btn === "*" ? "x" : btn}
               </motion.button>
            ))}
         </div>
      </motion.div>
   );
};

export default Calculator;
