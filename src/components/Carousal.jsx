"use client";

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousal.css";

class CarousaL extends Component {
    render() {
        return (
            <div className="carousel-container">
                <Carousel
                    className="Carousel-Header"
                    showArrows={false} // Removes arrows
                    showThumbs={false} // Removes thumbnail navigation
                    showStatus={false} // Removes slide index status
                    autoPlay={true} // Enables auto-play
                    infiniteLoop={true} // Keeps looping
                    interval={5000} // Adjust speed
                >
                    <div >
                        <img className="carousel-image" src="/images/beautiful-waterfall-landscape.jpg" alt="Slide 1"/>
                        <div className = "Header-Text">
                            <div className = "Slogan ">
                            <h1 className="text-6xl font-bold text-white">

                                    Just Select <span className="text-[#FFEA66]">Travel</span> & Enjoy
                                </h1>
                                <p className="mt-2">
                                    Discover hassle-free travel with Cabit, just select 
                                    your destination,
                                    <br/> 
                                    
                                    are you ready for seamless pickups and drop-off?
                                </p>
                            </div>

                        {/*    <div className = "Slogan-Image">
                                <img  src = "/images/taxiDriver.png"/>
                            </div>  */}
                        </div>
                    </div>
                    <div>
                        <img className="carousel-image" src="/images/Happy_Image.jpeg" alt="Slide 2"/>
                        <div className = "Header-Text">
                            
                            <div className = "Slogan row">
                            <h1 className="text-4xl font-bold text-white">
                                    Just Select Travel & Enjoy
                                </h1>
                                <p>
                                    Discover hassle-free travel with Cabit, just select 
                                    your destination, 
                                    and we'll create an AI-generated itinerary, book your entire 
                                    package, 
                                    and ensure taxi
                                    are ready for seamless pickups and drop-offs.
                                </p>
                            </div>
                            {/*    <div className = "Slogan-Image">
                                <img  src = "/images/taxiDriver.png"/>
                            </div>  */}
                        </div>
                    </div>
                    <div>
                        <img className="carousel-image" src="/images/minimalist-photorealistic-road.jpg" alt="Slide 3"/>
                        <div className = "Header-Text">
                            <div className = "Slogan row">
                            <h1 className="text-5xl font-bold text-white">
                                    Just Select Travel & Enjoy
                                </h1>
                                <p>
                                    Discover hassle-free travel with Cabit, just select 
                                    your destination, 
                                    and we'll create an AI-generated itinerary, book your entire 
                                    package, 
                                    and ensure taxi
                                    are ready for seamless pickups and drop-offs.
                                </p>
                            </div>
                            {/*    <div className = "Slogan-Image">
                                <img  src = "/images/taxiDriver.png"/>
                            </div>  */}
                        </div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarousaL;
