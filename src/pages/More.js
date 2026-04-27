import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import PageLayout from '../components/layout/PageLayout'
import '../App.css'

function More() {
  const navigate = useNavigate()
  const animation = useAnimation()

  const sequence = useCallback(async () => {
    await animation.start({ height: '60vh' })
    await animation.start({ width: '70vw' })
  }, [animation])

  useEffect(() => {
    sequence()
  }, [sequence])

  return (
    <PageLayout pageName="More" particlesSpeed={6}>
      <div className="middle">
        <motion.div id="more-div" animate={animation} transition={{ duration: 0.5 }} />
      </div>
      <div className="bottom"></div>
      <button
        type="button"
        id="home-button"
        onClick={() => navigate('/home')}
        aria-label="Go to home"
      >
        Home
      </button>
    </PageLayout>
  )
}

export default More
