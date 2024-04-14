"use client";

import { useState } from "react";
import styles from "../../page.module.css";

const Informe = () => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        const email = "fisquim6-8@gsa.edu.co"; // Correo electrónico que deseas copiar

        // Crea un elemento de texto temporal
        const tempInput = document.createElement("input");
        tempInput.value = email;
        document.body.appendChild(tempInput);

        // Selecciona y copia el texto del campo de entrada temporal
        tempInput.select();
        document.execCommand("copy");

        // Elimina el campo de entrada temporal
        document.body.removeChild(tempInput);

        // Marca como copiado y muestra el mensaje
        setCopied(true);

        // Oculta el mensaje después de 3 segundos
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    };

    const openGoogleForm = () => {
        window.open(
            "https://docs.google.com/document/d/1C_MEJZgejCTxrMtNkxLxbmCknE8X0UJkNcZWs-Zik0c/edit?usp=sharing",
            "_blank"
        );
    };
    return (
        <main className="densidad">
            <section className="laboratorio">
                <h2>Laboratorio virtual</h2>
                <div className="laboratorio-introduccion">
                    <div className="laboratorio-video">
                        <center>
                            <h3>Guia de uso de la simulación</h3>

                            <p>observa el siguiente video.</p>
                            <iframe
                                className="laboratorio-video-explicacion"
                                src="https://www.youtube.com/embed/uVI5kiWw20E?si=qI7B-DvHMtOOSf0I"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </center>
                    </div>
                    <div>
                        <div className="informe-descripcion">
                            <h3>Objetivo</h3>
                            <p>
                                Comprender los conceptos fundamentales de la
                                densidad, así como desarrollar habilidades
                                prácticas para medir y calcular estas
                                propiedades utilizando herramientas virtuales de
                                laboratorio.
                            </p>
                        </div>
                        <div className="informe-descripcion">
                            <h3>Introducción</h3>
                            <p>
                                Para finalizar todo lo aprendido en este módulo,
                                haremos un laboratorio virtual que se apoyará en
                                la
                                <a href="/densidad/simulador">
                                    <i> simulación </i>
                                </a>{" "}
                                de la parte superior, no olvides revisar primero
                                que todo el video explicativo del ambiente y
                                estar muy pendiente de las fechas de entrega.
                            </p>
                        </div>
                        <div className="informe-descripcion">
                            <h3>Instrucciones</h3>
                            <p>
                                El presente laboratorio se dividirá en tres
                                secciones, las cuales van a dar la calificación
                                final del trabajo, recuerda oprimir click en
                                cada entrega para conocer las fechas de entrega
                                y las instrucciones que seguir para cada una.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Informe;
