"use client";

import ToolsRendererWrapper from "@/components/common/ToolsRendererWrapper";
import TaskBar from "@/components/taskbarComponents/Taskbar";
import { wallpaperImages } from "@/constants/constant";
import { changeCurrentWallpaper } from "@/lib/features/wallpaperSlice";
import { RootState } from "@/lib/store";
import axios from "axios";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [currWallpaperName, setCurrWallpaperName] = useState<string | null>(
        null,
    );
    const [currentWallpaper, setCurrWallpaper] = useState<string | null>("");
    const currSelectedWallpaper = useSelector(
        (state: RootState) => state.wallpaperState.currentWallpaper,
    );

    const dispatch = useDispatch();
    console.log("currentWallpaper SRC", currentWallpaper);

    useEffect(() => {
        const fetchWallpaper = async () => {
            const res: { data: { success: boolean; currWallpaper: string } } =
                await axios.get("/api/wallpaper");
            if (res.data.currWallpaper) {
                setCurrWallpaperName(res.data.currWallpaper);
                const selctedWallpaperSrc = wallpaperImages.find(
                    (image) => image.name === currWallpaperName,
                )?.src;
                if (selctedWallpaperSrc) {
                    setCurrWallpaper(selctedWallpaperSrc);
                    dispatch(changeCurrentWallpaper(selctedWallpaperSrc));
                }
            }
        };

        fetchWallpaper();
    }, [currWallpaperName, dispatch]);

    return (
        <div
            className=" w-full h-screen relative flex items-center justify-center overflow-hidden"
            ref={containerRef}
        >
            {currSelectedWallpaper && (
                <img
                    src={currSelectedWallpaper}
                    width={1000}
                    height={1000}
                    alt="bg-image"
                    className="w-[100%] h-screen fixed -z-30 object-cover"
                />
            )}
            <ToolsRendererWrapper containerRef={containerRef} />
            <TaskBar />
        </div>
    );
}
