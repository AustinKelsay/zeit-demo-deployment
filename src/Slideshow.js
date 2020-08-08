import React from 'react';
import { Fade } from 'react-slideshow-image';
import Buttons from './Buttons';

import "./Slideshow.css";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
import img7 from "./Images/img7.jpg";
import img8 from "./Images/img8.jpg";
 
const fadeImages = [
  img1, img2, img3, img4, img5, img6, img7, img8
];
 
const fadeProperties = {
  duration: 7000,
  transitionDuration: 4500,
  infinite: true,
  indicators: false,
  arrows: false,
  autoplay: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {

  return (
    <div className="slide-container">
      <Fade className="real-slide-container" {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]} />
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;