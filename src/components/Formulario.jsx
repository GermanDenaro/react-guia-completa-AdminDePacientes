import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const Formulario = ({crearCita}) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false)

    const actualizarCita = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    const submitCita = e => {
        e.preventDefault();

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true)
            return;
        }
        setError(false)

        cita.id = uuidv4();

        crearCita(cita);

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <>
            <h2>Crear Cita</h2>

            {
                error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null
            }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre de la Mascota'
                    onChange={actualizarCita}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nombre del dueño'
                    onChange={actualizarCita}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actualizarCita}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actualizarCita}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea 
                    className='u-full-width'
                    name="sintomas"
                    onChange={actualizarCita}
                    value={sintomas}
                >
                </textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'                
                >
                    Agregar Cita
                </button>
            </form>
        </>
    )
}

export default Formulario
