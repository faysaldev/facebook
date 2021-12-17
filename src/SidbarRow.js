import { Avatar } from '@material-ui/core'
import React from 'react'

function SidbarRow({ img, Icon, text }) {
    return (
        <div className="sidbar__row">
            {img && <Avatar src={img}/>}
            {Icon && <Icon />}
            <h4>{text}</h4>
        </div>
    )
}

export default SidbarRow
