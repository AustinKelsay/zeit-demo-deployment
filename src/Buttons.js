import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom"


import About from './components/About';
import Projects from './components/Projects';
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css"

const Buttons = () => {
  const [cSelected, setCSelected] = useState(0);
  
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
        <button className="btn draw-border" onClick={() => cSelector(1)} active={cSelected ===1} ><p>About</p></button>
        <button className="btn draw-border" onClick={() => cSelector(2)} active={cSelected ===2} ><p>Projects</p></button>
        <button className="btn draw-border" onClick={() => cSelector(3)} active={cSelected === 3} ><p>Contact</p></button>
        </div>
        <div>
            <>
            {cSelected ===1 ? <About  /> : null}
            {cSelected ===2 ? <Projects  /> : null}
            {cSelected ===3 ? <Contact  /> : null}
            </>
        </div>
      </div>
    )
}

export default Buttons;