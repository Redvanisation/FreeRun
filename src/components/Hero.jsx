import React from 'react';
import { Link } from 'react-scroll';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Hero = () => {
  const settings = {
    showArrows: false,
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 8000,
    transitionTime: 1000,
    className: 'hero'
  };

  const renderIntro = () => (
    <div className="hero__titles-div has-text-centered is-uppercase">
      <h1 className="title is-1 hero__titles-div--h1 legend">Free Run</h1>
      <h2 className="subtitle is-3 hero__titles-div--h2 legend">Your best choice of sneakers</h2>
      <Link
        className="button is-medium hero__titles-div--btn legend"
        to="store"
        smooth
        duration={500}
      >
        Shop Now
      </Link>
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

export default Hero;
