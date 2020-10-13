import React from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import useStateRecordingAudio from "../hooks/useStateRecordingAudio";

const ButtonStart = () => {
  const { stopRecord } = useAudioRecord();
  const counter = useStateRecordingAudio();
  return (
    <React.Fragment>
      <span> {counter} recording... </span>
      <br></br>
      <button onClick={stopRecord}>Stop</button>
    </React.Fragment>
  );
};

export default ButtonStart;
