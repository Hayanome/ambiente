import { Dosis, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { dosis } from "./fonts";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${dosis.className} antialiased`}>
                <header className="navbar">
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
