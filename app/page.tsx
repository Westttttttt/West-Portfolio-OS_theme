"use client";
import ToolsRender from "@/components/common/ToolsRender";
import TaskBar from "@/components/taskbarComponents/Taskbar";
import { useRef } from "react";

export default function Home() {
   const containerRef = useRef<HTMLDivElement | null>(null);
   return (
      <div
         className="home-bg w-full h-screen bg-cover flex items-center justify-center overflow-hidden"
         ref={containerRef}
      >
         <ToolsRender containerRef={containerRef} />
         <TaskBar />
      </div>
   );
}
