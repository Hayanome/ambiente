"use client";
import Quiz from "@/app/components/quiz";

const ejercicios = () => {
    return (
        <main className="densidad">
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
        </main>
    );
};

export default ejercicios;
