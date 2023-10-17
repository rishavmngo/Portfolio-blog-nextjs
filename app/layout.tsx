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
            <body className="bg-[#E3EAD5] relative">
                <div
                    className="w-full -z-10 h-screen absolute bg-cover bg-center "
                    style={{
                        backgroundImage: `url(
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23d8c3b8' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23b59191' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23d2bdc6' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e8dadb' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23dcd6da' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23bb9ea1' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23c7bbc5' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23aa637c' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23cec7ce' points='1540 900 1401 632 1096 900'/%3E%3Cpolygon fill='%239a6988' points='1630 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23f8f6f8' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23ab7bab' points='943 900 1210 900 971 687'/%3E%3C/svg%3E"
                    )`,
                    }}
                ></div>
                {children}
            </body>
        </html>
    );
}
