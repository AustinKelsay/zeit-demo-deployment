import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import { SocialIcon } from 'react-social-icons';
import './components.css';

const About = () => {

    return(
        <div className='about'>
          <Card className='about-card'>
            <CardImg className='about-photo' src="./Me.jpg" />
            <CardBody>
                <CardTitle tag='h4'>Austin Kelsay</CardTitle>
                <CardSubtitle>Software Developer - Investor - Musician</CardSubtitle>
                <CardText className='card-text'>I care about human consiousness and the betterment of human well being.</CardText>
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
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
              <h4>My history:</h4>
              <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            </div>

          </div>
        </div>
    )
}

export default About;