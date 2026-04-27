import React, { useMemo } from 'react'
import Particles from 'react-tsparticles'
import { yellowParticles, redParticles } from '../config/particles'

function ParticlesBackground({ variant = 'yellow', speed }) {
  const options = useMemo(() => {
    if (variant === 'red') return redParticles()
    return yellowParticles(speed)
  }, [variant, speed])

  return <Particles id="tsparticles" options={options} />
}

export default ParticlesBackground
