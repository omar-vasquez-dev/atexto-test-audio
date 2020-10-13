import React from "react";
import {
  RECORD_PLAY,
  useAudioRecord,
} from "../../../Providers/AudioContextProvider";
import ButtonPlay from "./ButtonPlay";
import ButtonStop from "./ButtonStop";

const ControlPlay = () => {
  const { audioState, audio } = useAudioRecord();

  if (audioState === RECORD_PLAY) {
    return <ButtonStop></ButtonStop>;
  }

  return <ButtonPlay disabled={audio === null}></ButtonPlay>;
};

export default ControlPlay;
