import React, {useEffect, useState} from 'react';
import Buttons from './Buttons';
import Component from "./components/component";
import Slideshow from "./Slideshow";

import './App.css';

function App() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    function setter() {
      setFadeIn(true);
    }

    setTimeout(setter, 2000)
  })
  
  return (
    <main className={fadeIn === true ? "main" : "main-pre"}>
      <h1 className='header'>Austin Kelsay</h1>

      <Buttons />
      <Component className="component" />
      <Slideshow />
    </main>
  );
}

export default App;
