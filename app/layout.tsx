import "./globals.css";
import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";

const inter = Exo_2({ subsets: ["latin"] });

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
            <body className="bg-[#E3EAD5]">{children}</body>
        </html>
    );
}
