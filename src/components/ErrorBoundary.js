import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9dc0b',
          color: 'black',
          fontFamily: "'Righteous', cursive",
          padding: '20px',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '48px', margin: 0 }}>Something went wrong.</h1>
          <p style={{ fontSize: '20px' }}>Please refresh the page.</p>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
