import React, { useEffect } from "react";

const useStateRecordingAudio = () => {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return <div>{counter}</div>;
};

export default useStateRecordingAudio;
