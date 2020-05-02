import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Slider.css";

const properties = {
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    transitionTime: 350,
    stopOnHover: true,
    useKeyboardArrows: true,
};

const Slider = (props) => {
    return (
        <Carousel className="carousel-style" {...properties}>
            {
                props.images.map((image, i) => (
                    <div className="slider-item-div">
                        <img src={image} className="media" />
                    </div>
                ))
            }
            {
                props.videos.map((video, i) => (
                    <div className="slider-item-div">
                        <video controls className="media">
                            <source src={video} />
                                Your browser does not support the video tag.
                            </video>
                    </div>
                ))
            }
        </Carousel>
    );
};
export default Slider;