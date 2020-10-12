import React, { useEffect } from "react"

const useStateRecordingAudio = (stateRecord) => {
  const [counter, setCounter] = React.useState(0);
    
  useEffect(() => {
    const timer = stateRecord === "start" && setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter, stateRecord]);

  return (
      <div>{counter}</div>
  );
}

export default useStateRecordingAudio 