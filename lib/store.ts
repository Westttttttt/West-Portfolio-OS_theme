import { configureStore } from "@reduxjs/toolkit";
import openToolsReducer from "./features/toolsSlice";

export const store = configureStore({
   reducer: {
      openTools: openToolsReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
