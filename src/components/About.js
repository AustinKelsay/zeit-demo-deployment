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
                <CardText className='card-text'>Software developer with a passion for Bitcoin, FOSS, and AI/ML</CardText>
                <CardText className='card-text'><a href='https://docs.google.com/document/d/1vXBX3yG6-CpFqVyRNr2EX-NF2drkhu2UIUT-8qwA85Y/edit?usp=sharing' target="_blank" rel="noopener noreferrer">My resume</a></CardText>
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
              <p>To participate in software that is impactful for individuals.</p>
              <p>To be surrounded by colleagues and teams building meaningful software.</p>
              <h4>My history:</h4>
              <p>
              I began my journey as a self taught developer with a passion for Bitcoin/FOSS. However, I learn faster in a team environment, so I got serious 2 years ago & enrolled in Lambda School as a Full Stack Web student. From Lambda School I graduated as a student and worked as a Team Lead for 1 year helping teach students how to code. Since mid 2021 I have worked as an AI Implementation Engineer at Forethought
              </p>
            </div>

          </div>
        </animated.div>
    )
}

export default About;
