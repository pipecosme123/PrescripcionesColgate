import React from 'react';
import Producto from './Producto';
import "../css/Prescripcion.css";

const Prescripcion = ({ data }) => {

    let fecha = new Date();
    const Actual = fecha.toLocaleDateString();
    // console.log();
    // dateNow.toDateString();

    return (
        <div className="Prescripcion">
            <div className="inputs">
                <p>Dr(a).: <input className={`inputText inputText${data.idA}`} type="text" /></p>
                <p>Paciente: <input className={`inputText inputText${data.idA}`} type="text" /></p>
                <p>Fecha: <b>{Actual}</b></p>
            </div>
            <Producto prod={data.productos} val={data.idA}></Producto>
            <button className={`btn${data.idA}`}>Generar</button>
        </div>
    );
};

export default Prescripcion;