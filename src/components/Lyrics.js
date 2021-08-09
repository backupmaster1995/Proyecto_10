import React from 'react'
import PropTypes from 'prop-types';

export default function Lyrics({lyrics}) {

    if(!lyrics) {
        return null
    }
    
    return (
        <>
            <h2>Letra Canción</h2>
            <p className="letra">{lyrics}</p>
        </>
    )
}

Lyrics.propTypes = {
    lyrics : PropTypes.string.isRequired
}

