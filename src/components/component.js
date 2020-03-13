import React from 'react';
import About from './About';
import Projects from './Projects';
import Blog from "./Blog";
import Contact from "./Contact";


const Component = (props) => {

  return(
    <>
    {props && (props === 1) ? <About /> : null}
    {props && (props === 2) ? <Projects /> : null}
    {props && (props === 3) ? <Blog /> : null}
    {props && (props === 4) ? <Contact /> : null}
    </>
  )
  
}

export default Component;