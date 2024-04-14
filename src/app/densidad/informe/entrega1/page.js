"use client";

import { useState } from "react";

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
            <p className="informe-texto">
                A partir del apartado introduccion de la simulacion, complete el
                cuadro de la parte de abajo indicando la masa, el volumen y la
                densidad de cada uno de los objetos que se encuentran, recuerde
                que puede cambiar entre ellos, en la parte superior derecha,
                junto a la A en color rojo.
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
                                        <option value="">Seleccionar</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={guardarDatos}>Guardar</button>
            </div>
        </main>
    );
};

export default PrimeraEntrega;
