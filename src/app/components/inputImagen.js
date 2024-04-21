import React, { useState } from "react";
import { Button } from "@mui/material";

const ImageUploadModule = ({ questionNumber, questionText }) => {
    const [image, setImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        // Check if the file format is JPG or PNG
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please upload an image in JPG or PNG format.");
        }
    };

    const handleImageSubmit = () => {
        // Code for sending the image to the database goes here
        // You can use image variable to access the uploaded image data
        console.log("Image submitted:", image);
    };

    return (
        <div className="imagenUpload">
            <h3 className="tituloPregunta">Pregunta {questionNumber}</h3>
            <p className="descripcionPregunta">{questionText}</p>
            <div className="contenedorImagen">
                <input
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={handleImageUpload}
                />
                {image && (
                    <img
                        className="imagenSubida"
                        src={image}
                        alt="Uploaded"
                        style={{ maxWidth: "100%", marginTop: "10px" }}
                    />
                )}
            </div>
            <br />
            <Button
                variant="contained"
                color="primary"
                onClick={handleImageSubmit}
            >
                Enviar Respuesta
            </Button>
        </div>
    );
};

export default ImageUploadModule;
