import React, {useEffect, useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
  } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import {useSpring, animated} from "react-spring";
import './components.css';

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
            <CardImg className='about-photo' src="./me.jpg" />
            <CardBody>
                <CardTitle tag='h4'>Austin Kelsay</CardTitle>
                <CardSubtitle className='card-text'>Web Develope - Musician - Bitcoiner</CardSubtitle>
                <CardText className='card-text'>Developer with a passion for Bitcoin, open source, and data ownership.</CardText>
                <CardText className='card-text'><a href='https://docs.google.com/document/d/1jC5hzLv7_Nl0o8midKWwX7eGHdKGWcUbF8pQW7O6dKo/edit?usp=sharing' target="_blank" rel="noopener noreferrer">My resume</a></CardText>
            </CardBody>
          </Card>

          <div className="about-right">

            <div className='links'>
            <SocialIcon className="icon" url="https://twitter.com/ASeries_ofTubes" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon className="icon" url="https://www.linkedin.com/in/austinkelsay/" target="_blank" rel="noopener noreferrer"/>
            <SocialIcon className="icon" url="https://github.com/AustinKelsay" target="_blank" rel="noopener noreferrer"/>
            </div>

            <div className='mission'>
              <h4>My mission:</h4>
              <p>To participate in software that is meaningful for individuals.</p>
              <p>To be surounded by colleagues and teams building impactful software.</p>
              <h4>My history:</h4>
              <p>
              I began my journey as a self taught developer with a passion for open-source projects. 
              However, I learn faster in a team environment, so I got serious 2 years ago & enrolled in Lambda School. 
              Now I am ready to work alongside a team of talented engineers to build something great together.
              </p>
            </div>

          </div>
        </animated.div>
    )
}

export default About;
