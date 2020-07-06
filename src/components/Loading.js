import React from 'react';
import loader from '../media/loader.svg'

function Loading() {
        return (
                <div className="loading">
                        <img src={loader} />
                </div>
        )
}

export default Loading;
