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
    fullScreenTools: Tool[];
    focusTool: Tool | null;
};

const initialState: toolState = {
    openTools: [],
    minimizeTools: [],
    fullScreenTools: [],
    focusTool: null,
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
                    (tools) => tools != actions.payload,
                );
            }
        },
        removeCurrentOpenTools: (state, actions) => {
            state.openTools = state.openTools.filter(
                (tools) => tools !== actions.payload,
            );
        },
        addMinimizeTools: (state, actions) => {
            const newMinimizeTool = actions.payload;
            if (!state.minimizeTools.includes(actions.payload)) {
                state.minimizeTools.push(newMinimizeTool);
            }
        },

        addFullScreenTools: (state, actions) => {
            const newFullScreenTool = actions.payload;
            if (!state.fullScreenTools.includes(actions.payload)) {
                state.fullScreenTools.push(newFullScreenTool);
            }
        },

        removeFullScreenTools: (state, actions) => {
            state.fullScreenTools = state.fullScreenTools.filter(
                (tool) => tool != actions.payload,
            );
        },

        setFocusTool: (state, actions) => {
            const newFocusTool = actions.payload;
            state.focusTool = newFocusTool;
        },
    },
});

export const {
    addCurrentOpenTools,
    removeCurrentOpenTools,
    addMinimizeTools,
    addFullScreenTools,
    removeFullScreenTools,
    setFocusTool,
} = toolsSlice.actions;
export default toolsSlice.reducer;
