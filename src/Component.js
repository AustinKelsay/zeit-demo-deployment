import React from "react"
import About from './components/About';
import Projects from './components/Projects';
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import useFadeIn from "./components/useFadeIn";

const Component = (props) => {
    const {cSelected, setCSelected} = props
    const fadeIn = useFadeIn();
    return(
        <div className={fadeIn === true ? "component" : "component-pre"}>
            <div className={cSelected !== 0 || null ? 'component-gradient' : ''}>
                {cSelected ===1 ? <About fadeIn={fadeIn} /> : null}
                {cSelected ===2 ? <Projects fadeIn={fadeIn} /> : null}
                {cSelected ===3 ? <Contact fadeIn={fadeIn} /> : null}
            </div>
        </div>
    )
}

export default Component;