import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="/user.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/user.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/user.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
