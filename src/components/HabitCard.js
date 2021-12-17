import React from 'react'

function HabitCard({ icon,text ,see}) {
    return (
        <div className={`habit__card ${see && "seeall"}`}>
            {icon && <span>{icon}</span>}
            <p>{text}</p>
        </div>
    )
}

export default HabitCard
