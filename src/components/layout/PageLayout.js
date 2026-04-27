import React from 'react'
import ParticlesBackground from '../ParticlesBackground'

function PageLayout({ pageName, particlesVariant = 'yellow', particlesSpeed, children }) {
  return (
    <>
      <ParticlesBackground variant={particlesVariant} speed={particlesSpeed} />
      <div id="pagenamespan" aria-hidden="true">{pageName}</div>
      <div className="top">Berke Altıparmak</div>
      {children}
    </>
  )
}

export default PageLayout
