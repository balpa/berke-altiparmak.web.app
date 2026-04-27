import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import Newspaper from '../components/newspaper/Newspaper'
import MobileNewspaper from '../components/newspaper/MobileNewspaper'

function Home() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  return isDesktop ? <Newspaper /> : <MobileNewspaper />
}

export default Home
