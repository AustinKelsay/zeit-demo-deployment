import React, {useState} from 'react';
import Buttons from './Buttons';
import Slideshow from "./Slideshow";
import useFadeIn from "./components/useFadeIn";
import Component from "./Component";

import './App.css';

function App() {
  const [cSelected, setCSelected] = useState(0);
  const fadeIn = useFadeIn();
  
  return (
      <main className={fadeIn === true ? "main" : "main-pre"}>
        <div className={cSelected == 0 || null ? 'main-background' : 'main-background-inactive'}>
          <h1 className='header'>Austin Kelsay</h1>
          <Buttons cSelected={cSelected} setCSelected={setCSelected} />
          <Slideshow/>
          {
            window.innerWidth < 945 ? <Component cSelected={cSelected} setCSelected={setCSelected} /> : null
          }
        </div>
      </main>
  );
}

export default App;
