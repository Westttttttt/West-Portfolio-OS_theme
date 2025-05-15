#### 🗓️ May 11, 2025 – Progress Update

##### 🔧 Implemented Features:

1. Added a custom taskbar

2. Placed app icons inside the taskbar
3. Integrated tooltips using Aceternity UI
4. Set up global state with Redux Toolkit
5. Created currOpenTools slice to manage open apps
6. Built ToolsRender to display tools based on state
7. Implemented addCurrOpenTools to handle icon clicks
8. Created individual tool components, rendered via ToolsRender
9. Implemented removeCurrentOPenTools
10. Implement Drag features, thanks to motion
11. Implement Resize features

#### May 🗓️ May 13, 2025 – Progress Update

1. Implemented minimize features
2. Thinking 1000 times whether should i ass resizable or not
3. And i think ui part is mostly done

##### 💡 Things I learned on the way

1. Brush up my redux-toolkit knowledge(More like learning for the first time , i mean i forgot around 99% of it , as i always use zustand)

2.Learn some interesting motion(which is an animation library) properties like `layout`, `dragMomentum`

#### Just in case

i) Layout: this property will give us smooth animattion whenever we resize or change the size of tag (whatever we called)

ii) dragMomentum: this fix the element when we drag,i mean suppose when we drag too fast it's move automtically this property fixes that problem :)

#### Points to keep that in mind!

AnimatePresence only works when components are mounted or unmounted (i.e., added to or removed from the DOM). So if you're just toggling visibility with className="hidden", the component is still mounted — meaning AnimatePresence can't animate it.
