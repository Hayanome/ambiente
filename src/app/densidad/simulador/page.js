const simulador = () => {
    return (
        <main className="densidad">
            <section className="simulacion-densidad">
                <center>
                    <h2 className="simulador-titulo">Simulador Densidad</h2>
                    <iframe
                        src="https://phet.colorado.edu/sims/html/density/latest/density_es.html"
                        width="90%"
                        height="900"
                        allowfullscreen
                    ></iframe>
                </center>
            </section>
        </main>
    );
};

export default simulador;
