import React from 'react'
import '../App.css'
import Particles from "react-tsparticles";
import { useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard';


function Projects() {

  let navigate = useNavigate()

  const particlesInit = (main) => {console.log(main)};
  const particlesLoaded = (container) => {console.log(container)};

  let projects = {
    "berkealtiparmakk": {
      title: "berkealtiparmakk.web.app",
      description: "My personal web application built with ReactJS and Firebase. Getting location and fetching data for weather, user authentication, leaving a message on the timeline etc. are the main features.",
      link: "https://berkealtiparmakk.web.app/"
    },
    "yalcinaltiparmak": {
      title: "yalcin-altiparmak.web.app",
      description: "A portfolio site built with ReactJS. It is a simple website that shows my minimalist and aesthetic design.",
      link: "https://yalcin-altiparmak.web.app/"
    },
    "CSGORoundWinner": {
      title: "CS:GO Round Winner Prediction",
      description: "A python application that predicts the round winner of a Counter-Strike: Global Offensive game. It uses machine learning algorithms to predict the winner of a round.",
      link: "https://github.com/balpa/CS-GO-round-winner-prediction-using-machine-learning"
    },
    "WineQuality": {
      title: "Wine Quality Prediction",
      description: "A python application that predicts the quality of a wine. It uses machine learning algorithms to predict the quality of a wine.",
      link: "https://github.com/balpa/wine-quality-prediction-using-machine-learning"
    }

  } 

  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
          "background": {
            "color": {
              "value": "rgb(139, 33, 33)"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "20%"
          },
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble"
              }
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "duration": 2,
                "opacity": 0,
                "size": 0
              },
              "grab": {
                "distance": 400
              },
              "repulse": {
                "distance": 400
              }
            }
          },
          "particles": {
            "color": {
              "value": "#000000"
            },
            "links": {
              "color": {
                "value": "#ffffff"
              },
              "distance": 150,
              "opacity": 0.4
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 600
                }
              },
              "enable": true,
              "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              },
              "random": true,
              "speed": 2
            },
            "number": {
              "density": {
                "enable": true
              },
              "value": 200
            },
            "opacity": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 0,
                "max": 1
              },
              "animation": {
                "enable": true,
                "speed": 1,
                "minimumValue": 0
              }
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 2,
                "max": 5
              },
              "animation": {
                "speed": 4,
                "minimumValue": 0.3
              }
            }
          }
        
      }}
    />
      <div id='pagenamespan'>Projects</div>
      <div className='top'>Berke Altıparmak</div>
      <div className='projects-middle'>
          <ProjectCard title={projects.berkealtiparmakk.title} description={projects.berkealtiparmakk.description} link={projects.berkealtiparmakk.link}/>
          <ProjectCard title={projects.yalcinaltiparmak.title} description={projects.yalcinaltiparmak.description} link={projects.yalcinaltiparmak.link}/>
          <ProjectCard title={projects.CSGORoundWinner.title} description={projects.CSGORoundWinner.description} link={projects.CSGORoundWinner.link}/>
          <ProjectCard title={projects.WineQuality.title} description={projects.WineQuality.description} link={projects.WineQuality.link}/>
      </div>
      <div className='bottom'></div>
      <button id='home-button' onClick={()=> {navigate('/home')}}>Home</button>
    </>
  )
}

export default Projects