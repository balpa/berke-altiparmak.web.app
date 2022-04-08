import React from 'react'
import Typewriter from 'typewriter-effect'

function TypeName() {
  return (
    <Typewriter
        onInit={(typewriter) => {
            typewriter.pauseFor(2000)
              .typeString('Hi there, <br/> I am Berke Altıparmak')
              .pauseFor(2500)
              .start()
          }}
    />
    
  );
}

export default TypeName