import { Document, Model, model, models, Schema } from "mongoose";

export interface IWallpaper extends Document {
    selectedWallpaperName: string;
}

const wallpaperSchema = new Schema<IWallpaper>({
    selectedWallpaperName: {
        type: String,
        required: true,
        default: "CosmicNight",
    },
});

const Wallpaper: Model<IWallpaper> =
    models.Wallpaper || model<IWallpaper>("Wallpaper", wallpaperSchema);

export default Wallpaper;
