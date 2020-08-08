import React, { useCallback, useState } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { useMeasure } from "react-use";

const AnimatedScrollContainer = styled.div`
  padding: 0;
  margin: 0;
  color: red;
  position: "absolute";
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

const BackgroundLayer = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 200%;
  position: relative;
  width: 100%;
  height: 100vh;
`;

function getPercentage(current, total) {
  return (current * 100) / total;
}

const BackgroundGradient = () => {
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.8
      });
    
      const [refBackground, { height }] = useMeasure();
    
      const [position, setPosition] = useState(0);
    
      const onScroll = useCallback(e => {
        setPosition(e.target.scrollTop);
      }, []);
    
      const backgroundPosition = getPercentage(position, height);
    
      return (
        <BackgroundLayer
          ref={refBackground}
          style={{
            backgroundPosition: `${backgroundPosition}% ${backgroundPosition}%`
          }}
        >
          <AnimatedScrollContainer onScroll={onScroll}>

          </AnimatedScrollContainer>
        </BackgroundLayer>
      );
}

export default BackgroundGradient;