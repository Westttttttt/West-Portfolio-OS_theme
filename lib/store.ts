import { configureStore } from "@reduxjs/toolkit";
import toolState from "./features/toolsSlice";

export const store = configureStore({
    reducer: {
        toolState: toolState,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
