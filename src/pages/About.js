import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaMusic } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'
import PageLayout from '../components/layout/PageLayout'
import '../App.css'

const developerText =
  "I am working at Insider as a full-stack developer at this stage of my life. Besides, I'm developing Turkish music literature and mobile social media applications using Expo & React Native, and web applications via React with Firebase and more. As non-commercial work, I've done machine learning, NLP, WebGL/OpenGL, embedded systems (Arduino), software engineering, assembly programming and many more side-projects."

const musicianText =
  "I am a professional clarinetist and oud player. I've grown up among the best musicians in Turkey and learnt the intricacies of Turkish music directly from them. I have a couple of songs composed by me and many years of experience teaching how to become a good singer or instrumentalist."

function About() {
  const navigate = useNavigate()

  return (
    <PageLayout pageName="About">
      <div className="middle">
        <div className="about-middle-left">
          <h1>
            <MdDeveloperMode style={{ margin: '0px 5px -5px 0px' }} />
            Developer
          </h1>
          <br />
          {developerText}
        </div>
        <div className="about-middle-right">
          <h1>
            <FaMusic style={{ margin: '0px 12px -10px 0px' }} />
            Musician
          </h1>
          <br />
          {musicianText}
        </div>
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

export default About
