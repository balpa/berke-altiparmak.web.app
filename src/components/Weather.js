import React from 'react'

function Weather() {
  const [weatherData, setWeatherData] = React.useState(null)

  const [lat, setLat] = React.useState(null)
  const [lon, setLon] = React.useState(null)
  const [status, setStatus] = React.useState(null)

  const weatherSpan = React.useRef()

  React.useEffect(() => { // GET GEOLOCATION && set istanbul if cant get location 
    if (!navigator.geolocation) { setStatus(false) }
    else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        setStatus(true)
      }, () => { setStatus(false) })
    }
  }, [])

  let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`

  React.useEffect(() => {
    async function fetchData() {
      if (status === true) {
        const response = await fetch(URL)
        const data = await response.json()
        setWeatherData(data)
        weatherSpan.current.innerHTML = `${data.main.temp.toFixed(1)}&deg;,${data.name}`
      }
      else { console.log("status still false") }
    }
    fetchData()
  }, [status])

  return (
    <span ref={weatherSpan}></span>
  )
}

export default Weather