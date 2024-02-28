import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="navbar">
                    <div className="navbar-start">Logo</div>
                    <div className="navbar-end">
                        <Link className="navbar-item" href="/">
                            Inicio
                        </Link>
                        <Link className="navbar-item" href="/masa">
                            Masa
                        </Link>
                        <Link className="navbar-item" href="/volumen">
                            Volumen
                        </Link>
                        <Link className="navbar-item" href="/densidad">
                            Densidad
                        </Link>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
