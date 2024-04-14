import React from "react";

function DensidadExplicacion() {
    return (
        <main className="densidad">
            <section className="densidad-explicacion">
                <h2>¿Qué es la densidad?</h2>
                <iframe
                    className="densidad-video"
                    src="https://www.youtube.com/embed/eCwlcdSY2DU?si=U8UJ1NgcG0fvoTCv"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </section>
        </main>
    );
}

export default DensidadExplicacion;
