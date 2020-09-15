import React, { useState, useEffect } from 'react';
import {useSpring, animated} from "react-spring";
import { v4 as uuidv4 } from 'uuid';
import RFL from "../images/RideForLife.jpg"
import anyFit from "../images/anyFit.jpg"
import gameOfLife from "../images/gameOfLife.jpg"
import fbExplorer from "../images/fbExplorer.jpg"
import "./components.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    src: `${gameOfLife}`,
    altText: "austin's game of life app image",
    header: "Austin's game of life",
    github: 'https://github.com/AustinKelsay/austins-game-of-life',
    caption: 'Game of Life was my computer science build week project. I have always been fascinated by celular automata and conways game of life in paticular! This is a React single page application (still working on making it mobile responsive)',
    link: 'https://austins-game-of-life.vercel.app/'
  },
  {
    src: `${fbExplorer}`,
    altText: "fb-explorer app image",
    header: "Facebook Explorer",
    github: 'https://github.com/AustinKelsay/fb-explorer',
    caption: "fb-explorer is a web app that helps individuals reclaim their Facebook data. A user can log into Facebook, download their data, drop it in, and explore it in a sleek dashboard that doesn't collect any information. fb-explorer is still under construction as I am working towards MVP.",
    link: 'https://fb-explorer.vercel.app/'
  },
  {
    src: `${anyFit}`,
    altText: 'Anywhere Fitness app image',
    header: 'Anywhere Fitness',
    github: 'https://github.com/AustinKelsay/back-end',
    caption: 'Anywhere Fitness was my backend buildweek project (frontend is a little buggy). I built the entire backend with Node/Express, a Postgres database, and a tests on all of the endpoints with supertest and a local SQL3 test db!',
    link: 'https://musing-knuth-63bdac.netlify.app/register'
  },
  {
    src: `${RFL}`,
    altText: 'Ride for Life app image',
    header: 'Ride for Life',
    github: 'https://github.com/AustinKelsay/Front-End-1/tree/AustinKelsay',
    caption: 'Ride for life was my first build week at Lambda School as a front end dev and the first full-stack app I ever worked on. I did all of the styling and components!',
    link: 'https://build-ride-for-life.netlify.app/'
  },
];

const Projects = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isToggled, setToggled] = useState(false)

    useEffect(() => {
        setToggled(!isToggled);
    }, [])

  const fade = useSpring({
    config: {
      duration: 3000
    },
    opacity: isToggled ? 1 : 0
  });

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <a href={item.link} target="_blank">
        <img src={item.src} alt={item.altText} />
        </a>
        <div className='project-info'>
            <h1>{item.header}</h1>
            <p>{item.caption}</p>
            <a href={item.github}>github</a>
        </div>
      </CarouselItem>
    );
  });

  return (
    <animated.div style={fade} className="projects">
        <Carousel
        key={uuidv4}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    </animated.div>
  );
}

export default Projects;
