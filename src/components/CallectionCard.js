import React from 'react'

function CallectionCard({bg, text}) {

    return (
        <div className="callection__card" style={{backgroundImage : `url(${bg})`}}>
            <p>{text}</p>
        </div>
    )
}

export default CallectionCard
