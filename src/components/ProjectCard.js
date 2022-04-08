import {React, useEffect} from 'react'
import '../App.css'
import {motion, useAnimation} from 'framer-motion'

function ProjectCard(props) {

    const animation = useAnimation()

    async function sequence() {
        await animation.start({ transform: 'scale(1.1)' })
        await animation.start({ transform: 'scale(1)' })
        await animation.start({ borderRadius: '0px 60px 0px 60px'})
    }

  useEffect(() => {sequence()},[])

  return (
    <>
    <motion.div id='project-card-main-container' 
      whileHover={{scale:1.05}} 
      animate={animation} 
      transition={{duration:0.7}}
      whileTap={{scale:0.95}}
      >
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div id="project-card-line" style={{width: "80%", height:"3px", backgroundColor:'black'}}></div>
        <div id="visit-div">
          <a id='project-card-link' href={`${props.link}`} target='_blank' rel='noreferrer'>Visit</a>
        </div>

    </motion.div>
    </>
  )
}

export default ProjectCard