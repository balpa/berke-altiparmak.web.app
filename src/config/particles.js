export const yellowParticles = (speed = 0.3) => ({
  background: { color: { value: '#f9dc0b' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: 'push' },
      onHover: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40 },
      push: { quantity: 4 },
      repulse: { distance: 200, duration: 1 },
    },
  },
  particles: {
    color: { value: 'rgba(0,0,0,0.2)' },
    links: {
      color: 'rgba(0,0,0,0.1)',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: { enable: true },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed,
      straight: false,
    },
    number: { density: { enable: true, area: 1000 }, value: 80 },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { random: true, value: 5 },
  },
  detectRetina: true,
})

export const redParticles = () => ({
  background: {
    color: { value: 'rgb(139, 33, 33)' },
    position: '50% 50%',
    repeat: 'no-repeat',
    size: '20%',
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: 'repulse' },
      onHover: { enable: true, mode: 'bubble' },
    },
    modes: {
      bubble: { distance: 250, duration: 2, opacity: 0, size: 0 },
      grab: { distance: 400 },
      repulse: { distance: 400 },
    },
  },
  particles: {
    color: { value: '#000000' },
    links: { color: { value: '#ffffff' }, distance: 150, opacity: 0.4 },
    move: {
      attract: { rotate: { x: 600, y: 600 } },
      enable: true,
      outModes: { bottom: 'out', left: 'out', right: 'out', top: 'out' },
      random: true,
      speed: 0.3,
    },
    number: { density: { enable: true }, value: 200 },
    opacity: {
      random: { enable: true },
      value: { min: 0, max: 1 },
      animation: { enable: true, speed: 1, minimumValue: 0 },
    },
    size: {
      random: { enable: true },
      value: { min: 2, max: 5 },
      animation: { speed: 4, minimumValue: 0.3 },
    },
  },
  detectRetina: true,
})
