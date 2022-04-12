import React from 'react'

function Weather() {

    const WEATHER_API = "88701d7b509f4ba88fa82306210812"

    const [weatherData, setWeatherData] = React.useState(null)

    const [lat, setLat] = React.useState(null)
    const [lon, setLon] = React.useState(null)
    const [status, setStatus] = React.useState(null)

    const weatherSpan = React.useRef()


    React.useEffect(() => {                         // GET GEOLOCATION
        if ( !navigator.geolocation ) { setStatus(false) } 
        else { navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
            setStatus(true)
          }, () => { setStatus(false) })
        }}, [])

      React.useEffect(() => {        
        async function fetchData(){          // GET WEATHER ASYNC
        if (status == true) {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=${lat},${lon}`)
          const data = await response.json()
          setWeatherData(data)
          weatherSpan.current.innerHTML = `${data.current.temp_c}&deg;,${data.location.region.slice(0,3)}`
        }
        else { console.log("status still false") }}
        fetchData()
    },[status])

  return (
    <span ref={weatherSpan}></span>
  )
}

export default Weather