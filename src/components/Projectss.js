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
    caption: 'Ride For Life serves mothers in Uganda to improve maternal and child survival. This app was built during Lambda School build week. I worked on a majority of the frontend and UI, Stephen Tanksley my teammate worked on backend and state managment.'
  },
  {
    src: `${RFL}`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: `${RFL}`,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Projectss = (props) => {
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
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
        <div>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
            <h1>asdasd</h1>
        </div>
    </animated.div>
  );
}

export default Projectss;
