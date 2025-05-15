import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";

export const metadata: Metadata = {
    title: "West Portfolio",
    description: "Unique Portfolio with unique OS based style",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}
