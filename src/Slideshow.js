import React from 'react';
import { Fade } from 'react-slideshow-image';

import "./Slideshow.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";

// Scaled images
import {srcset1} from "./utils/srcSets"
import {srcset2} from "./utils/srcSets"
import {srcset3} from "./utils/srcSets"
import {srcset4} from "./utils/srcSets"
import {srcset5} from "./utils/srcSets"
import {srcset6} from "./utils/srcSets"
import {srcset7} from "./utils/srcSets"
import {srcset8} from "./utils/srcSets"


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
            <img src={fadeImages[0]}
                 srcset={{srcset1}}
            alt='sky background' />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]}
                srcset={{srcset2}}
            alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} 
            srcset={{srcset3}}
            alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} 
            srcset={{srcset4}}
            alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[4]} 
            srcset={{srcset5}}
            alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[5]} 
            srcset={{srcset6}}
            alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[6]}
            srcset={{srcset7}}
            alt='sky background'/>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[7]}
            srcset={{srcset8}}
            alt='sky background'/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;