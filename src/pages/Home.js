import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import SocialLinks from '../components/layout/SocialLinks'
import TypeName from '../components/TypeName'
import TypeInfo from '../components/TypeInfo'
import '../App.css'

function Home() {
  const navigate = useNavigate()
  const animation = useAnimation()

  const animationSequence = useCallback(async () => {
    await animation.start({ width: '50vw' })
    await animation.start({ minHeight: '50vh' })
    await animation.start({ borderRadius: '35px' })
    await animation.start({ backgroundColor: '#f9dc0b' })
  }, [animation])

  useEffect(() => {
    animationSequence()
  }, [animationSequence])

  return (
    <PageLayout pageName="Home">
      <div
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          position: 'absolute',
        }}
      >
        <motion.div id="motion-home-div" animate={animation} transition={{ duration: 0.5 }}>
          <motion.div animate={{ opacity: [0, 0, 0, 1] }} transition={{ duration: 3 }}>
            <TypeName />
            <br />
            <br />
            <TypeInfo />
          </motion.div>
        </motion.div>
      </div>
      <SocialLinks />
      <button
        type="button"
        id="about-button"
        onClick={() => navigate('/about')}
        aria-label="Go to About"
      >
        About
      </button>
      <button
        type="button"
        id="projects-button"
        onClick={() => navigate('/projects')}
        aria-label="Go to Projects"
      >
        Projects
      </button>
    </PageLayout>
  )
}

export default Home
