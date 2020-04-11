import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Hero = () => {
  const settings = {
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 10000,
    transitionTime: 1000,
    className: 'hero'
  };

  const renderIntro = () => (
    <div className="hero__titles-div has-text-centered is-uppercase">
      <h1 className="title is-1 hero__titles-div--h1 legend">Free Run</h1>
      <h2 className="subtitle is-3 hero__titles-div--h2 legend">Your best choice of sneakers</h2>
      <a className="button is-medium hero__titles-div--btn legend" href="#store">Shop Now!</a>
    </div>
  );

  return (
    <>
      {renderIntro()}
      <Carousel {...settings}>
        <div className="hero__slide-1"></div>
        <div  className="hero__slide-2"></div>
        <div  className="hero__slide-3"></div>
      </Carousel>
    </>
  );
}
        // <div className="hero__titles-div has-text-centered is-uppercase">

        //   <h1 className="title is-1 hero__titles-div--h1 legend">Free Run</h1>
        //   <h2 className="subtitle is-3 hero__titles-div--h2 legend">Your best choice of sneakers</h2>
        //   <a className="button is-medium hero__titles-div--btn legend" href="#store">Shop Now!</a>
        // </div>

export default Hero;
