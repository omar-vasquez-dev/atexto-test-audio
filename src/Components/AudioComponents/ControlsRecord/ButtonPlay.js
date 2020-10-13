import React, { useState } from "react";
import { useAudioRecord } from "../../../Providers/AudioContextProvider";
import useStateRecordingAudio from "../hooks/useStateRecordingAudio";

const ButtonPlay = ({ disabled = false }) => {
  const { playRecord } = useAudioRecord();
  const [playing, setPlaying] = useState(false);
  const timeString = useStateRecordingAudio();

  if (playing) {
    return <button>{timeString}</button>;
  }

  return (
    <button
      disabled={disabled}
      onClick={() => {
        playRecord();
        setPlaying(true);
      }}
    >
      Play
    </button>
  );
};

export default ButtonPlay;
