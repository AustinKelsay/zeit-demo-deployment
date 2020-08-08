import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom"
import Component from "./Component"


import About from './components/About';
import Projects from './components/Projects';
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import useFadeIn from "./components/useFadeIn";
import Slideshow from "./Slideshow";
import "./App.css"

const Buttons = (props) => {
  const {cSelected, setCSelected} = props

  const fadeIn = useFadeIn();
  
  const cSelector = (num) => {
    if (num === 1){
      cSelected === 1 ? setCSelected(0) : setCSelected(1);
    }
    else if (num === 2){
      cSelected === 2 ? setCSelected(0) : setCSelected(2);
    }
    else if (num === 3){
      cSelected === 3 ? setCSelected(0) : setCSelected(3);
    }
    else setCSelected(0);
  }
    
    return(
      <div className="button-container">
        <div className='buttons'>
        <button className="btn draw-border" onClick={() => cSelector(1)} active={cSelected ===1} ><p className={'btn-text'}>About</p></button>
        <button className="btn draw-border" onClick={() => cSelector(2)} active={cSelected ===2} ><p className={'btn-text'}>Projects</p></button>
        <button className="btn draw-border" onClick={() => cSelector(3)} active={cSelected === 3} ><p className={'btn-text'}>Contact</p></button>
        </div>
        {
          window.innerWidth > 945 ? <Component cSelected={cSelected} setCSelected={setCSelected} /> : null
        }
      </div>
    )
}

export default Buttons;