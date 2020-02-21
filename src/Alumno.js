import React from 'react';

const Alumno = props =>{
    return(
        <section className="p-3 mb-2 bg-primary text-white mx-auto">
            <h2 >{props.name}</h2>
            <p>{props.carnet}</p>
            <p>{props.tarde?'Llego tarde':'Llego a tiempo'}</p>
            <button type ="button"  className="btn btn-danger" onClick={props.deleteAlumno}>Eliminar</button>
        </section>
    )
}

export default Alumno