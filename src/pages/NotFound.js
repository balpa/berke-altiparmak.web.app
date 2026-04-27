import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'

function NotFound() {
  const navigate = useNavigate()

  return (
    <PageLayout pageName="404">
      <div className="middle">
        <div className="about-middle-left" style={{ minHeight: 'unset', padding: '40px' }}>
          <h1>Page not found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </div>
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

export default NotFound
