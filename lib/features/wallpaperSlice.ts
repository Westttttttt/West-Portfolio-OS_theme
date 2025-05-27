import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //we will store the wallpaper src here not the name of the wallpaper
    currentWallpaper: "",
};

const wallpaperSlice = createSlice({
    name: "wallpaperState",
    initialState,
    reducers: {
        changeCurrentWallpaper: (state, actions) => {
            const newSelectedWallpaper: string = actions.payload;
            state.currentWallpaper = newSelectedWallpaper;
        },
    },
});

export const { changeCurrentWallpaper } = wallpaperSlice.actions;
export default wallpaperSlice.reducer;
