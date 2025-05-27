import { wallpaperImages } from "@/constants/constant";
import { changeCurrentWallpaper } from "@/lib/features/wallpaperSlice";
import { RootState } from "@/lib/store";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wallpaper = () => {
    const currSelectedWallpaper = useSelector(
        (state: RootState) => state.wallpaperState.currentWallpaper,
    );
    const dispatch = useDispatch();
    // const [selectedWallpaperName, setSelectedWallpaperName] = useState<
    //     string | null
    // >(null);

    const [currSelectedWallpaperSpec, setCurrSelectedWallpaperSpec] = useState<
        string | undefined
    >("");

    console.log("Spec", currSelectedWallpaperSpec);
    // useEffect(() => {
    //     const fetchWallpaper = async () => {
    //         const res: { data: { success: boolean; currWallpaper: string } } =
    //             await axios.get("/api/wallpaper");
    //         if (res.data.currWallpaper) {
    //             setSelectedWallpaperName(res.data.currWallpaper);
    //             const selctedWallpaperSrc = wallpaperImages.find(
    //                 (image) => image.name === selectedWallpaperName,
    //             )?.src;
    //             dispatch(changeCurrentWallpaper(selctedWallpaperSrc));
    //         }
    //     };

    //     fetchWallpaper();
    // }, [dispatch, selectedWallpaperName]);

    async function handleWallpaperChange(name: string) {
        const res: { data: { success: boolean; currWallpaper: string } } =
            await axios.patch("/api/wallpaper", {
                selectedWallpaperName: name,
            });
        if (res.data.success) {
            // setSelectedWallpaperName(name);
            const selectedWallpaperSrc = wallpaperImages.find(
                (image) => image.name === name,
            )?.src;
            if (selectedWallpaperSrc) {
                setCurrSelectedWallpaperSpec(selectedWallpaperSrc);
                dispatch(changeCurrentWallpaper(selectedWallpaperSrc));
            }
        }
    }

    return (
        <div className="flex items-center justify-center flex-col p-2 gap-3">
            {/* 📦 Wallpaper Display Box */}
            <div className="h-[30rem] w-[50rem] object-cover border bg-center bg-cover transition-all duration-300 rounded-[10px]">
                {currSelectedWallpaper && (
                    <img
                        src={currSelectedWallpaper}
                        className="h-full w-full object-cover bg-center"
                    />
                )}
            </div>

            {/* 🖼️ Wallpaper Options */}
            <div className="flex gap-4">
                {wallpaperImages.map((img) => (
                    <Image
                        key={img.name}
                        src={img.src}
                        alt={img.name}
                        width={1000}
                        height={500}
                        onClick={() => handleWallpaperChange(img.name)}
                        className={`w-20 transition-all h-20 object-cover rounded-[10px] cursor-pointer border-2 hover:scale-110
			${
                currSelectedWallpaper === img.src
                    ? "border-blue-500"
                    : "border-transparent"
            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Wallpaper;
