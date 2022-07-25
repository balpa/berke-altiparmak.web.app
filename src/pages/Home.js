import React, { useEffect } from 'react'
import Particles from 'react-tsparticles'
import '../App.css'
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube, AiFillGithub} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom'
import {motion, useAnimation} from 'framer-motion'
import TypeInfo from '../components/TypeInfo'
import TypeName from '../components/TypeName'
import Clock from '../components/Clock'
import Weather from '../components/Weather'



function Home() {

  let navigate = useNavigate()

  const particlesInit = (main) => {console.log(main)};
  const particlesLoaded = (container) => {console.log(container)};

  const animation = useAnimation()

  async function sequence() {
        await animation.start({ width: '50vw' })
        await animation.start({ minHeight: '50vh' })
        await animation.start({ borderRadius: '35px'})
        await animation.start({ backgroundColor: '#f9dc0b'})
    }

  useEffect(() => {sequence()},[])

  return (
    <>
     <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: { value: "#f9dc0b" },
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
            push: { quantity: 4 },
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
    <div id='time'>
      <Clock />
    </div>
    <div id='weather'>
      <Weather />
    </div>
    <div id='pagenamespan'>Home</div>
    <div className='top'>Berke Altıparmak</div>
    <div 
      style={{
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        position:'absolute'}}>
      <motion.div id='motion-home-div' animate={animation} transition={{duration: 0.5}}>
        <motion.div animate={{opacity:[0,0,0,1]}} transition={{duration: 3}}>
          <TypeName />
           <br/>
           <br/>
          <TypeInfo  />
          
        </motion.div>
      </motion.div>
    </div>
    <div className='socialmedia-container'>
      <div id='icons-container'>
        <a href='https://www.github.com/balpa' target='_blank' rel='noreferrer'><AiFillGithub /></a>
        <a href='https://www.instagram.com/berkealtiparmakk' target='_blank' rel='noreferrer'><AiOutlineInstagram /></a>
        <a href='https://www.linkedin.com/in/berkealtiparmak/' target='_blank' rel='noreferrer'><AiOutlineLinkedin /></a>
        <a href='https://www.youtube.com/berkealtiparmak' target='_blank' rel='noreferrer'><AiOutlineYoutube /></a>
      </div>
      <div id='empty-line'></div>
    </div>
    <button id='about-button' onClick={()=> {navigate('/about')}}>About</button>
    <button id='projects-button' onClick={()=> {navigate('/projects')}}>Projects</button>
    {/* <button id='more-button' onClick={()=> {navigate('/more')}}>More</button> */}
    </>
  )
}

export default Home