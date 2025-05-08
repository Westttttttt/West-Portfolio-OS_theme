import React from "react";
import { ThemeProvider } from "./ThemeProvider";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
      >
         {children}
      </ThemeProvider>
   );
};

export default LayoutWrapper;
