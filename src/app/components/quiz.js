import React, { useState } from "react";
import styles from "../page.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
    const handleChange = (e) => {
        setUserAnswer(e.target.value);
        setIsIncorrect(false); // Reiniciar el estado de incorrecto cuando cambia la respuesta
    };
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
            <p className="question">{question}</p>
            <form className="quizInput" onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    value={userAnswer}
                    onChange={handleChange}
                    placeholder="Ingrese su respuesta aquí"
                    variant="outlined" // Puedes cambiar el estilo del TextField aquí
                    error={isIncorrect} // Marcar como error si es incorrecto
                    helperText={isIncorrect ? "Respuesta incorrecta" : ""} // Mostrar mensaje de error
                />
                <Button
                    variant="contained"
                    type="submit"
                    className={styles.quizButton}
                >
                    Enviar respuesta
                </Button>
            </form>
            {showFeedback && (
                <div>
                    <p className="question">
                        {isCorrect ? feedbackCorrect : feedbackIncorrect}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
