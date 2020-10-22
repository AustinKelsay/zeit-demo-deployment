import React, {useEffect, useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
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
                <CardText className='card-text'><a href='https://docs.google.com/document/d/1ak2MCwn-ppA3UJl799LdBRIb5yI_rpphnvB0Y8ZodI0/edit?usp=sharing' target="_blank" rel="noopener noreferrer">My resume</a></CardText>
            </CardBody>
          </Card>

          <div className="about-right">

            <div className='links'>
            <SocialIcon className="icon" url="https://twitter.com/ASeries_ofTubes" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon className="icon" url="https://www.linkedin.com/in/austin-kelsay-615SATS/" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon className="icon" url="https://github.com/AustinKelsay" target="_blank" rel="noopener noreferrer"/>
            </div>

            <div className='mission'>
              <h4>My mission:</h4>
              <p>To participate in software that has a meaningful impact.</p>
              <p>To be surounded by individuals and teams building impactful software.</p>
              <h4>My history:</h4>
              <p>Since discovering Bitcoin in 2017 I have understood the meaningful impact that software can have for individuals. 
                I began my journey as a developer with this ethos and have continued with the intention to work on a team building impactful software.
                I joined Lambda School in mid 2019 to accelerate my learning and break into the industry.
              </p>
            </div>

          </div>
        </animated.div>
    )
}

export default About;
