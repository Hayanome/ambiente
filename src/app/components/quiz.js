import React, { useState } from "react";
import styles from "../page.module.css";

const Quiz = ({
    questionNumber,
    imageSrc,
    question,
    correctAnswer,
    feedbackCorrect,
    feedbackIncorrect,
}) => {
    // Marcar este componente como del lado del cliente

    const [userAnswer, setUserAnswer] = useState("");
    const [showFeedback, setShowFeedback] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si la respuesta es correcta
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            setIsCorrect(true);
            setShowFeedback(true);
        } else {
            setIsCorrect(false);
            setShowFeedback(true);
            setIsIncorrect(true); // Establecer la respuesta como incorrecta
        }
    };

    return (
        <div className="quiz-card">
            <h2>Pregunta {questionNumber}</h2>
            {imageSrc && (
                <img
                    className="quiz-imagen"
                    src={imageSrc}
                    alt="Imagen de pregunta"
                />
            )}
            <p>{question}</p>
            <form className="quizInput" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Ingrese su respuesta aquí"
                    className={`${styles.quizInput} ${
                        isIncorrect ? styles.incorrect : ""
                    }`}
                />
                <button type="submit" className={styles.quizButton}>
                    Enviar respuesta
                </button>
            </form>
            {showFeedback && (
                <div>
                    <p>{isCorrect ? feedbackCorrect : feedbackIncorrect}</p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
