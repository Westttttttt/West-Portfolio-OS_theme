import { createSlice } from "@reduxjs/toolkit";

type Tool =
   | "Settings"
   | "Terminal"
   | "Code Editor"
   | "Mini Spotify"
   | "Notepad"
   | "Chatbot"
   | "Games"
   | "Stop Watch"
   | "Calculator"
   | "Todo App"
   | "Creator"
   | "Paint"
   | "My Pc"

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
         if (!state.openTools.includes(actions.payload)) {
            state.openTools.push(newTool);
         }
      },
   },
});

export const { addCurrentOpenTools } = openToolsSlice.actions;
export default openToolsSlice.reducer;
