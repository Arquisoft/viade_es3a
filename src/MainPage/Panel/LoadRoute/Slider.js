import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const properties = {
    infiniteLoop: true,
    showThumbs: false
}

const Slider = (props) => {
    return (
        <Carousel {...properties}>
            {
                props.images.map((image, i) => (
                    <div>
                        <img src={image} className="media" />
                        <p className="legend">Image {i + 1}</p>
                    </div>
                ))
            }
            {
                props.videos.map((video, i) => (
                    <div>
                        <video controls className="media">
                            <source src={video}/>
                                Your browser does not support the video tag.
                            </video>
                        <p className="legend">Video {i + 1}</p>
                    </div>
                ))
            }
        </Carousel>
    );
};
export default Slider;