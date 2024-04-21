"use client";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useState } from "react";
import { TextField } from "@mui/material";
import CudaroPreguntas from "@/app/components/cuadoPreguntas";
import LongAnswerImageUpload from "@/app/components/inputImagen";
import ImageUploadModule from "@/app/components/inputImagen";
import imagen from "../../../Assets/Imagen flotabilidad.jpg";

const PrimeraEntrega = () => {
    const [datos, setDatos] = useState([
        {
            id: 1,
            material: "Unicel (icopor)",
            masa: "",
            volumen: "",
            densidad: "",
            puedeFlotar: false,
        },
        {
            id: 2,
            material: "Madera",
            masa: "",
            volumen: "",
            densidad: "",
            puedeFlotar: false,
        },
        {
            id: 3,
            material: "Hielo",
            masa: "",
            volumen: "",
            densidad: "",
            puedeFlotar: false,
        },
        {
            id: 4,
            material: "Ladrillo",
            masa: "",
            volumen: "",
            densidad: "",
            puedeFlotar: false,
        },
        {
            id: 5,
            material: "Aluminio",
            masa: "",
            volumen: "",
            densidad: "",
            puedeFlotar: false,
        },
    ]);

    const guardarDatos = async () => {
        try {
            const response = await fetch("/api/guardarDatos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            });
            if (response.ok) {
                console.log("Datos guardados correctamente");
            } else {
                console.error("Error al guardar los datos");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    };

    const handleChange = (id, campo, valor) => {
        const nuevosDatos = datos.map((fila) =>
            fila.id === id ? { ...fila, [campo]: valor } : fila
        );
        console.log("Datos actualizados:", nuevosDatos);
        setDatos(nuevosDatos);
    };
    return (
        <main className="densidad">
            <section className="informe1">
                <center>
                    <h2>Informe de laboratorio: Primera parte</h2>
                </center>
                <h3 className="informe1-titulo">Antes de iniciar</h3>
                <p className="informe-texto">
                    Todas las actividades que se presentan en la parte 1 solo se
                    deben hacer en la sección de introducción de la simulación
                </p>
                <p className="informe-texto">
                    <strong>Fecha limite de entrega: XXXXXXXX</strong>
                </p>
                <h3 className="tituloPregunta">pregunta 1</h3>
                <p className="informe-texto">
                    A partir del apartado introduccion de la simulacion,
                    complete el cuadro de la parte de abajo indicando la masa,
                    el volumen y la densidad de cada uno de los objetos que se
                    encuentran, recuerde que puede cambiar entre ellos, en la
                    parte superior derecha, junto a la A en color rojo.
                </p>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Material</th>
                                <th>Masa</th>
                                <th>Volumen</th>
                                <th>Densidad</th>
                                <th>Puede Flotar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datos.map((fila) => (
                                <tr key={fila.id}>
                                    <td>{fila.material}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={fila.masa}
                                            onChange={(e) =>
                                                handleChange(
                                                    fila.id,
                                                    "masa",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={fila.volumen}
                                            onChange={(e) =>
                                                handleChange(
                                                    fila.id,
                                                    "volumen",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            value={fila.densidad}
                                            onChange={(e) =>
                                                handleChange(
                                                    fila.id,
                                                    "densidad",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </td>
                                    <td>
                                        <select
                                            value={fila.puedeFlotar || ""}
                                            onChange={(e) =>
                                                handleChange(
                                                    fila.id,
                                                    "puedeFlotar",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                Seleccionar
                                            </option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button variant="contained" onClick={guardarDatos}>
                        Enviar Respuesta
                    </Button>
                </div>

                <CudaroPreguntas
                    questionNumber={2}
                    questionDescription="¿Cuál es tu opinión sobre este tema?A partir de lo anterior, argumente ¿por qué algunos
                        objetos pueden flotar? Y ¿qué relación hay entre la
                        flotabilidad y la densidad?r de lo anterior, argumente ¿por qué algunos
                        objetos pueden flotar? Y ¿qué relación hay entre la
                        flotabilidad y la densidad?"
                    id="outlined-basic"
                    label="Respuesta"
                    placeholder="Ingrese su respuesta aquí"
                    onSubmit={(answer) => {
                        console.log("Respuesta enviada:", answer);
                        // Aquí puedes realizar la lógica para enviar la respuesta a donde necesites
                    }}
                />
                <div className="pregunta3">
                    <ImageUploadModule
                        questionNumber={3}
                        questionText="En la casilla superior derecha escoja el material personalizado, 
                        modifique los valores de masa y volumen y cree uno que sea capaz de flotar 
                        como se muestra en la imagen de la parte derecha. Tome un screenshot de la imagen 
                        y adjúntela al informe."
                    />
                    <Image
                        className="pregunta3Imagen"
                        src={imagen}
                        alt="Ejemplo"
                        width={350}
                        height={196.87}
                    />
                </div>
                <CudaroPreguntas
                    questionNumber={4}
                    questionDescription="¿Un humano es capaz de flotar? Con ayuda de la sección superior izquierda de la simulación y la respuesta de la pregunta 3, justifique su respuesta."
                    id="outlined-basic"
                    label="Respuesta"
                    placeholder="Ingrese su respuesta aquí"
                    onSubmit={(answer) => {
                        console.log("Respuesta enviada:", answer);
                        // Aquí puedes realizar la lógica para enviar la respuesta a donde necesites
                    }}
                />
            </section>
        </main>
    );
};

export default PrimeraEntrega;
