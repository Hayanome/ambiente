import Link from "next/link";

function Navbar() {
    return (
        <nav className="navbar">
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
                        <span className="navbar-item">Densidad</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
