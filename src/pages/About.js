import React from 'react'
import '../App.css'
import { FaMusic } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import Particles from "react-tsparticles";
import { useNavigate } from 'react-router-dom'
import Clock from '../components/Clock'
import Weather from '../components/Weather';


function About() {
  const developerText = "I am working in Insider as a full-stack developer at this stage of my life. Besides, developing a Turkish music literature and mobile social media applications using Expo & React Native, and web applications via React alongside with Firebase and more. As non-commercial, I've done machine learning, NLP, WebGL-OpenGL, embedded systems (Arduino), software engineering, assembly programming and many more side-projects."
  const musicianTest = "I am a professional clarinetist and oud player. I've grown up among the best musicians in Turkey and learnt the intricacies of turkish music directly from them. I have couple of songs composed by me and many years of experience teaching how to become a good singer or an instrumentalist."

  let navigate = useNavigate()

  const particlesInit = (main) => { console.log(main) };
  const particlesLoaded = (container) => { console.log(container) };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#f9dc0b",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: "rgba(0,0,0,0.2)",
            },
            links: {
              color: "rgba(0,0,0,0.1)",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      {/* <div id='time'><Clock /></div>
      <div id='weather'><Weather /></div> */}
      <div id='pagenamespan'>About</div>
      <div className='top'>Berke Altıparmak</div>
      <div className='middle'>
        <div className='about-middle-left'>
          <h1>
            <MdDeveloperMode style={{ margin: '0px 5px -5px 0px' }} />Developer
          </h1>
          <br />
          { developerText }
        </div>
        <div className='about-middle-right'>
          <h1>
            <FaMusic style={{ margin: '0px 12px -10px 0px' }} />Musician
          </h1>
          <br />
          { musicianTest }
        </div>
      </div>
      <div className='bottom'></div>
      <button id='home-button' onClick={() => { navigate('/home') }}>Home</button>
    </>
  )
}

export default About