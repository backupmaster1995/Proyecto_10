import React from 'react'
import PropTypes from 'prop-types';

export default function ArtistInfo({artistInfo}) {

    if(Object.keys(artistInfo).length < 1) {
        return null
    }

    const {strArtistThumb, strGenre, strBiographyES, strBiographyEN} = artistInfo

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Foto artista"/>
                <p className="card-text">Género: {strGenre}</p>
                <p className="card-text">Biografía:</p>
                <p className="card-text">{strBiographyES ? strBiographyES : strBiographyEN }</p>
            </div>
        </div>
    )
}

ArtistInfo.propTypes = {
    artistInfo : PropTypes.object.isRequired
}


