import React from 'react'
function Clock(){
    const [date, setDate] = React.useState(new Date());
    
    function refreshClock() {
      setDate(new Date());
    }
    React.useEffect(() => {
  
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);
  
    return (
      <span style={{zIndex:"1"}}>
        {date.toLocaleTimeString()}
      </span>
    );
  }

  export default Clock