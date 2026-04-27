import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import '../App.css'

function Projects() {
  const navigate = useNavigate()

  return (
    <PageLayout pageName="Projects" particlesVariant="red">
      <div className="projects-middle">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
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

export default Projects
