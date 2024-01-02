import { React, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import '../App.css'

function ProjectCard({ title, description, link }) {
  const animation = useAnimation()

  async function sequence() {
    await animation.start({ transform: 'scale(1.1)' })
    await animation.start({ transform: 'scale(1)' })
    await animation.start({ borderRadius: '0px 60px 0px 60px' })
  }

  useEffect(() => { sequence() }, [])

  return (
    <>
      <motion.div id='project-card-main-container'
        whileHover={{
          scale: 1.05,
          backgroundColor: 'rgba(255,255,255,1)'
        }}
        animate={ animation }
        transition={{ duration: 0.7 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3>{ title }</h3>
        <p>{ description }</p>
        <div id="project-card-line" style={{ width: "80%", height: "3px", backgroundColor: 'black' }}></div>
        <div id="visit-div">
          <a id='project-card-link' href={`${ link }`} target='_blank' rel='noreferrer'>Visit</a>
        </div>

      </motion.div>
    </>
  )
}

export default ProjectCard