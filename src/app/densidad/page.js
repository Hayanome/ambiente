"use client";

import styles from "../page.module.css";
import { useState } from "react";
import Quiz from "../components/quiz";

export default function Densidad() {
    // Marcar este componente como del lado del cliente

    const [masa, setMasa] = useState("");
    const [volumen, setVolumen] = useState("");
    const [densidad, setDensidad] = useState(null);

    const handleCalculate = () => {
        const parsedMasa = parseFloat(masa);
        const parsedVolumen = parseFloat(volumen);

        if (
            !isNaN(parsedMasa) &&
            !isNaN(parsedVolumen) &&
            parsedVolumen !== 0
        ) {
            const calculatedDensidad = parsedMasa / parsedVolumen;
            setDensidad(calculatedDensidad);
        } else {
            // Manejar el caso en el que los valores ingresados no sean válidos
            setDensidad(null);
        }
    };

    const handleReset = () => {
        setMasa("");
        setVolumen("");
        setDensidad(null);
    };

    const openGoogleForm = () => {
        window.open(
            "https://docs.google.com/document/d/1C_MEJZgejCTxrMtNkxLxbmCknE8X0UJkNcZWs-Zik0c/edit?usp=sharing",
            "_blank"
        );
    };

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
    return (
        <main>
            <section className="video-introduccion">
                <img
                    src="https://w7.pngwing.com/pngs/899/571/png-transparent-video-cameras-computer-icons-drawing-camera-angle-camera-icon-film.png" // Ruta relativa a la carpeta `public`
                    alt="Descripción de la imagen"
                    style={{ width: "500px", height: "300px" }} // Estilo para controlar las dimensiones de la imagen
                />
                <p>video pendiente donde explico todo el modulo</p>
            </section>
            <section className="densidad-inicio">
                <h1 className="densidad-titulo">La Densidad</h1>
                <p className="densidad-inicio-descripcion">
                    Felicitaciones por llegar al último nivel de nuestro módulo,
                    en el vamos a explorar el concepto densidad, su relación con
                    la masa y el volumen, además veremos como esta propiedad de
                    la materia es fundamental para que algunos objetos floten
                    sobre el agua por más que intentemos hundirlos, como es el
                    caso del plástico y la madera.
                    <br />
                    <br /> Para finalizar haremos nuestro proyecto final de
                    clase que consistirá en un laboratorio de tres fases, donde
                    con ayuda de una simulación nos adentraremos en cada uno de
                    los detalles más profundos de la densidad.
                    <br />
                    <br />
                    Acompáñame en este proceso de aprendizaje.
                </p>
            </section>
            <section className="densidad-explicacion">
                <h2>¿Qué es la densidad?</h2>
                <div className="densidad-explicacion-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/eCwlcdSY2DU?si=U8UJ1NgcG0fvoTCv"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
                {/* <div>
          <label htmlFor="masaInput">Masa (kg):</label>
          <input
            id="masaInput"
            type="number"
            value={masa}
            onChange={(e) => setMasa(e.target.value)}
          />
          <br />
          <label htmlFor="volumenInput">Volumen (ml):</label>
          <input
            id="volumenInput"
            type="number"
            value={volumen}
            onChange={(e) => setVolumen(e.target.value)}
          />
          <br />
          <button onClick={handleCalculate}>Calcular Densidad</button>
          <button onClick={handleReset}>Resetear Valores</button>

          {densidad !== null && (
            <div>
              <p>La densidad es de: {densidad}</p>
            </div>
          )}
        </div> */}
            </section>
            <section className="ejercicios">
                <h2>Revisemos lo aprendido</h2>
                <p className="ejercicio-descripcion">
                    Realiza los siguientes ejercicios
                </p>
                <div className="ejercicios-pregunta">
                    <Quiz
                        className="ejercicio-pregunta-ficha"
                        questionNumber={1}
                        imageSrc="https://img.freepik.com/fotos-premium/cubo-plata-o-metal_427873-271.jpg"
                        question="Un cubo de metal tiene una masa de 250 g y un volumen de 50 cm³. ¿Cuál es su densidad en g/cm³? (indique solo una respuesta numerica)"
                        correctAnswer="5"
                        feedbackCorrect="¡Respuesta correcta!"
                        feedbackIncorrect="Recuerda que la densidad se calcula dividiendo la masa entre el volumen. Inténtalo de nuevo"
                    />
                    <Quiz
                        className="ejercicio-pregunta-ficha"
                        questionNumber={2}
                        imageSrc="https://dpbfouxy1lg2q.cloudfront.net/64597/64597-1.webp"
                        question="Una esfera de hierro tiene un radio de 10 centímetros y una masa de 2 kilogramos. ¿Cuál es su densidad en g/cm³?  (indique solo una respuesta numerica con 2 decimales)"
                        correctAnswer="0.47"
                        feedbackCorrect="¡Respuesta correcta!"
                        feedbackIncorrect="Recuerda que no tenemos el volumen de la esfera; primero debemos calcularlo y luego convertir los dos kilogramos a gramos para obtener la respuesta utilizando el mismo proceso que usamos en la pregunta anterior."
                    />
                    <Quiz
                        className="ejercicio-pregunta-ficha"
                        questionNumber={3}
                        imageSrc="https://img.freepik.com/fotos-premium/vieja-balsa-madera-flotando-agua_379858-7871.jpg"
                        question="Se sumerge un bloque de madera en agua y se observa que el nivel del agua sube 8 cm. Si el bloque tiene una longitud de 10 cm, una anchura de 5 cm y una altura desconocida, y se sabe que su masa es de 300 g, calcula la densidad de la madera en g/cm³. (indique solo una respuesta numerica)"
                        correctAnswer="0.75"
                        feedbackCorrect="¡Respuesta correcta!"
                        feedbackIncorrect="Considera que debes calcular la altura de la madera en función del desplazamiento del agua. Luego, simplemente determina el volumen y aplica la fórmula de la densidad."
                    />
                </div>
            </section>
            <section className="laboratorio">
                <div className="laboratorio-introduccion">
                    <h2>Laboratorio virtual</h2>
                    <h3>Introducción</h3>
                    <p>
                        Para finalizar todo lo aprendido en este módulo, haremos
                        un laboratorio virtual que se apoyará en la simulación
                        de la parte inferior, no olvides revisar primero que
                        todo el video explicativo del ambiente y estar muy
                        pendiente de las fechas de entrega.
                    </p>
                    <h3>Instrucciones</h3>
                    <p>
                        El presente laboratorio se dividirá en tres secciones,
                        las cuales van a dar la calificación final del trabajo,
                        todas las instrucciones están en el documento llamado
                        informe de laboratorio.
                    </p>
                    <h3>Informe de laboratorio</h3>

                    <div className={styles.container}>
                        <p>
                            Recuerda que este informe debe ser realizado vía
                            Google Forms, agregando al docente como editor (mi
                            correo es: fisquim6-8@gsa.edu.co), en el enlace de
                            la parte inferior podrás acceder a la plantilla del
                            informe para que empieces tu trabajo. Para copiar mi
                            correo
                            <button
                                onClick={copyToClipboard}
                                className={styles.button}
                            >
                                <p className={styles.email}>haz click aqui</p>
                            </button>
                        </p>
                        {copied && <p className={styles.message}>¡Copiado!</p>}
                    </div>

                    <button
                        className={styles.googleButton}
                        onClick={openGoogleForm}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" // Ruta relativa a la carpeta `public`
                            alt="Google Docs"
                            className={styles.googleIcon}
                        />
                        <span className={styles.googleText}>
                            Abrir Google Forms
                        </span>
                    </button>
                </div>
                <div className="laboratorio-video">
                    <h3>Guia de uso de la simulación</h3>
                    <p>observa el siguiente video.</p>
                    <img
                        src="https://w7.pngwing.com/pngs/899/571/png-transparent-video-cameras-computer-icons-drawing-camera-angle-camera-icon-film.png" // Ruta relativa a la carpeta `public`
                        alt="Descripción de la imagen"
                        style={{ width: "500px", height: "300px" }} // Estilo para controlar las dimensiones de la imagen
                    />
                    <p>video pendiente donde explico la simulacion</p>
                </div>
                <div className="simulacion-densidad">
                    <iframe
                        src="https://phet.colorado.edu/sims/html/density/latest/density_es.html"
                        width="80%"
                        height="600"
                        allowfullscreen
                    ></iframe>
                </div>
            </section>
        </main>
    );
}
