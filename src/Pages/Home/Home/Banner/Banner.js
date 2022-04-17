import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css'

import banner1 from '../../../../images/images/banner/banner1.jpg';
import banner2 from '../../../../images/images/banner/banner2.jpg';
import banner3 from '../../../../images/images/banner/banner3.jpg';

const Banner = () => {
const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="slide">Easy to understand</h3>
          <p className="slide-para">Though it's virtual, still our teaching style will make you understand everything, insha Allah!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="slide">Kid Friendly</h3>
          <p className="slide-para">We will make your kid's study handy in this generation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="slide">Benefit of Group Study</h3>
          <p className="slide-para">
            You can group study through online.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
