import React from 'react';
import img from "./../Images/Ride-for-life.jpg";
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import "./components.css";

const Projects = () => {

    return (
        <div className="projects">
            <div className="project-box">
                <a target="_blank" href="https://build-ride-for-life.netlify.com/">
                  <img className="project-img" src={img} />
                </a>
                <CardBody className="project-card">
                  <CardTitle tag='h4'>Ride For Life</CardTitle>
                  <CardSubtitle>Role: front-end developer</CardSubtitle>
                  <CardText className='card-text'> Ride For Life serves mothers in Uganda to improve maternal and child survival. 
                    This is an app that connects riders and drivers 
                  </CardText>
                </CardBody>
            </div>

            <div className="project-box">
              <a target="_blank" href="https://build-ride-for-life.netlify.com/">
                <img className="project-img" src={img} />
              </a>
              <CardBody className="project-card">
                <CardTitle tag='h4'>Ride For Life</CardTitle>
                <CardSubtitle>Role: front-end developer</CardSubtitle>
                <CardText className='card-text'> Ride For Life serves mothers in Uganda to improve maternal and child survival. 
                This is an app that connects riders and drivers 
                </CardText>
              </CardBody>
            </div>

            <div className="project-box">
              <a target="_blank" href="https://build-ride-for-life.netlify.com/">
                <img className="project-img" src={img} />
              </a>
              <CardBody className="project-card">
                <CardTitle tag='h4'>Ride For Life</CardTitle>
                <CardSubtitle>Role: front-end developer</CardSubtitle>
                <CardText className='card-text'> Ride For Life serves mothers in Uganda to improve maternal and child survival. 
                This is an app that connects riders and drivers 
                </CardText>
              </CardBody>
            </div>
        </div>
    )

}

export default Projects;