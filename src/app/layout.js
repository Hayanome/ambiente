import { Dosis, Inter } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Ambiente de aprendizaje",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <header className="navbar">
                    <Navbar />
                </header>
                {children}
            </body>
        </html>
    );
}
