import React, {useState, useEffect} from 'react';
import img from "./../Images/Ride-for-life.jpg";
import { CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import {useSpring, animated, config} from "react-spring";
import "./components.css";

const Projects = () => {
  const [isToggled, setToggled] = useState(false)

    useEffect(() => {
        setToggled(!isToggled);
        console.log(1);
    },[])

  const fade = useSpring({
    config: {
      duration: 4000
    },
    opacity: isToggled ? 1 : 0
  });

    return (
        <animated.div style={fade} className="projects">
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
        </animated.div>
    )

}

export default Projects;