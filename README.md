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

#### 🗓️ May 13, 2025 – Progress Update

1. Implemented minimize features
2. Thinking 1000 times whether should i ass resizable or not
3. And i think ui part is mostly done

#### 🗓️ May 16, 2025 - How fast the date changes haha

1. change my ugly font
2. Brush up some core concept again :)

#### 🗓️ May 17, 2025

1. Make Stop watch app work ^~^
2. Learn new things about re-render in react
3. Done creatorMessage app(Just a message from the creator)
4. Change the draggable login, now the app can only drag when we drag only on the top bar
5. Change my apps color to match the theme
6. Done paint app

#### 🗓️ May 18, 2025

1. Get Gemini Api key from aistudio
2. Implement Gemini api with nextjs api route and @google/genai sdk(from documentation)
3. Convinced ai that the creator is me 🤣
4. finally chatbot is done(Not yet tho 🤣)
5. Add Syntex highlighting to my chatbot , if the bot reply with code
6. Make it responsive to full screen

#### 🗓️ May 19, 2025

1. Done NoteApp
2. Done Mini Sootify app-> Unfortunately, spotify api only let us play 30s , so i dont use it 

##### 💡 Things I learned on the way

1. Brush up my redux-toolkit knowledge(More like learning for the first time , i mean i forgot around 99% of it , as i always use zustand)

2. Learn some interesting motion(which is an animation library) properties like `layout`, `dragMomentum`

3. I didn't know that useState re-renders the component but useRef doesn't haha

4. Learn some new browser event handler

#### Just in case

i) Layout: this property will give us smooth animattion whenever we resize or change the size of tag (whatever we called)

ii) dragMomentum: this fix the element when we drag,i mean suppose when we drag too fast it's move automtically this property fixes that problem :)

#### Points to keep that in mind!

AnimatePresence only works when components are mounted or unmounted (i.e., added to or removed from the DOM). So if you're just toggling visibility with className="hidden", the component is still mounted — meaning AnimatePresence can't animate it.

#### Obstacles (might be a little bit long 😅)

At first, I tried implementing the drag functionality for apps using the onPointerDown event. As a result, the user could drag the app from anywhere — which is terrible UX. Typically, desktop apps only allow dragging from the top bar, right? But in my case, you could drag the app from literally anywhere 🤣.
I thought, "Eh, not a big deal" (maybe I lacked visionary 😅) — until I started building the Paint 🖌️ app.
The problem? When I tried drawing, it dragged the entire app window instead of letting me draw 😆. That had me rolling.

##### How I fixed it:

1. I added an isDraggable state to store a boolean.

2. I added event listeners to the top bar of the app:
   onMouseEnter → triggers when the mouse enters the top bar zone.
   onMouseOut → triggers when the mouse leaves the top bar zone.

3. Then I passed `drag={isDraggable}` to the motion.div, so now it only allows dragging when the mouse is over the top bar.
