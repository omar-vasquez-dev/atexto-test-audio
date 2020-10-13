import React from "react";
import {
  useAudioRecord,
  RECORD_STOP,
  RECORD_START,
  RECORD_PLAY,
} from "../../../Providers/AudioContextProvider";
import ButtonRecord from "./ButtonRecord";
import ButtonStart from "./ButtonStart";

const ControlRecording = () => {
  const { audioState } = useAudioRecord();

  if (audioState === RECORD_STOP) {
    return <ButtonRecord></ButtonRecord>;
  }

  if (audioState === RECORD_START) {
    return <ButtonStart></ButtonStart>;
  }

  return <ButtonRecord disabled={audioState === RECORD_PLAY}></ButtonRecord>;
};

export default ControlRecording;
