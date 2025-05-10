import { createSlice } from "@reduxjs/toolkit";

type Tool =
   | "Settings"
   | "Terminal"
   | "Code Editor"
   | "Mini Spotify"
   | "Notepad"
   | "Chatbot"
   | "Games"
   | "Stop watch"
   | "Calculator"
   | "Todo app"
   | "Creator"
   | "Paint";

type openToolsState = {
   openTools: Tool[];
};

const initialState: openToolsState = {
   openTools: [],
};

const openToolsSlice = createSlice({
   name: "currentOpenTools",
   initialState,
   reducers: {
      addCurrentOpenTools: (state, actions) => {
         const newTool: Tool = actions.payload;
         state.openTools.push(newTool);
      },
   },
});

export const { addCurrentOpenTools } = openToolsSlice.actions;
export default openToolsSlice.reducer;
