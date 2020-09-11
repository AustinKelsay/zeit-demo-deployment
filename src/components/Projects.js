import React, { useState, useEffect } from 'react';
import {useSpring, animated} from "react-spring";
import RFL from "../images/Ride-for-life.jpg"
import "./components.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: `${RFL}`,
    altText: 'Slide 1',
    header: 'Ride for Life',
    caption: 'Ride for life was my first build week at Lambda School as a front end dev. I did all of the styling and components on this app!',
    link: 'https://build-ride-for-life.netlify.app/'
  },
  {
    src: `${RFL}`,
    altText: 'Slide 1',
    header: 'Ride for Life',
    caption: 'Ride for life was my first build week at Lambda School as a front end dev. I did all of the styling and components on this app!',
    link: 'https://build-ride-for-life.netlify.app/'
  },
  {
    src: `${RFL}`,
    altText: 'Slide 1',
    header: 'Ride for Life',
    caption: 'Ride for life was my first build week at Lambda School as a front end dev. I did all of the styling and components on this app!',
    link: 'https://build-ride-for-life.netlify.app/'
  }
];

const Projects = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isToggled, setToggled] = useState(false)

    useEffect(() => {
        setToggled(!isToggled);
        console.log(1);
    }, [])

  const fade = useSpring({
    config: {
      duration: 4000
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
        </div>
      </CarouselItem>
    );
  });

  return (
    <animated.div style={fade} className="projects">
        <Carousel
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
