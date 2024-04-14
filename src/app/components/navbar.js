"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [submenuInformeOpen, setSubmenuInformeOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            // Verificar si router.pathname está definido
            // Verificar si estamos en la página de Densidad o cualquiera de sus submenús
            if (
                pathname.startsWith("/densidad") ||
                pathname === "densidad/ejercicios" || // Ejemplo de otro submenú
                pathname === "densidad/simulador" || // Ejemplo de otro submenú
                pathname === "densidad/introduccion" // Ejemplo de otro submenú
            ) {
                setSubmenuOpen(true);
            } else {
                setSubmenuOpen(false);
            }
        }
    }, [pathname]);

    useEffect(() => {
        if (pathname) {
            // Verificar si router.pathname está definido
            // Verificar si estamos en la página de Densidad o cualquiera de sus submenús
            if (
                pathname.startsWith("/densidad/informe") ||
                pathname.startsWith("densidad/simulador")
            ) {
                setSubmenuInformeOpen(true);
            } else {
                setSubmenuInformeOpen(false);
            }
        }
    }, [pathname]);

    return (
        <nav className="navbar fixed-top">
            <div className="navbar-brand">
                <Link href="/">
                    <span className="navbar-logo">
                        <img
                            src="https://www.gimnasiosanangelo.edu.co/wp-content/uploads/2021/03/logo-header.png" // Ruta relativa desde la carpeta 'public'
                            alt="Logo"
                            width={90} // Ancho de la imagen en píxeles
                            height={75} // Alto de la imagen en píxeles
                        />
                    </span>
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <Link href="/">
                        <span className="navbar-item">Inicio</span>
                    </Link>
                    <Link href="/masa">
                        <span className="navbar-item">Masa</span>
                    </Link>
                    <Link href="/volumen">
                        <span className="navbar-item">Volumen</span>
                    </Link>
                    <Link href="/densidad">
                        <span
                            className={`navbar-item ${
                                submenuOpen ? "active" : ""
                            }`}
                        >
                            Densidad
                        </span>

                        {submenuOpen && (
                            <div className="submenu">
                                <Link href="/densidad">
                                    <span className="submenu-item">
                                        <center>Introducción</center>
                                    </span>
                                </Link>
                                <Link href="/densidad/explicacion-densidad">
                                    <span className="submenu-item">
                                        <center>¿Qué es la densidad?</center>
                                    </span>
                                </Link>
                                <Link href="/densidad/ejercicios">
                                    <span className="submenu-item">
                                        <center>Ejercicios de Repaso</center>
                                    </span>
                                </Link>
                                <Link
                                    href="/densidad/informe"
                                    className={`navbar-item ${
                                        submenuInformeOpen
                                            ? "active-informe"
                                            : ""
                                    }`}
                                >
                                    <span>
                                        <center>Informe de Laboratorio</center>
                                    </span>

                                    {submenuInformeOpen && (
                                        <div className="submenu-entrega">
                                            <Link href="/densidad/informe/entrega1">
                                                <span className="submenu-item">
                                                    <center>
                                                        Primera entrega
                                                    </center>
                                                </span>
                                            </Link>
                                            <Link href="/densidad/informe/entrega2">
                                                <span className="submenu-item">
                                                    <center>
                                                        Segunda Entrega
                                                    </center>
                                                </span>
                                            </Link>
                                            <Link href="/densidad/informe/entrega3">
                                                <span className="submenu-item">
                                                    <center>
                                                        Tercera Entrega
                                                    </center>
                                                </span>
                                            </Link>
                                        </div>
                                    )}
                                </Link>
                                <Link href="/densidad/simulador">
                                    <span className="submenu-item">
                                        <center>Simulador de Densidad</center>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
