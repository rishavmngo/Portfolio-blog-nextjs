import "./globals.css";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import ThemeSwitch from "@/components/themeSwitch.component";
import ThemeContextProvider from "@/context/theme.context";

const inter = Exo_2({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["cyrillic"],
});

export const metadata: Metadata = {
    title: "Rishav Raj | Portfolio",
    description: "Portfolio of Rishav raj",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className}>
            <body className="bg-[#E3EAD5] dark:bg-[#303030] relative transition-colors">
                <ThemeContextProvider>
                    {children}
                    <ThemeSwitch />
                </ThemeContextProvider>
            </body>
        </html>
    );
}
