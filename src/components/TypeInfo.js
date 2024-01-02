import {React, useState, useEffect} from 'react'
import Typewriter from 'typewriter-effect'

function TypeInfo() {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => setStart(true), 8000)
  }, [])


  return (
    start &&
      <Typewriter
        options={{loop:'true'}}
        onInit={(typewriter) => {
          typewriter.pauseFor(1)
            .typeString('Developer')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Musician')
            .pauseFor(1000)
            .start()
        }}
      />
  );
}

export default TypeInfo