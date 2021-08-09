import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Error from "./Error"

export default function Form({setUserSearch}) {

    const [values, setValues] = useState({
        artist:"",
        song:""
    })
    const [error, setError] = useState(false)

    const {artist, song} = values

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!artist || !song) {
            return setError(true)
        }
        setError(false)
        setUserSearch(values)
    }

    return (
        <div className="bg-info">
            {error && <Error message="Todos los campos son obligatorios" />}
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    )
}

Form.propTypes = {
    setUserSearch : PropTypes.func.isRequired
}
