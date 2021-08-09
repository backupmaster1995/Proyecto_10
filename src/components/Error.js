import React from 'react'
import PropTypes from 'prop-types';

export default function Error({message}) {
    return (
        <p className="alert alert-danger text-center p-2">{message}</p>
    )
}

Error.propTypes = {
    message : PropTypes.string.isRequired
}

