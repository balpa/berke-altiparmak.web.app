import React from 'react'
import '../App.css'
import Particles from "react-tsparticles";
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import Clock from '../components/Clock'
import Weather from '../components/Weather';

function More() {

  let navigate = useNavigate()

  const particlesInit = (main) => { console.log(main) };
  const particlesLoaded = (container) => { console.log(container) };

  const animation = useAnimation()
  async function sequence() {
    await animation.start({ height: '60vh' })
    await animation.start({ width: '70vw' })
  }
  React.useEffect(() => { sequence() }, [])

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
              speed: 6,
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
      <div id='time'><Clock /></div>
      <div id='weather'><Weather /></div>
      <div id='pagenamespan'>More</div>
      <div className='top'>Berke Altıparmak</div>
      <div className='middle'>
        <motion.div id='more-div' animate={animation} transition={{ duration: 0.5 }}>

        </motion.div>
      </div>
      <div className='bottom'></div>
      <button id='home-button' onClick={() => { navigate('/home') }}>Home</button>
    </>
  )
}

export default More