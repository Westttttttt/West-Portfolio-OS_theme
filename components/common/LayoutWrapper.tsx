"use client";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { Provider } from "react-redux";
import { store } from "@/lib/store";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <Provider store={store}>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
         >
            {children}
         </ThemeProvider>
      </Provider>
   );
};

export default LayoutWrapper;
