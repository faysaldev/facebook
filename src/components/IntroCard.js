import React from 'react';
import StoreIcon from '@material-ui/icons/Store';

function IntroCard({ img, text,link}) {
    return (
        <div className="intro__text">
            <img src={img} />
            <p>{text} {link && <a href="#" style={{textDecoration:"underline"}}>{link}</a>}</p>
        </div>
    )
}

export default IntroCard
