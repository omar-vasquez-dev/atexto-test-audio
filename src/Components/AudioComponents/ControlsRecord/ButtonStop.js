import React from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import useStateRecordingAudio from "../hooks/useStateRecordingAudio";

const ButtonStop = () => {
  const { pauseRecord } = useAudioRecord();
  const timeString = useStateRecordingAudio(true);

  return (
    <React.Fragment>
      <span> {timeString} Playing... </span>
      <br></br>
      <button
        onClick={() => {
          pauseRecord();
        }}
      >
        Stop
      </button>
    </React.Fragment>
  );
};

export default ButtonStop;
