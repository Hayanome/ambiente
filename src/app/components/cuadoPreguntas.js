import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../globals.css";

function CuadoPreguntas(props) {
    const { questionNumber, questionDescription, onSubmit } = props;
    const [userAnswer, setUserAnswer] = React.useState("");

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleSubmit = () => {
        onSubmit(userAnswer);
        setUserAnswer("");
    };

    return (
        <Box className="pregunta2">
            <h3 className="tituloPregunta">Pregunta {questionNumber}</h3>
            <p className="descripcionPregunta">{questionDescription}</p>
            <TextField
                className="long-answer-container"
                id="outlined-basic"
                label="Ingrese su respuesta aquí"
                variant="outlined"
                multiline
                rows={4}
                value={userAnswer}
                onChange={handleInputChange}
                fullWidth
            />
            <Button variant="contained" onClick={handleSubmit}>
                Enviar respuesta
            </Button>
        </Box>
    );
}

export default CuadoPreguntas;
