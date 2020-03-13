import React from 'react';
import Buttons from './Buttons';
import Component from "./components/component";
import Slideshow from "./Slideshow";

import './App.css';

function App() {

  
  return (
    <main className='main'>
      <h1 className='header'>Austin Kelsay</h1>

      <Buttons />
      <Component />
      <Slideshow />
    </main>
  );
}

export default App;
