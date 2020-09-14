import React, {useEffect, useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import {useSpring, animated} from "react-spring";
import './components.css';

//Add some boxshaddow to make these cards look better !!

const About = () => {
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

    return(
        <animated.div style={fade} className='about'>
          <Card className='about-card'>
            <CardImg className='about-photo' src="./Me-min.jpg" />
            <CardBody>
                <CardTitle tag='h4'>Austin Kelsay</CardTitle>
                <CardSubtitle className='card-text'>Web Developer - Bitcoiner - Musician</CardSubtitle>
                <CardText className='card-text'>I care about human rights, data dignity, privacy, freedom, and the betterment of human well being.</CardText>
            </CardBody>
          </Card>

          <div className="about-right">

            <div className='links'>
            <SocialIcon className="icon" url="https://twitter.com/ASeries_ofTubes" />
            <SocialIcon className="icon" url="https://www.linkedin.com/in/austin-kelsay-533943157/" />
            <SocialIcon className="icon" url="https://github.com/AustinKelsay" />
            </div>

            <div className='mission'>
              <h4>My mission:</h4>
              <p>To be surrounded by and participating in software that has a meaningful impact on individuals
              </p>
              <h4>My history:</h4>
              <p>Since discovering Bitcoin in late 2016 I have been working towards becoming a software develper who can contribute towards this ecosystem. 
                I joined Lambda school in mid 2019 looking to accelarate my learning and break into the industry.
              </p>
            </div>

          </div>
        </animated.div>
    )
}

export default About;