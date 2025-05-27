import { configureStore } from "@reduxjs/toolkit";
import toolState from "./features/toolsSlice";
import wallpaperState from "./features/wallpaperSlice";

export const store = configureStore({
    reducer: {
        toolState: toolState,
        wallpaperState: wallpaperState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
