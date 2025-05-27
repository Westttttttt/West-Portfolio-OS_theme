import { connectDB } from "@/lib/db";
import Wallpaper, { IWallpaper } from "@/models/wallpaper.model";

export async function GET() {
    await connectDB();
    try {
        const currWallpaper: IWallpaper | null = await Wallpaper.findOne();

        if (!currWallpaper) {
            const newWallpaper = Wallpaper.create({
                selectedWallpaperName: "CosmicNight",
            });

            const savedWallpaper = (await newWallpaper).save();
            return new Response(
                JSON.stringify({
                    success: true,
                    currWallpaper: (await savedWallpaper).selectedWallpaperName,
                }),
            );
        }
        return new Response(
            JSON.stringify({
                success: true,
                currWallpaper: currWallpaper.selectedWallpaperName,
            }),
        );
    } catch (error) {
        console.log("Error" + error);
        return new Response(
            JSON.stringify({
                success: false,
                currentWallpaper: null,
            }),
        );
    }
}

export async function PATCH(req: Request) {
    await connectDB();
    try {
        const { selectedWallpaperName } = await req.json();
        const wallpaper = await Wallpaper.findOne();
        if (!wallpaper) {
            const editedWallpaper = await Wallpaper.create({
                selectedWallpaperName: selectedWallpaperName,
            });
            return new Response(
                JSON.stringify({
                    success: true,
                    currentWallpaper: editedWallpaper,
                }),
            );
        } else {
            const editedWallpaper = await (wallpaper.selectedWallpaperName =
                selectedWallpaperName);
            await wallpaper.save();
            return new Response(
                JSON.stringify({
                    success: true,
                    currentWallpaper: editedWallpaper,
                }),
            );
        }
    } catch (error) {
        console.log("Error", error);
        return new Response(
            JSON.stringify({
                success: false,
                currentWallpaper: null,
            }),
        );
    }
}
