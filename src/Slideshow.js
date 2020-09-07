import React from 'react';
import { Fade } from 'react-slideshow-image';

import "./Slideshow.css";
import img1 from "./Images/img1-min.jpg";
import img2 from "./Images/img2-min.jpg";
import img3 from "./Images/img3-min.jpg";
import img4 from "./Images/img4-min.jpg";
import img5 from "./Images/img5-min.jpg";
import img6 from "./Images/img6-min.jpg";
import img7 from "./Images/img7-min.jpg";
import img8 from "./Images/img8-min.jpg";
 
const fadeImages = [
  img1, img2, img3, img4, img5, img6, img7, img8
];
 
const fadeProperties = {
  duration: 7000,
  transitionDuration: 18500,
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
            <img src={fadeImages[0]} alt='sky background' />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]} alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]} alt='sky background'/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;