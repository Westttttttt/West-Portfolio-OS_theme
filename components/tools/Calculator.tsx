"use client";

import { useState } from "react";
import { Delete } from "lucide-react";

const Calculator = () => {
   const [input, setInput] = useState("");
   const [result, setResult] = useState("");
   const [history, setHistory] = useState<string[]>([]);

   const handleClick = (value: string) => {
      if (value === "C") {
         setInput("");
         setResult("");
      } else if (value === "=") {
         try {
            const sanitizedInput = input
               .replace(/×/g, "*")
               .replace(/÷/g, "/")
               .replace(/%/g, "/100");
            const res = eval(sanitizedInput);
            setResult(String(res));
            setHistory([...history, `${input} = ${res}`]);
            setInput(String(res));
         } catch {
            setResult("Error");
         }
      } else if (value === "⌫") {
         setInput(input.slice(0, -1));
      } else {
         setInput((prev) => prev + value);
      }
   };

   const buttons = [
      ["C", "%", "+", "⌫"],
      ["7", "8", "9", "×"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "0"],
      [".", "="],
   ];

   return (
      <div className="w-72 mx-auto ">
         {/* History Display */}
         <div className="p-4 text-right text-gray-400 text-sm h-12 overflow-hidden">
            {history.slice(-3).map((calc, index) => (
               <div key={index} className="truncate">
                  {/* {calc}   */}
               </div>
            ))}
         </div>

         {/* Main Display */}
         <div className="p-4 text-right">
            <div className="text-4xl text-white font-light mb-2">
               {result || input || "0"}
            </div>
         </div>

         {/* Buttons Grid */}
         <div className="grid grid-cols-4 gap-[1px] bg-[#2d2d2d]">
            {buttons.map((row, i) => (
               <div key={i} className="grid grid-cols-4 col-span-4 gap-[1px]">
                  {row.map((btn) => (
                     <button
                        key={btn}
                        onClick={() => handleClick(btn)}
                        className={`
                           ${btn === "=" || btn === "." ? "col-span-2" : ""}
                           h-16
                           bg-[#1c1c1c]
                           hover:bg-[#2d2d2d]
                           transition-colors
                           ${
                              ["C", "⌫", "%", "×", "-", "+", "="].includes(btn)
                                 ? "text-blue-400"
                                 : "text-white"
                           }
                           text-xl
                           font-light
                           flex
                           items-center
                           justify-center
                        `}
                     >
                        {btn === "⌫" ? <Delete size={20} /> : btn}
                     </button>
                  ))}
               </div>
            ))}
         </div>
      </div>
   );
};

export default Calculator;
