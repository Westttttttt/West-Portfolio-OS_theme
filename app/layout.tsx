import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/common/LayoutWrapper";
import { Sour_Gummy } from "next/font/google";

export const metadata: Metadata = {
    title: "West Portfolio",
    description: "Unique Portfolio with unique OS based style",
};

const sourGummy = Sour_Gummy({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={sourGummy.className}>
            <body>
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}
