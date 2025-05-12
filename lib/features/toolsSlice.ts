import { createSlice } from "@reduxjs/toolkit";

export type Tool =
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
   | "My Pc";

type toolState = {
   openTools: Tool[];
   minimizeTools: Tool[];
};

const initialState: toolState = {
   openTools: [],
   minimizeTools: [],
};

const toolsSlice = createSlice({
   name: "toolState",
   initialState,
   reducers: {
      addCurrentOpenTools: (state, actions) => {
         const newTool: Tool = actions.payload;
         if (!state.openTools.includes(actions.payload)) {
            state.openTools.push(newTool);
         }
         if (state.minimizeTools.includes(actions.payload)) {
            state.minimizeTools = state.minimizeTools.filter(
               (tools) => tools != actions.payload
            );
         }
      },
      removeCurrentOpenTools: (state, actions) => {
         state.openTools = state.openTools.filter(
            (tools) => tools !== actions.payload
         );
      },
      addMinimizeTools: (state, actions) => {
         const newMinimizeTools = actions.payload;
         if (!state.minimizeTools.includes(actions.payload)) {
            state.minimizeTools.push(newMinimizeTools);
         }
      },
      // openMinimizeTools: (state, actions) => {
      //    const newOpenMinimizeTools = actions.payload;
      // },
   },
});

export const { addCurrentOpenTools, removeCurrentOpenTools, addMinimizeTools } =
   toolsSlice.actions;
export default toolsSlice.reducer;
