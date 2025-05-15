"use client";

import ToolsRendererWrapper from "@/components/common/ToolsRendererWrapper";
import TaskBar from "@/components/taskbarComponents/Taskbar";
import { useRef } from "react";

export default function Home() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    return (
        <div
            className="home-bg w-full h-screen relative bg-cover flex items-center justify-center overflow-hidden"
            ref={containerRef}
        >
            <ToolsRendererWrapper containerRef={containerRef} />
            <TaskBar />
        </div>
    );
}
