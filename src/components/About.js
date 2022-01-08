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
                <CardSubtitle className='card-text'>Developer - Bitcoiner - Musician</CardSubtitle>
                <br />
                <CardText className='card-text'>Software developer with a passion for Bitcoin, FOSS, and AI/ML</CardText>
                <CardText className='card-text'><a href='https://docs.google.com/document/d/1ejpR0E0RjGHP2wRhTTk7VAm1ZsI0pYKBXayeQ0hfhf8/edit?usp=sharing' target="_blank" rel="noopener noreferrer">My resume</a></CardText>
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
              I began my journey self taught after my interest in Bitcoin grew to a passion along with my understanding of money and software. Quickly my pursuit outgrew my means, and I got serious enough about my interest 2 years ago to enter Lambda School (now Bloomtech) as a Full Stack Web student. While continuing my studies, I worked as a Team Lead for 1 year helping other students learn to code. After graduation, in 2021, I accepted a position at Forethought as an AI Solutions Engineer.
              </p>
            </div>

          </div>
        </animated.div>
    )
}

export default About;
