import React, {useState} from 'react';
import { Button } from 'reactstrap';


import About from './components/About';
import Projects from './components/Projects';
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css"

const Buttons = () => {

  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
    
    return(
      <div className="button-container">
        <div className='buttons'>
        <button class="btn draw-border" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)} ><p>About</p></button>
        <button class="btn draw-border" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)} ><p>Projects</p></button>
        <button class="btn draw-border" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)} ><p>Blog</p></button>
        <button class="btn draw-border" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)} ><p>Contact</p></button>
        </div>
        <div>
            <>
            {cSelected.includes(1) ? <About /> : null}
            {cSelected.includes(2) ? <Projects /> : null}
            {cSelected.includes(3) ? <Blog /> : null}
            {cSelected.includes(4) ? <Contact /> : null}
            </>
        </div>
      </div>
    )
}

export default Buttons;